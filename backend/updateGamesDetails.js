const { MongoClient } = require("mongodb");
const fetch = require("node-fetch");

require("dotenv").config();

const uri = process.env.MONGODB_URL;
const dbName = "CheckPoint";
const collectionName = "games";
const apiKey = process.env.RAWG_API_KEY;

async function fetchGameDetails(id) {
  const response = await fetch(
    `https://api.rawg.io/api/games/${id}?key=${apiKey}`
  );
  if (!response.ok) {
    throw new Error(`Failed to fetch game with ID ${id}`);
  }
  return await response.json();
}

async function updateGames(batchSize = 100) {
  const client = new MongoClient(uri);
  try {
    await client.connect();
    const db = client.db(dbName);
    const collection = db.collection(collectionName);

    let skip = 0;
    let count = 0;
    while (true) {
      const docs = await collection
        .find({ id: { $exists: true } })
        .skip(skip)
        .limit(batchSize)
        .toArray();
      if (docs.length === 0) break;

      for (const doc of docs) {
        try {
          const details = await fetchGameDetails(doc.id);

          const updateFields = {
            title: details.name,
            description: details.description || "",
            released: details.released || "",
            rating: details.rating || null,
            ratings_count: details.ratings_count || 0,
            playTime: details.playtime || 0,
            platforms: details.platforms
              ? details.platforms.map((p) => p.platform.name)
              : [],
            genre: details.genres ? details.genres.map((g) => g.name) : [],
            coverImage: details.background_image || "",
            website: details.website || "",
            metacritic: details.metacritic || null,
          };

          const result = await collection.updateOne(
            { _id: doc._id },
            { $set: updateFields }
          );
          if (result.modifiedCount > 0) {
            console.log(`Updated game _id: ${doc._id} (${details.name})`);
          } else {
            console.log(
              `No update needed for game _id: ${doc._id} (${details.name})`
            );
          }
          count++;
        } catch (error) {
          console.error(`Error updating game ID ${doc.id}:`, error.message);
        }
      }
      skip += batchSize;
      console.log(`Processed ${count} games so far...`);
    }
    console.log(`Finished. Processed ${count} games.`);
  } catch (error) {
    console.error("Error updating games:", error.message);
  } finally {
    await client.close();
  }
}

updateGames();
