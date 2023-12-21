import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const AddUser = () => {
    const [formData, setFormData] = useState({
        password: 'oooooo',
        email: 'àààààà',
        username: 'àààààààà',
        age:20,
        roles:["prof"]
      });
    
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
          ...formData,
          [name]: value,
        });
        console.log(formData);
      };
      const navigate = useNavigate();
      const signUpp = async (e) => {
        e.preventDefault();
        try {
          const response = await axios.post('http://localhost:8080/api/auth/signup', formData);
          alert("user added")
          navigate("/admin")
        } catch (error) {
         console.warn("email adn user already existe!");
        }
      };
  return (
    <div id='newuser' className='max-container w-full font-palanquin mt-9 text-slate-gray'>
        <hr className='text-slate-gray border-[1px]'/>
        <h2 className='w-full text-center text-2xl font-bold my-7'>New <span className='text-coral-red'>Teacher</span></h2>
        <form   className='w-full'>
            <div className='md:w-2/3 flex justify-center items-center md:gap-8 md:m-6 md:ml-8 gap-4 m-3 ml-4'>
                <label htmlFor='username' className='flex-1'>Username:</label>
                <input name='username' id='username' type='text' placeholder='Enter Username...' className='border border-slate-gray p-2 rounded-xl flex-[4_4_0%]'onChange={handleChange}/>
            </div>
            <div className='w-full md:w-2/3 flex justify-center items-center md:gap-8 md:m-6 md:ml-8 gap-4 m-3 ml-4'>
                <label htmlFor='email' className='flex-1'>Email:</label>
                <input name='email' id='email' type='email' placeholder='Enter Email...' className='border border-slate-gray p-2 rounded-xl flex-[4_4_0%]'onChange={handleChange} />
            </div>
            <div className='w-full md:w-2/3 flex justify-center items-center md:gap-8 md:m-6 md:ml-8 gap-4 m-3 ml-4'>
                <label  htmlFor='password' className='flex-1'>Password:</label>
                <input name="password" id='password' type='password' placeholder='Enter Password...' className='border border-slate-gray p-2 rounded-xl flex-[4_4_0%]' onChange={handleChange}/>
            </div>
           
            <div className='w-full md:w-2/3 flex justify-center items-center md:gap-8 md:m-6 md:ml-8 gap-4 m-3 ml-4'>
                <label htmlFor='image' className='flex-1'>Image:</label>
                <input id='image' type='file' placeholder='Upload a file...' className='border border-slate-gray p-2 rounded-xl flex-[4_4_0%]' />
            </div>
            
            <div className='flex justify-center items-center'>
                <button onClick={signUpp} type='submit' className='bg-coral-red text-white p-2 rounded-full px-6 py-2'>Add User</button>
            </div>
        </form>
    </div>
  )
}

export default AddUser