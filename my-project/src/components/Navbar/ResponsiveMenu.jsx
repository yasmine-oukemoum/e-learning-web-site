import React from 'react'
import { motion,AnimatePresence } from 'framer-motion'
const ResponsiveMenu = ({isOpen}) => {
  return (
    <AnimatePresence mode='wait'>
      {isOpen && (
        <motion.div 
        initial={{opacity:0,y:-100}} animate={{opacity:1,y:0}} exit={{opacity:0,y:-100}} transition={{duration:0.5}} 
        className='absolute top-20 left-0 w-full h-screen z-50 lg:hidden'>
          <div className='text-xl font-semibold uppercase bg-primary text-white py-10 m-6 rounded-3xl'>
            <ul className='flex flex-col justify-center items-center gap-10'>
              <li>Home</li>
              <li>Courses</li>
              <li>Tutors</li>
              <li>Blogs</li>
              <li>Contact</li>
            </ul>
          </div>
        </motion.div>
      )}
      
    </AnimatePresence>
  )
}

export default ResponsiveMenu