// Navbar.js

import React, { useEffect } from 'react';
import LogImg from '../assets/netflix-logo-png-2583.png'
import { Link ,useNavigate} from 'react-router-dom'
import { useAuth , logoutUser } from '../context/authContext';
function NavBar({useLocation}) {
  const {user} = useAuth()
  let location = useLocation()
  const navigate = useNavigate()
  return (
    <nav className="bg-transparent py-6 fixed w-full top-0 left-0 z-10">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <img onClick={()=> navigate('/')} src={LogImg} alt="Netflix Logo" className="h-11 max-md:h-7 cursor-pointer mr-2 ml-4" />
          <ul className="flex space-x-4 text-white font-medium max-md:hidden">
          {location.pathname !== '/signup' && location.pathname !== '/login' && (
            <>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/tv-shows">TV Shows</Link></li>
              <li><Link to="/movies">Movies</Link></li>
              <li><Link to="/my-list">My List</Link></li>
            </>
          )}
          </ul>
        </div>
        <div className='mr-2 flex gap-2'>
          {!user && (
           <>
            <button onClick={()=>  console.log('hii')} className="bg-black text-white px-4 py-2 rounded-full focus:outline-none hover:bg-red-700">Signup</button>
            <button onClick={()=> navigate('/login')} className="bg-red-600 text-white px-4 py-2 rounded-full focus:outline-none hover:bg-red-700">Sign In</button>
           </>
          )
          }
          {user && location.pathname == '/' &&(
            <>
            <button onClick={()=> navigate('/profile')} className="bg-black text-white px-4 py-2 rounded-full focus:outline-none hover:bg-red-700">Profile</button>
            <button onClick={()=> navigate('/login')} className="bg-red-600 text-white px-4 py-2 rounded-full focus:outline-none hover:bg-red-700">Log Out</button>
            </>
          )

          }

        </div>
      </div>
    </nav>
  );
}

export default NavBar;