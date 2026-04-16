import { createContext, useState ,useEffect} from "react";
import { supabase } from "../supabaseClient";


const UserAuthContext = createContext({
  signOut:()=>{},
  signIn:()=>{},
  signup:()=>{}

});

 export function UserAuthContextProvider({children}) { 
    const[session ,setSession] = useState(null)

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
    console.log("There was an error signing up",error);
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
    console.log("User signed in successfully",data);
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
      setSession(session)
    })
    supabase.auth.onAuthStateChange((_event,session)=>{
      setSession(session)
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
  
   
  }

  return (
    <UserAuthContext.Provider value={userAuthcontext}> 
      {children}
    </UserAuthContext.Provider>
  )
}
 export default UserAuthContext;
