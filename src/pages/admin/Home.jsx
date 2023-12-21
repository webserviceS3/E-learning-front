import React from 'react'
import {DashHeader, Insights, NewUsers, Reminders} from '../../components/index'
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

const Home = ({activeLink}) => {
  const navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem("role") != "ROLE_ADMIN") {
      navigate("/")
    }});
  return (
    <main className='my-2 lg:mb-4 lg:mt-6 mx-4 lg:mx-6 z-20'>
        <DashHeader activeLink={activeLink} />
        <Insights />
        <div className='grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 xs:grid-cols-1 grid-cols-auto-fit grid-col-minmax-60 gap-6'>
            <div className='col-span-2 md:col-span-3'>
                <NewUsers />
            </div>
            <div className='col-span-2 md:col-span-1'>
                <Reminders />
            </div>
        </div>
    </main>
  )
}

export default Home