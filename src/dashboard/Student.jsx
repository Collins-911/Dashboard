import React from "react";
import '../css/home.css';
import '../css/student.css';
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



export default function Student(){
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
			                  <a href="/assessments">
			                    <img src={student} className="sidebar-icon" />
			                    Staffs
			                  </a>
			                </li>
			              </div>

			              <div className="sidebar-section">
			                <p className="sidebar-heading">Tools</p>
			                <li>
			                  <a href="/courses">
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
			                  <a href="/assessments">
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
			        <section className="student-home">
			           	<div className="student-title">
			           		<h4>All Students</h4>
			           		<p>Students / <span>All students</span></p>
			           	</div>
			           	<div className="student-list">
			           		<div className="list-title">
			           			<h3>All students list</h3>
			           		</div>
			           		<div className="student-table">
			           			<table >
			           				<tr>
			           					<th>Profile</th>
			           					<th>Name</th>
			           					<th>Course</th>
			           					<th>Mobile</th>
			           					<th>Email</th>
			           					<th>Admission Date</th>
			           				</tr>
			           				<tr>
			           					<td>image</td>
			           					<td>person1</td>
			           					<td>course1</td>
			           					<td>123456789</td>
			           					<td>email address</td>
			           					<td>12222222</td>
			           				</tr>
			           				<tr>
			           					<td>image</td>
			           					<td>person2</td>
			           					<td>course2</td>
			           					<td>123456789</td>
			           					<td>email address</td>
			           					<td>12222222</td>
			           				</tr>
			           				<tr>
			           					<td>image</td>
			           					<td>person3</td>
			           					<td>course3</td>
			           					<td>123456789</td>
			           					<td>email address</td>
			           					<td>12222222</td>
			           				</tr>
			           				<tr>
			           					<td>image</td>
			           					<td>person4</td>
			           					<td>course4</td>
			           					<td>123456789</td>
			           					<td>email address</td>
			           					<td>12222222</td>
			           				</tr>
			           				<tr>
			           					<td>image</td>
			           					<td>person5</td>
			           					<td>course5</td>
			           					<td>123456789</td>
			           					<td>email address</td>
			           					<td>12222222</td>
			           				</tr>
			           				<tr>
			           					<td>image</td>
			           					<td>person6</td>
			           					<td>course6</td>
			           					<td>123456789</td>
			           					<td>email address</td>
			           					<td>12222222</td>
			           				</tr>
			           				<tr>
			           					<td>image</td>
			           					<td>person7</td>
			           					<td>course7</td>
			           					<td>123456789</td>
			           					<td>email address</td>
			           					<td>12222222</td>
			           				</tr>
			           				<tr>
			           					<td>image</td>
			           					<td>person8</td>
			           					<td>course8</td>
			           					<td>123456789</td>
			           					<td>email address</td>
			           					<td>12222222</td>
			           				</tr>
			           				<tr>
			           					<td>image</td>
			           					<td>person9</td>
			           					<td>course9</td>
			           					<td>123456789</td>
			           					<td>email address</td>
			           					<td>12222222</td>
			           				</tr>
			           				<tr>
			           					<td>image</td>
			           					<td>person10</td>
			           					<td>course10</td>
			           					<td>123456789</td>
			           					<td>email address</td>
			           					<td>12222222</td>
			           				</tr>
			           			</table>
			           			<div className="list-btn">
			           				<button style={{backgroundColor: "rgba(200, 200, 200, 0.7)"}}>Previous</button>
			           				<button style={{backgroundColor: "rgba(15, 1, 122)", color: "white", width: "40px"}}>1</button>
			           				<button style={{backgroundColor: "rgba(200, 200, 200, 0.7)", width: "40px"}}>2</button>
			           				<button style={{backgroundColor: "rgba(200, 200, 200, 0.7)", width: "40px"}}>3</button>
			           				<button style={{backgroundColor: "rgba(15, 1, 122)", color: "white"}}>Next</button>
			           			</div>
			           		</div>
			           	</div>
		          </section>
		        </div>
	      	</div>
		</>
	)
}