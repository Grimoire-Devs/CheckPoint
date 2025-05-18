import { Link } from "react-router-dom"
import { MainNav } from "../components/MainNav"

export default function SignIn() {

  

  return (
    <div className="min-h-screen bg-black text-white">
      <MainNav />
      <div className="container flex items-center justify-center min-h-[calc(100vh-64px)] py-12">
        <div className="form-card w-full max-w-md">
          <div className="space-y-1 mb-6">
            <h1 className="text-2xl font-bold">Sign in</h1>
            <p className="text-sm text-white/70">Enter your email and password to access your account</p>
          </div>
          <div className="space-y-4">
            <div className="space-y-2">
              <label htmlFor="email" className="text-sm font-medium">
                Email
              </label>
              <input id="email" type="email" placeholder="m@example.com" required className="input" />
            </div>
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <label htmlFor="password" className="text-sm font-medium">
                  Password
                </label>
                <Link to="/forgot-password" className="text-sm text-[#7000FF] hover:underline">
                  Forgot password?
                </Link>
              </div>
              <input id="password" type="password" required className="input" />
            </div>
          </div>
          <div className="flex flex-col space-y-4 mt-6">
            <button className="btn btn-primary py-2">Sign in</button>
            <div className="text-sm text-center text-white/70">
              Don&apos;t have an account?{" "}
              <Link to="/create-account" className="text-[#7000FF] hover:underline">
                Create account
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
