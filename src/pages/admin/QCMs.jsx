import React from 'react';
import { DashHeader } from '../../components';
import AddQCM from '../../components/AddQCM';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

const QCMs = ({ activeLink }) => {
  const navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem("role") != "ROLE_ADMIN") {
      navigate("/")
    }
  });
  return (
    <main className='my-2 lg:mb-4 lg:mt-6 mx-4 lg:mx-6 z-20'>
      <DashHeader activeLink={activeLink} />
      <AddQCM />
    </main>
  )
}

export default QCMs