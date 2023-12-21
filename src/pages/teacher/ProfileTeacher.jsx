import React, { useEffect } from 'react';
import Profile from '../../components/Profile';
import { useNavigate } from 'react-router-dom';
import NaveTeacher from '../../components/NaveTeacher';

const ProfileTeacher = () => {
  const navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem("role") != "ROLE_PROF") {
      navigate("/")
    }});
  return (
    <main className='relative'>
      <NaveTeacher/>
      <section className='padding-x pt-[120px]'>
        <Profile />
      </section>
     
    </main>
  )
}

export default ProfileTeacher