import { createContext, useState ,useEffect} from "react";
import { supabase } from "../supabaseClient";
import { Loader2 } from "lucide-react";


const UserAuthContext = createContext({
  signOut:()=>{},
  signIn:()=>{},
  signup:()=>{}

});

 export function UserAuthContextProvider({children}) { 
    const[session ,setSession] = useState(null)
    const [loading ,setLoading] =useState(true)

 // SIGN UP GOES HERE

 const signup = async (email,password,username)=>{
  const{data,error} = await supabase.auth.signUp({
    email:email,
    password:password,
    options:{
      data:{
        display_name:username
      }
    }
  });
  if(error){
    return{success:false ,error}
  }
  return{success:true ,data} 
  };
//------------------------------------------------------------->



  //SIGN IN GOES HERE

  const signIn = async (Email,password)=>{
    try{
    const {data,error} =  await supabase.auth.signInWithPassword({
      email:Email,
      password:password
    });
    if(error){
      console.error("There was an error signing in",error);
      return{success:false,error:error.message}
     }
    // console.log("User signed in successfully",data);
    return{success:true,data}
  }
  catch(error){
    console.error("There was an error signing in",error);
  };
}
//------------------------------------------------------------------>
//SESSION
  useEffect(()=>{
    supabase.auth.getSession().then(({data:{session}})=>{
      setSession(session);
      setLoading(false)
    })
    supabase.auth.onAuthStateChange((_event,session)=>{
      setSession(session)
      setLoading(false)
    })

  },[]);
//-------------------------------------------------------------------->

  //SIGN OUT GOES HERE

  const signOut = async()=>{
    const {error}= await supabase.auth.signOut();
    if(error){
      console.error("There was an error signing out",error);
    }
  }

  const userAuthcontext ={
    session,
    signup,
     signIn,
    signOut,
    loading
  
   
  }

  return (
    <UserAuthContext.Provider value={userAuthcontext}> 
      {!loading?children:<Loader2/>}
    </UserAuthContext.Provider>
  )
}
 export default UserAuthContext;
