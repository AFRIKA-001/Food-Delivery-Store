import {useState,useEffect,useContext,lazy,Suspense} from 'react'
import { Loader2 } from 'lucide-react';
import SearchBarContext from '../store/SearchBarContext';
import { supabase } from '../supabaseClient';
import myJahaIcon from "../../public/imagecopy.png"


const MealCard = lazy(()=>import("./MealCard"))

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


if(isLoading){
    return <p className=' flex justify-center gap-2 items-center text-2xl font-thin py-80 text-orange-600'>
     <Loader2 size={24} className='animate-spin' /> Processing
        </p>
 }

const filteredMeals = meals.filter((meal)=>{
    return meal.name.toLowerCase().includes(searchTerm.toLocaleLowerCase())||
    meal.description.toLocaleLowerCase().includes(searchTerm.toLocaleLowerCase())
})


  return (
    <>
    <Suspense fallback={<Loader2 className='flex justify-center my-60 animate-spin mx-auto' />}>
    <ul className=' grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 lg:px-6 py-0 '>
        {filteredMeals.length > 0 ?  filteredMeals.map((meal)=>(<li key={meal.id}>
            <MealCard meals={meal} />
        </li>))
        :(<p className=' text-center text-xl lg:text-2xl font-bold  my-45'>No meals found matching your search.</p>)}
      </ul>
    
    </Suspense>
      

      
      

    </>
  )
}

export default MealFetching;
