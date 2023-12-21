import React, { useRef } from 'react';
import { useState } from 'react';
import axios from 'axios';
const Contact = () => {
  const messageRef = useRef(null);

  const handleTextareaChange = () => {
    if (messageRef.current) {
      messageRef.current.style.height = 'auto';
      messageRef.current.style.height = `${messageRef.current.scrollHeight}px`;
    }
  };
   const [formData, setFormData] = useState({
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:8080/api/test/sendMessage', formData);
      console.log('Response:', response.data);
      alert(response.data)
      setFormData({
        email: '',
        message: ''
      })
      // Handle success, update state, etc.
    } catch (error) {
      console.error('Error sending message:', error);
      // Handle error, display error message, etc.
    }
  };

  return (
    <section className='max-container bg-pale-blue p-20 rounded-2xl'>
      <h3 className='font-palanquin text-center text-4xl font-bold'>
        Contact <span className='text-coral-red'>Us</span>
      </h3>
      <form onSubmit={handleSubmit} className='mt-16'>
        <div className="mb-4 flex">
          <div className="pr-4 w-1/6">
            <label className="font-semibold mb-1 info-text m-auto mt-4 max-w-lg mr-5">Email:</label>
          </div>
          <div className="w-5/6">
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-2 border rounded mb-4"
              placeholder="Enter your email"
            />
          </div>
        </div>
        <div className="mb-4 flex">
          <div className="w-1/6 pr-4">
            <label className="font-semibold mb-1 info-text m-auto mt-4 max-w-lg mr-5">Message:</label>
          </div>
          <div className="w-5/6">
            <textarea
              name="message"
              rows={4}
              value={formData.message}
              onChange={handleChange}
              className="w-full p-2 border rounded mb-4 resize-none"
              placeholder="Enter your Message"
            />
          </div>
        </div>
        <button
          type="submit"
          className="bg-green-500 text-white px-4 py-2 rounded-full"
        >
          Send Message
        </button>
      </form>
    </section>
  );
};

export default Contact;
