import React, { useRef, useState } from "react";
import { MainNav } from "../components/MainNav";
import { useParams } from "react-router-dom";

export default function ReviewsRating() {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);
  const reviewRef = useRef();
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");
  const { id } = useParams();
  const baseUrl = import.meta.env.VITE_BASE_URL;

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!rating || !reviewRef.current.value.trim()) {
      setError("Please provide a rating and a review.");
      return;
    }
    setError("");
    try {
      const res = await fetch(`${baseUrl}/review/${id}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
        body: JSON.stringify({
          rating,
          reviewText: reviewRef.current.value,
        }),
      });
      if (res.status === 401) {
        window.location.href = "/sign-in";
        return;
      }
      const data = await res.json();
      if (!res.ok || data.error) {
        setError(data.error || "Failed to submit review.");
        return;
      }
      setSubmitted(true);
    } catch (err) {
      setError("Failed to submit review.");
    }
  };

  return (
    <div className="min-h-screen bg-black text-white flex flex-col">
      <MainNav />
      <div
        className="flex flex-1 items-center justify-center"
        style={{ marginTop: 64 }}
      >
        <div className="form-card w-full max-w-md bg-[#151515] border border-[#252525] rounded-lg p-8 shadow-lg">
          <h1 className="text-2xl font-bold mb-4">Leave a Review</h1>
          {submitted ? (
            <div className="text-green-400 text-center font-semibold">
              Thank you for your review!
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block mb-2 font-medium">Your Rating</label>
                <div className="rating text-2xl">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <button
                      type="button"
                      key={i}
                      className="focus:outline-none"
                      onClick={() => setRating(i + 1)}
                      onMouseEnter={() => setHover(i + 1)}
                      onMouseLeave={() => setHover(0)}
                      aria-label={`Rate ${i + 1} star${i > 0 ? "s" : ""}`}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="32"
                        height="32"
                        viewBox="0 0 24 24"
                        fill={(hover || rating) > i ? "#fbbf24" : "none"}
                        stroke="#fbbf24"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="transition-colors duration-150"
                      >
                        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                      </svg>
                    </button>
                  ))}
                </div>
              </div>
              <div>
                <label htmlFor="review" className="block mb-2 font-medium">
                  Your Review
                </label>
                <textarea
                  id="review"
                  ref={reviewRef}
                  className="input w-full min-h-[100px] bg-black border border-[#252525] rounded p-2 text-white"
                  placeholder="Share your thoughts..."
                  maxLength={1000}
                  required
                />
              </div>
              {error && <div className="text-red-400 text-sm">{error}</div>}
              <button
                type="submit"
                className="btn btn-primary w-full py-2 text-lg"
              >
                Submit Review
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
