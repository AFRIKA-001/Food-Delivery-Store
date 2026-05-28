import { useContext, useState } from "react";
import UserAuthContext from "../store/UserAuthContext";
import { Link, useNavigate } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const userAuthContext = useContext(UserAuthContext);
  const navigate = useNavigate();

  const handleLogin = async (event) => {
    setIsLoading(true);
    event.preventDefault();
    setError(null);

    try {
      const results = await userAuthContext.signIn(email, password);

      if (results && results.success) {
        navigate("/meals");
      } else {
        setError(results.error || "invalid login credentials");
      }
    } catch (err) {
      setError("failed to login,try again later", err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className="min-h-screen bg-linear-to-br from-amber-50 via-white to-orange-100 flex items-center justify-center px-4">
      <div className="w-full max-w-md bg-white shadow-2xl rounded-3xl border border-gray-100 p-8 md:p-10">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-800 tracking-tight">
            Welcome Back
          </h1>

          <p className="text-gray-500 mt-2 text-sm">
            Login to continue to your account
          </p>
        </div>

        <form onSubmit={handleLogin} className="flex flex-col gap-5">
          <div className="flex flex-col gap-2">
            <label className="text-sm font-semibold uppercase tracking-wide text-gray-700">
              Email
            </label>

            <input
              onChange={(e) => setEmail(e.target.value)}
              className="border border-gray-300 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-amber-400 focus:border-transparent transition-all duration-300 bg-gray-50"
              type="email"
              placeholder="Enter your email"
              required
            />
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-sm font-semibold uppercase tracking-wide text-gray-700">
              Password
            </label>

            <input
              onChange={(e) => setPassword(e.target.value)}
              className="border border-gray-300 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-amber-400 focus:border-transparent transition-all duration-300 bg-gray-50"
              type="password"
              placeholder="Enter your password"
              required
            />
          </div>

          <button
            disabled={isLoading}
            type="submit"
            className="bg-amber-500 hover:bg-amber-600 active:scale-95 disabled:opacity-70 disabled:cursor-not-allowed text-white font-semibold py-3 rounded-xl transition-all duration-300 shadow-lg shadow-amber-200"
          >
            {isLoading ? "Logging in..." : "Login"}
          </button>

          {error && (
            <p className="text-center text-sm text-red-600 bg-red-50 border border-red-200 rounded-lg py-2 px-3">
              {error}
            </p>
          )}

          <p className="text-center text-gray-600 text-sm mt-2">
            Don't have an account?{" "}
            <Link
              to="/signup"
              className="text-amber-600 hover:text-amber-700 font-semibold"
            >
              create account
            </Link>
          </p>
        </form>
      </div>
    </section>
  );
}

export default Login;

// import { useContext, useState } from 'react';
// import UserAuthContext from '../store/UserAuthContext';
// import {Link,useNavigate } from 'react-router-dom';
// function Login() {
//   const [email,setEmail]=useState('');
//   const[password,setPassword]=useState('');
//   const [error,setError]=useState(null);
//   const [isLoading,setIsLoading]=useState(false);

// const userAuthContext=useContext(UserAuthContext);
// const navigate = useNavigate();

// const  handleLogin = async (event) =>{
//   setIsLoading(true)
// event.preventDefault();
// setError(null);
// try{
// const results = await userAuthContext.signIn(email,password);
// if(results && results.success){
//   navigate('/mealfetching/:');
// }else{
//   setError(results.error||'invalid login credentials')
// }

// }catch(err){
// setError('failed to login,try again later',err)
// }finally{
//   setIsLoading(false);
// }
// }

//   return (
//   <section  className='min-h-screen max-w-md space-y-7 flex flex-col justify-center m-auto border border-amber-400 rounded-xl bg-white-400/20 '>
//     <h1 className='text-3xl font-sans text-center p-4'>Login</h1>
//     <form onSubmit={handleLogin} className=' max-w-md space-y-4   rounded-xl lg:rounded-2xl flex flex-col py-10 lg:py-40 lg:h-100 w-70 lg:w-200 mx-auto justify-center md:p-4'>
//         <label className=' font-medium mb-2 uppercase'>email</label>
//         <input onChange={(e)=>setEmail(e.target.value)} className='border rounded outline-1 mb-2 pl-1 ' type="email" required/>
//         <label className=' font-medium mb-2 uppercase'>password</label>
//         <input onChange={(e)=>setPassword(e.target.value)} className='border rounded outline-1 pl-1' type="password" required />
//         <p className='p-4'>Don't have an account? <Link to='/signup' className='text-red-700' >sign up</Link></p>
//         <button disabled={isLoading} type='submit' className='bg-amber-500 rounded-4xl active:bg-amber-700 w-50 mx-auto hover:bg-amber-600 transition-colors duration-300'>
//          Login
//         </button>
//         {error && <p className='text-center text-red-600'>{error}</p>}
//     </form>

//   </section>

//   )
// }

// export default Login
