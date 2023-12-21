import React from 'react';
import { AddUser, DashHeader} from '../../components';
import LineChart from '../../components/LineChart';
import ApexChart from '../../components/ApexChart';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

const Analytics = ({activeLink}) => {
  const navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem("role") != "ROLE_ADMIN") {
      navigate("/")
    }});
  return (
    <main className='my-2 lg:mb-4 lg:mt-6 mx-4 lg:mx-6 z-20'>
        <DashHeader activeLink={activeLink} />
        <LineChart />
        {/* <AddUser/> */}
        {/* <ApexChart /> */}
    </main>
  )
}

export default Analytics