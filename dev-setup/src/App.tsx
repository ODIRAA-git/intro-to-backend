import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import NavBar from './components/NavBar'
import Footer from './components/Footer'
import Home from './pages/Home'
import WorkoutPage from './pages/WorkoutPage'
import GenderPage from './pages/GenderPage'
import Signup from './pages/Signup'
import Login from './pages/Login'

export default function App() {
  return (
    <BrowserRouter>
      <div className="app full">
        <NavBar />
        <main className="content-wrap">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/workouts/:id" element={<WorkoutPage />} />
            <Route path="/gender/:id" element={<GenderPage />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  )
}
