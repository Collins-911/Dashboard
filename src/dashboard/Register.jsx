import React from "react";
import '../css/home.css';
import '../css/register.css';
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

export default function Register(){
	return(
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
				                  <a href="">
				                    <img src={dashboard} alt="Dashboard" className="sidebar-icon" />
				                    Dashboard
				                  </a>
				                </li>
				                <li>
				                  <a href="">
				                    <img src={student} alt="Courses" className="sidebar-icon" />
				                    Students
				                  </a>
				                </li>
				                <li>
				                  <a href="">
				                    <img src={assessments} alt="Assignments" className="sidebar-icon" />
				                    Courses
				                  </a>
				                </li>
				                <li>
				                  <a href="">
				                    <img src={assignment} alt="Assessments" className="sidebar-icon" />
				                    Curriculum
				                  </a>
				                </li>
				                <li>
				                  <a href="">
				                    <img src={student} className="sidebar-icon" />
				                    Staffs
				                  </a>
				                </li>
			              	</div>

			              	<div className="sidebar-section">
				                <p className="sidebar-heading">Tools</p>
				                <li>
				                  <a href="">
				                    <img src={book} alt="Courses" className="sidebar-icon" />
				                    Register Students
				                  </a>
				                </li>
				                <li>
				                  <a href="">
				                    <img src={assessments} alt="Assignments" className="sidebar-icon" />
				                    Add Courses
				                  </a>
				                </li>
				              	<li>
				                  <a href="">
				                    <img src={assignment} alt="Assessments" className="sidebar-icon" />
				                    Assessement
				                  </a> 
				                </li>
				                <li>
				                  <a href="">
				                    <img src={report} alt="Assessments" className="sidebar-icon" />
				                    Reports
				                  </a> 
				                </li>
				                <li>
				                  <a href="">
				                    <img src={payment} alt="Assessments" className="sidebar-icon" />
				                    Payment
				                  </a> 
				                </li>
				            </div>

			              	<div className="sidebar-section">
				                <p className="sidebar-heading">Account</p>
				                <li>
				                  <a href="">
				                    <img src={icon7} alt="Profile" className="sidebar-icon" />
				                    Profile
				                  </a>
				                </li>
				                <li>
				                  <a href="">
				                    <img src={setting} alt="Settings" className="sidebar-icon"/>
				                    Settings
				                  </a>
				                </li>
				                <li>
				                  <a href="">
				                    <img src={logout} alt="Logout" className="sidebar-icon"/>
				                    Logout
				                  </a>
				                </li>
			              	</div>
			            </ul>
			        </div>
			        <section className="register-home">
			        	<div className="register-title">
			           		<h4>Register Student</h4>
			           		<p>Students / <span>Register student</span></p>
			           	</div>
			           	<div className="register-form">
			           		<div className="list-title">
			           			<h3>Basic info</h3>
			           		</div>
					       <div className="r-form">
					       		<form action="/register" method="post">
									<div className="form-group">
										<label htmlFor="fullname">Full Name:</label>
										<input type="text" id="fullname" name="fullname" required />
									</div>

									<div className="form-group">
										<label htmlFor="email">Email Address:</label>
										<input type="email" id="email" name="email" required />
									</div>

									<div className="form-group">
										<label htmlFor="phonenumber">Phone Number:</label>
										<input type="text" id="phonenumber" name="phonenumber" required />
									</div>

									<div className="form-group">
										<label htmlFor="address">Address:</label>
										<input type="address" id="address" name="address" required />
									</div>
									
									<div className="form-group">
										<label htmlFor="course">Course:</label>
										<select id="course" className="form-select">
										    <option selected>---</option>
										    <option>Web Development</option>
										    <option>Data Analytics</option>
										    <option>Cyber Security</option>
										    <option>A.I</option>
									    </select>
									</div>

									<div className="form-group">
										<label htmlFor="registration_date">Registration Date:</label>
										<input type="date" id="registration_date" name="registration_date" required />
									</div>
								</form>
					       </div>
			           	</div>
			        </section>
		        </div>
	      	</div>
		</>
	)
}