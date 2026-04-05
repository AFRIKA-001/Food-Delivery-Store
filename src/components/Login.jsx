import React, { useContext } from 'react'
import UserLoginContext from '../store/LoginContext'
import Modal from '../UI/Modal'

function Login() {

const userLoginContext =useContext(UserLoginContext);


function HideLogin(){
    userLoginContext.HideLogin();
}
function handleLogin(event){
event.preventDefault();
}



  return ( 
  <Modal open={userLoginContext.Login === 'login'} className='h-100 w-200 m-auto backdrop:bg-stone-900/90 rounded-sm bg-slate-300'>
    <h1 className='text-3xl font-sans text-center p-4'>Login</h1>
    <form onSubmit={handleLogin} className='bg-amber-300 rounded-2xl flex flex-col lg:h-70 lg:w-100 mx-auto md:p-4 lg:p-8'>
        <label className=' font-medium mb-2 uppercase'>email</label>
        <input className='border rounded outline-1 mb-2' type="email" required/>
        <label className=' font-medium mb-2 uppercase'>password</label>
        <input className='border rounded outline-1 ' type="password" required />
        <p className='p-4'>Don't have an account? <a className='text-red-700' href="#">click here</a></p>
        <button onClick={HideLogin} type='reset' className='bg-amber-500 rounded-4xl active:bg-amber-700 hover:bg-amber-600'>Create Account</button>
    </form>
 <button ></button>
  </Modal>
    
  )
}

export default Login
