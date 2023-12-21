import React from 'react';
import { AddUser, DashHeader } from '../../components';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

const Settings = ({activeLink}) => {
  const navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem("role") != "ROLE_ADMIN") {
      navigate("/")
    }});
  return (
    <main className='my-2 lg:mb-4 lg:mt-6 mx-4 lg:mx-6 z-20'>
        <DashHeader activeLink={activeLink} />
        <AddUser/>
    </main>
  )
}

export default Settings