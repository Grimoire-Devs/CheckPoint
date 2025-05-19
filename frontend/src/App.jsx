import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import "./App.css"

// Pages
import Home from "./pages/Home"
import Games from "./pages/Games"
import GameDetail from "./pages/GameDetail"
import SignIn from "./pages/SignIn"
import CreateAccount from "./pages/CreateAccount"
import Profile from "./pages/Profile"

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
      </Routes>
    </Router>
  )
}

export default App
