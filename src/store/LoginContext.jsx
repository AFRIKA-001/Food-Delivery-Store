import { createContext, useState } from "react";


const UserLoginContext = createContext({
     Login:'',
    showLogin: ()=>{},
    hideLogin:()=>{}
});


 export function LoginContextProvider({children}) {
    const [userLogin,setUserLogin]=useState('');

    function ShowLogin(){
        setUserLogin('login');
    }
    function HideLogin(){
        setUserLogin('')
    }

    const userLoginContext ={
        Login:userLogin,
        ShowLogin,
        HideLogin
    }




  return (
    <UserLoginContext.Provider value={userLoginContext}>
      {children}
    </UserLoginContext.Provider>
  )
}

export default UserLoginContext;
