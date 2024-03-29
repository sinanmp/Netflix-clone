import React from 'react'
import { useAuth ,logoutUser } from '../context/authContext'
import { useNavigate } from 'react-router-dom';
function Profile() {
  // Call useAuth hook to access user data
  const { user } = useAuth();
  const navigate = useNavigate()
  return (
    <div className='p-20'>
      <h1>Profile</h1>
      {user ? (
        <div>
          <p className='mt-2'>User name: {user.displayName}</p>
          <p className='mt-2'>Email: {user.email}</p>
          <img  className='mt-2 object-cover size-32' src={user.photoURL ?? 'https://media.istockphoto.com/id/1495088043/vector/user-profile-icon-avatar-or-person-icon-profile-picture-portrait-symbol-default-portrait.jpg?s=612x612&w=0&k=20&c=dhV2p1JwmloBTOaGAtaA3AW1KSnjsdMt7-U_3EZElZ0='} alt="" />
          {/* Display other user data as needed */}
        </div>
      ) : (
        <p>Loading user data...</p>
      )}
      <button className='bg-red-600 text-white px-4 py-2 mt-4 rounded-md focus:outline-none hover:bg-red-700' onClick={async()=>{
        await logoutUser()
        navigate('/signup')
      }}>logOut</button>
    </div>
  )
}

export default Profile
