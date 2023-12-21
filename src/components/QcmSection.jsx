 /* eslint-disable no-unused-vars */
// import React from 'react'
import React, { useState, useEffect } from 'react';
import QcmQst from './QcmQst'
import axios from 'axios';
import {useParams} from 'react-router-dom';

const QcmSection = ({ length }) => {
    const pages = Array.from({ length }, (_, index) => index + 1);
    const { id } = useParams();
    const [writtenCour, setWrittenCours] = useState([{
      question1: "What is the capital of France?",
      choices: ["Paris", "Berlin", "London", "Madrid"],
      explanation: "Paris is the capital of France.",
      right: "Paris"
    }
    ]);

    useEffect(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
  
      const fetchCoursesData = async () => {
        try {
          const response = await axios.get('http://localhost:8080/api/test/getQCMs');
          setWrittenCours(response.data);
          console.log(response.data);
        } catch (error) {
          console.error("Erreur lors de la récupération des données :", error);
        }
        console.log("lataill: "+writtenCour.length);
        localStorage.setItem("nomberQ",writtenCour.length);
      };
  
      fetchCoursesData();
    }, [id]);
  
    return (
      <section id='course' className='flex justify-between items-center max-lg:flex-col gap-10 w-full max-container'>
        <div className='flex flex-1 flex-col'>
          <h2 className='font-palanquin text-4xl capitalize font-bold lg:max-w-lg lg:mb-2'>
            QCM: <span className='text-coral-red'>Train Yourself</span>
          </h2>
          {pages.map((page, index) => (
            <div key={index}>
              {writtenCour.length > 0 && <QcmQst number={page} questionData={writtenCour[index]} />}
            </div>
          ))}
        </div>
      </section>
    );
  };
  
  export default QcmSection;