/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react';
import {Navbar, Hero, PopularCourses, SuperQuality, Services, CustomerReviews, Subscribe, Footer} from './components/index';
import SignInUp from './components/SignInUp';
import Visitor from './services/Visitor';
import { useNavigate } from 'react-router-dom';

function Homepage() {
  const navigate = useNavigate();
  useEffect(()=>{
    if (localStorage.getItem("role") === "ROLE_STUDENT") {
      navigate("/course")
    }
    if (localStorage.getItem("role") === "ROLE_ADMIN") {
      navigate("/admin")
    }
    if (localStorage.getItem("role") === "ROLE_PROF") {
       navigate("/Googlelink")
    }
    const v = Visitor.incrementcount();
    console.log(v);
  },[])
  return (
    <main className='relative'>
      <Navbar />
      <section className="xl:padding-l wide:padding-r padding-b">
        <Hero />
      </section>
      <section className='padding'>
        <SuperQuality />
      </section>
      <section className='bg-black padding-x padding-t pb-8'>
        <Footer />
      </section>
      <SignInUp />
    </main>
  )
}

export default Homepage
