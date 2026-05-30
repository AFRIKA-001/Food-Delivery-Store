import { Search, ShoppingCart, LogOut } from "lucide-react";
import { useContext } from "react";
import CartContext from "../store/CartContext.jsx";
import SearchBarContext from "../store/SearchBarContext.jsx";
import { Link } from "react-router-dom";
import UserAuthContext from "../store/UserAuthContext.jsx";

function Header() {
  const cartContext = useContext(CartContext);
  const userAuthContext = useContext(UserAuthContext)



  const totalCartItems = cartContext.items.reduce((totalNumberOfItems, item) => {
    return totalNumberOfItems + item.quantity;
  }, 0)

 
  const { setSearchTerm } = useContext(SearchBarContext)

  const handleLogOut = () => {
    userAuthContext.signOut();
  }

  return (
    <header className="
    fixed top-0 z-50 w-full
    backdrop-blur-md
    bg-orange-400
    border-b border-slate-200
    shadow-sm
  ">
    <div className="max-w-7xl mx-auto px-4 lg:px-8 h-16 lg:h-20 flex items-center gap-4">
  
      {/* Logo */}
      <h1 className="group shrink-0 text-2xl lg:text-4xl font-black tracking-tight">
        <Link
          to="/meals"
          className="flex items-center transition-transform duration-300 hover:scale-105"
        >
          <span className="bg-linear-to-r from-red-500 via-orange-500 to-yellow-400 bg-clip-text text-transparent">
            J
          </span>
          <span className="bg-linear-to-r from-pink-500 to-rose-500 bg-clip-text text-transparent">
            A
          </span>
          <span className="bg-linear-to-r from-purple-500 to-indigo-500 bg-clip-text text-transparent">
            H
          </span>
          <span className="bg-linear-to-r from-amber-400 to-yellow-300 bg-clip-text text-transparent">
            A
          </span>
  
          <span className="hidden md:block ml-2 text-xs font-bold tracking-[0.3em] uppercase text-slate-500">
            Foods
          </span>
        </Link>
      </h1>
  
      {/* Search */}
      <div className="flex-1 max-w-2xl mx-auto">
        <div className="
          flex items-center
          bg-slate-100
          border border-slate-200
          rounded-full
          px-4
          h-11
          focus-within:ring-2
          focus-within:ring-orange-400
          transition-all
        ">
          <Search
            size={18}
            className="text-slate-500 shrink-0"
          />
  
          <input
            onChange={(e) => setSearchTerm(e.target.value)}
            type="search"
            placeholder="Search meals..."
            className="
              w-full
              bg-transparent
              px-3
              text-slate-700
              placeholder:text-slate-400
              focus:outline-none
            "
          />
        </div>
      </div>
  
      {/* Cart */}
      <Link
        to="/cart"
        className="
          relative
          flex items-center justify-center
          h-11 w-11
          rounded-full
          bg-orange-100
          hover:bg-orange-200
          transition-all duration-300
        "
      >
        <ShoppingCart
          size={22}
          className="text-orange-600"
        />
  
        {totalCartItems > 0 && (
          <span
            className="
              absolute
              -top-1
              -right-1
              min-w-[20px]
              h-5
              px-1
              rounded-full
              bg-red-500
              text-white
              text-xs
              font-bold
              flex items-center justify-center
            "
          >
            {totalCartItems}
          </span>
        )}
      </Link>
  
      {/* Logout */}
      <button
        onClick={handleLogOut}
        className="
          flex items-center justify-center
          h-11 w-11
          rounded-full
          hover:bg-red-50
          transition-all duration-300
          group
        "
      >
        <LogOut
          size={22}
          className="
            text-slate-600
            group-hover:text-red-500
            group-hover:rotate-12
            transition-all duration-300
          "
        />
      </button>
  
    </div>
  </header>
  )
}

export default Header;
