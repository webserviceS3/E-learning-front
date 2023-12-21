import React, { useEffect } from 'react';
import Profile from '../../components/Profile';
import { useNavigate } from 'react-router-dom';
import NavbarConextion from '../../components/NavbarConextion'

const ProfileStudent = () => {
  const navigate = useNavigate();
  useEffect(()=>{
    if (localStorage.getItem("role") != "ROLE_STUDENT") {
      navigate("/")
    }
  })
  return (
    <main className='relative'>
      <NavbarConextion/>
      <section className='padding-x pt-[120px]'>
        <Profile />
      </section>
     
    </main>
  )
}

export default ProfileStudent