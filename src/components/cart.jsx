import React, { useContext } from 'react'
import Modal from '../UI/Modal.jsx'
import CartContext from '../store/CartContext.jsx'
import UserProgressContext from '../store/UserProgressContext.jsx'
import { Link } from 'react-router-dom';



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

// function CloseCart (){
//     userProgressContext.hideCart();
// }

function addItems(item){
  cartContext.AddItems({...item,quantity:1})
}
function removeItems(id){
  cartContext.RemoveItems(id);
}


// function goToCheckOut(){
//   userProgressContext.showCheckOut();
// }




const buttonStyles = "border rounded bg-amber-400 hover:bg-amber-500 active:bg-amber-600 p-1 gap-6 lg:w-40 text-stone-800 lg:text-xl"

  return <section open={userProgressContext.Progress === "cart"} className="w-full  h-240 mx-auto my-auto backdrop:bg-stone-900/90 rounded-lg  scrollbar-none">
    <div className=' py-20  lg:mx-20'>
<h1 className='text-lg lg:text-3xl font-bold font-mono py- text-center'>Your Cart Items</h1>
<ul className='font-bold text-xl  '>
    { cartContext.items.map((item)=>(
     <li className='flex gap-4' key={item.id}>
    
       <img className='h-30 w-30 rounded-4xl p-1 object-cover'
          src={item.image_url} alt="food image" />
       <span className=' flex items-center max-w-13 font-normal text-sm lg:text-lg '>{item.name} </span> 

  
       <div className='flex md:gap-2 lg:gap-4 '>
         <button onClick={()=>addItems(item)} className='lg:text-3xl border h-8 lg:h-10 my-[2.3rem] lg:my-9 lg:w-15 bg-amber-300 active:bg-amber-600'>+</button>
        <span className='text-red-600 mt-10 line-clamp-1'>{item.quantity}</span> 
        <button onClick={()=>removeItems(item.id)}  className='lg:text-3xl text-[1.5rem] border h-8 lg:h-10 my-[2.3rem] lg:my-9 md:w-10 lg:w-15 bg-amber-300 active:bg-amber-700'>-</button>
       <button onClick={()=>removeItems(item.id)}  className='border h-9 lg:h-10 my-9 rounded bg-red-600 active:bg-red-900 lg:uppercase tracking-wider'>Remove</button>
       </div>
      
  


     </li>
    ))}
</ul>
<p className=' text-lg lg:text-3xl font-serif font-extrabold tracking-tight border-t pt-2 '>Total: {formatPrice.format(cartTotal)}</p>
<button className={buttonStyles}>
  <Link to="/mealfetching">Back</Link>
</button>
  
 {cartContext.items.length > 0 &&<button className={buttonStyles}>
  <Link to="/checkout">Go to Checkout</Link>
</button>}
</div>
  </section>
    
      
    
  
}

export default Cart
