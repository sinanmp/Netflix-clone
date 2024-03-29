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
          <img onClick={()=> navigate('/')} src={LogImg} alt="Netflix Logo" className="h-11 cursor-pointer mr-2 ml-4" />
          <ul className="flex space-x-4 text-white font-medium max-md:hidden">
          {location.pathname !== '/signup' && location.pathname !== '/login' && (
            <>
              <li><a href="#" className="hover:text-gray-400">Home</a></li>
              <li><a href="#" className="hover:text-gray-400">TV Shows</a></li>
              <li><a href="#" className="hover:text-gray-400">Movies</a></li>
              <li><a href="#" className="hover:text-gray-400">My List</a></li>
            </>
          )}
        </ul>
        </div>
        <div className='mr-2 flex gap-2'>
          {!user && (
           <>
            <button onClick={()=> navigate('/signup')} className="bg-red-600 text-white px-4 py-2 rounded-full focus:outline-none hover:bg-red-700">SignUp</button>
            <button onClick={()=> navigate('/login')} className="bg-red-600 text-white px-4 py-2 rounded-full focus:outline-none hover:bg-red-700">Sign In</button>
           </>
          )
          }
          {user &&(
            <>
            <button onClick={()=> navigate('/profile')} className="bg-red-600 text-white px-4 py-2 rounded-full focus:outline-none hover:bg-red-700">Profile</button>
            <button onClick={()=> navigate('/login')} className="bg-red-600 text-white px-4 py-2 rounded-full focus:outline-none hover:bg-red-700">Sign Out</button>
            </>
          )

          }

        </div>
      </div>
    </nav>
  );
}

export default NavBar;