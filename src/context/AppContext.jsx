import  { createContext,useEffect,useState} from "react";
import { dummyCourses } from "../assets/assets";

// Create a Context
export const AppContext = createContext();

// Create a provider component
export const AppContextProvider = (props) => {

  const  currency = import.meta.env.VITE_CURRENCY
  const [allCourses,setAllCourses] = useState([])

  // Fetch courses data
   const fetchAllCourses = async () => {
      setAllCourses(dummyCourses)
   }
   useEffect(() => {
    fetchAllCourses()
   }, [])

    const value = {
      currency,
      allCourses,
      fetchAllCourses
    }
  

  return (
    <AppContext.Provider value={value}>
        {props.children}
    </AppContext.Provider>
  )
}