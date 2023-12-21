import React, { useState } from 'react';
import { ta3allam } from '../assets/images';
import { hamburger } from '../assets/icons';
import { navLinks } from '../constants';
import SignInUp from './SignInUp';

const Navbar = () => {
  const [isPopupOpen, setPopupOpen] = useState(false);

  const togglePopup = () => {
    setPopupOpen(!isPopupOpen);
  };

  const [openModal, setOpenModal] = useState(false);

  const handleClick = (e) => {
    setOpenModal(e);
    console.log(openModal);
  }

  return (
    <header className="padding-x py-8 absolute z-10 w-full">
      <nav className="flex justify-between items-center max-container">
        <a href="/" className="flex items-center justify-center mr-7">
          <img src={ta3allam} alt="Logo" width={190} height={60} />
        </a>
        <ul className="flex-end flex-1 flex justify-end items-center gap-16 max-lg:hidden">
          {navLinks.map((item) => (
            <li key={item.label}>
              <a href={item.href} className="font-montserrat leading-normal text-lg text-slate-gray">
                {item.label}
              </a>
            </li>
          ))}
          <li>
            <button className="flex justify-center items-center gap-2 px-5 py-3 border font-montserrat text-lg leading-none bg-coral-red rounded-full text-white" onClick={() => handleClick(true)}>
              SignIn / SignUp
            </button>
          </li>
        </ul>

        <div className="hidden max-lg:block">
          <img
            src={hamburger}
            alt="Hamburger"
            width={25}
            height={25}
            onClick={togglePopup}
            className="cursor-pointer"
          />
        </div>
      </nav>

      {isPopupOpen && (
        <ul className="z-30 bg-white lg:hidden absolute top-24 right-14 max-sm:right-0 flex justify-center items-center flex-col gap-3 w-full sm:w-[300px] rounded-[10px] shadow-3xl px-4 py-10">
          {navLinks.map((item) => (
            <li key={item.label}>
              <a href={item.href} className="text-lg text-slate-gray hover:text-coral-red active:text-coral-red">
                {item.label}
              </a>
            </li>
          ))}
          <li>
            <button className="flex justify-center items-center gap-2 px-5 py-3 border font-montserrat text-lg leading-none bg-coral-red rounded-full text-white" onClick={() => handleClick(true)}>
              SignIn / SignUp
            </button>
          </li>
        </ul>
      )}
      <SignInUp open={openModal} onClose={() => setOpenModal(false)} />
      {/* {openModal && <div className="fixed top-0 left-0 w-full h-full z-50 backdrop-filter backdrop-blur-sm opacity-40"></div>} */}
    </header>
  );
};

export default Navbar;
