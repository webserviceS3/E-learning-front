import React from 'react';
import Loader from './Loader';


const CourseVideo = ({courseVideos}) => {

  if (!courseVideos.length) return <Loader />;
  else{
  return (
    <div className='max-container flex justify-center flex-wrap gap-9'>
      {courseVideos?.slice(0, 3)?.map((item, index) => (
        <div key={index} className='flex-1 sm:w-[350px] sm:min-w-[350px] w-full rounded-[20px] shadow-xl'>
          <a
            className=""
            href={`https://www.youtube.com/watch?v=${item.video.videoId}`}
            target="_blank"
            rel="noreferrer"
          >
            <img src={item.video.thumbnails[0].url} alt={item.video.title} className='w-full rounded-tl-[20px]  rounded-tr-[20px]' />
            <div className='font-montserrat font-medium mt-7 mx-4 text-slate-gray'>
              <p className='text-lg font-semibold pb-3'>
                {item.video.title}
              </p>
              <p className='text-sm mb-3'>
                {item.video.channelName}
              </p>
            </div>
          </a>
          </div>
        ))}
    </div>
    
  )
      }
}

export default CourseVideo