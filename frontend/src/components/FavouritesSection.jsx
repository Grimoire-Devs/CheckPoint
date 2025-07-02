"use client"

import { useState, useContext } from "react"
import { ThemeContext } from "../ThemeContext"

const FavoritesSection = ({ initialFavorites = [], onUpdateFavorites, availableGames = [] }) => {
  const { theme } = useContext(ThemeContext)
  const [favorites, setFavorites] = useState(
    initialFavorites.length === 4
      ? initialFavorites
      : [...initialFavorites, ...Array(4 - initialFavorites.length).fill({ game: null, addedAt: null })],
  )
  const [showGameSelector, setShowGameSelector] = useState(false)
  const [selectedSlot, setSelectedSlot] = useState(null)
  const [draggedIndex, setDraggedIndex] = useState(null)

  const handleDragStart = (e, index) => {
    if (!favorites[index].game) return
    setDraggedIndex(index)
    e.dataTransfer.effectAllowed = "move"
    e.target.style.opacity = "0.5"
    e.target.style.transform = "rotate(5deg)"
  }

  const handleDragEnd = (e) => {
    e.target.style.opacity = "1"
    e.target.style.transform = "none"
    setDraggedIndex(null)
  }

  const handleDragOver = (e) => {
    e.preventDefault()
    e.dataTransfer.dropEffect = "move"
  }

  const handleDragEnter = (e, index) => {
    e.preventDefault()
    if (draggedIndex !== null && draggedIndex !== index) {
      const slot = e.target.closest(".favorite-slot")
      if (slot) {
        slot.style.border = "2px dashed #7000FF"
        slot.style.backgroundColor = "rgba(112, 0, 255, 0.1)"
      }
    }
  }

  const handleDragLeave = (e) => {
    const slot = e.target.closest(".favorite-slot")
    if (slot) {
      slot.style.border = ""
      slot.style.backgroundColor = ""
    }
  }

  const handleDrop = (e, dropIndex) => {
    e.preventDefault()
    const slot = e.target.closest(".favorite-slot")
    if (slot) {
      slot.style.border = ""
      slot.style.backgroundColor = ""
    }

    if (draggedIndex === null || draggedIndex === dropIndex) return

    const newFavorites = [...favorites]
    const draggedItem = newFavorites[draggedIndex]
    const droppedItem = newFavorites[dropIndex]

    // Swap the items
    newFavorites[draggedIndex] = droppedItem
    newFavorites[dropIndex] = draggedItem

    setFavorites(newFavorites)

    // Call the callback to update parent component
    if (onUpdateFavorites) {
      onUpdateFavorites(newFavorites)
    }
  }

  const handleAddGame = (slotIndex) => {
    setSelectedSlot(slotIndex)
    setShowGameSelector(true)
  }

  const handleSelectGame = (game) => {
    if (selectedSlot !== null) {
      const newFavorites = [...favorites]
      newFavorites[selectedSlot] = {
        game: game,
        addedAt: new Date(),
      }
      setFavorites(newFavorites)

      // Call the callback to update parent component
      if (onUpdateFavorites) {
        onUpdateFavorites(newFavorites)
      }
    }
    setShowGameSelector(false)
    setSelectedSlot(null)
  }

  const handleRemoveGame = (slotIndex) => {
    const newFavorites = [...favorites]
    newFavorites[slotIndex] = { game: null, addedAt: null }
    setFavorites(newFavorites)

    // Call the callback to update parent component
    if (onUpdateFavorites) {
      onUpdateFavorites(newFavorites)
    }
  }

  const getAvailableGames = () => {
    const favoriteGameIds = favorites.filter((fav) => fav.game).map((fav) => fav.game._id)
    return availableGames.filter((game) => !favoriteGameIds.includes(game._id))
  }

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-bold">Favorite Games</h2>
        <span className="text-sm text-gray-400">Drag games to reorder</span>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {favorites.map((favorite, index) => (
          <div
            key={index}
            className="favorite-slot aspect-[3/4] relative group transition-all duration-200 hover:transform hover:-translate-y-1"
            onDragOver={handleDragOver}
            onDragEnter={(e) => handleDragEnter(e, index)}
            onDragLeave={handleDragLeave}
            onDrop={(e) => handleDrop(e, index)}
          >
            {favorite.game ? (
              <div
                draggable
                onDragStart={(e) => handleDragStart(e, index)}
                onDragEnd={handleDragEnd}
                className={`w-full h-full rounded-lg overflow-hidden cursor-move relative border-2 transition-all duration-200 ${
                  theme === "dark"
                    ? "border-[#252525] hover:border-[#7000FF]"
                    : "border-gray-300 hover:border-[#7000FF]"
                }`}
              >
                <img
                  src={favorite.game.cover || favorite.game.background_image || "/placeholder.svg?height=400&width=300"}
                  alt={favorite.game.name}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.target.src = "/placeholder.svg?height=400&width=300"
                  }}
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-60 transition-all duration-200 flex items-center justify-center">
                  <button
                    onClick={() => handleRemoveGame(index)}
                    className="opacity-0 group-hover:opacity-100 bg-red-600 hover:bg-red-700 text-white rounded-full p-2 transition-all duration-200 transform scale-90 hover:scale-100"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black via-black/50 to-transparent p-3">
                  <p className="text-xs text-white font-medium truncate">{favorite.game.name}</p>
                </div>
              </div>
            ) : (
              <button
                onClick={() => handleAddGame(index)}
                className={`w-full h-full rounded-lg flex flex-col items-center justify-center transition-all duration-300 border-2 border-dashed ${
                  theme === "dark"
                    ? "bg-gradient-to-br from-[#252525] to-[#151515] border-[#404040] hover:border-[#7000FF] hover:bg-gradient-to-br hover:from-[#2a1a4a] hover:to-[#1a0f2e] text-gray-400 hover:text-[#7000FF]"
                    : "bg-gradient-to-br from-gray-100 to-gray-200 border-gray-300 hover:border-[#7000FF] hover:bg-gradient-to-br hover:from-purple-50 hover:to-purple-100 text-gray-500 hover:text-[#7000FF]"
                }`}
              >
                <svg className="w-8 h-8 mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                </svg>
                <span className="text-sm font-medium">Add Game</span>
              </button>
            )}
          </div>
        ))}
      </div>

      {/* Game Selector Modal */}
      {showGameSelector && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4">
          <div
            className={`rounded-lg p-6 max-w-4xl w-full max-h-[80vh] overflow-y-auto ${
              theme === "dark" ? "bg-[#151515] border border-[#252525]" : "bg-white border border-gray-200"
            }`}
          >
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-xl font-bold">Select a Game</h3>
              <button
                onClick={() => setShowGameSelector(false)}
                className={`p-2 rounded-lg transition-colors ${
                  theme === "dark"
                    ? "text-gray-400 hover:text-white hover:bg-[#252525]"
                    : "text-gray-500 hover:text-gray-700 hover:bg-gray-100"
                }`}
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {getAvailableGames().length === 0 ? (
              <div className="text-center py-8">
                <p className="text-gray-500">No more games available to add</p>
              </div>
            ) : (
              <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
                {getAvailableGames().map((game) => (
                  <button
                    key={game._id}
                    onClick={() => handleSelectGame(game)}
                    className={`aspect-[3/4] rounded-lg overflow-hidden border-2 transition-all duration-200 hover:transform hover:scale-105 ${
                      theme === "dark"
                        ? "border-[#252525] hover:border-[#7000FF]"
                        : "border-gray-200 hover:border-[#7000FF]"
                    }`}
                  >
                    <img
                      src={game.cover || game.background_image || "/placeholder.svg?height=400&width=300"}
                      alt={game.name}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        e.target.src = "/placeholder.svg?height=400&width=300"
                      }}
                    />
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-2">
                      <p className="text-xs text-white font-medium truncate">{game.name}</p>
                    </div>
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  )
}

export default FavoritesSection
