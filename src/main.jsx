import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ReactDOM from 'react-dom/client'
import { createRoot } from 'react-dom/client'
import Login from './dashboard/login/Login.jsx'
import Signup from './dashboard/login/Signup.jsx'
import Home from './dashboard/Home.jsx'
import Student from './dashboard/Student.jsx'
import Register from './dashboard/Register.jsx'
import Payment from './dashboard/Payment.jsx'
import Student_payment from './dashboard/Student_payment.jsx'
import Courses from './dashboard/Courses.jsx'
import Profile from './dashboard/login/profile.jsx'
import EditProfile from './dashboard/login/edit-profile.jsx';
import { FaUser, FaPhone, FaIdCard, FaRedoAlt } from "react-icons/fa";
import App from './App.jsx'


createRoot(document.getElementById('root')).render(
  <BrowserRouter>
   	 <Routes>
   	  <Route path ='/' element={<Home/>}/>
      <Route path ='/login' element={<Login/>}/>
      <Route path ='/Signup' element={<Signup/>}/>
      <Route path ='/student' element={<Student/>}/>
      <Route path ='/register' element={<Register/>}/>
      <Route path ='/payment' element={<Payment/>}/>
       <Route path ='/courses' element={<Courses/>}/>
      <Route path ='/student_payment' element={<Student_payment/>}/>
      <Route path ='/profile' element={<Profile/>}/>
       <Route path='/edit-Profile' element={<EditProfile />} />
    </Routes>
  </BrowserRouter>,
)
