import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import 'regenerator-runtime/runtime';
import AddUser from './components/AddUser.jsx';
import Profile from './components/Profile.jsx';
import ProfileStudent from './pages/student/ProfileStudent.jsx';
import ContactPage from './pages/visiteur/ContactPage.jsx';
import ProfileTeacher from './pages/teacher/ProfileTeacher.jsx';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    {/* <ProfileTeacher/> */}
    {/* <AddUser/> */}
    {/* <ProfileStudent/> */}
    {/* <ContactPage/> */}
  </React.StrictMode>,
)
