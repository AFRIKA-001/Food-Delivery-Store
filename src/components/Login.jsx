import React, {  } from 'react'
// import UserLoginContext from '../store/UserAuthContext'
import Modal from '../UI/Modal'
import { Link } from 'react-router-dom';
function Login() {
function handleLogin(event){
event.preventDefault();
}
  return ( 
  <section  className='h-100 w-200 my-30 m-auto backdrop:bg-stone-900/90 rounded bg-slate-300'>
    <h1 className='text-3xl font-sans text-center p-4'>Login</h1>
    <form onSubmit={handleLogin} className=' rounded flex flex-col lg:h-70 lg:w-100 mx-auto md:p-4 lg:p-8'>
        <label className=' font-medium mb-2 uppercase'>email</label>
        <input className='border rounded outline-1 mb-2' type="email" required/>
        <label className=' font-medium mb-2 uppercase'>password</label>
        <input className='border rounded outline-1 ' type="password" required />
        <p className='p-4'>Don't have an account? <a className='text-red-700' href="#">click here</a></p>
        <button type='reset' className='bg-amber-500 rounded-4xl active:bg-amber-700 w-50 mx-auto hover:bg-amber-600'>
         <Link to='/mealfetching' >Create Account</Link> </button>
    </form>
 <button ></button>
  </section>
    
  )
}

export default Login
