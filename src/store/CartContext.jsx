import { createContext } from "react";

 export cartContext = createContext({
    items: [],
    AddItem:(items)=>{},
    RemoveItem:(id)=>{}
})

import React from 'react'

export function CartContextProvider({children}) {
  return (
    <>
    <cartContext.Provider>
         {children}
    </cartContext.Provider>
      
    
    
    </>
  )
 
    
  
}

