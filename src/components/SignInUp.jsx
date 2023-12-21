import React, { useEffect, useState } from 'react';
import AuthService from '../services/auth.service'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';


const SignInUp = ({ open, onClose }) => {
  // const navigate = useNavigate();
  const [errorMesage,setErrorMesage] = useState();
  const [errorMesagesignUp,setErrorMesagesignUp] = useState();

  const [formData, setFormData] = useState({
    password: 'oooooo',
    email: 'àààààà',
    username: 'àààààààà',
    age:20,
    roles:["student"]
  });

  const [active, setActive] = useState("signup");

  const handleClick = (e) => {
    setActive(e);
  }
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    console.log(formData);
  };
  const signUpp = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:8080/api/auth/signup', formData);
      
      // navigate('/course'); // Replace '/dashboard' with the desired route
    } catch (error) {
      setErrorMesagesignUp("change your eamil and username !")
      // Handle the error as needed
    }
  };
  const navStudent = useNavigate();
  const navAdmin = useNavigate();
  const navTecher = useNavigate();
  const  SignIn = async (e) =>{
    e.preventDefault();
    try{
    const response = await axios.post('http://localhost:8080/api/auth/signin', {
      username:formData.username,
      password:formData.password
   });
    localStorage.setItem("token",response.data.accessToken)
    localStorage.setItem("username",response.data.username)
    localStorage.setItem("role",response.data.roles[0])
    localStorage.setItem("email",response.data.email)
    if (localStorage.getItem("role") === "ROLE_ADMIN") {
      navAdmin('/admin')
    }
    if (localStorage.getItem("role") === "ROLE_STUDENT") {
      navStudent('/profilStudent');
    }
    if (localStorage.getItem("role") === "ROLE_PROF") {
      navTecher("/profileTeacher")
    }
    
  } catch (error) {
    console.error('Error signing conixion:');
    setErrorMesage("your username or password is not correct")
    // Handle the error as needed
  }
  //  const responce  = AuthService.login(formData.username,formData.password);
  //  console.log(responce);
  };
  if (!open) return null;

  return (
    <div
      className="bg-white rounded-3xl shadow-2xl fixed top-[50%] left-[50%] transform translate-x-[-50%] translate-y-[-50%] overflow-hidden w-[768px] max-w-full min-h-[480px] z-[1000] font-montserrat"
    >
      <div className={`${active == "signup" ? "right-[50%] opacity-0" : "right-0 z-10"} absolute top-0 h-full transition-all duration-700 ease-in-out w-1/2 z-10`}>
        <form className='h-full flex flex-col items-center justify-center'>
          <h3 className='text-2xl font-bold'>Create Account</h3>
          <div className="my-5">
                      <a href="#" className='text-red-500 text-sm mt-2 font-bold'>{errorMesagesignUp}</a>

              </div>
          <input className='mt-2 bg-pale-blue border border-transparent py-2 px-3 text-sm rounded-lg w-[80%] outline-none' name="username" type="text" placeholder="Name" onChange={handleChange}/>
          <input className='mt-4 bg-pale-blue border border-transparent py-2 px-3 text-sm rounded-lg w-[80%] outline-none' name="email" type="email" placeholder="Email" onChange={handleChange}/>
          <input className='mt-4 bg-pale-blue border border-transparent py-2 px-3 text-sm rounded-lg w-[80%] outline-none' name='password'  type="password" placeholder="Password" onChange={handleChange}/>
          <input className='mt-4 bg-pale-blue border border-transparent py-2 px-3 text-sm rounded-lg w-[80%] outline-none' name='age'  type="number" placeholder="age" onChange={handleChange}/>

          <button className='mt-6 flex justify-center items-center gap-2 px-5 py-2.5 border font-montserrat text-md leading-none bg-coral-red text-white border-coral-red rounded-full'   onClick={signUpp} >Sign Up</button>
        </form>
      </div>
      <div className={`${active == "signin" ? "left-[50%] opacity-0" : "left-0 z-10"} absolute top-0 h-full transition-all duration-700 ease-in-out w-1/2`}>
        <form className='flex flex-col items-center justify-center' onSubmit={SignIn}>
          <h3 className='text-2xl font-bold'>Sign In</h3>
          <div className="my-5">
          <a href="#" className='text-red-500 text-sm mt-2 font-bold'>{errorMesage}</a>
              </div>
          <input className='mt-4 bg-pale-blue border border-transparent py-2 px-3 text-sm rounded-lg w-[80%] outline-none' name='username' type="text" placeholder="userName" onChange={handleChange}/>
          <input className='mt-4 bg-pale-blue border border-transparent py-2 px-3 text-sm rounded-lg w-[80%] outline-none' name='password' type="password" placeholder="Password"onChange={handleChange}/>
          <a href="#" className='text-slate-gray text-sm mt-2'>I forget my password</a>
          <button   className='mt-6 flex justify-center items-center gap-2 px-5 py-2.5 border font-montserrat text-md leading-none bg-coral-red text-white border-coral-red rounded-full'>Sign In</button>
        </form>
      </div>

      <div className={`${active == "signin" ? "left-0" : "left-[50%]"} absolute top-0 w-1/2 h-full overflow-hidden transition-all duration-700 ease-in-out z-50`}>
        <div className={`${active == "signin" ? "rounded-tr-[140px] rounded-br-[140px] bg-gradient-to-r from-[#FF2212] to-[#FF6452]" : "rounded-tl-[140px] rounded-bl-[140px] bg-gradient-to-r from-[#FF6452] to-[#FF2212]"} w-full left-0 h-full text-white relative transition-all ease-in-out`}>
          <div className={`${active == "signup" ? "left-[-200%]" : " left-[0]"} absolute w-full h-full flex items-center justify-center flex-col gap-5 px-6 transform translate-x-0 transition-all duration-700 ease-in-out text-center top-0`}>
            <h3 className='text-2xl font-bold'>Welcome Back!</h3>
            <p className='text-md leading-normal'>Enter your personal details to use all of site features</p>
            <button className="flex justify-center items-center gap-2 px-5 py-2.5 border font-montserrat text-md leading-none bg-transparent border-white rounded-full" id="login" onClick={() => handleClick("signup")}>Sign In</button>
          </div>

          <div className={`${active == "signin" ? "left-[200%]" : " left-[0]"} absolute w-full h-full flex items-center justify-center flex-col gap-5 px-6 transform translate-x-0 transition-all duration-700 ease-in-out text-center top-0`}>
            <h3 className='text-2xl font-bold'>Hello, Friend!</h3>
            <p className='text-md leading-normal'>Register with your personal details to use all of site features</p>
            <button className="flex justify-center items-center gap-2 px-5 py-2.5 border font-montserrat text-md leading-none bg-transparent border-white rounded-full" id="login" onClick={() => handleClick("signin")}>Sign Up</button>
          </div>
        </div>
      </div>
      <button className='absolute top-2 right-4 m-0 p-0 text-black flex justify-center items-center z-[1000]' onClick={onClose}>
      <i class="bx bx-x"></i> Close
      </button>
    </div>
  );
}

export default SignInUp;
