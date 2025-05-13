import React from "react";
import '../css/courses.css';
import icon2 from '../assets/icon2.svg';
import icon7 from '../assets/icon7.jpg';
import dashboard from '../assets/dashboard.png';
import assignment from '../assets/assignment.png';
import book from '../assets/book.png';
import student from '../assets/student.png';
import report from '../assets/report.png';
import assessments from '../assets/assessments.png';
import setting from '../assets/setting.png';
import logout from '../assets/logout.png';
import payment from '../assets/payment.png';

export default function Courses() {
  return (
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
                <a href="/student">
                  <img src={student} alt="Courses" className="sidebar-icon" />
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
                <a href="/staffs">
                  <img src={student} className="sidebar-icon" alt="Staffs" />
                  Staffs
                </a>
              </li>
            </div>

            <div className="sidebar-section">
              <p className="sidebar-heading">Tools</p>
              <li>
                <a href="/register-students">
                  <img src={book} alt="Courses" className="sidebar-icon" />
                  Register Students
                </a>
              </li>
              <li>
                <a href="/add-courses">
                  <img src={assessments} alt="Assignments" className="sidebar-icon" />
                  Add Courses
                </a>
              </li>
              <li>
                <a href="/assessment-tool">
                  <img src={assignment} alt="Assessments" className="sidebar-icon" />
                  Assessement
                </a>
              </li>
              <li>
                <a href="/reports">
                  <img src={report} alt="Assessments" className="sidebar-icon" />
                  Reports
                </a>
              </li>
              <li>
                <a href="/payment">
                  <img src={payment} alt="Assessments" className="sidebar-icon" />
                  Payment
                </a>
              </li>
            </div>

            <div className="sidebar-section">
              <p className="sidebar-heading">Account</p>
              <li>
                <a href="/profile">
                  <img src={icon7} alt="Profile" className="sidebar-icon" />
                  Profile
                </a>
              </li>
              <li>
                <a href="/settings">
                  <img src={setting} alt="Settings" className="sidebar-icon" />
                  Settings
                </a>
              </li>
              <li>
                <a href="/logout">
                  <img src={logout} alt="Logout" className="sidebar-icon" />
                  Logout
                </a>
              </li>
            </div>
          </ul>
        </div>

        <section className="courses-home">
          <div className="courses-title">
            <h3> Courses </h3>
            <p>Dashboard / <span>All Courses</span></p>
          </div>
          <div className="courses-grid">
            <div className="course-item">
              <h4> Front-end web development</h4>
              <p> HTML and CSS </p>
              <div className="course-details">
                <p>Lessons: 163 </p>
                <p>Duration: 2 months </p>
                
              </div>
              

            </div>
            <div className="course-item">
              <h4> Back-end web development</h4>
              <p> Js, React, FireBase </p>
              <div className="course-details">
                <p>Lessons: 41</p>
                <p>Duration: 4 months</p>
              </div>
              
            </div>
            
            <div className="course-item">
              <h4> Product Management </h4>
              <p> Mentorship </p>
              <div className="course-details">
                <p> Lesson: 16</p>
                <p> Duration: 1 month</p>
              </div>
             
            </div>
            <div className="course-item">
              <h4> Product Design </h4>
              <p></p>
              <div className="course-details">
                <p>Lessons: 18</p>
                <p>Duration: 7 weeks</p>
              </div>
            </div>

            <div className="course-item">
              <h4> Mobile App Development </h4>
              <p></p>
              <div className="course-details">
                <p>Lessons: 18</p>
                <p>Duration: 7 weeks</p>
              </div>
            </div>

            <div className="course-item">
              <h4> Data Science </h4>
              <p></p>
              <div className="course-details">
                <p>Lessons: 18</p>
                <p>Duration: 7 weeks</p>
              </div>
            </div>

            <div className="course-item">
              <h4> Digital Marketing </h4>
              <p></p>
              <div className="course-details">
                <p>Lessons: 18</p>
                <p>Duration: 7 weeks</p>
              </div>
            </div>

            <div className="course-item">
              <h4> Devops Engineering</h4>
              <p></p>
              <div className="course-details">
                <p>Lessons: 18</p>
                <p>Duration: 7 weeks</p>
              </div>
            </div>

            <div className="course-item">
              <h4> Product Design </h4>
              <p></p>
              <div className="course-details">
                <p>Lessons: 18</p>
                <p>Duration: 7 weeks</p>
              </div>
            </div>

             <div className="course-item">
              <h4> Database Administraion  </h4>
              <p></p>
              <div className="course-details">
                <p>Lessons: 18</p>
                <p>Duration: 7 weeks</p>
              </div>
            </div>

             <div className="course-item">
              <h4> Surveillance Systems  </h4>
              <p></p>
              <div className="course-details">
                <p>Lessons: 18</p>
                <p>Duration: 7 weeks</p>
              </div>
            </div>

             <div className="course-item">
              <h4> Cybersecurity </h4>
              <p></p>
              <div className="course-details">
                <p>Lessons: 18</p>
                <p>Duration: 7 weeks</p>
              </div>
            </div>

            

          </div>
        </section>
      </div>
    </div>
  );
}
