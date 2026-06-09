import React from 'react'
import { Outlet } from 'react-router-dom'  
import Header from './Header.jsx'; 
import MarqueeAnimation from './MarqueeAnimation.jsx';
import Whatsapp from '../../Whatsapp.jsx';
import Footer from './footer.jsx';
function RootLayout() {
  return (
    <div>
         <Header />
         <MarqueeAnimation/>
      <Outlet />    
      <Whatsapp />
      <Footer/>
    </div>
     
  )
  
}

export default RootLayout
