import { useContext, useState } from "react";
import CartContext from "../store/CartContext";
import toast from "react-hot-toast";

const formatPrice = new Intl.NumberFormat("en-us", {
  style: "currency",
  currency: "ksh",
});

function MealCard({ meals }) {
  const [addedToCart, setAddedToCart] = useState(false);

  const cartContext = useContext(CartContext);

  function handleAddMealToCart() {
    if (!addedToCart) {
      cartContext.AddItems(meals);
      toast.success(`${meals.name} added to cart successfully`);
    } else {
      cartContext.RemoveItems(meals.id);
      toast.error(`${meals.name} removed from cart`);
    }
    setAddedToCart((prev) => !prev);
  }

  return (
    <div
      className="
      group
      bg-white
      border border-slate-100
      rounded-3xl
      overflow-hidden
      shadow-[0_4px_20px_rgba(0,0,0,0.05)]
      hover:shadow-[0_12px_40px_rgba(0,0,0,0.12)]
      transition-all duration-500
      hover:-translate-y-2
      flex flex-col
    "
    >
      {/* Image */}
      <div className="relative h-52 w-full overflow-hidden">
        <img
          className="
          h-full
          w-full
          object-cover
          group-hover:scale-110
          transition-transform
          duration-700
        "
          src={meals.image_url}
          alt={meals.name}
          loading="lazy"
        />

        {/* Popular Badge */}
        <div
          className="
          absolute
          top-3
          left-3
          bg-white/90
          backdrop-blur-sm
          px-3
          py-1
          rounded-full
          text-xs
          font-semibold
          text-orange-500
          shadow
        "
        >
          Popular
        </div>
      </div>

      {/* Content */}
      <div
        className="
        p-5
        flex
        flex-col
        flex-1
        gap-3
      "
      >
        <h3
          className="
          text-lg
          lg:text-xl
          font-bold
          text-slate-800
          tracking-tight
          line-clamp-1
        "
        >
          {meals.name}
        </h3>

        <p
          className="
          text-orange-500
          font-extrabold
          text-base
        "
        >
          {formatPrice.format(meals.price)}
        </p>

        <p
          className="
          text-slate-500
          text-sm
          leading-relaxed
          line-clamp-1
        "
        >
          {meals.description}
        </p>

        {/* Button */}
        <button
          onClick={handleAddMealToCart}
          className={`
            mt-auto
            w-full
            py-3
            rounded-2xl
            font-semibold
            text-white
            transition-all
            duration-300
            shadow-lg
            hover:shadow-xl
            active:scale-95

            ${
              addedToCart
                ? "bg-emerald-500 hover:bg-emerald-600"
                : "bg-linear-to-r from-amber-400 to-orange-500 hover:from-amber-500 hover:to-orange-600"
            }
          `}
        >
          {addedToCart ? (
            <span className="tracking-wide">✓ Added to Cart</span>
          ) : (
            "Add to Cart"
          )}
        </button>
      </div>
    </div>
  );
}

export default MealCard;
