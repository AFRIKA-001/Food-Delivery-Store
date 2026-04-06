import { Search,ShoppingCart ,LogInIcon} from "lucide-react";
import { useContext } from "react";
import CartContext from "../store/CartContext.jsx";
import UserProgressContext from "../store/UserProgressContext.jsx";
import UserLoginContext from "../store/LoginContext.jsx";

function Header() {
  const cartContext =useContext(CartContext);
  const userProgressContext = useContext(UserProgressContext)
  const userLoginContext = useContext(UserLoginContext)


  const totalCartItems = cartContext.items.reduce((totalNumberOfItems,item)=>{
    return  totalNumberOfItems + item.quantity;
  },0)

function handleShowCart(){
  userProgressContext.showCart();
  
}
function handleShowLogin(){
  // The login context logic will go here
  userLoginContext.ShowLogin();
}
// function handleChange(event){
//   searchBarContext.setSearchTerm(event.target.value)
// }


  return (
    <header className="lg:bg-amber-500 md:bg-amber-300  rounded fixed z-50 w-full flex lg:p-4 items-center my-1 shadow-md">
    
           <h1 className="lg:text-3xl md:text-xl font-bold italic text-gray-800 "> <span className="text-red-500 font-bold">JA</span>HA Foods</h1>
           <div className="flex mx-auto lg:w-150">
            <Search className="text-gray-500 bg-white h-9 w-8 rounded-l-sm" />
           <input  type="search" placeholder="Search..." className="bg-white text-gray-800 placeholder:text-gray-500 border border-transparent focus:outline-none  rounded-r-md md:w-full " />
           </div>
      
        <button  onClick={handleShowCart} className=" h-8 w-9 ml-auto cursor-pointer active:bg-amber-700 rounded mx-4 border shadow-md bg-amber-500 flex text-white">
          <ShoppingCart className="h-6 w-8" /><span className="ml-1 font-extrabold rounded-sm h-5 w-3 text-center text-stone-900 text-sm">{totalCartItems}</span>
        </button>
        <button>
         <LogInIcon onClick={handleShowLogin} className="cursor-pointer active:text-amber-400"/>
        </button>
   
     
    </header>
  )
}

export default Header;
