import React from 'react'

const DashHeader = ({activeLink}) => {
  return (
    <div className="flex items-center justify-between gap-4 md:gap-16 flex-wrap font-palanquin">
        <div className=''>
            <h3 className='text-center text-4xl font-bold'>Dashboard</h3>
            <ul className="flex items-center gap-4 text-lg mt-1 text-slate-gray">
                <li>
                    <a href="#" className='pointer-events-none'>
                        Home
                    </a>
                </li>
                /
                <li>
                    <a href="#" className="pointer-events-none text-coral-red">{activeLink}
                    </a>
                </li>
            </ul>
        </div>
        {/* <a href="#" className="h-9 px-4 rounded-full bg-coral-red text-white flex items-center justify-center gap-10 font-semibold">
            <i className='bx bx-cloud-download text-xl'></i>
            <span>Download CSV</span>
        </a> */}
    </div>
  )
}

export default DashHeader