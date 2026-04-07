import {useState,useEffect} from 'react'
import MealCard from './MealCard';
// import SearchBarContext from '../store/SearchBarContext';

function MealFetching() {
    const[meals,setMeals]=useState([]);
    const [error,setError] = useState();
    const [isLoading,setIsLoading] = useState(false);
    // const searchBarContext = useContext(SearchBarContext)
    useEffect(()=>{
       async function fetchMeals(){

        setIsLoading(true); 
        try{
            const response = await fetch("https://food-delivery-store-wj8w.onrender.com/meal");

            if(!response.ok){
                throw new Error("The system is currently under maintenance. Please try again later.");
            }
            const data = await response.json();
            setMeals(data)
        }catch(error){
            setError(error.message || "An error occurred while fetching meals");
        }

        setIsLoading(false);
    }
        fetchMeals();
},[])

if(isLoading){
    return <p className='lg:text-center flex justify-center text-2xl lg:text-4xl py-60 font-bold'>Loading meals.......</p>
}

if(error){
    return(
    <div className='flex flex-col mx-auto py-60'>
    <h2 className='lg:text-2xl text-center font-mono '>Opps Soory! Something went wrong🔧 </h2>
     <p className='text-center text-sm lg:text-2xl font-bold text-red-500'>{error}</p>
    </div>
);
}
 
    // const filteredMeals = meals.filter((meal)=>{
    //     meal.name.toLowerCase().includes(searchBarContext.searchTerm.toLocaleLowerCase())
    // })

  return (
      <ul className=' grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 lg:px-6 py-20 '>
        {meals.map((meal)=>(<li key={meal.id}>
            <MealCard meals={meal} />
        </li>))}
      </ul>

      
      

    
  )
}

export default MealFetching;
