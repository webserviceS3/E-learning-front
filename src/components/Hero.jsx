import React, { useState, useEffect, useRef } from 'react';
import Button from '../components/Button';
import { arrowRight } from '../assets/icons';
import { statistics } from '../constants';
import { heroImg1 } from '../assets/images';

const AnimatedStatistic = ({ value }) => {
  const [displayValue, setDisplayValue] = useState(0);
  const statisticRef = useRef(null);

  const incrementValue = () => {
    if (displayValue < value) {
      const increment = Math.ceil(value / 120); // Adjust the increment based on your desired speed
      const newValue = Math.min(displayValue + increment, value);
      setDisplayValue(newValue);
    }
  };

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1, // Adjust the threshold as needed
    };

    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          incrementValue();
          observer.unobserve(statisticRef.current);
        }
      });
    }, options);

    if (statisticRef.current) {
      observer.observe(statisticRef.current);
    }

    return () => {
      if (statisticRef.current) {
        observer.unobserve(statisticRef.current);
      }
    };
  }, [value, displayValue]);

  return (
    <div ref={statisticRef}>
      <p className='text-4xl font-palanquin font-bold'>
        {displayValue}k+
      </p>
    </div>
  );
};

const Hero = () => {;

  return (
    <section id='home' className='w-full flex xl:flex-row flex-col justify-center min-h-screen gap-10 max-container'>
      <div className='relative xl:w-2/5 flex flex-col justify-center items-start w-full max-xl:padding-x pt-28 xl:pt-44'>
        <p className='text-xl font-montserrat text-coral-red mb-10'>Discover Our Courses</p>
        <h1 className='mt-10 font-palanquin text-8xl max-sm:text-[72px] max-sm:leading-normal font-bold xl:bg-white xl:whitespace-nowrap xl:z-[4] xl:pb-4'>
          <span className='relative z-1 pr-10'>The Best Online</span>
          <br />
          <span className='text-coral-red inline-block mt-3'>English</span> Courses
        </h1>
        <p className='font-montserrat text-slate-gray text-lg leading-8 mt-6 mb-14 sm:max-w-sm'>Unlock the world of English language and culture. Join our eLearning platform to enhance your skills, gain confidence, and open new doors</p>
        <Button label="Discover it" iconURL={arrowRight}/>
        <div className='flex justify-start items-start flex-wrap w-full mt-20 gap-16'>
        {statistics.map((stat, index) => (
          <div key={stat.label}>
            <AnimatedStatistic value={parseInt(stat.value, 10)} />
            <p className='leading-7 font-montserrat text-slate-gray'>{stat.label}</p>
          </div>
        ))}
      </div>
      </div>

      <div className='relative flex-1 flex justify-center items-center xl:min-h-screen max-xl:py-40 bg-primary bg-hero bg-cover bg-center'>
        <img src={heroImg1} alt="heroImg" width={610} height={500} className='object-contain relative z-1' />
      </div>
    </section>
  )
}

export default Hero