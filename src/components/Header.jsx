import { Search,ShoppingCart } from "lucide-react";
function Header() {
  return (
    <header className="lg:bg-amber-500 md:bg-amber-300 rounded fixed z-50 w-full flex p-4 items-center">
    
           <h1 className="lg:text-3xl md:text-2xl font-bold italic text-gray-800 "> <span className="text-white font-bold">JA</span>HA Foods</h1>
           <div className="flex mx-auto lg:w-150">
            <Search className="text-gray-500 bg-white h-9 w-8 rounded-l-sm" />
           <input type="search" placeholder="Search..." className="bg-white text-gray-800 placeholder:text-gray-500 border border-transparent focus:outline-none  rounded-r-md md:w-full " />
           </div>
      
        <button className=" h-8 w-8 ml-auto cursor-pointer active:bg-amber-700 rounded mx-4 border shadow-md bg-amber-500 flex text-white">
          <ShoppingCart /><span className="ml-1 text-stone-900">{0}</span>
        </button>
   
     
    </header>
  )
}

export default Header;
