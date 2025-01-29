import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import CourseCard from './CourseCard'
import { AppContext } from '../../context/AppContext'

const CoursesSection = () => {

  const {allCourses} = useContext(AppContext)

  return (
    <div className='py-16 md:px-40 px-8'>
      <h2 className='text-3xl font-medium text-gray-800'>Learn from best</h2>
      <p className='text-sm md:text-base text-gray-500 mt-3'>Our platform offers a wide range of courses designed to help you excel in your studies and career.</p>
      
      <div className='grid md:grid-cols-4 repeat(auto-fit, minmax(200px, 1fr))  px-4 md:px-0 md:my-16 my-10 gap-4'>

        {allCourses.slice(0,4).map((course,index) =><CourseCard key={index} course={course}/> )}
      </div>

      <Link to={'/course-list'} onClick={()=>scrollTo(0,0)}  
      className='text-gray-500 border  border-gray-500/30 px-10 py-3 rounded mt-5 inline-block'> 
      Show  all courses</Link>
    </div>
  )
}

export default CoursesSection