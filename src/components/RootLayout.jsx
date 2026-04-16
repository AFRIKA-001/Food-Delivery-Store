import React from 'react'
import { Outlet } from 'react-router-dom'  
import Header from './Header.jsx'; 
import MarqueeAnimation from './MarqueeAnimation.jsx';
function RootLayout() {
  return (
    <div>
         <Header />
         <MarqueeAnimation/>
      <Outlet />    
      
    </div>
     
  )
  
}

export default RootLayout
