import React, { useEffect, useState } from 'react';
import { customer1 } from '../assets/images';
import { Avatar } from '../assets/images';

const Modal = ({ onClose }) => {
    const handleSubmit = (e) => {
      e.preventDefault();
      
    };
  
    return (
      <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-800 bg-opacity-50 z-[10000000000000000]">
        <div className="bg-white p-8 rounded-2xl max-w-3xl w-full">
          <h2 className="text-2xl font-semibold mb-4 info-text m-auto mt-4 max-w-lg text-center">Edit Information</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-4 flex">
              <div className="w-1/3 pr-4">
                <label className="font-semibold mb-1 info-text m-auto mt-4 max-w-lg mr-5">Username:</label>
              </div>
              <div className="w-2/3">
                <input
                  type="text"
                  className="w-full p-2 border rounded mb-4"
                  placeholder="Enter your username"
                />
              </div>
            </div>
            <div className="mb-4 flex">
              <div className="w-1/3 pr-4">
                <label className="font-semibold mb-1 info-text m-auto mt-4 max-w-lg mr-5">Email:</label>
              </div>
              <div className="w-2/3">
                <input
                  type="email"
                  className="w-full p-2 border rounded mb-4"
                  placeholder="Enter your email"
                />
              </div>
            </div>
            <div className="mb-4 flex">
              <div className="w-1/3 pr-4">
                <label className="font-semibold mb-1 info-text m-auto mt-4 max-w-lg mr-5">Password:</label>
              </div>
              <div className="w-2/3">
                <input
                  type="password"
                  className="w-full p-2 border rounded mb-4"
                  placeholder="Enter your password"
                />
              </div>
            </div>
            <button
              type="submit"
              className="bg-coral-red text-white px-4 py-2 rounded-full"
            >
              Save Changes
            </button>
            <button
              className="bg-gray-300 text-gray-700 px-4 py-2 rounded-full mt-4 ml-5"
              onClick={onClose}
            >
              Close
            </button>
          </form>
        </div>
      </div>
    );
  };
  
  const Profile = () => {
    const [isModalOpen, setModalOpen] = useState(false);
    const [imageSrc, setImageSrc] = useState(customer1);

    const handleEditClick = () => {
        setModalOpen(true);
    };

    const handleCloseModal = () => {
        setModalOpen(false);
    };

    const handleImageUpload = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = () => {
                setImageSrc(reader.result);
            };
            reader.readAsDataURL(file);
        }
    };
    return (
        <section className='max-container bg-pale-blue p-20 rounded-2xl'>
            <h3 className='font-palanquin text-center text-4xl font-bold'>
                Personal <span className='text-coral-red'>Information</span>
            </h3>
            <div className='flex mt-16 justify-start items-start gap-10 sm:gap-32 flex-col sm:flex-row sm:px-16'>
            <div className='relative'>
                <img
                    src={localStorage.getItem("imgUrl") ? `data:image/png;base64,${localStorage.getItem("imgUrl")}` : Avatar}
                    alt="customer"
                    className='rounded-full object-cover w-[240px] h-[240px] cursor-pointer'
                    onMouseOver={() => document.getElementById('uploadText').style.opacity = '1'}
                    onMouseOut={() => document.getElementById('uploadText').style.opacity = '0'}
                    onClick={() => document.getElementById('imageInput').click()}
                />
                <div
                    id="uploadText"
                    className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer opacity-0 transition-opacity duration-300'
                >
                    <input
                        type="file"
                        id="imageInput"
                        className="hidden"
                        onChange={handleImageUpload}
                    />
                    <span className="text-white font-medium text-base bg-slate-400 rounded-full px-2 py-1 whitespace-nowrap">Upload an Image</span>
                </div>
            </div>

                <div className=''>
                    <ul>
                        <li className='info-text m-auto mt-4 max-w-lg'><span className='font-semibold mr-5'>Username:</span> {localStorage.getItem("username")}</li>
                        <li className='info-text m-auto mt-4 max-w-lg'><span className='font-semibold mr-5'>Email:</span> {localStorage.getItem("email")}</li>
                        <li className='info-text m-auto mt-4 max-w-lg'><span className='font-semibold mr-5'>Password:</span> {"******"}</li>
                        <li className='info-text m-auto mt-4 max-w-lg'><span className='font-semibold mr-5'>you are :</span> {localStorage.getItem("role")}</li>
                    </ul>
                    <button className='ont-montserrat text-lg leading-normal m-auto mt-4 sm:mt-10 bg-green-500 text-white p-1 px-4 rounded-full text-center' onClick={handleEditClick}>
                        Edit Info
                    </button>
                </div>
            </div>

            {isModalOpen && <Modal onClose={handleCloseModal} />}
        </section>
    );
};

export default Profile;
