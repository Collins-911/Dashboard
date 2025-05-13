import React, { useState } from "react";
import "../../css/edit-profile.css";

export default function EditProfile() {
  const [formData, setFormData] = useState({
    name: "Akpan Idara",
    email: "excellencennamso@gmail.com",
    phone: "09092651280",
    country: "Nigeria",
    role: "Student",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSave = () => {
    alert("Profile updated!");
   
  };

  const handleCancel = () => {
    alert("Changes canceled.");
    
  };

  return (
    <div className="edit-profile-wrapper">
      <div className="edit-card">
        <h2>Edit Profile</h2>
        <div className="edit-profile-pic">
          <img
            src="https://i.ytimg.com/vi/DEGvXTJ5JPA/maxresdefault.jpg"
            alt="Profile"
          />
          <button className="change-pic-btn">Change Photo</button>
        </div>
        <form className="edit-form">
          <div className="input-row">
            <label>Full Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
            />
          </div>
          <div className="input-row">
            <label>Email Address</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
          </div>
          <div className="input-row">
            <label>Phone Number</label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
            />
          </div>
          <div className="input-row">
            <label>Country</label>
            <input
              type="text"
              name="country"
              value={formData.country}
              onChange={handleChange}
            />
          </div>
          <div className="input-row">
            <label>Role</label>
            <input
              type="text"
              name="role"
              value={formData.role}
              onChange={handleChange}
            />
          </div>
        </form>
        <div className="edit-buttons">
          <button className="save-btn" onClick={handleSave}>Save</button>
          <button className="cancel-btn" onClick={handleCancel}>Cancel</button>
        </div>
      </div>
    </div>
  );
}
