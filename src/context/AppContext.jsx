import  { createContext,useEffect,useState} from "react";
import { dummyCourses } from "../assets/assets";
import { useNavigate } from "react-router-dom";

// Create a Context
export const AppContext = createContext();


// Create a provider component
export const AppContextProvider = (props) => {

  const  currency = import.meta.env.VITE_CURRENCY
  const navigate = useNavigate()
  const [allCourses,setAllCourses] = useState([])

  // Fetch courses data
   const fetchAllCourses = async () => {
      setAllCourses(dummyCourses)
   }
   //function to calculate average rating of course
  const calculateAverageRating = (course) => {
    if ( course.courseRatings.length === 0) {
      return 0;
    }
    let total = 0;
    course.courseRatings.forEach((rating) => {
      total += rating.rating;
    })
    return total / course.courseRatings.length;
  }


   useEffect(() => {
    fetchAllCourses()
   }, [])

    const value = {
      currency,
      allCourses,
      navigate,
      calculateAverageRating
    }
  

  return (
    <AppContext.Provider value={value}>
        {props.children}
    </AppContext.Provider>
  )
}