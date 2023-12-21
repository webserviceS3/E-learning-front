import React from 'react'

const Loader = () => {
  return (
    <div className='flex flex-col items-center justify-center gap-5 w-full'>
        <div className="animate-spin rounded-full border-t-[5px] border-b-[5px] border-[#2c80bc] h-12 w-12"></div>
        <p className='text-[#2c80bc] font-montserrat text-lg font-semibold'>Loading...</p>
    </div>
  )
}

export default Loader