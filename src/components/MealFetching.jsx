import {useState,useEffect} from 'react'
import MealCard from './MealCard';

function MealFetching() {
    const[meals,setMeals]=useState([]);
    useEffect(()=>{
       async function fetchMeals(){
            const response = await fetch("https://food-delivery-store-wj8w.onrender.com/meals");
            const data = await response.json();
            setMeals(data)
        }
        fetchMeals();
    },[])


  return (
      <ul className=' grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 p-20 '>
        {meals.map((meal)=>(<li key={meal.id}>
            <MealCard meals={meal} />
        </li>))}
      </ul>
    
  )
}

export default MealFetching;
