import { useState } from 'react'
import './App.css'
import Home from './pages/home'
import { Route, Routes ,useLocation ,useNavigate} from 'react-router-dom'
import Login from './pages/Login'
import Signup from './pages/Signup'
import Profile from './pages/Profile'
import NavBar from './components/NavBar'
import { useAuth } from './context/authContext' 
function App() {
  const navigate = useNavigate()
  const {user} = useAuth()
  return (
    <>
     <NavBar useLocation={useLocation} />
     <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/login' element={<Login/>}></Route>
      <Route path='/signup'  element={<Signup />}></Route>
      <Route path='/profile' element={user ? <Profile/> : navigate('/login')}></Route>
     </Routes>
    </>
  )
}

export default App
