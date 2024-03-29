import { useState } from 'react'
import './App.css'
import Home from './pages/home'
import { Route, Routes ,useLocation} from 'react-router-dom'
import Login from './pages/Login'
import Signup from './pages/Signup'
import Profile from './pages/Profile'
import NavBar from './components/NavBar'
import { AuthContextProvider } from './context/authContext'
function App() {

  return (
    <>
    <AuthContextProvider>
     <NavBar useLocation={useLocation} />
     <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/login' element={<Login/>}></Route>
      <Route path='/signup'  element={<Signup />}></Route>
      <Route path='/profile' element={<Profile/>}></Route>
     </Routes>
     </AuthContextProvider>
    </>
  )
}

export default App
