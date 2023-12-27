import React, { useState } from 'react';
import MeetCard from '../../components/MeetCard';
import { Navbar, Footer } from '../../components';
import { Avatar,Avatar1,Avatar2 } from '../../assets/images';
import NavbarConextion from '../../components/NavbarConextion';
import { useEffect } from 'react';
import axios from 'axios';


const MeetProf = () => {
    const [Data,setData] = useState([
        {
            img: Avatar,
            name: "letest learn how to present our selves",
            link: "Engage in dynamic lessons with our interactive e-learning platform."
        },
        {
            img: Avatar1,
            name: "Grammer present",
            link: "Learn from expert educators with our e-learning English courses."
        },
        {
            img: Avatar2,
            name: "Vocabulary",
            link: "Our dedicated team is here to assist you every step of the way."
        },
        
    ]); 
    const [meetings, setMeetings] = useState([]);

    useEffect(() => {
      // Function to fetch meetings data using Axios
      const fetchMeetingsData = async () => {
        try {
          // Make a GET request to the API endpoint
          const response = await axios.get('http://localhost:8080/api/test/gettMeetings');
  
          // Update the state with the received data
          setMeetings(response.data);
          console.log(meetings);
        } catch (error) {
          // Handle errors, e.g., log them or show a user-friendly message
          console.error('Error fetching meetings data:', error);
        }
      };
      fetchMeetingsData();
  }, []);
  return (
    <main className='relative'>
      <NavbarConextion />
      <section className='padding-x py-10'>
        <section className='max-container flex justify-center flex-wrap gap-9 mt-28'>
            {meetings.map((info, index) => (
                <MeetCard key={index} {...info} />
            ))}
        </section>
      </section>
     
    </main>
  )
}

export default MeetProf