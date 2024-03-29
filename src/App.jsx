import { useState } from 'react'
import './App.css'
import Home from './pages/home'
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom'
import Login from './pages/Login'
import Signup from './pages/Signup'
import Profile from './pages/Profile'
import NavBar from './components/NavBar'
import { useAuth } from './context/authContext'

function App() {
  const navigate = useNavigate()
  const { user } = useAuth()
  const location = useLocation()
  if (!user && location.pathname == '/profile') {
    navigate('/login')
    return null 
  }

  return (
    <>
      <NavBar useLocation={useLocation} />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/profile' element={<Profile />} />
      </Routes>
    </>
  )
}

export default App
