// Navbar.js

import React from 'react';
import LogImg from '../../assets/netflix-logo-png-2583.png'

function NavBar() {
  return (
    <nav className="bg-black py-6 fixed w-full top-0 left-0 z-10">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <img src={LogImg} alt="Netflix Logo" className="h-12 mr-4" />
          <ul className="flex space-x-4 text-white font-medium">
            <li><a href="#" className=" hover:text-gray-400">Home</a></li>
            <li><a href="#" className=" hover:text-gray-400">TV Shows</a></li>
            <li><a href="#" className=" hover:text-gray-400">Movies</a></li>
            <li><a href="#" className=" hover:text-gray-400">My List</a></li>
          </ul>
        </div>
        <div className='mr-2 flex gap-2'>
          <button className="bg-red-600 text-white px-4 py-2 rounded-full focus:outline-none hover:bg-red-700">Profile</button>
          <button className="bg-red-600 text-white px-4 py-2 rounded-full focus:outline-none hover:bg-red-700">Sign In</button>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
