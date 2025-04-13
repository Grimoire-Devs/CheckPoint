import { Link } from "react-router-dom"
import { MainNav } from "../components/MainNav"

export default function CreateAccount() {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col">
      {/* Navbar */}
      <div className="fixed top-0 left-0 w-full z-10 bg-black">
        <MainNav />
      </div>

      {/* Main Content */}
      <div className="flex flex-1" style={{ marginTop: "64px" }}>
        {/* Left side with background GIF */}
        <div className="w-1/2 flex items-center justify-center">
          <div
            className="w-full h-full bg-[url('https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExZ2MzZXQ1cXNqenR6d3AxMnYzdzE3dGlnczY5MDB2NjI3dmFvbTJkdCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/g326VFWdSJLPmfdVSJ/giphy.gif')] bg-contain bg-center bg-no-repeat" 
          ></div>
        </div>

        {/* Right side with form */}
        <div className="w-1/2 flex items-center justify-center">
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
                <label htmlFor="Name" className="text-sm font-medium">
                  Name
                </label>
                <input id="name" placeholder="Aditya Kr Singh" required className="input" />
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
    </div>
  )
}