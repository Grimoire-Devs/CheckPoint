import { Link } from "react-router-dom"
import { MainNav } from "../components/MainNav"

export default function CreateAccount() {
  return (
    <div className="min-h-screen bg-black text-white">
      <MainNav />
      <div className="container flex items-center justify-center min-h-[calc(100vh-64px)] py-12">
        <div className="form-card w-full max-w-md">
          <div className="space-y-1 mb-6">
            <h1 className="text-2xl font-bold">Create an account</h1>
            <p className="text-sm text-white/70">Enter your information to create your account</p>
          </div>
          <div className="space-y-4">
            <div className="space-y-2">
              <label htmlFor="username" className="text-sm font-medium">
                Username
              </label>
              <input id="username" placeholder="gamerguy42" required className="input" />
            </div>
            <div className="space-y-2">
              <label htmlFor="email" className="text-sm font-medium">
                Email
              </label>
              <input id="email" type="email" placeholder="m@example.com" required className="input" />
            </div>
            <div className="space-y-2">
              <label htmlFor="password" className="text-sm font-medium">
                Password
              </label>
              <input id="password" type="password" required className="input" />
            </div>
            <div className="space-y-2">
              <label htmlFor="confirm-password" className="text-sm font-medium">
                Confirm Password
              </label>
              <input id="confirm-password" type="password" required className="input" />
            </div>
          </div>
          <div className="flex flex-col space-y-4 mt-6">
            <button className="btn btn-primary py-2">Create account</button>
            <div className="text-sm text-center text-white/70">
              Already have an account?{" "}
              <Link to="/sign-in" className="text-[#7000FF] hover:underline">
                Sign in
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
