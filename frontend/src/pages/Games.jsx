"use client"

import { useState, useEffect } from "react"
import { MainNav } from "../components/MainNav"
import { GameCard } from "../components/GameCard"

export default function Games() {
  const [activeTab, setActiveTab] = useState("popular")
  const [games, setGames] = useState([])
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(18);
  const [totalPages, setTotalPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const baseUrl = import.meta.env.VITE_BASE_URL;

  const handleIncrement = () => {
    if (page < totalPages) {
      setPage(page + 1);
    }
  }
  const handleDecrement = () => {
    if (page > 1) {
      setPage(page - 1);
    }
  }

  useEffect(() => {
    async function fetchGames() {
      setLoading(true)
      let endpoint = `/games/${activeTab}`;

      try {
        const res = await fetch(baseUrl + endpoint + `?page=${page}&limit=${limit}`);
        const data = await res.json();
        // console.log(data);
        setTotalPage(data.totalPages);
        setGames(data.games || []);
      } catch (err) {
        console.log(err);
        setGames([])
      }
      setLoading(false)
    }
    fetchGames()
  }, [activeTab, baseUrl, page, limit]);

  return (
    <div className="min-h-screen bg-black text-white">
      <MainNav />

      <div className="container py-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-8">
          <div>
            <span className="badge mb-2">DISCOVER</span>
            <h1 className="text-3xl font-bold text-white">Games Library</h1>
          </div>

          <div className="flex items-center gap-3 w-full md:w-auto">
            <div className="relative w-full md:w-auto flex-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="rgba(255,255,255,0.5)"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="absolute left-3 top-1/2 -translate-y-1/2"
              >
                <circle cx="11" cy="11" r="8"></circle>
                <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
              </svg>
              <input type="search" placeholder="    Search games..." className="input pl-10 w-full md:w-[300px]" />
            </div>
            <button className="btn btn-outline btn-icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"></polygon>
              </svg>
              <span className="sr-only">Filter</span>
            </button>
            <button className="btn btn-outline hidden md:flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="4" y1="21" x2="4" y2="14"></line>
                <line x1="4" y1="10" x2="4" y2="3"></line>
                <line x1="12" y1="21" x2="12" y2="12"></line>
                <line x1="12" y1="8" x2="12" y2="3"></line>
                <line x1="20" y1="21" x2="20" y2="16"></line>
                <line x1="20" y1="12" x2="20" y2="3"></line>
                <line x1="1" y1="14" x2="7" y2="14"></line>
                <line x1="9" y1="8" x2="15" y2="8"></line>
                <line x1="17" y1="16" x2="23" y2="16"></line>
              </svg>
              Advanced Filters
            </button>
          </div>
        </div>

        {/* Tabs */}
        <div className="mb-8">
          <div className="bg-[#151515] border border-[#252525] p-1 rounded-md flex">
            <button
              onClick={() => {
                setActiveTab("popular");
                setPage(1);
              }}
              className={`tab-button ${activeTab === "popular" ? "active" : ""}`}
            >
              Popular
            </button>
            <button
              onClick={() => {
                setActiveTab("latest")
                setPage(1);
              }}
              className={`tab-button ${activeTab === "latest" ? "active" : ""}`}
            >
              Latest
            </button>
            <button
              onClick={() => {
                setActiveTab("upcoming")
                setPage(1)
              }
              }
              className={`tab-button ${activeTab === "upcoming" ? "active" : ""}`}
            >
              Upcoming
            </button>
            <button
              onClick={() => {
                setActiveTab("top-rated")
                setPage(1)
              }
              }
              className={`tab-button ${activeTab === "top-rated" ? "active" : ""}`}
            >
              Top Rated
            </button>
          </div>

          <div className="mt-8">
            {loading ? (
              <div className="text-center text-white/70">Loading...</div>
            ) : (
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-6">
                {games.map((game) => (
                  <GameCard key={game._id} game={game} />
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Pagination Controller */}
        <div className="flex justify-center mt-12 space-x-3">
          <button
            disabled={page === 1}
            onClick={handleDecrement}
            className={`btn btn-neon px-6 py-2 w-28 ${page === 1 ? "!bg-purple-600 !cursor-not-allowed !opacity-60" : ""
              }`}
          >
            Previous
          </button>
          <button className="btn btn-neon px-6 py-2 w-12">
            {page}
          </button>
          <button
            disabled={page === totalPages}
            onClick={handleIncrement}
            className={`btn btn-neon px-6 py-2 w-28 ${page === totalPages ? "!bg-purple-600 !cursor-not-allowed !opacity-60" : ""
              }`}
          >
            Next
          </button>

        </div>

      </div>
    </div>
  )
}
