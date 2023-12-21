import React, { useEffect, useState } from 'react';
import { Avatar, ta3allam } from '../assets/images';
import { hamburger } from '../assets/icons';
import SignInUp from './SignInUp';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

const DropdownMenu = () => {
  const navDropdownLinks = [
    { href: "/profile", label: "Profile" },
  ];
  const navlogout = useNavigate()
  const navProfile = useNavigate()

  const logout = () => {
    localStorage.clear();
    alert("see you soon:)")
    navlogout("/");
  }
  
  const profilenavigate = () => {
    navProfile("/profile");
  }

  return (
    <ul className="absolute z-30 bg-white top-24 right-14 max-sm:right-0 flex justify-center items-center flex-col gap-3 w-full sm:w-[200px] rounded-[10px] shadow-3xl px-4 py-2">
     
        <li >
          <Link to={"/profilStudent"}  className="text-lg text-slate-gray hover:text-coral-red active:text-coral-red">
          Profile
          </Link>
        </li>
      
      <li >
        <button onClick={logout} className="text-lg text-slate-gray hover:text-coral-red active:text-coral-red">
          logout
        </button>
      </li>
    </ul>
  );
};
const navLinks = [
  { href: "/meetProf", label: "meetProf" },
  { href: "/chat", label: "Chat" },
  { href: "/course", label: "Courses" },
  { href: "/qcm", label: "QCM" },
];

const NavbarConextion = () => {
  const [isPopupOpen, setPopupOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(false);

  const togglePopup = () => {
    setPopupOpen(!isPopupOpen);
  };

  const toggleDropdown = () => {
    setOpenDropdown(!openDropdown);
  };

  const [openModal, setOpenModal] = useState(false);

  const handleClick = (e) => {
    setOpenModal(e);
  }
  const [image, setimage] = useState()
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:8080/api/test/photoProfil/' + localStorage.getItem("username"));
        setimage(response.data.imgUrl);
        localStorage.setItem("imgUrl",response.data.imgUrl);
        console.log(response.data);
      } catch (error) {
        console.error('Error signing in:', error.response ? error.response.data : error.message);
      }
    };

    fetchData();
  }, []);

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
          <li className="relative group">
            <div onClick={toggleDropdown} className="flex items-center gap-2 cursor-pointer">
              <img src={image ? `data:image/png;base64,${image}` : Avatar} alt="User Profile" className="w-10 h-10 rounded-full" />

              <span className="font-montserrat text-lg leading-none">{localStorage.getItem("username")}</span>
            </div>
            {openDropdown && <DropdownMenu />}
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
    </header>
  );
};

export default NavbarConextion;
