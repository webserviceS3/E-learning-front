import React from 'react';
import { star } from '../assets/icons';
import { motion } from 'framer-motion';
import { fadeIn } from '../utils/motion';

const PopularCourseCard = ({ imgURL, name, price, index, active, handleClick }) => {
  return (
    <motion.div
      variants={fadeIn('right', 'spring', index * 0.5, 0.75)}
      className={`relative ${active === name ? 'lg:flex-[3] flex-[10]' : 'lg:flex-[1] flex-[2]'
        } flex items-center justify-center min-w-[170px] h-[700px] lg:h-[400px] transition-[flex] duration-[0.7s] ease-out-flex cursor-pointer ${name == "Grammer" ? "bg-[#2c80bc]" : name == "Conjugation" ? "bg-[#e00d12]" : name == "Orthography" ? "bg-[#a1f724]" : "bg-[#ff9623]"} rounded-[24px]`}
      onClick={() => handleClick(name)}
    >
      {/* <img
      src={imgURL}
      alt="image"
      className="absolute w-full h-full object-cover rounded-[24px]"
    /> */}
      {active !== name ? (
        <h3 className="font-semibold sm:text-[26px] text-[18px] text-white absolute z-0 lg:bottom-20 lg:rotate-[-90deg] lg:origin-[0,0]">
          {name}
        </h3>
      ) : (
        <div className="absolute bottom-0 p-8 flex justify-start w-full flex-col bg-[rgba(0,0,0,0.5)] rounded-b-[24px]">
          <div
            className={`flex justify-center items-center w-[60px] h-[60px] rounded-[24px] glassmorphism mb-[16px]`}
          >
            <img
              src={star}
              alt="star"
              className="w-1/2 h-1/2 object-contain"
            />
            <p className='font-montserrat text-xl leading-normal text-white'>(4.5)</p>
          </div>
          <p className="font-normal text-[16px] leading-[20.16px] text-white uppercase">
            Enrolling Our {name} Courses
          </p>
          <h2 className="mt-[24px] font-semibold sm:text-[32px] text-[24px] text-white">
            {name}
          </h2>
        </div>
      )}
    </motion.div>
  )
}

export default PopularCourseCard