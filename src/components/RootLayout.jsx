import React from 'react'
import { Outlet } from 'react-router-dom'  
import Header from './Header.jsx'; 
import MarqueeAnimation from './MarqueeAnimation.jsx';
import Whatsapp from '../../Whatsapp.jsx';
function RootLayout() {
  return (
    <div>
         <Header />
         <MarqueeAnimation/>
      <Outlet />    
      <Whatsapp />
    </div>
     
  )
  
}

export default RootLayout
