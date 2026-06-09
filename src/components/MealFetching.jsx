import { useState, useEffect, useContext, lazy, Suspense } from "react";
import { Loader2 } from "lucide-react";
import SearchBarContext from "../store/SearchBarContext";
import { supabase } from "../supabaseClient";
import Carousel from "./Carousel";

const MealCard = lazy(() => import("./MealCard"));

function MealFetching() {
  const [meals, setMeals] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const { searchTerm } = useContext(SearchBarContext);

  const mockSlides = [
    "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=800&q=80](https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1528207776546-365bb710ee93?auto=format&fit=crop&w=800&q=80](https://images.unsplash.com/photo-1528207776546-365bb710ee93?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=800&q=80](https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=800&q=80",
  ];

  useEffect(() => {
    async function fetchMeals() {
      setIsLoading(true);

      const { data, error } = await supabase.from("meals").select("*");

      if (error) {
        console.error("Error fetching meals from Supabase:", error.message);
      } else {
        setMeals(data);
      }

      setIsLoading(false);
    }

    fetchMeals();
  }, []);

  if (isLoading) {
    return (
      <div className="flex min-h-[70vh] items-center justify-center">
        <p className="flex items-center gap-3 text-lg md:text-xl font-medium text-orange-500">
          <Loader2 size={28} className="animate-spin" />
          Processing meals...
        </p>
      </div>
    );
  }

  const filteredMeals = meals.filter((meal) => {
    return (
      meal.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      meal.description.toLowerCase().includes(searchTerm.toLowerCase())
    );
  });

  return (
    <Suspense
      fallback={
        <div className="flex min-h-[60vh] items-center justify-center">
          <Loader2 size={40} className="animate-spin text-orange-500" />
        </div>
      }
    >
      <div className="p-8  min-h-screen  flex items-center justify-center">
        <Carousel
          slides={mockSlides}
          autoSlide={true}
          autoSlideInterval={3000}
        />
      </div>
      <ul
        className="
          mx-auto
          max-w-7xl
          grid
          grid-cols-2
          md:grid-cols-3
          lg:grid-cols-4
          gap-6
          md:gap-8
          px-4
          md:px-6
          lg:px-8
          py-6
        "
      >
        {filteredMeals.length > 0 ? (
          filteredMeals.map((meal) => (
            <li key={meal.id}>
              <MealCard meals={meal} />
            </li>
          ))
        ) : (
          <p
            className="
              col-span-full
              flex
              items-center
              justify-center
              min-h-[50vh]
              text-center
              text-lg
              md:text-2xl
              font-semibold
              text-gray-500
            "
          >
            No meals found matching your search.
          </p>
        )}
      </ul>
    </Suspense>
  );
}

export default MealFetching;
