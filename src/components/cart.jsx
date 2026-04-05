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
function addItems(item){
  cartContext.AddItems({...item,quantity:1})
}
function removeItems(id){
  cartContext.RemoveItems(id);
}

const modalStyle = 'w-205 h-125 mx-auto my-auto backdrop:bg-stone-900/90 rounded-lg bg-slate-300 max-h-[700px] '
const buttonStyles = "border rounded bg-amber-400 hover:bg-amber-500 active:bg-amber-600 p-1 gap-6 w-40 text-slate-100 text-xl"

  return <Modal open={userProgressContext.Progress === "cart"} className={modalStyle}>
    <div className=' p-2 my-4 '>
<h1 className='text-3xl font-bold font-mono py- text-center'>Your Cart Items</h1>
<ul className='font-bold text-xl  '>
    { cartContext.items.map((item)=>(
     <li className='flex' key={item.id}>
    
       <img className='h-30 w-30 rounded-4xl p-1'
          src={`http://localhost:3000/${item.image}`} alt="food image" />
       <span className='pt-10 px-4 font-sans md:text-sm lg:text-xl'>{item.name} - </span> 

  
       <div className='flex gap-4 '>
         <button onClick={()=>addItems(item)} className='text-3xl border h-10 my-9 lg:w-15 bg-amber-300 active:bg-amber-600'>+</button>
        <span className='text-red-600 mt-10 line-clamp-1'>{item.quantity}</span> 
        <button onClick={()=>removeItems(item.id)}  className='text-3xl border h-10 my-9  lg:w-15 bg-amber-300 active:bg-amber-700'>-</button>
       <button onClick={()=>removeItems(item.id)}  className='border h-10 my-9 rounded bg-red-600 active:bg-red-900 uppercase tracking-wider'>Remove</button>
       </div>
      
  


     </li>
    ))}
</ul>
<p className='text-xl font-serif font-extrabold tracking-tight border-t pt-2 '>Total: {formatPrice.format(cartTotal)}</p>
<button onClick={CloseCart} className={buttonStyles}>close</button>
<button  onClick={CloseCheckout} className={buttonStyles}>Go to Checkout</button>
</div>
  </Modal>
    
      
    
  
}

export default Cart
