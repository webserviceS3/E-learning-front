import React, { useEffect, useState } from 'react';
import { menuItems } from '../constants';
import { useActiveLink } from './ActiveLinkProvider';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';


const Sidebar = ({isSidebarOpen}) => {
  const [activeItem, setActiveItem] = useState(0);

  const {activeLink, setActiveLink} = useActiveLink();

  const handleMenuItemClick = (index) => {
    setActiveItem(index);
  };
  const navigate2 = useNavigate()
  useEffect(() => {
    
    setActiveLink(menuItems[activeItem].text);
  }, [activeItem])
  
  // console.log(activeLink);
  const logout = () =>{
    
    localStorage.clear();
    var userConfirmed = confirm("Are you sure?");

    if (userConfirmed) {
      localStorage.clear();
      navigate2("/");
      window.location.reload();
    } else {}
    
  }
  return (
    <div className={`fixed top-0 left-0 bg-pale-blue h-full overscroll-none transition-all duration-300 ease-in-out scrollbar-none font-palanquin ${isSidebarOpen === true ? 'w-[70px]' : 'w-[230px]'}`}>
        <div className={`${isSidebarOpen ? 'top-[2.5rem] -right-[24.5px]' : 'top-[2.5rem] -right-[24.5px]'} absolute w-12 h-12 rounded-full bg-pale-blue`}></div>
        <div className={`${isSidebarOpen ? '-right-[47px]  top-[63px]' : '-right-[47px]  top-[63px]'} absolute  w-12 h-12 rounded-full bg-white`}></div>
        <Link href="#" className={`${isSidebarOpen ? 'invisible' : 'visible'} w-full text-2xl font-bold h-14 flex items-center justify-center text-slate-gray z-50 pb-5 box-content mt-2`}>
            <div className='ml-2'><span className='text-coral-red'> Learn</span>glish</div>
        </Link>
        
      <ul className="w-full mt-14 font-semibold text-lg text-slate-gray">
        {menuItems.map((item, index) => {
            return (
          <li
            key={index}
            className={`h-18 bg-transparent rounded-l-full p-2 ${isSidebarOpen ? 'ml-1' : 'ml-6'} ${activeItem === index ? 'bg-white text-coral-red' : ''}`}
            onClick={() => handleMenuItemClick(index)}
          >
            
            <Link to={item.to} className={`h-full ${isSidebarOpen ? 'pl-4' : 'pl-6'} p-4 flex items-center rounded-full bg-pale-blue  whitespace-nowrap overflow-x-hidden transition-all duration-300 ease-in-out`}>
              <i className={item.icon}></i>
              <span className={`ml-2 ${isSidebarOpen ? 'hidden': 'block'}`}>{item.text}</span>
            </Link>
          </li>
        )})}
      </ul>

        <ul className="w-full mt-14 font-semibold text-lg text-red-400">
            <li className={`h-18 bg-transparent rounded-l-full p-2 ${isSidebarOpen ? 'ml-1' : 'ml-6'}`}>
                <Link to="#" className={`w-full h-full  ${isSidebarOpen ? 'pl-4' : 'pl-6'} p-4 flex items-center rounded-full bg-pale-blue  whitespace-nowrap overflow-x-hidden transition-all duration-300 ease-in-out`}>
                    <i className='bx bx-log-out-circle'></i>
                    <button className={`ml-2 ${isSidebarOpen ? 'hidden': 'block'}`} onClick={logout}>Logout</button>
                </Link>
            </li>
        </ul>
    </div>
  );
};

export default Sidebar;
