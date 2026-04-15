import React from 'react'
import { Outlet } from 'react-router-dom'  
import Header from './Header.jsx'; 
function RootLayout() {
  return (
    <div>
         <Header />
      <Outlet />    
      
    </div>
     
  )
  
}

export default RootLayout
