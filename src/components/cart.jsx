import React, { useContext } from 'react'
import Modal from '../UI/Modal.jsx'
import CartContext from '../store/CartContext.jsx'
import UserProgressContext from '../store/UserProgressContext.jsx'


const formatPrice = new Intl.NumberFormat("en-Kenya",{
    style:"currency",
    currency:"Ksh"
})

function Cart() {
   const cartContext = useContext(CartContext)
   const userProgressContext = useContext(UserProgressContext)

   const cartTotal = cartContext.items.reduce((totalPrice,item)=>{
    return totalPrice + item.price * item.quantity;
   },0)

function CloseCart (){
    userProgressContext.hideCart();
}
function CloseCheckout(){
  userProgressContext.hideCheckOut();
}



const modalStyle = 'w-200 h-100 mx-auto my-auto backdrop:bg-slate-900/10 rounded-lg bg-slate-300 '
const buttonStyles = "border rounded bg-amber-400 hover:bg-amber-500 active:bg-amber-600 p-1 gap-6 w-40 text-slate-100 text-xl"

  return <Modal open={userProgressContext.Progress === "cart"} className={modalStyle}>
    <div className=' p-2 my-4 '>
<h1 className='text-3xl font-bold font-mono py- text-center'>Your Cart Items</h1>
<ul className='font-bold text-xl  '>
    { cartContext.items.map((item)=>(<li className='flex' key={item.id}>
       <img className='h-30 w-30 rounded-4xl p-1'
          src={`http://localhost:3000/${item.image}`} alt="food image" />
       <span className='pt-10 px-4 font-sans text-xl'>{item.name} - </span> 
    <span className='text-red-600 pt-10'>{item.quantity}</span> 

  


     </li>))}
</ul>
<p className='text-xl font-serif font-extrabold tracking-tight border-t pt-2 '>Total: {formatPrice.format(cartTotal)}</p>
<button onClick={CloseCart} className={buttonStyles}>close</button>
<button  onClick={CloseCheckout} className={buttonStyles}>Go to Checkout</button>
</div>
  </Modal>
    
      
    
  
}

export default Cart
