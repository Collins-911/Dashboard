import React from 'react';
import '../../css/profile.css';
import cimage from '../../assets/cimage.png';
import { FaUser, FaPhone, FaIdCard, FaRedoAlt } from 'react-icons/fa';
import { FiEdit } from 'react-icons/fi';
import { useNavigate, Link } from 'react-router-dom'; // ✅ Import Link

export function Home() {
  const navigate = useNavigate();
  const editclick = () => {
    navigate('/student');
  };


}

export default function Profile() {
  return (
    <div className="profile-wrapper">
      <div className="merged-card">
        <div className="card-top-nav">
          <Link to="/profile" className="nav-item active">
            <FaUser className="nav-icon green" />
            <span>Profile</span>
          </Link>
          <Link to="/edit-profile" className="nav-item">
            <FiEdit className="nav-icon purple" />
            <span>Edit Profile</span>
          </Link>
          <Link to="/reset-password" className="nav-item">
            <FaRedoAlt className="nav-icon violet" />
            <span>Reset Password</span>
          </Link>
        </div>

        <div className="card-content">
          <div className="profile-left">
            <img
              src="https://i.ytimg.com/vi/DEGvXTJ5JPA/maxresdefault.jpg"
              alt="Profile"
              className="profile-pic"
            />
            <h2>Akpan Idara</h2>
            <p>excellencennamso@gmail.com</p>
            <p>United States</p>
          </div>

          <div className="profile-right">
            <div className="info-row">
              <span>Name:</span> <strong>Akpan Idara</strong>
            </div>
            <div className="info-row">
              <span>Role:</span> <strong>Student</strong>
            </div>
            <div className="info-row">
              <span>Email:</span> <strong>excellencennamso@gmail.com</strong>
            </div>
            <div className="info-row">
              <span>Email verification:</span>{' '}
              <strong className="pending">Pend</strong>
            </div>
            <div className="info-row">
              <span>Contact:</span> <strong>09092651280</strong>
            </div>
            <div className="info-row">
              <span>Mobile verification:</span>{' '}
              <strong className="active">Active</strong>
            </div>
            <div className="info-row">
              <span>Status:</span> <strong className="active">Active</strong>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
