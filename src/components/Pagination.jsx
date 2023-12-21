import React, { useState } from 'react';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/solid';

const Pagination = ({ length }) => {
  const pages = Array.from({ length }, (_, index) => index + 1);

  const displayPages = length <= 10 ? pages : [...pages.slice(0, 3), '...', ...pages.slice(-3)];

  const [activePage, setActivePage] = useState(1);

  const handleClick = (e) => {
    setActivePage(e);
  }

  return (
    <div className='w-full bg-white flex items-center justify-center gap-3 border-t-2 border-gray-200 sm:px-6 max-container'>
      <p className='info-text  pt-4 hover:cursor-pointer hover:text-coral-red'><ChevronLeftIcon className="h-6 w-6" aria-hidden="true" /></p>
      <div className='flex flex-row pt-4 gap-5'>
        {displayPages.map((page, index) => (
          <p
            key={index}
            className={`font-montserrat text-lg leading-7 px-1 md:px-3 flex-1 hover:text-coral-red hover:cursor-pointer hover:border-b-2 hover:border-coral-red ${page === '...' ? 'flex-2 hover:text-gray-500 hover:cursor-not-allowed hover:border-none' : ''
              } ${activePage === Number.parseInt(page) ? "text-coral-red border-b-2 border-coral-red" : "text-slate-gray"}`} onClick={() => handleClick(page)}
          >
            {page}
          </p>
        ))}
      </div>
      <p className='info-text pt-4 hover:cursor-pointer hover:text-coral-red'><ChevronRightIcon className="h-6 w-6" aria-hidden="true" /></p>
    </div>
  );
};

export default Pagination;
