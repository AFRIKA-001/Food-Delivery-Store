import { useContext, useState } from 'react';
import UserAuthContext from '../store/UserAuthContext';
import {Link,useNavigate } from 'react-router-dom';
function Login() {
  const [email,setEmail]=useState('');
  const[password,setPassword]=useState('');
  const [error,setError]=useState(null);
  const [isLoading,setIsLoading]=useState(false);

const userAuthContext=useContext(UserAuthContext);
const navigate = useNavigate();

const  handleLogin = async (event) =>{
  setIsLoading(true)
event.preventDefault();
setError(null);
try{
const results = await userAuthContext.signIn(email,password);
if(results && results.success){
  navigate('/mealfetching');
}else{
  setError(results.error||'invalid login credentials')
}

}catch(err){
setError('failed to login,try again later',err)
}finally{
  setIsLoading(false);
}
}

  return ( 
  <section  className='h-150 max-w-md space-y-7 mt-15 m-auto  rounded-xl bg-yellow-400 '>
    <h1 className='text-3xl font-sans text-center p-4'>Login</h1>
    <form onSubmit={handleLogin} className=' max-w-md space-y-4   rounded-xl lg:rounded-2xl flex flex-col py-10 lg:py-40 lg:h-100 w-70 lg:w-200 mx-auto justify-center md:p-4'>
        <label className=' font-medium mb-2 uppercase'>email</label>
        <input onChange={(e)=>setEmail(e.target.value)} className='border rounded outline-1 mb-2 pl-1 ' type="email" required/>
        <label className=' font-medium mb-2 uppercase'>password</label>
        <input onChange={(e)=>setPassword(e.target.value)} className='border rounded outline-1 pl-1' type="password" required />
        <p className='p-4'>Don't have an account? <Link to='/signup' className='text-red-700' >sign up</Link></p>
        <button disabled={isLoading} type='submit' className='bg-amber-500 rounded-4xl active:bg-amber-700 w-50 mx-auto hover:bg-amber-600 transition-colors duration-300'>
         Login 
        </button>
        {error && <p className='text-center text-red-600'>{error}</p>}
    </form>
 
  </section>
    
  )
}

export default Login
