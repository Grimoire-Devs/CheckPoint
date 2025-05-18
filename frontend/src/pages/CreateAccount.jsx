import { Link } from "react-router-dom"
import { MainNav } from "../components/MainNav"
import React from "react"
import { useRef, useState } from "react"
import { useNavigate } from "react-router-dom"


export default function CreateAccount() {
  const [error, setError] = useState("");
  const [clicked, setClicked] = useState(false);

  const navigate = useNavigate();

  const email = useRef();
  const password = useRef();
  const username = useRef();
  const name = useRef();
  const confirmPassword = useRef();
  const baseUrl = import.meta.env.VITE_BASE_URL;

  const clearValues = () => {
    email.current.value = "";
    password.current.value = "";
    username.current.value = "";
    name.current.value = "";
    confirmPassword.current.value = "";
    return;
  }

  const handleCreateAccount = async (e) => {
    e.preventDefault();
    if (confirmPassword.current.value != password.current.value) {
      setError("Password and Confirm Password Do Not Match.");
      return;
    }
    setClicked(true);
    try {
      const response = await fetch(`${baseUrl}/signup`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: email.current.value,
          password: password.current.value,
          username: username.current.value,
          name: name.current.value,
        }),
      });
      const data = await response.json();
      console.log(data);
      if (!response.ok) {
        console.log(response);
        setError(`Error Occurred ${data.message}`);
        setClicked(false);
        return;
      }
      setError("Account Created Successfully. login to continue;")
      clearValues();
      setClicked(false);

      setTimeout(() => {
        navigate('/sign-in');
      }, 1000);
    }
    catch (e) {
      console.log(e);
    }

  };



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
                <input ref={username} id="username" placeholder="gamerguy42" required className="input" />
              </div>
              <div className="space-y-2">
                <label htmlFor="Name" className="text-sm font-medium">
                  Name
                </label>
                <input ref={name} id="name" placeholder="Aditya Kr Singh" required className="input" />
              </div>
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium">
                  Email
                </label>
                <input ref={email} id="email" type="email" placeholder="m@example.com" required className="input" />
              </div>
              <div className="space-y-2">
                <label htmlFor="password" className="text-sm font-medium">
                  Password
                </label>
                <input ref={password} id="password" type="password" required className="input" />
              </div>
              <div className="space-y-2">
                <label htmlFor="confirm-password" className="text-sm font-medium">
                  Confirm Password
                </label>
                <input ref={confirmPassword} id="confirm-password" type="password" required className="input" />
              </div>
              <div className="text-red">
                {error && <pre>{`${error}`}</pre>}
              </div>
            </div>
            <div className="flex flex-col space-y-4 mt-6">
              <button onClick={handleCreateAccount} disabled={clicked} className="btn btn-primary py-2">Create account</button>
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