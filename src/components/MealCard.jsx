function MealCard({meals}) {
    const URL = "http://localhost:3000/meals";
  return (
    <div className=' border rounded-sm line-clamp-2 hover:shadow-2xl object-cover h-90 '>
        <img src={`${URL}/${meals.image}`} alt="food image" />
        <h3 className=''>{meals.name}</h3>
           <p>Ksh:{meals.price}</p>
        <p>{meals.description}</p>
     
      <button>
        <span>+</span>Add to cart
      </button>

    
      
    </div>
  )
}

export default MealCard
