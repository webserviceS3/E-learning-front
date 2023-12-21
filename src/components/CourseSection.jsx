import React, { useEffect, useState } from 'react';
import {useNavigate, useParams} from 'react-router-dom';
import CourseVideo from './CourseVideo';
import { fetchData, youtubeOptions } from '../utils/fetchData';
import axios from 'axios';
import Loader from './Loader';

const CourseSection = () => {

  const [courseVideos, setCourseVideos] = useState([]);
  const {id} = useParams();
  const [writtenCour,setWrittenCours] = useState([]);
  const navigate = useNavigate()
  useEffect(() => {
    if (localStorage.getItem("role") != "ROLE_STUDENT") {
      navigate("/")
    }
    window.scrollTo({ top: 0, behavior: 'smooth'});

    const fetchCoursesData = async () => {
      const youtubeSearchUrl = 'https://youtube-search-and-download.p.rapidapi.com';

      const courseVideosData = await fetchData(`${youtubeSearchUrl}/search?query=${"learning english"} course`, youtubeOptions);
      setCourseVideos(courseVideosData.contents);
      const response = await axios.get('http://localhost:8080/api/test/getAllCours');
      setWrittenCours(response.data);
      console.log(writtenCour);
    };

    fetchCoursesData();

  }, [id]);
  if(writtenCour.length == 0) return <Loader/>
  else{
  return (
    <section id='course' className='flex justify-between items-center max-lg:flex-col gap-10 w-full max-container'>
      <div className='flex flex-1 flex-col'>
      {writtenCour.map((i) => (
        <div className='mt-10'>
    
      <h2 className='font-palanquin text-4xl capitalize font-bold lg:max-w-lg lg:mb-2'>
        {i.title} <span className='text-coral-red'>{i.category}</span>
      </h2>
      {i.paragraphs.map((j)=>(
               <p className='mt-4 info-text'>{j}</p>
        ))}
        </div>
  ))}
        <div className='mt-10'>
          <h2 className='font-palanquin text-3xl capitalize font-bold lg:max-w-lg lg:mb-6'>
            Related <span className='text-coral-red'>Videos</span>
          </h2>
           {/* <CourseVideo courseVideos={courseVideos} />  */}
        </div>
      </div>
    </section>
  )
      }
}

export default CourseSection