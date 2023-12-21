import React, { useEffect } from 'react';
import Dashboard from './pages/admin/Dashboard';
import Homepage from './Homepage';
import {Course} from './pages/student'
import { ActiveLinkProvider } from './components/ActiveLinkProvider';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import axios from 'axios';
import ProfileStudent from './pages/student/ProfileStudent';
import { ChatEngine } from 'react-chat-engine'
import ChatComponent from './components/chatComponent';
import ContactPage from './pages/visiteur/ContactPage';
import Googlelink from './pages/teacher/Googlelink';
import ProfileTeacher from './pages/teacher/ProfileTeacher';
import QCMStudent from './pages/student/QCMStudent';
import MeetProf from './pages/student/MeetProf';

function App() {

  // Generate a random visitor ID or use the existing one stored in a cookie
function generateVisitorId() {
  let visitorId = getVisitorIdCookie();

  if (!visitorId) {
      visitorId = generateUniqueKey();
      setVisitorIdCookie(visitorId, 365); // 365 days
  }

  return visitorId;
}

function getVisitorIdFromCookie() {
  const name = 'visitorId=';
  const cookies = document.cookie.split(';');

  for (let i = 0; i < cookies.length; i++) {
    let cookie = cookies[i].trim();
    if (cookie.indexOf(name) === 0) {
      return cookie.substring(name.length);
    }
  }

  // If no cookie found, generate a new unique key and store it in a cookie
  const visitorId = generateUniqueKey();
  setVisitorIdCookie(visitorId, 365);
  return visitorId;
}


// function setVisitorIdCookie(id, daysToExpire) {
//   const date = new Date();
//   date.setTime(date.getTime() + (daysToExpire * 24 * 60 * 60 * 1000));
//   const expires = 'expires=' + date.toUTCString();
//   document.cookie = 'visitorId=' + id + '; ' + expires + '; path=/';
// }

function setVisitorIdCookie(id, daysToExpire) {
  const date = new Date();
  date.setTime(date.getTime() + daysToExpire * 24 * 60 * 60 * 1000);

  // Determine the domain based on the location of the application
  const domain = window.location.hostname === "localhost" ? "localhost" : window.location.hostname;

  document.cookie = `visitorId=${id}; expires=${date.toUTCString()}; path=/; domain=${domain}; samesite=none; secure`;
}


function getVisitorIdFromCookie() {
  const name = 'visitorId=';
  const cookies = document.cookie.split(';');

  for (let i = 0; i < cookies.length; i++) {
      let cookie = cookies[i].trim();
      if (cookie.indexOf(name) === 0) {
          return cookie.substring(name.length);
      }
  }

  const visitorId = generateUniqueKey();
  setVisitorIdCookie(visitorId, 365); // Generate and store a new visitor ID in a cookie
  return visitorId;
}

function incrementVisitorCount() {
  const visitorId = getVisitorIdFromCookie();

  console.log('hello');

  axios
    .get('http://localhost:8080/api/count-visitor', {
      withCredentials: true, // Include cookies in the request
    })
    .then((response) => {
      console.log('Total Visitors:', response.data);
    })
    .catch((error) => {
      console.error('Error:', error);
    });
}

document.addEventListener('DOMContentLoaded', incrementVisitorCount);


  return (
    <ActiveLinkProvider>
      <Router>
        <main className='relative'>
          <Routes>
            <Route path='/admin/*' element={<Dashboard />} />
            <Route path='/' element={<Homepage />} />
            <Route path='/course' element={<Course />} />
            <Route path='/qcm' element={<QCMStudent />} />
            <Route path='/contactUS' element={<ContactPage />} />
            <Route path='/profilStudent' element={<ProfileStudent/>} />
            <Route path='/chat' element={<ChatComponent/>} />
            <Route path='/Googlelink' element={<Googlelink/>} />
            <Route path='/profileTeacher' element={<ProfileTeacher/>} />
            <Route path='/meetProf' element={<MeetProf/>} />
            


            
            
          </Routes>
        </main>
      </Router>
    </ActiveLinkProvider>
  );
}

export default App;
