import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import {handleGoogleSignIn, loginUser} from '../context/authContext'
import { useNavigate } from 'react-router-dom'
import '../assets/google.css'
function Login() {
  const [rememberLogin , setrememberLogin] = useState(true)
  const [email , setEmail ] = useState('')
  const [password , setPassword] = useState('')
  const navigate = useNavigate()
  const handleFormSubmit = async(e)=>{
    e.preventDefault()
     await loginUser(email,password)
     navigate('/')
  }

  
  const handleGoogle = async(e)=>{
    try {
      await handleGoogleSignIn()
      navigate('/')
    } catch (error) {
      console.log(error)
    }
  }
  
  return (
    <>
      <div className='w-full h-screen'>
        <img className='hidden sm:block absolute w-full h-full object-cover' src="https://assets.nflxext.com/ffe/siteui/vlv3/c0b69670-89a3-48ca-877f-45ba7a60c16f/2642e08e-4202-490e-8e93-aff04881ee8a/IN-en-20240212-popsignuptwoweeks-perspective_alpha_website_large.jpg" alt="" />
        <div className='bg-black/70 fixed top-0 left-0 w-full h-full' />
        <div className='fixed w-full px-4 py-24 z-20'>
         <div className='max-w-[450px] h-[500px] mx-auto bg-black/60 rounded-lg'>
          <div className='max-w-[320px] mx-auto py-16'>
            <h1 className='text-3xl '>Sign In</h1>
            
            <form onSubmit={handleFormSubmit} className='w-full flex flex-col py-4 '>
               <input onChange={(e)=> setEmail(e.target.value)} value={email} className='p-3 my-2 bg-gray-700 rounded' type="email" autoComplete='email' placeholder='email' />
               <input onChange={(e)=> setPassword(e.target.value)} value={password} className='p-3 my-2 bg-gray-700 rounded' type="password" autoComplete='current-password' placeholder='password' />
               <button type='submit' className='bg-red-600 py-3 my-6 rounded'>Login</button>
               <div className='flex justify-between items-center text-gray-600'>
                <p>
                  <input className='mr-2' checked={rememberLogin} onChange={(e)=> setrememberLogin(!rememberLogin)} type="checkbox" />Remember me
                </p>
                <p>Need Help?</p>
               </div>
               <div id='btn2' onClick={handleGoogle} className='btn max-md:w-60 self-center'><img className='googleImage mr-2' src="https://i.imgur.com/8qKdyAR.png" alt="" />Continue with Google</div>
                <p className='my-4 '><span className='text-gray-600 mr-2 ' >New to Netflix? </span>
                <Link to={'/signup'}>Sign Up</Link>
                </p>
            </form>
          </div>
         </div>
      </div>
      </div>
    
    </>
  )
}

export default Login
