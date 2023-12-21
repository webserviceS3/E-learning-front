import axios from 'axios';
import React, { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
const AddLink = () => {
  const messageRef = useRef(null);

  const handleTextareaChange = () => {
    if (messageRef.current) {
      messageRef.current.style.height = 'auto';
      messageRef.current.style.height = `${messageRef.current.scrollHeight}px`;
    }
  };

  const [formData, setFormData] = useState({
    title: 'oooooo',
    link: 'àààààà',
    teacherName:localStorage.getItem("username")
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
  const addlink = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:8080/api/test/addGoogleLink', formData);
      alert(response.data);
      navigate('/profileTeacher'); // Replace '/dashboard' with the desired route
    } catch (error) {
    }
  };
  return (
    <section className='max-container bg-pale-blue p-20 rounded-2xl'>
      <h3 className='font-palanquin text-center text-4xl font-bold'>
        Google <span className='text-coral-red'>Meeting</span>
      </h3>
      <form  className='mt-16'>
        <div className="mb-4 flex">
          <div className="pr-4 w-1/6">
            <label className="font-semibold mb-1 info-text m-auto mt-4 max-w-lg mr-5">what is it about:</label>
          </div>
          <div className="w-5/6">
            <input
            name='title'
              type="text"
              className="w-full p-2 border rounded mb-4"
              placeholder="tell us what are you gonna talk about"
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="mb-4 flex">
          <div className="w-1/6 pr-4">
            <label className="font-semibold mb-1 info-text m-auto mt-4 max-w-lg mr-5">meeting link:</label>
          </div>
          <div className="w-5/6">
          <input
          onChange={handleChange}
          name='link'
              type="text"
              className="w-full p-2 border rounded mb-4"
              placeholder="put the Google metting link here"
            />
          </div>
        </div>
        <button
          className="bg-green-500 text-white px-4 py-2 rounded-full"
          onClick={addlink}
        >
          post the metting 
        </button>
      </form>
    </section>
  );
};

export default AddLink;
