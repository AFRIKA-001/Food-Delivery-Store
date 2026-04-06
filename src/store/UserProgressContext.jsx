import {createContext ,useState } from 'react'




const UserProgressContext = createContext({
  Progress:"",
  showCart:()=>{},
  hideCart:()=>{},
  showCheckOut:()=>{},
  hideCheckOut:()=>{},
  ShowSuccessMessage:()=>{},
  HideSuccessMessage:()=>{}
})

export function UserProgressContextProvider({children}) {
  const [userProgress , setUserProgress] = useState("")

  function showCart(){
    setUserProgress("cart");
  }
  function hideCart(){
    setUserProgress("");
  }
  function showCheckOut(){
    setUserProgress("checkout");
  }
  function hideCheckOut(){
    setUserProgress("");
  }

  function ShowSuccessMessage(){
    setUserProgress("success")
  }
  function HideSuccessMessage(){
    setUserProgress('')
  }
  const userProgressContext={
    Progress:userProgress,
    showCart,
    hideCart,
    showCheckOut,
    hideCheckOut,
    ShowSuccessMessage,
    HideSuccessMessage
  }

  return (
    <UserProgressContext.Provider value={userProgressContext}>
      {children}
      </UserProgressContext.Provider>
      
    
  )
}

export default UserProgressContext;
