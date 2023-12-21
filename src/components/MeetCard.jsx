import React from 'react';
import { Avatar } from '../assets/images';

const MeetCard = ({ img, name, link }) => {
  return (
    <div className='flex-1 sm:w-[350px] sm:min-w-[350px] w-full rounded-[20px] shadow-3xl'>
      <div className='w-full h-[40vh] overflow-hidden'>
        <img
          src={img}
          alt={name}
          className='object-cover w-full h-full rounded-tl-[20px] rounded-tr-[20px]'
        />
      </div>
      <div className='mt-5 px-10 py-7'>
        <h3 className='font-palanquin text-3xl leading-normal font-bold'>{name}</h3>
        <button href={link} className="text-lg text-slate-gray hover:text-coral-red active:text-coral-red">click me</button>
      </div>
    </div>
  );
};

export default MeetCard;
