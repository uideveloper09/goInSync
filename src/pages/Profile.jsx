import { useState } from 'react'
import { User, Mail, Phone, MapPin, Edit2, Save } from 'lucide-react'
import './Profile.css'

function Profile({ user }) {
  const [editing, setEditing] = useState(false)
  const [profileData, setProfileData] = useState({
    name: user?.name || 'John Doe',
    email: user?.email || 'john@example.com',
    phone: user?.phone || '+1 234-567-8900',
    address: '123 Main St, City, State 12345'
  })

  const handleSave = () => {
    setEditing(false)
    alert('Profile updated successfully!')
  }

  return (
    <div className="profile-page">
      <div className="container">
        <h1 className="page-title">My Profile</h1>
        
        <div className="profile-container">
          <div className="profile-header">
            <div className="avatar">
              <User size={48} />
            </div>
            <h2>{profileData.name}</h2>
            <button
              onClick={() => editing ? handleSave() : setEditing(true)}
              className="edit-btn"
            >
              {editing ? <Save size={20} /> : <Edit2 size={20} />}
              {editing ? 'Save' : 'Edit'}
            </button>
          </div>

          <div className="profile-details">
            <div className="detail-card">
              <div className="detail-icon">
                <User size={24} />
              </div>
              <div className="detail-content">
                <label>Full Name</label>
                {editing ? (
                  <input
                    type="text"
                    value={profileData.name}
                    onChange={(e) => setProfileData({...profileData, name: e.target.value})}
                  />
                ) : (
                  <p>{profileData.name}</p>
                )}
              </div>
            </div>

            <div className="detail-card">
              <div className="detail-icon">
                <Mail size={24} />
              </div>
              <div className="detail-content">
                <label>Email</label>
                {editing ? (
                  <input
                    type="email"
                    value={profileData.email}
                    onChange={(e) => setProfileData({...profileData, email: e.target.value})}
                  />
                ) : (
                  <p>{profileData.email}</p>
                )}
              </div>
            </div>

            <div className="detail-card">
              <div className="detail-icon">
                <Phone size={24} />
              </div>
              <div className="detail-content">
                <label>Phone</label>
                {editing ? (
                  <input
                    type="tel"
                    value={profileData.phone}
                    onChange={(e) => setProfileData({...profileData, phone: e.target.value})}
                  />
                ) : (
                  <p>{profileData.phone}</p>
                )}
              </div>
            </div>

            <div className="detail-card">
              <div className="detail-icon">
                <MapPin size={24} />
              </div>
              <div className="detail-content">
                <label>Address</label>
                {editing ? (
                  <input
                    type="text"
                    value={profileData.address}
                    onChange={(e) => setProfileData({...profileData, address: e.target.value})}
                  />
                ) : (
                  <p>{profileData.address}</p>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Profile

