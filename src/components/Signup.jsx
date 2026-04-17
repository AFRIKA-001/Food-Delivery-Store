import { useContext, useState } from "react";
import Inputs from "./Inputs";
import UserAuthContext from "../store/UserAuthContext";
import { Link,useNavigate } from "react-router-dom";





function Signup() {
const [username,setUsername] = useState('');
const [email,setEmail] = useState('');
const [password,setPassword] = useState('');    
const [error,setError] = useState(null);
const [isLoading,setIsLoading] = useState(false);

 const userAuthContext = useContext(UserAuthContext);
   const navigate = useNavigate();
 

 const handleSignUp = async (event) =>{
    event.preventDefault();
    setIsLoading(true)
    try {
        const result = await userAuthContext.signup(email,password,username);
        if(result.success){
            navigate('/mealFetching'); 
        }
        
    } catch (error) {
        setError(error.message ||"an error occurred during sign up. Please try again." );  
    }finally{
        setIsLoading(false);
    }
 }
  return (
    <div className=" m-auto mt-15 lg:my-45 ">
        <form onSubmit={handleSignUp} className=" max-w-md space-y-4 bg-yellow-400 border rounded-xl lg:rounded-2xl flex flex-col border-amber-400  h-150 lg:h-150  mx-auto justify-center md:p-4">
            <h1 className="mt-2 text-3xl font-mono text-center text-orange-500 pb-4">Sign Up</h1>
            <div className=" mx-auto ">
                 <Inputs onChange={(e) => setUsername(e.target.value)} label='username' id='username' type='text' className='border rounded outline-1 text-stone-950 flex pl-1' />
                <Inputs onChange={(e) => setEmail(e.target.value)} label='email' id='email' type='email' className='border rounded outline-1 flex pl-1' />
                <Inputs onChange={(e) => setPassword(e.target.value)} label='password' id='password' type='password' className='border mb-2 rounded outline-1 flex pl-1' />
                 <p>already have an account? <Link to="/signin" className="text-orange-600">Sign in</Link></p>
                 <button disabled={isLoading} className="mt-2 px-2 bg-amber-300 hover:bg-orange-600 active:bg-slate-800 border rounded" type='submit'>
                    Sign Up</button>
                 {error && <p className="text-red-500 pt-4 text-lg text-center">{error}</p>}
            </div>



        </form>
      
    </div>
  )
}

export default Signup
