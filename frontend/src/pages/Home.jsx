import { Link } from "react-router-dom"
import { MainNav } from "../components/MainNav"
import { HeroSection } from "../components/HeroSection"
import { GameCarousel } from "../components/GameCarousel"
import { FeaturedGame } from "../components/FeaturedGame"
import { GameCard } from "../components/GameCard"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-black text-white">
      <MainNav />

      <main className="flex-1">
        {/* Hero Section with enhanced color grading */}
        <HeroSection />

        {/* Featured Game */}
        <section className="container py-16">
          <FeaturedGame />
        </section>

        {/* Popular Games */}
        <section className="container py-10">
          <GameCarousel title="Popular Games" viewAllLink="/games/popular" games={8} />
        </section>

        {/* New Releases */}
        <section className="bg-[#0A0A0A] py-16">
          <div className="container">
            <div className="flex items-center justify-between mb-8">
              <div>
                <span className="badge mb-2">FRESH OFF THE PRESS</span>
                <h2 className="text-2xl md:text-3xl font-bold text-white">New Releases</h2>
              </div>
              <Link
                to="/games/new"
                className="text-white/70 hover:text-[#7000FF] transition-colors duration-300 flex items-center gap-1 group"
              >
                View All
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
                  className="transition-transform duration-300 group-hover:translate-x-1"
                >
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </Link>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-6">
              {Array.from({ length: 6 }).map((_, i) => (
                <GameCard key={i} />
              ))}
            </div>
          </div>
        </section>

        {/* Top Rated */}
        <section className="container py-16">
          <GameCarousel title="Top Rated Games" viewAllLink="/games/top-rated" games={8} />
        </section>

        {/* CTA Section */}
        <section className="cta-section">
          <div className="cta-background">
            <div className="cta-gradient"></div>
            <div className="cta-glow"></div>
            <div className="cta-grid"></div>
          </div>

          <div className="container cta-content">
            <span className="badge cta-badge">JOIN THE COMMUNITY</span>
            <h2 className="cta-title">Ready to level up your gaming experience?</h2>
            <p className="cta-description">
              Create your account today and start tracking your gaming journey, connect with fellow gamers, and discover
              your next favorite game.
            </p>
            <div className="cta-actions">
              <Link to="/create-account">
                <button className="btn btn-neon group px-6 py-3">
                  Create Free Account
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
                    className="ml-2 inline-block transition-transform duration-300 group-hover:translate-x-1"
                  >
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                    <polyline points="12 5 19 12 12 19"></polyline>
                  </svg>
                </button>
              </Link>
              <button className="btn btn-outline px-6 py-3">Learn More</button>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
