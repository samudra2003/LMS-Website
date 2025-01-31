import  { createContext,useEffect,useState} from "react";
import { dummyCourses } from "../assets/assets";
import { useNavigate } from "react-router-dom";
import humanizeDuration from "humanize-duration";

// Create a Context
export const AppContext = createContext();


// Create a provider component
export const AppContextProvider = (props) => {

  const  currency = import.meta.env.VITE_CURRENCY
  const navigate = useNavigate()
  const [allCourses,setAllCourses] = useState([])
  const[isEducator,setIsEducator] = useState(true)

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

  // Function to calculate total time of all chapters in a course
  const calculateTotalChapterTime = (chapter) => {
    let time =0;
    chapter.chapterContent.map((lecture)=>
    time += lecture.lectureDuration
   )
    return humanizeDuration(time*60000,{units:["h","m"]})
  }

  // Function to calculate total duration of a course
  const calculateCourseDuration = (course) => {
    let totalTime = 0;
    course.courseContent.map((chapter) => {
      chapter.chapterContent.map((lecture) => {
      totalTime += lecture.lectureDuration;
      });
    });
  
    return humanizeDuration(totalTime * 60000, { units: ["h", "m"] });
  };

  // Function to calculate the number of lectures in a course
  const calculateTotalLectures = (course) => {
    let totalLectures = 0;
    course.courseContent.forEach((chapter) => {
      if(Array.isArray(chapter.chapterContent)){
         totalLectures += chapter.chapterContent.length;
      }
    });
    return totalLectures;
  };


   useEffect(() => {
    fetchAllCourses()
   }, [])

    const value = {
      currency,
      allCourses,
      navigate,
      calculateAverageRating,
      isEducator,
      setIsEducator,
      calculateTotalChapterTime,
      calculateCourseDuration,
      calculateTotalLectures
    }
  

  return (
    <AppContext.Provider value={value}>
        {props.children}
    </AppContext.Provider>
  )
}