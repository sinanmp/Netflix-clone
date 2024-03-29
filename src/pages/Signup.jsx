import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'  
import { useAuth, signUpUser ,handleGoogleSignIn } from '../context/authContext' 
import '../assets/google.css'
function Signup() {
  const user = useAuth()
  console.log(user)
  const [rememberLogin , setrememberLogin] = useState(true)
  const [email , setEmail ] = useState('')
  const [password , setPassword] = useState('')

  const navigate = useNavigate()
  
  const handleFormSubmit = async(e)=>{
    e.preventDefault()
    try {
      await signUpUser(email, password)
      navigate('/')
    } catch (error) {
      console.log(error)
    }
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
      <div className='w-full h-screen '>
        <img className='hidden sm:block absolute w-full h-full object-cover' src="https://assets.nflxext.com/ffe/siteui/vlv3/c0b69670-89a3-48ca-877f-45ba7a60c16f/2642e08e-4202-490e-8e93-aff04881ee8a/IN-en-20240212-popsignuptwoweeks-perspective_alpha_website_large.jpg" alt="" />
        <div className='bg-black/70 fixed top-0 left-0 w-full h-screen' />
        <div className='fixed w-full px-4 py-24 z-20'>
         <div className='max-w-[450px] h-[500px] mx-auto bg-black/80 rounded-lg'>
          <div className='max-w-[320px] mx-auto py-16'>
            <h1 className='text-3xl '>Sign Up</h1>
            
            <form onSubmit={handleFormSubmit} className='w-full flex flex-col py-4 '>
               <input onChange={(e)=> setEmail(e.target.value)} value={email} className='p-3 my-2 bg-gray-700 rounded' type="email" autoComplete='email' placeholder='email' />
               <input onChange={(e)=> setPassword(e.target.value)} value={password} className='p-3 my-2 bg-gray-700 rounded' type="password" autoComplete='current-password' placeholder='password' />
               <button type='submit' className='bg-red-600 py-3 my-6 rounded'>SignUp</button>
               <div className='flex justify-between items-center text-gray-600'>
                <p>
                  <input className='mr-2' checked={rememberLogin} onChange={(e)=> setrememberLogin(!rememberLogin)} type="checkbox" />Remember me
                </p>
                <p>Need Help?</p>
               </div>
               <div id='btn2' onClick={handleGoogle} className='btn max-md:w-60 self-center'><img className='googleImage mr-2' src="https://i.imgur.com/8qKdyAR.png" alt="" />Continue with Google</div>
                <p className='my-4 '><span className='text-gray-600 mr-2 ' >Already Subscribed to Netflix? </span>
                <Link to={'/login'}>Sign In</Link>
                </p>
            </form>
          </div>
         </div>
      </div>
      </div>
    
    </>
  )
}

export default Signup
