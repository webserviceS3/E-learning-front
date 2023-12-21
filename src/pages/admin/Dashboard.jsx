import React, { useState } from 'react';
import { Sidebar, Topbar } from '../../components/index';
import { Route, Routes } from 'react-router-dom';
import { useActiveLink } from '../../components/ActiveLinkProvider';
import {Analytics, Courses, Home, QCMs, Settings, Users} from './index'
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
const Dashboard = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const { activeLink } = useActiveLink();
  const navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem("role") != "ROLE_ADMIN") {
      navigate("/")
    }});
  return (
    <div>
      <Sidebar isSidebarOpen={isSidebarOpen} />
      <div className={`relative ${isSidebarOpen === true ? 'w-[calc(100%-70px)] left-[70px]' : 'w-[calc(100%-230px)] left-[230px]'} transition-all duration-300 ease-in-out`}>  
        <Topbar isSidebarOpen={isSidebarOpen} setIsSidebarOpen={setIsSidebarOpen} />
        <div className='overflow-x-hidden'>
          <Routes>
            <Route path="/" exact element={<Home activeLink={activeLink} />} />
            <Route path="/users" element={<Users activeLink={activeLink} />} />
            <Route path="/analytics" exact element={<Analytics activeLink={activeLink} />} />
            <Route path="/courses" exact element={<Courses activeLink={activeLink} />} />
            <Route path="/qcms" exact element={<QCMs activeLink={activeLink} />} />
            <Route path="/settings" exact element={<Settings activeLink={activeLink} />} />
            {/* Add other routes here */}
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
