    const formatPrice = new Intl.NumberFormat("en-us",{
        style:"currency",
        currency:"ksh"
    });


function MealCard({meals}) {
    const URL = "http://localhost:3000";
  return (
    <div className=' border rounded-sm line-clamp-2 hover:shadow-2xl object-cover h-120 bg-white 
     text-slate-800 font-medium font-sans flex flex-col  hover:border-amber-500  
     transition-all duration-300
     hover:ease-in-initial 
     border-slate-600/10
     
     '>
        <img  className="h-80 w-full"  src={`${URL}/${meals.image}`} alt="food image" />
        <h3 className='italic font-bold'>{meals.name}</h3>
           <p className="text-orange-600">{formatPrice.format(meals.price)}</p>
        <p className="font-normal text-stone-950/400  line-clamp-2">{meals.description}</p>
     
      <button className=" text-xl border rounded hover:bg-amber-500 active:bg-orange-600 bg-amber-400 mt-auto cursor-pointer focus:border-amber-600">
        + Add to cart
      </button>

    
      
    </div>
  )
}

export default MealCard
