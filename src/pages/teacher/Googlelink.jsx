import React, { useEffect } from 'react';
import Profile from '../../components/Profile';
import { useNavigate } from 'react-router-dom';
import NaveTeacher from '../../components/NaveTeacher';
import AddLink from '../../components/Addlink';

const Googlelink = () => {
  const navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem("role") != "ROLE_PROF") {
      navigate("/")
    }});
  return (
    <main className='relative'>
      <NaveTeacher/>
      <section className='padding-x pt-[120px]'>
        <AddLink />
      </section>
     
    </main>
  )
}

export default Googlelink