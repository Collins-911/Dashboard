import React from "react";
import '../css/home.css';
import icon2 from '../assets/icon2.svg';
import icon7 from '../assets/icon7.jpg';
import dashboard from '../assets/dashboard.png';
import assignment from '../assets/assignment.png';
import book from '../assets/book.png';
import assesment from '../assets/assesment.png';
import student from '../assets/student.png';
import report from '../assets/report.png';
import assessments from '../assets/assessments.png';
import setting from '../assets/setting.png';
import logout from '../assets/logout.png';
import payment from '../assets/payment.png';
import { useNavigate } from 'react-router-dom';





export default function Home() {
  const navigate = useNavigate();

  const studentClick = () =>{
    navigate('/student')
  }
  const registerClick = () =>{
    navigate('/register')
  }
   const paymentClick = () =>{
    navigate('/payment')
  }
   
  const profileClick = () =>{
    navigate('/profile')
  }
  
  

  return (
    <>
      <div className="home-container">
        <div className="top">
          <div className="searchInput">
            <input type="text" placeholder="Search..." className="search" />
            <button className="searchBtn">    
              <img src={icon2} alt="Search" />
            </button>
          </div>
          <img src={icon7} alt="Profile" className="pfp" />
        </div>

        <div className="home">
          <div className="sidebar">
            <ul>
              <div className="sidebar-section">
              <div className="logo">
                {/* <h1>Nugi</h1>
                <p>technologies</p> */}
            </div>
                <p className="sidebar-heading">General</p>
                <li>
                  <a href="/dashboard">
                    <img src={dashboard} alt="Dashboard" className="sidebar-icon" />
                    Dashboard
                  </a>
                </li>
                <li>
                  <a onClick={studentClick} href="">
                    <img src={student} alt="Students" className="sidebar-icon" />
                    Students
                  </a>
                </li>
                <li>
                  <a href="/assignments">
                    <img src={assessments} alt="Assignments" className="sidebar-icon" />
                    Courses
                  </a>
                </li>
                <li>
                  <a href="/assessments">
                    <img src={assignment} alt="Assessments" className="sidebar-icon" />
                    Curriculum
                  </a>
                </li>
                <li>
                  <a href="/assessments">
                    <img src={student} className="sidebar-icon" />
                    Staffs
                  </a>
                </li>
              </div>

              <div className="sidebar-section">
                <p className="sidebar-heading">Tools</p>
                <li>
                  <a onClick={registerClick} href="">
                    <img src={book} alt="Courses" className="sidebar-icon" />
                    Register Students
                  </a>
                </li>
                <li>
                  <a href="/assignments">
                    <img src={assessments} alt="Assignments" className="sidebar-icon" />
                    Add Courses
                  </a>
                </li>
               <li>
                  <a href="/assessments">
                    <img src={assignment} alt="Assessments" className="sidebar-icon" />
                    Assessement
                  </a> 
                </li>
                <li>
                  <a href="/assessments">
                    <img src={report} alt="Assessments" className="sidebar-icon" />
                    Reports
                  </a> 
                </li>
                 <li>
                  <a onClick={paymentClick} href="">
                    <img src={payment} alt="Assessments" className="sidebar-icon" />
                    Payment
                  </a> 
                </li>
              </div>

              <div className="sidebar-section">
                <p className="sidebar-heading">Account</p>
                <li>
                  <a onClick={profileClick} href="">
                    <img src={icon7} alt="Profile" className="sidebar-icon" />
                    Profile
                  </a>
                </li>
                <li>
                  <a href="/settings">
                    <img src={setting} alt="Settings" className="sidebar-icon"/>
                    Settings
                  </a>
                </li>
                <li>
                  <a href="/logout">
                    <img src={logout} alt="Logout" className="sidebar-icon"/>
                    Logout
                  </a>
                </li>
              </div>
            </ul>
          </div>
          <section className="dash-home">
            <div className="carousel">
            </div>
            <div className="columns">
              <div style={{backgroundColor: "rgba(106, 115, 250, 1)"}} className="col-1">
                <div className="col-icon">
                   <div className="icon-div">
                  </div>
                </div>
                <div className="col-text">
                  <h4>Total Students</h4>
                  <h1>200</h1>
                  <div className="rate">
                    <div className="ratio"></div>
                  </div>
                  <p>80% increase in three months</p>
                </div>
              </div>
              <div style={{backgroundColor: "rgba(255, 170, 22, 1)"}} className="col-1">
                <div className="col-icon">
                   <div className="icon-div">
                  </div>
                </div>
                <div className="col-text">
                  <h4>New Students</h4>
                  <h1>40</h1>
                  <div className="rate">
                    <div className="ratio-2"></div>
                  </div>
                  <p>20% increase in three months</p>
                </div>
              </div>
              <div style={{backgroundColor: "rgba(103, 59, 183, 1)"}} className="col-1">
                <div className="col-icon">
                   <div className="icon-div">
                  </div>
                </div>
                <div className="col-text">
                  <h4>Total Courses</h4>
                  <h1>16</h1>
                  <div className="rate">
                    <div className="ratio-3"></div>
                  </div>
                  <p>76% increase in three months</p>
                </div>
              </div>
              <div style={{backgroundColor: "rgba(255, 22, 22 ,1"}} className="col-1">
                 <div className="col-icon">
                  <div className="icon-div">
                  </div>
                </div>

                <div className="col-text">
                  <h4>Payment</h4>
                  <h1>300$</h1>
                  <div className="rate">
                    <div className="ratio-4"></div>
                  </div>
                  <p>30% increase in three months</p>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  )
}
