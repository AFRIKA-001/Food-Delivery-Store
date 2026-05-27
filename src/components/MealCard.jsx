
import { useContext, useState } from "react";
import CartContext from "../store/CartContext";

const formatPrice = new Intl.NumberFormat("en-us", {
  style: "currency",
  currency: "ksh",
});

function MealCard({ meals }) {
  const [addedToCart,setAddedToCart]=useState(false)

  const cartContext = useContext(CartContext);

  function handleAddMealToCart() {
    if(!addedToCart){
    cartContext.AddItems(meals);
    }else{
      cartContext.RemoveItems(meals.id)
    }
    setAddedToCart(prev => !prev)
  }

  return (
    <div
      className="
        group
        bg-white
        border border-gray-100
        rounded-2xl
        overflow-hidden
        shadow-sm
        hover:shadow-xl
        transition-all duration-300
        hover:-translate-y-1
        flex flex-col
      "
    >
      {/* Image */}
      <div className="h-48 w-full overflow-hidden">
        <img
          className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-300"
          src={meals.image_url}
          alt={meals.name}
          loading="lazy"
        />
      </div>

      {/* Content */}
      <div className="p-4 flex flex-col flex-1 gap-2">
        
        <h3 className="text-lg font-semibold text-gray-800 ">
          {meals.name}
        </h3>

        <p className="text-orange-600 font-bold text-sm">
          {formatPrice.format(meals.price)}
        </p>

        <p className="text-gray-500 text-sm line-clamp-1">
          {meals.description}
        </p>

        {/* Button */}
        <button
          onClick={handleAddMealToCart}
          className={
          `
            mt-auto
            w-full
            py-2.5
            rounded-xl
            bg-amber-400
            text-white
            font-semibold
            hover:bg-amber-500
            active:scale-95
            transition-all
            duration-200
            shadow-md
            shadow-amber-100

        ${addedToCart ? "bg-green-400 hover:bg-green-400" : ""}
          `}
        >
          {addedToCart ? <p>added to cart</p> : "add to cart"}
        </button>
      </div>
    </div>
  );
}

export default MealCard;


