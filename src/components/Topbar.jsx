import axios from 'axios';
import React, { useState,useEffect } from 'react';

const Topbar = ({ isSidebarOpen, setIsSidebarOpen }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [messages, setMessages] = useState([
    { sender: "Sender 1", email: "sender1@example.com", content: "Message content 1" },
    { sender: "Sender 2", email: "sender2@example.com", content: "Message content 2" },
  ]); // Add your initial messages here

  const handleSidebarOpenClick = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const handleDropdownClick = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleClearMessages = () => {
    setMessages([]);
  };
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:8080/api/test/getMessages');
        setMessages(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);
  return (
    <nav className='sticky font-palanquin bg-pale-blue h-16 px-6 flex items-center gap-6 top-0 left-0 z-50 text-slate-gray'>
      <i className='bx bx-menu text-3xl font-bold cursor-pointer' onClick={handleSidebarOpenClick}></i>
      <form action="#" className='max-w-[400px] w-full mr-auto'>
        {/* Your form content */}
      </form>
      <div className="relative">
        <a href="#" className="text-3xl" onClick={handleDropdownClick}>
          <i className='bx bx-message'></i>
          <span className="absolute -top-[2px] -right-[6px] w-6 h-6 bg-red-600 rounded-full text-white border-2 border-white font-bold text-[14px] p-2 flex items-center justify-center">{messages.length}</span>
        </a>
        {isDropdownOpen && (
          <div className="absolute right-0 mt-2 bg-white shadow-md p-4 rounded-md w-[300px]">
            {/* Display your messages here */}
            {messages.map((message, index) => (
              <div key={index}>
                <a href={`mailto:${message.email}`} className="text-blue-500">
                  {message.email}
                </a>
                <p>{message.message}</p>
              </div>
            ))}
            {messages.length === 0 && <div>No messages</div>}
            <button className="mt-4 bg-red-500 text-white px-4 py-2 rounded" onClick={handleClearMessages}>
              Clear
            </button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Topbar;
