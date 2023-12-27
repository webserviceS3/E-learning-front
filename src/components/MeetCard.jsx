import React, { useEffect, useState } from 'react';
import { Avatar } from '../assets/images';
import axios from 'axios';

const MeetCard = ({ teacherName, title, link }) => {
  const [image, setimage] = useState()
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:8080/api/test/photoProfil/' + teacherName);
        setimage(response.data.imgUrl);
        console.log(image)
      } catch (error) {
        console.error('Error signing in:', error.response ? error.response.data : error.message);
      }
    };

    fetchData();
  }, []);
  return (
    <div className='flex-1 sm:w-[350px] sm:min-w-[350px] w-full rounded-[20px] shadow-3xl'>
      <div className='w-full h-[40vh] overflow-hidden'>
        <img
          src={image ? `data:image/png;base64,${image}` : Avatar}
          alt={title}
          className='object-cover w-full h-full rounded-tl-[20px] rounded-tr-[20px]'
        />
      </div>
      <div className='mt-5 px-10 py-7'>
        <h3 className='font-palanquin text-3xl leading-normal font-bold'>{title}</h3>
        <a href={link}   className="text-lg text-slate-gray hover:text-coral-red active:text-coral-red" target='_blank' >click me </a>
      </div>
    </div>
  );
};

export default MeetCard;
