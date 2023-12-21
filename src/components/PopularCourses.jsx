import React, { useState } from 'react';
import { courses } from '../constants';
import PopularCourseCard from './PopularCourseCard';
import {motion} from 'framer-motion';
import { staggerContainer } from '../utils/motion';

const PopularCourses = () => {

  const [active, setActive] = useState('Conjugation');

  return (
    <section id='courses' className='max-container max-sm:mt-12'>
      <div className='flex flex-col justify-start gap-5'>
        <h2 className='text-4xl font-palanquin font-bold'>Our <span className='text-coral-red'>Popular</span> Courses</h2>
        <p className='lg:max-w-lg mt-2 font-montserrat text-slate-gray'>Explore top-rated courses tailored to your needs. Elevate your skills with captivating content, expert guidance, and a global community. Join thousands of satisfied learners today.</p>
      </div>
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={`w-full mx-auto flex flex-col`}
      >
        <div className="mt-[50px] flex lg:flex-row flex-col max-lg:min-h-[70vh] lg:max-h-[50vh] gap-5">
          {courses.map((course, index) => (
            <PopularCourseCard
              key={course.name}
              {...course}
              index={index}
              active={active}
              handleClick={setActive}
            />
          ))}
        </div>
      </motion.div>
    </section>
  )
}

export default PopularCourses