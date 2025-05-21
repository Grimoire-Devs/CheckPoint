import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import "./App.css"

// Pages
import Home from "./pages/Home"
import Games from "./pages/Games"
import GameDetail from "./pages/GameDetail"
import SignIn from "./pages/SignIn"
import CreateAccount from "./pages/CreateAccount"
import Profile from "./pages/Profile"
import ReviewsRating from "./pages/ReviewsRating"
import Testing from "./pages/Testing"
import ForgotPassword from "./pages/ForgotPassword"


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/games" element={<Games />} />
        <Route path="/games/:id" element={<GameDetail />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/create-account" element={<CreateAccount />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/reviews/:id" element={<ReviewsRating />} />
        <Route path="/testing" element={<Testing/>} />
        <Route path="/forgot-password" element={<ForgotPassword/>}/>


      </Routes>
    </Router>
  )
}

export default App
