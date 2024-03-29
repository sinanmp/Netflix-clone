import React, { useEffect, useState } from 'react'
import { useAuth, logoutUser } from '../context/authContext'
import { useNavigate } from 'react-router-dom';
import { db } from '../services/farebase';
import { arrayRemove, doc, onSnapshot, updateDoc } from 'firebase/firestore';
import FavMoviesComponent from '../components/FavMoviesComponent';
function Profile() {
  const [movies, setMovies] = useState([])
  const { user } = useAuth();
  useEffect(() => {

    if (user) {
      onSnapshot(doc(db, 'users', `${user.email}`), (doc) => {
        if (doc.data()) {
          setMovies(doc.data().favShows)
        }
      })
    }

  }, [user?.email])


  const navigate = useNavigate()
  return (
    <>
      <div className='p-28 max-md:p-20'>
        <h1 className="text-3xl font-bold mb-6">Profile</h1>
        {user ? (
          <div>
            <div className="flex items-center">
              <img className='mr-4 w-16 h-16 rounded-full object-cover' src={user.photoURL ?? 'https://media.istockphoto.com/id/1495088043/vector/user-profile-icon-avatar-or-person-icon-profile-picture-portrait-symbol-default-portrait.jpg?s=612x612&w=0&k=20&c=dhV2p1JwmloBTOaGAtaA3AW1KSnjsdMt7-U_3EZElZ0='} alt="Profile Picture" />
              <div>
                <p className='text-lg font-semibold'>{user.displayName}</p>
                <p className='text-gray-600'>{user.email}</p>
              </div>
            </div>
            {/* Display other user data as needed */}
          </div>
        ) : (
          <p>Loading user data...</p>
        )}
        <button className='bg-red-600 text-white px-4 py-2 mt-6 rounded-md focus:outline-none hover:bg-red-700' onClick={async () => {
          await logoutUser()
          navigate('/signup')
        }}>Logout</button>
      </div>
        <FavMoviesComponent user={user} movies={movies} />
    </>



  )
}

export default Profile
