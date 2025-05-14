import React, { useState } from 'react';

const EditProfile = () => {
  const [profile, setProfile] = useState({
    fullName: 'Akpan Idara',
    email: 'excellencenamso@gmail.com',
    phone: '09092651280',
    country: 'Nigeria',
    role: 'Student',
    photo: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfile((prev) => ({ ...prev, [name]: value }));
  };

  const handlePhotoChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfile((prev) => ({ ...prev, photo: reader.result }));
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Saved:', profile);
    alert('Profile Saved!');
  };

  return (
    <div className="edit-profile-wrapper" style={{ maxWidth: 500, margin: '0 auto', padding: 20 }}>
      <div className="edit-card" style={{ padding: 20, borderRadius: 10, boxShadow: '0 0 10px #ccc', background: 'white' }}>
        <h2 style={{ textAlign: 'center' }}>Edit Profile</h2>
        <div className="edit-profile-pic" style={{ textAlign: 'center' }}>
          <img
            src={profile.photo || '/default-avatar.png'}
            alt="Profile"
            style={{ width: 120, height: 120, borderRadius: '50%', objectFit: 'cover' }}
          />
          <br />
          <label
            htmlFor="upload-photo"
            className="change-pic-btn"
            style={{
              display: 'inline-block',
              marginTop: 10,
              background: '#0f017a',
              color: '#fff',
              padding: '8px 12px',
              borderRadius: 5,
              cursor: 'pointer'
            }}
          >
            Change Photo
          </label>
          <input
            id="upload-photo"
            type="file"
            accept="image/*"
            onChange={handlePhotoChange}
            style={{ display: 'none' }}
          />
        </div>

        <form onSubmit={handleSubmit} className="edit-form">
          <div className="input-row" style={{ marginTop: 15 }}>
            <label>Full Name</label>
            <input
              name="fullName"
              value={profile.fullName}
              onChange={handleChange}
              required
              style={{ width: '100%', padding: 8, marginTop: 4 }}
            />
          </div>

          <div className="input-row" style={{ marginTop: 15 }}>
            <label>Email Address</label>
            <input
              name="email"
              type="email"
              value={profile.email}
              onChange={handleChange}
              required
              style={{ width: '100%', padding: 8, marginTop: 4 }}
            />
          </div>

          <div className="input-row" style={{ marginTop: 15 }}>
            <label>Phone Number</label>
            <input
              name="phone"
              value={profile.phone}
              onChange={handleChange}
              required
              style={{ width: '100%', padding: 8, marginTop: 4 }}
            />
          </div>

          <div className="input-row" style={{ marginTop: 15 }}>
            <label>Country</label>
            <input
              name="country"
              value={profile.country}
              onChange={handleChange}
              style={{ width: '100%', padding: 8, marginTop: 4 }}
            />
          </div>

          <div className="input-row" style={{ marginTop: 15 }}>
            <label>Role</label>
            <input
              name="role"
              value={profile.role}
              onChange={handleChange}
              style={{ width: '100%', padding: 8, marginTop: 4 }}
            />
          </div>

          <div className="edit-buttons" style={{ marginTop: 20, display: 'flex', justifyContent: 'space-between' }}>
            <button type="submit" style={{ background: '#0f017a', color: '#fff', padding: '10px 20px', borderRadius: 5, border: 'none' }}>
              Save
            </button>
            <button
              type="button"
              style={{ background: '#ccc', color: '#000', padding: '10px 20px', borderRadius: 5, border: 'none' }}
              onClick={() => alert('Cancelled!')}
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditProfile;
