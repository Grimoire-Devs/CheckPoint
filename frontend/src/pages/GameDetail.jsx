"use client"

import { useRef } from "react"
import { Link } from "react-router-dom"
import { MainNav } from "../components/MainNav"

export default function GameDetail() {
  const aboutRef = useRef(null)
  const reviewsRef = useRef(null)
  const listsRef = useRef(null)
  const statsRef = useRef(null)

  const scrollToSection = (ref) => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <div className="min-h-screen bg-black text-white">
      <MainNav />

      {/* Hero Banner */}
      <div className="relative">
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black z-10" />
        <div className="absolute inset-0 bg-gradient-to-r from-purple-900/30 to-blue-900/20 z-10" />
        <div className="relative h-[60vh] w-full overflow-hidden">
          <img src="/game-cover.jpeg" alt="Game banner" className="object-cover w-full h-full" />
        </div>
        <div className="absolute bottom-0 left-0 right-0 z-20 container pb-12">
          <div className="flex flex-col md:flex-row gap-8">
            <div
              className="w-40 h-56 -mt-20 rounded-lg overflow-hidden shadow-xl border-4 border-black"
              style={{ boxShadow: "0 0 20px rgba(168,85,247,0.5)" }}
            >
              <img src="/game-cover.jpeg" alt="Game cover" className="object-cover w-full h-full" />
            </div>
            <div className="text-white">
              <h1 className="text-3xl md:text-5xl font-bold tracking-tight">
                Stellar Odyssey: <span className="text-gradient">Beyond Infinity</span>
              </h1>
              <div className="flex flex-wrap items-center gap-2 mt-3">
                <span className="badge">RPG</span>
                <span className="badge">Adventure</span>
                <span className="badge">Open World</span>
              </div>
              <div className="flex flex-wrap items-center gap-6 mt-4">
                <div className="flex items-center gap-1.5">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="#FBBF24"
                    stroke="#FBBF24"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                  </svg>
                  <span className="font-medium">4.8</span>
                </div>
                <div className="flex items-center gap-1.5 text-white/70">
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
                    <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                    <line x1="16" y1="2" x2="16" y2="6"></line>
                    <line x1="8" y1="2" x2="8" y2="6"></line>
                    <line x1="3" y1="10" x2="21" y2="10"></line>
                  </svg>
                  <span>2023</span>
                </div>
                <div className="flex items-center gap-1.5 text-white/70">
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
                  <span>CD Projekt Red</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="bg-black border-b border-[#252525]">
        <div className="container py-4">
          <div className="flex flex-wrap items-center gap-3">
            <button className="btn btn-primary flex items-center gap-2">
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
                <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                <circle cx="12" cy="12" r="3"></circle>
              </svg>
              Play Now
            </button>
            <button className="btn btn-outline flex items-center gap-2">
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
                <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
              </svg>
              Like
            </button>
            <button className="btn btn-outline flex items-center gap-2">
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
                <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path>
              </svg>
              Wishlist
            </button>
            <button className="btn btn-outline flex items-center gap-2">
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
                <circle cx="12" cy="12" r="10"></circle>
                <polyline points="12 6 12 12 16 14"></polyline>
              </svg>
              Played
            </button>
            <button className="btn btn-outline flex items-center gap-2">
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
                <circle cx="18" cy="5" r="3"></circle>
                <circle cx="6" cy="12" r="3"></circle>
                <circle cx="18" cy="19" r="3"></circle>
                <line x1="8.59" y1="13.51" x2="15.42" y2="17.49"></line>
                <line x1="15.41" y1="6.51" x2="8.59" y2="10.49"></line>
              </svg>
              Share
            </button>
          </div>
        </div>
      </div>

      {/* Navigation Tabs - Hidden until hover */}
      <div className="sticky top-16 z-30 bg-black/90 backdrop-blur-md border-b border-[#252525]">
        <div className="container">
          <div className="group relative h-1 bg-[#252525]">
            <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-[#7000FF] to-[#6366f1] w-0 group-hover:w-full transition-all duration-300"></div>
            <nav className="absolute left-0 right-0 top-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300 py-3 flex gap-6">
              <button
                onClick={() => scrollToSection(aboutRef)}
                className="text-sm font-medium text-white/70 hover:text-[#7000FF] transition-colors"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection(reviewsRef)}
                className="text-sm font-medium text-white/70 hover:text-[#7000FF] transition-colors"
              >
                Reviews
              </button>
              <button
                onClick={() => scrollToSection(listsRef)}
                className="text-sm font-medium text-white/70 hover:text-[#7000FF] transition-colors"
              >
                Lists
              </button>
              <button
                onClick={() => scrollToSection(statsRef)}
                className="text-sm font-medium text-white/70 hover:text-[#7000FF] transition-colors"
              >
                Stats
              </button>
            </nav>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Left Column - Game Stats */}
          <div className="w-full lg:w-80 space-y-8">
            <div className="border border-[#252525] rounded-lg p-4 bg-[#151515]/50">
              <h3 className="font-bold mb-3 text-white">Game Details</h3>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-white/50">Developer:</span>
                  <span className="text-white">CD Projekt Red</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-white/50">Publisher:</span>
                  <span className="text-white">CD Projekt</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-white/50">Release Date:</span>
                  <span className="text-white">November 10, 2023</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-white/50">Platforms:</span>
                  <span className="text-white">PC, PS5, Xbox Series X</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-white/50">Genres:</span>
                  <span className="text-white">RPG, Adventure, Open World</span>
                </div>
              </div>
            </div>

            <div ref={statsRef} className="border border-[#252525] rounded-lg p-4 bg-[#151515]/50">
              <h3 className="font-bold mb-4 text-white">Game Stats</h3>
              <div className="grid grid-cols-3 gap-4">
                <div className="border border-[#252525] rounded-lg p-4 text-center bg-[#151515]/50">
                  <div className="text-3xl font-bold text-white">4.8</div>
                  <div className="text-sm text-white/50">Average Rating</div>
                </div>
                <div className="border border-[#252525] rounded-lg p-4 text-center bg-[#151515]/50">
                  <div className="text-3xl font-bold text-white">1,245</div>
                  <div className="text-sm text-white/50">Players</div>
                </div>
                <div className="border border-[#252525] rounded-lg p-4 text-center bg-[#151515]/50">
                  <div className="text-3xl font-bold text-white">328</div>
                  <div className="text-sm text-white/50">Reviews</div>
                </div>
              </div>

              <h4 className="font-bold mt-6 mb-3 text-white">Rating Distribution</h4>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <div className="w-8 text-sm text-right text-white/70">5★</div>
                  <div className="flex-1 bg-[#252525] rounded-full h-4 overflow-hidden">
                    <div className="bg-[#7000FF] h-4 rounded-full" style={{ width: "70%" }}></div>
                  </div>
                  <div className="w-8 text-sm text-white/70">70%</div>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-8 text-sm text-right text-white/70">4★</div>
                  <div className="flex-1 bg-[#252525] rounded-full h-4 overflow-hidden">
                    <div className="bg-[#7000FF] h-4 rounded-full" style={{ width: "20%" }}></div>
                  </div>
                  <div className="w-8 text-sm text-white/70">20%</div>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-8 text-sm text-right text-white/70">3★</div>
                  <div className="flex-1 bg-[#252525] rounded-full h-4 overflow-hidden">
                    <div className="bg-[#7000FF] h-4 rounded-full" style={{ width: "5%" }}></div>
                  </div>
                  <div className="w-8 text-sm text-white/70">5%</div>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-8 text-sm text-right text-white/70">2★</div>
                  <div className="flex-1 bg-[#252525] rounded-full h-4 overflow-hidden">
                    <div className="bg-[#7000FF] h-4 rounded-full" style={{ width: "3%" }}></div>
                  </div>
                  <div className="w-8 text-sm text-white/70">3%</div>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-8 text-sm text-right text-white/70">1★</div>
                  <div className="flex-1 bg-[#252525] rounded-full h-4 overflow-hidden">
                    <div className="bg-[#7000FF] h-4 rounded-full" style={{ width: "2%" }}></div>
                  </div>
                  <div className="w-8 text-sm text-white/70">2%</div>
                </div>
              </div>
            </div>

            <div className="border border-[#252525] rounded-lg p-4 bg-[#151515]/50">
              <h3 className="font-bold mb-3 text-white">Similar Games</h3>
              <div className="space-y-3">
                {Array.from({ length: 3 }).map((_, i) => (
                  <Link to="#" key={i} className="flex gap-3 group">
                    <div className="w-16 h-24 rounded overflow-hidden bg-[#252525]">
                      <img src="/game-cover.jpeg" alt="Game cover" className="object-cover w-full h-full" />
                    </div>
                    <div>
                      <h4 className="font-medium text-white group-hover:text-[#7000FF] transition-colors">
                        Similar Game Title
                      </h4>
                      <p className="text-xs text-white/50">2023</p>
                      <div className="flex items-center gap-1 mt-1">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="12"
                          height="12"
                          viewBox="0 0 24 24"
                          fill="#FBBF24"
                          stroke="#FBBF24"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                        </svg>
                        <span className="text-xs text-white/70">4.2</span>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            <div className="border border-[#252525] rounded-lg p-4 bg-[#151515]/50">
              <h3 className="font-bold mb-3 text-white">Where to Play</h3>
              <div className="space-y-3">
                <button className="btn btn-primary w-full justify-between group">
                  <span>Steam</span>
                  <span className="text-white/70 group-hover:text-white">$59.99</span>
                </button>
                <button className="btn btn-outline w-full justify-between">
                  <span>Epic Games Store</span>
                  <span className="text-white/70">$59.99</span>
                </button>
                <button className="btn btn-outline w-full justify-between">
                  <span>Xbox Store</span>
                  <span className="text-white/70">$59.99</span>
                </button>
                <button className="btn btn-outline w-full justify-between">
                  <span>PlayStation Store</span>
                  <span className="text-white/70">$59.99</span>
                </button>
              </div>
            </div>
          </div>

          {/* Right Column - Content Sections */}
          <div className="flex-1 space-y-16">
            {/* About Section */}
            <div ref={aboutRef} id="about" className="scroll-mt-20">
              <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
                <span className="w-8 h-8 rounded-full bg-[#7000FF] flex items-center justify-center mr-3 text-white">
                  <span className="text-sm">01</span>
                </span>
                About
              </h2>
              <div className="prose prose-invert max-w-none">
                <p className="text-white/80 leading-relaxed">
                  Embark on an epic journey across the cosmos in this groundbreaking space RPG. Explore uncharted
                  worlds, forge alliances with alien civilizations, and uncover the mysteries of an ancient galactic
                  threat that could destroy everything you hold dear.
                </p>
                <p className="text-white/80 leading-relaxed">
                  As the captain of the starship Nebula, you'll navigate through stunning star systems, engage in
                  tactical space combat, and make decisions that will shape the fate of the galaxy. With a branching
                  narrative and multiple endings, your choices truly matter in this immersive sci-fi adventure.
                </p>

                <h3 className="text-white text-xl font-bold mt-8 mb-4">Key Features</h3>
                <ul className="text-white/80 space-y-2">
                  <li className="flex items-start gap-2">
                    <div className="rounded-full bg-[#7000FF] h-5 w-5 flex items-center justify-center mt-0.5 flex-shrink-0">
                      <svg className="h-3 w-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span>Vast open universe with over 100 unique planets to explore</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="rounded-full bg-[#7000FF] h-5 w-5 flex items-center justify-center mt-0.5 flex-shrink-0">
                      <svg className="h-3 w-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span>Deep character customization with unique skill trees and abilities</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="rounded-full bg-[#7000FF] h-5 w-5 flex items-center justify-center mt-0.5 flex-shrink-0">
                      <svg className="h-3 w-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span>Immersive storyline with branching narratives and multiple endings</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="rounded-full bg-[#7000FF] h-5 w-5 flex items-center justify-center mt-0.5 flex-shrink-0">
                      <svg className="h-3 w-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span>Dynamic faction system where your reputation affects gameplay</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="rounded-full bg-[#7000FF] h-5 w-5 flex items-center justify-center mt-0.5 flex-shrink-0">
                      <svg className="h-3 w-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span>Advanced crafting and ship customization systems</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Reviews Section */}
            <div ref={reviewsRef} id="reviews" className="scroll-mt-20">
              <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
                <span className="w-8 h-8 rounded-full bg-[#7000FF] flex items-center justify-center mr-3 text-white">
                  <span className="text-sm">02</span>
                </span>
                Reviews
              </h2>

              <div className="flex justify-between items-center mb-6">
                <p className="text-white/70">328 reviews from the community</p>
                <button className="btn btn-primary">Write a Review</button>
              </div>

              <div className="space-y-6">
                {/* Review Card */}
                <div className="border border-[#252525] rounded-lg p-5 hover:border-[#7000FF] transition-colors duration-300 bg-[#151515]/50">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full overflow-hidden border border-[#252525]">
                      <img src="/game-cover.jpeg" alt="User" className="w-full h-full object-cover" />
                    </div>
                    <div>
                      <div className="font-medium text-white">John Doe</div>
                      <div className="text-sm text-white/50">Posted 2 days ago</div>
                    </div>
                    <div className="ml-auto flex items-center">
                      <div className="rating">
                        {Array.from({ length: 5 }).map((_, i) => (
                          <svg
                            key={i}
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            viewBox="0 0 24 24"
                            fill={i < 4 ? "currentColor" : "none"}
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                          </svg>
                        ))}
                      </div>
                      <span className="ml-2 text-sm font-medium text-white">4.0</span>
                    </div>
                  </div>
                  <h4 className="font-bold text-lg mt-4 text-white">An incredible gaming experience</h4>
                  <p className="text-white/70 mt-2">
                    This game exceeded all my expectations. The graphics are stunning, the gameplay is smooth, and the
                    story is engaging. I spent hours exploring the world and completing side quests. The character
                    development is deep and meaningful, making you truly care about the outcome of your choices.
                  </p>
                  <div className="flex items-center gap-4 text-sm text-white/50 mt-4">
                    <button className="flex items-center gap-1 hover:text-[#7000FF] transition-colors">
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
                        <path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3"></path>
                      </svg>
                      <span>24 Likes</span>
                    </button>
                    <button className="hover:text-[#7000FF] transition-colors">Reply</button>
                  </div>
                </div>

                {/* More reviews */}
                <div className="border border-[#252525] rounded-lg p-5 hover:border-[#7000FF] transition-colors duration-300 bg-[#151515]/50">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full overflow-hidden border border-[#252525]">
                      <img src="/game-cover.jpeg" alt="User" className="w-full h-full object-cover" />
                    </div>
                    <div>
                      <div className="font-medium text-white">Alice Smith</div>
                      <div className="text-sm text-white/50">Posted 1 week ago</div>
                    </div>
                    <div className="ml-auto flex items-center">
                      <div className="rating">
                        {Array.from({ length: 5 }).map((_, i) => (
                          <svg
                            key={i}
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                          </svg>
                        ))}
                      </div>
                      <span className="ml-2 text-sm font-medium text-white">5.0</span>
                    </div>
                  </div>
                  <h4 className="font-bold text-lg mt-4 text-white">A masterpiece of game design</h4>
                  <p className="text-white/70 mt-2">
                    I can't recommend this game enough. The attention to detail is incredible, and the world feels
                    alive. The combat system is challenging but rewarding, and the character progression is
                    well-balanced. The soundtrack perfectly complements the atmosphere, creating a truly immersive
                    experience.
                  </p>
                  <div className="flex items-center gap-4 text-sm text-white/50 mt-4">
                    <button className="flex items-center gap-1 hover:text-[#7000FF] transition-colors">
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
                        <path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3"></path>
                      </svg>
                      <span>42 Likes</span>
                    </button>
                    <button className="hover:text-[#7000FF] transition-colors">Reply</button>
                  </div>
                </div>

                <button className="btn btn-outline w-full">Load more reviews</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
