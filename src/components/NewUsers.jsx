import React, { useEffect, useState } from 'react';
import { plus, customer1, profile2, profile3, Avatar } from '../assets/images';
import getAllUser from "../services/getAllUser.js";
import Visitor from "../services/Visitor.js";
import users from "../pages/admin/Users.jsx";
import axios from "axios";



const NewUsers = () => {
  const [newUsers, setNewUsers] = useState([]);

  useEffect(() => {
    const token = localStorage.getItem('token'); 
    const headers = {
      Authorization: `Bearer ${token}`,
    };
    axios.get('http://localhost:8080/api/test/Allusers', { headers })
      .then(response => {
        console.log('Response:', response.data);
        setNewUsers(response.data);
      })
      .catch(error => {
        console.error('Error:', error);
      });
  }, []);

  return (
    <div className="mt-10 font-palanquin">
      <h3 className='font-bold text-slate-gray text-[24px]'>Last New <span className='text-coral-red'>Users</span></h3>

      <div className="bg-white p-4 rounded-lg mt-9 shadow-lg flex justify-around flex-wrap gap-4 cursor-pointer transition-transform duration-300 ease-in-out border-[3px] border-pale-blue">
        {newUsers.slice(-3).map((user, index) => (
          <div key={index} className="flex flex-col items-center justify-center">
            <img
              src={user.imgUrl ? `data:image/png;base64,${user.imgUrl}` : Avatar}
              className='w-20 h-20 mb-1 rounded-full object-cover'
              alt="User"
            />
            <h4 className='font-semibold text-lg'>{user.username}</h4>
            <p className='text-xs'>{user.email}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default NewUsers;
