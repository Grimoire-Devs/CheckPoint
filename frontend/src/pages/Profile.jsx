"use client"

import { useState } from "react"
import { Link } from "react-router-dom"
import { MainNav } from "../components/MainNav"

export default function Profile() {
  const [activeTab, setActiveTab] = useState("games")

  return (
    <div className="min-h-screen bg-black text-white">
      <MainNav />
      <div className="container py-8">
        <div className="flex flex-col md:flex-row gap-6 items-start">
          {/* Profile Sidebar */}
          <div className="w-full md:w-64 space-y-6">
            <div className="flex flex-col items-center text-center">
              <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-black">
                <img src="/placeholder.svg?height=96&width=96" alt="User" className="w-full h-full object-cover" />
              </div>
              <h1 className="text-xl font-bold mt-4">John Doe</h1>
              <p className="text-sm text-gray-500">Member since 2023</p>
              <div className="flex items-center gap-2 mt-2">
                <button className="btn btn-outline text-sm flex items-center gap-2">
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
                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                    <circle cx="9" cy="7" r="4"></circle>
                    <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                    <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                  </svg>
                  Follow
                </button>
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
                    <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"></path>
                    <circle cx="12" cy="12" r="3"></circle>
                  </svg>
                </button>
              </div>
            </div>

            <div className="border border-[#252525] rounded-lg p-4 bg-[#151515]/50">
              <h3 className="font-bold mb-3">Stats</h3>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-500">Games Played:</span>
                  <span>127</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-500">Reviews:</span>
                  <span>42</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-500">Lists:</span>
                  <span>8</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-500">Followers:</span>
                  <span>156</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-500">Following:</span>
                  <span>89</span>
                </div>
              </div>
            </div>

            <div className="border border-[#252525] rounded-lg p-4 bg-[#151515]/50">
              <h3 className="font-bold mb-3">Favorite Genres</h3>
              <div className="flex flex-wrap gap-2">
                <div className="bg-[#252525] text-xs px-2 py-1 rounded">RPG</div>
                <div className="bg-[#252525] text-xs px-2 py-1 rounded">Strategy</div>
                <div className="bg-[#252525] text-xs px-2 py-1 rounded">Adventure</div>
                <div className="bg-[#252525] text-xs px-2 py-1 rounded">Simulation</div>
                <div className="bg-[#252525] text-xs px-2 py-1 rounded">Indie</div>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="flex-1">
            <div className="mb-6">
              <div className="bg-[#151515] border border-[#252525] p-1 rounded-md flex">
                <button
                  onClick={() => setActiveTab("games")}
                  className={`tab-button ${activeTab === "games" ? "active" : ""}`}
                >
                  Games
                </button>
                <button
                  onClick={() => setActiveTab("reviews")}
                  className={`tab-button ${activeTab === "reviews" ? "active" : ""}`}
                >
                  Reviews
                </button>
                <button
                  onClick={() => setActiveTab("lists")}
                  className={`tab-button ${activeTab === "lists" ? "active" : ""}`}
                >
                  Lists
                </button>
                <button
                  onClick={() => setActiveTab("diary")}
                  className={`tab-button ${activeTab === "diary" ? "active" : ""}`}
                >
                  Diary
                </button>
              </div>
            </div>

            {activeTab === "games" && (
              <div className="space-y-6">
                <div className="flex justify-between items-center">
                  <h2 className="text-xl font-bold">Games</h2>
                  <button className="btn btn-outline text-sm flex items-center gap-2">
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
                      <line x1="6" y1="11" x2="10" y2="11"></line>
                      <line x1="8" y1="9" x2="8" y2="13"></line>
                      <line x1="15" y1="12" x2="15.01" y2="12"></line>
                      <line x1="18" y1="10" x2="18.01" y2="10"></line>
                      <path d="M17.32 5H6.68a4 4 0 0 0-3.978 3.59c-.006.052-.01.101-.017.152C2.604 9.416 2 14.456 2 16a3 3 0 0 0 3 3c1 0 1.5-.5 2-1l1.414-1.414A2 2 0 0 1 9.828 16h4.344a2 2 0 0 1 1.414.586L17 18c.5.5 1 1 2 1a3 3 0 0 0 3-3c0-1.544-.604-6.584-.685-7.258-.007-.05-.011-.1-.017-.151A4 4 0 0 0 17.32 5z"></path>
                    </svg>
                    Add Game
                  </button>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                  {Array.from({ length: 10 }).map((_, i) => (
                    <Link to="/games/game-slug" key={i} className="game-card">
                      <div className="game-card-image">
                        <img
                          src="/placeholder.svg?height=450&width=300"
                          alt="Game cover"
                          className="object-cover w-full h-full"
                        />
                        <div className="game-card-overlay"></div>
                        <div className="absolute bottom-0 left-0 right-0 p-3">
                          <div className="rating">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="14"
                              height="14"
                              viewBox="0 0 24 24"
                              fill="currentColor"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            >
                              <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                            </svg>
                            <span className="text-xs font-medium text-white">4.5</span>
                          </div>
                        </div>
                      </div>
                      <div className="p-3">
                        <h3 className="game-card-title text-sm">Game Title Here</h3>
                        <p className="text-xs text-gray-500 mt-1">2023</p>
                      </div>
                    </Link>
                  ))}
                </div>

                <button className="btn btn-outline w-full">Load more</button>
              </div>
            )}

            {activeTab === "reviews" && (
              <div className="space-y-6">
                <div className="flex justify-between items-center">
                  <h2 className="text-xl font-bold">Reviews</h2>
                  <button className="btn btn-outline">Write Review</button>
                </div>

                <div className="space-y-4">
                  {Array.from({ length: 3 }).map((_, i) => (
                    <div key={i} className="border border-[#252525] rounded-lg p-4 space-y-3 bg-[#151515]/50">
                      <div className="flex items-center gap-3">
                        <div className="w-12 h-18 rounded overflow-hidden">
                          <img
                            src="/placeholder.svg?height=450&width=300"
                            alt="Game cover"
                            className="object-cover w-full h-full"
                          />
                        </div>
                        <div>
                          <h4 className="font-medium">Game Title</h4>
                          <div className="rating">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="12"
                              height="12"
                              viewBox="0 0 24 24"
                              fill="currentColor"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            >
                              <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                            </svg>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="12"
                              height="12"
                              viewBox="0 0 24 24"
                              fill="currentColor"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            >
                              <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                            </svg>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="12"
                              height="12"
                              viewBox="0 0 24 24"
                              fill="currentColor"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            >
                              <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                            </svg>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="12"
                              height="12"
                              viewBox="0 0 24 24"
                              fill="currentColor"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            >
                              <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                            </svg>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="12"
                              height="12"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            >
                              <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                            </svg>
                            <span className="ml-1 text-xs text-gray-500">2 weeks ago</span>
                          </div>
                        </div>
                      </div>
                      <h3 className="font-bold">An amazing gaming experience</h3>
                      <p className="text-white/70 text-sm">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl vel ultricies
                        lacinia, nisl nisl aliquam nisl, eget aliquam nisl nisl sit amet nisl.
                      </p>
                      <Link to="#" className="text-xs text-[#7000FF] hover:underline">
                        Read more
                      </Link>
                    </div>
                  ))}
                </div>

                <button className="btn btn-outline w-full">Load more</button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
