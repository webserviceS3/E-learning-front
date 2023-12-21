import React from 'react';
import Button from './Button';
import { books3 } from '../assets/images';

const SuperQuality = () => {
  return (
    <section id='about-us' className='flex justify-between items-center max-lg:flex-col gap-10 w-full max-container'>
      <div className='flex flex-1 flex-col'>
        <h2 className='font-palanquin text-4xl capitalize font-bold lg:max-w-lg'>
          We Provide You <span className='text-coral-red'>Super</span> <span className='text-coral-red'>Quality</span> Courses
        </h2>
        <p className='mt-4 lg:max-w-lg info-text'>At our language institute, we offer top-quality English courses led by experienced instructors. We provide a dynamic and personalized learning experience, whether you're a beginner or an advanced learner. Join us to unlock the opportunities that come with English proficiency.</p>
        <div className='mt-11'>
        <Button label="View Details"/>
        </div>
      </div>
      <div className='flex-1 flex justify-center items-center'>
        <img src={books3} alt="shoe8" width={570} height={522} className='object-contain' />
      </div>
    </section>
  )
}

export default SuperQuality