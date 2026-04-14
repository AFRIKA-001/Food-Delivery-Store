import {useState,useEffect,useContext} from 'react'
import MealCard from './MealCard';
import { Loader2 } from 'lucide-react';
import SearchBarContext from '../store/SearchBarContext';
import { supabase } from '../supabaseClient';



function MealFetching() {
    const[meals,setMeals]=useState([]);
    // const [error,setError] = useState();
    const [isLoading,setIsLoading] = useState(false);
    const {searchTerm} = useContext(SearchBarContext);
    useEffect(()=>{
       async function fetchMeals(){
     const {data,error} = await supabase
     .from('meals')
     .select('*');
     if(error){
        console.error("Error fetching meals from Supabase:", error.message);
     }else{
        setMeals(data);
     }
    //     setIsLoading(true); 
    //     try{
    //         const response = await fetch("https://food-delivery-store-wj8w.onrender.com/meals");

    //         if(!response.ok){
    //             throw new Error("The system is currently under maintenance. Please try again later.");
    //         }
    //         const data = await response.json();
    //         setMeals(data)
    //     }catch(error){
    //         setError(error.message || "An error occurred while fetching meals");
    //     }

        setIsLoading(false);
     }
        fetchMeals();
},[])

console.log(meals);

if(isLoading){
    return <p className=' flex justify-center gap-2 items-center text-2xl font-thin py-80 text-orange-500'>
        <Loader2 className='animate-[spin_2s_linear_infinite] h-12 w-12 text-orange-500' /> Processing
        </p>
 }

// if(error){
//     return(
//     <div className='flex flex-col mx-auto py-60'>
//     <h2 className='lg:text-2xl text-center font-mono '>Opps Soory! Something went wrong🔧 </h2>
//      <p className='text-center text-sm lg:text-2xl font-bold text-red-500'>{error}</p>
//     </div>
// );
// }
 
const filteredMeals = meals.filter((meal)=>{
    return meal.name.toLowerCase().includes(searchTerm.toLocaleLowerCase())||
    meal.description.toLocaleLowerCase().includes(searchTerm.toLocaleLowerCase())
})

  return (
    <>
      <ul className=' grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 lg:px-6 py-20 '>
        {filteredMeals.length > 0 ?  filteredMeals.map((meal)=>(<li key={meal.id}>
            <MealCard meals={meal} />
        </li>))
        :(<p className=' text-center text-xl lg:text-2xl font-bold  my-45'>No meals found matching your search.</p>)}
      </ul>

      
      

    </>
  )
}

export default MealFetching;
