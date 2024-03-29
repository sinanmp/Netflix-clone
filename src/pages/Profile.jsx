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
          <p>User ID: {user.uid}</p>
          <p>Email: {user.email}</p>
          {/* Display other user data as needed */}
        </div>
      ) : (
        <p>Loading user data...</p>
      )}
      <button onClick={async()=>{
        await logoutUser()
        navigate('/signup')
      }}>logOut</button>
    </div>
  )
}

export default Profile
