import {useState,useEffect,useContext} from 'react'
import MealCard from './MealCard';
import { Loader2 } from 'lucide-react';
import SearchBarContext from '../store/SearchBarContext';
import { supabase } from '../supabaseClient';


function MealFetching() {

    const[meals,setMeals]=useState([]);
    const [isLoading,setIsLoading] = useState(false);
    const {searchTerm} = useContext(SearchBarContext);
    useEffect(()=>{
       async function fetchMeals(){
        setIsLoading(true);
     const {data,error} = await supabase
     .from('meals')
     .select('*');
     if(error){
        console.error("Error fetching meals from Supabase:", error.message);
     }else{
        setMeals(data);
     }
    
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

const filteredMeals = meals.filter((meal)=>{
    return meal.name.toLowerCase().includes(searchTerm.toLocaleLowerCase())||
    meal.description.toLocaleLowerCase().includes(searchTerm.toLocaleLowerCase())
})


  return (
    <>
      <ul className=' grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 lg:px-6 py-0 '>
        {filteredMeals.length > 0 ?  filteredMeals.map((meal)=>(<li key={meal.id}>
            <MealCard meals={meal} />
        </li>))
        :(<p className=' text-center text-xl lg:text-2xl font-bold  my-45'>No meals found matching your search.</p>)}
      </ul>

      
      

    </>
  )
}

export default MealFetching;
