import { createContext, useState } from "react";


const UserAuthContext = createContext();


 export function UserAuthContextProvider({children}) {
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
    <UserAuthContext.Provider value={userLoginContext}>
      {children}
    </UserAuthContext.Provider>
  )
}

export default UserAuthContext;
