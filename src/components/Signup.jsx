import { useContext, useState } from "react";
import Inputs from "./Inputs";
import UserAuthContext from "../store/UserAuthContext";
import { Link, useNavigate } from "react-router-dom";

function Signup() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const userAuthContext = useContext(UserAuthContext);
  const navigate = useNavigate();

  const handleSignUp = async (event) => {
    event.preventDefault();
    setIsLoading(true);

    try {
      const result = await userAuthContext.signup(
        email,
        password,
        username
      );

      if (result.success) {
        navigate('/meals');
      }
    } catch (error) {
      setError(
        error.message ||
        "an error occurred during sign up. Please try again."
      );
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-linear-to-br from-orange-50 via-white to-amber-100 flex items-center justify-center px-4">
      
      <form
        onSubmit={handleSignUp}
        className="w-full max-w-md bg-white rounded-3xl shadow-2xl border border-gray-100 p-8 md:p-10"
      >
        
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-800 tracking-tight">
            Create Account
          </h1>

          <p className="text-gray-500 mt-2 text-sm">
            Join us and start your journey today
          </p>
        </div>

        
        <div className="space-y-5">
          
          <div>
            <Inputs
              onChange={(e) => setUsername(e.target.value)}
              label="username"
              id="username"
              type="text"
              placeholder="Enter your username"
              className="w-full border border-gray-300 rounded-xl px-4 py-3 text-sm outline-none bg-gray-50 text-gray-800 focus:ring-2 focus:ring-amber-400 focus:border-transparent transition-all duration-300"
            />
          </div>

          
          <div>
            <Inputs
              onChange={(e) => setEmail(e.target.value)}
              label="email"
              id="email"
              type="email"
              placeholder="example@gmail.com"
              className="w-full border border-gray-300 rounded-xl px-4 py-3 text-sm outline-none bg-gray-50 text-gray-800 focus:ring-2 focus:ring-amber-400 focus:border-transparent transition-all duration-300"
            />
          </div>

          
          <div>
            <Inputs
              onChange={(e) => setPassword(e.target.value)}
              label="password"
              id="password"
              type="password"
              placeholder="@#$%ge%^&&*"
              className="w-full border border-gray-300 rounded-xl px-4 py-3 text-sm outline-none bg-gray-50 text-gray-800 focus:ring-2 focus:ring-amber-400 focus:border-transparent transition-all duration-300"
            />
          </div>

          
          <button
            disabled={isLoading}
            type="submit"
            className="w-full bg-amber-500 hover:bg-orange-500 active:scale-95 disabled:opacity-70 disabled:cursor-not-allowed text-white font-semibold py-3 rounded-xl transition-all duration-300 shadow-lg shadow-amber-200"
          >
            {isLoading ? "Creating Account..." : "Sign Up"}
          </button>

          
          {error && (
            <p className="text-red-600 text-sm text-center bg-red-50 border border-red-200 rounded-lg py-2 px-3">
              {error}
            </p>
          )}

          
          <p className="text-center text-gray-600 text-sm pt-2">
            Already have an account?{" "}
            <Link
              to="/signin"
              className="text-amber-600 hover:text-orange-600 font-semibold transition-colors"
            >
              Sign in
            </Link>
          </p>
        </div>
      </form>
    </div>
  );
}

export default Signup;


// import { useContext, useState } from "react";
// import Inputs from "./Inputs";
// import UserAuthContext from "../store/UserAuthContext";
// import { Link,useNavigate } from "react-router-dom";





// function Signup() {
// const [username,setUsername] = useState('');
// const [email,setEmail] = useState('');
// const [password,setPassword] = useState('');    
// const [error,setError] = useState(null);
// const [isLoading,setIsLoading] = useState(false);

//  const userAuthContext = useContext(UserAuthContext);
//    const navigate = useNavigate();
 

//  const handleSignUp = async (event) =>{
//     event.preventDefault();
//     setIsLoading(true)
//     try {
//         const result = await userAuthContext.signup(email,password,username);
//         if(result.success){
//             navigate('/mealFetching/:'); 
//         }
        
//     } catch (error) {
//         setError(error.message ||"an error occurred during sign up. Please try again." );  
//     }finally{
//         setIsLoading(false);
//     }
//  }
//   return (
//     <div className="min-h-screen">
//         <form onSubmit={handleSignUp} className=" max-w-md space-y-8 bg-white-400/10 border rounded-xl lg:rounded-2xl flex flex-col border-amber-400  min-h-screen  mx-auto  justify-center ">
//             <h1 className="hover:underline text-3xl font-mono text-center text-orange-500 pb-4">Sign Up</h1>
//             <div className=" mx-auto space-y-4 ">
//                  <Inputs onChange={(e) => setUsername(e.target.value)} label='username' id='username' type='text' className='border w-full text-sm rounded outline-1 text-stone-950 flex pl-1' />
//                 <Inputs onChange={(e) => setEmail(e.target.value)} label='email' id='email' type='email' placeholder='wafula@gmail.com' className='border text-sm w-full rounded outline-1 flex pl-1' />
//                 <Inputs onChange={(e) => setPassword(e.target.value)} label='password' id='password' type='password' placeholder='@#$%ge%^&&*' className='border w-full text-sm rounded outline-1 flex pl-1' />
//                  <p>already have an account? <Link to="/signin" className="text-orange-600">Sign in</Link></p>
//                  <button disabled={isLoading} className="mt-2 px-2 bg-amber-300 hover:bg-orange-600 active:bg-slate-800 border rounded" type='submit'>
//                     Sign Up</button>
//                  {error && <p className="text-red-500 pt-4 text-lg text-center">{error}</p>}
//             </div>



//         </form>
      
//     </div>
//   )
// }

// export default Signup
