import React from "react";
import '../css/home.css';
import '../css/student_payment.css';
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



export default function Student_payment(){
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
				                  <a href="/dashboard">
				                    <img src={dashboard} alt="Dashboard" className="sidebar-icon" />
				                    Dashboard
				                  </a>
				                </li>
				                <li>
				                  <a href="">
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
				                  <a href="">
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
				                  <a href="">
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
			        <section className="student-payment-home">
			        	<div className="sp-title">
			           		<h4>Fees Reciept</h4>
			           		<p>Students / <span>Fees Receipt</span></p>
			           	</div>
			           	<div className="reciept-home">
			           		<div className="reciept-title">
			           			<p><strong>01/01/2025</strong></p>
			           			<p id="reciept-p"><strong>Status:</strong> Paid</p>
			           		</div>
			           		<div className="reciept">
			           			<div className="reciept-address">
				           			<div className="address-from">
				           				<h5>From:</h5>
				           				<p><strong>Nugi Innovations</strong></p>
				           				<p>Solomom Ikpa street</p>
				           				<p>Email: info@example.com</p>
				           				<p>Phone: +01 123 456 7890</p>
				           			</div>
				           			<div className="address-to">
				           				<h5>To:</h5>
				           				<p><strong>Jacinta Bisong</strong></p>
				           				<p>#9 Ekpo Iso street</p>
				           				<p>Email: info@example.com</p>
				           				<p>Phone: +01 123 456 7890</p>
				           			</div>
				           		</div>
				           		<div className="student-table">
				           			<table >
				           				<tr>
				           					<th style={{paddingBottom: "8px"}}>Name</th>
				           					<th style={{paddingBottom: "8px"}}>Course</th>
				           					<th style={{paddingBottom: "8px"}}>Duration</th>
				           					<th style={{paddingBottom: "8px"}}>Date</th>
				           					<th style={{paddingBottom: "8px"}}>Amount</th>
				           				</tr>
				           				<tr style={{backgroundColor: "rgba(200, 200, 200, 0.3)"}}>
				           					<td style={{color: "black"}}>Jacinta Bisong</td>
				           					<td style={{color: "black"}}>Web Development</td>
				           					<td style={{color: "black"}}>6 months</td>
				           					<td style={{color: "black"}}>01/01/2025</td>
				           					<td style={{color: "black"}}>123456789</td>
				           				</tr>
				           			</table>
				           			<p id="total-p"><strong>Total:</strong> 123456789</p>
				           		</div>
				           		<button>Report an issue</button>
			           		</div>
			           	</div>
			        </section>
		        </div>
		    </div>
		</>
	)
}