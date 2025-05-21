import React, { useRef, useState } from "react";
import { MainNav } from "../components/MainNav";

export default function ForgotPassword() {
  const emailRef = useRef();
  const otpRef = useRef();
  const passwordRef = useRef();
  const [step, setStep] = useState(1); // 1: email, 2: otp+password
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState("");

  // Simulate backend endpoints
  const baseUrl = import.meta.env.VITE_BASE_URL;

  const handleSendOtp = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);
    const emailValue = emailRef.current.value.trim();
    if (!emailValue) {
      setError("Please enter your email address.");
      setLoading(false);
      return;
    }
    setEmail(emailValue);
    // await fetch(`${baseUrl}/forgot-password/send-otp`, { ... })
    setTimeout(() => {
      setStep(2);
      setLoading(false);
    }, 1000);
  };

  const handleVerifyOtp = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);
    const otp = otpRef.current.value.trim();
    const password = passwordRef.current.value.trim();
    if (!otp || !password) {
      setError("Please enter the OTP and your new password.");
      setLoading(false);
      return;
    }
    // await fetch(`${baseUrl}/forgot-password/verify-otp`, { ... })
    setTimeout(() => {
      setSubmitted(true);
      setLoading(false);
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-black text-white flex flex-col">
      <MainNav />
      <div className="flex flex-1 items-center justify-center" style={{ marginTop: 64 }}>
        <div className="form-card w-full max-w-md bg-[#151515] border border-[#252525] rounded-lg p-8 shadow-lg">
          <h1 className="text-2xl font-bold mb-4">Forgot Password</h1>
          {submitted ? (
            <div className="text-green-400 text-center font-semibold">
              Your password has been reset. You can now sign in with your new password.
            </div>
          ) : (
            <>
              {step === 1 && (
                <form onSubmit={handleSendOtp} className="space-y-6">
                  <div>
                    <label htmlFor="email" className="block mb-2 font-medium">Email Address</label>
                    <input
                      id="email"
                      type="email"
                      ref={emailRef}
                      className="input w-full bg-black border border-[#252525] rounded p-2 text-white"
                      placeholder="Enter your email"
                      required
                    />
                  </div>
                  {error && <div className="text-red-400 text-sm">{error}</div>}
                  <button type="submit" className="btn btn-primary w-full py-2 text-lg" disabled={loading}>
                    {loading ? "Sending OTP..." : "Send OTP"}
                  </button>
                </form>
              )}
              {step === 2 && (
                <form onSubmit={handleVerifyOtp} className="space-y-6">
                  <div>
                    <label htmlFor="otp" className="block mb-2 font-medium">Enter OTP sent to <span className="text-[#7000FF]">{email}</span></label>
                    <input
                      id="otp"
                      type="text"
                      ref={otpRef}
                      className="input w-full bg-black border border-[#252525] rounded p-2 text-white"
                      placeholder="Enter OTP"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="new-password" className="block mb-2 font-medium">New Password</label>
                    <input
                      id="new-password"
                      type="password"
                      ref={passwordRef}
                      className="input w-full bg-black border border-[#252525] rounded p-2 text-white"
                      placeholder="Enter new password"
                      required
                    />
                  </div>
                  {error && <div className="text-red-400 text-sm">{error}</div>}
                  <button type="submit" className="btn btn-primary w-full py-2 text-lg" disabled={loading}>
                    {loading ? "Resetting..." : "Reset Password"}
                  </button>
                </form>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
}