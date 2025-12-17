import { useState } from 'react'
import { MapPin, Clock, DollarSign, CheckCircle, XCircle } from 'lucide-react'
import './DriverDashboard.css'

function DriverDashboard({ user }) {
  const [available, setAvailable] = useState(true)
  const [rides, setRides] = useState([
    {
      id: '1',
      pickup: '123 Main St',
      dropoff: '456 Oak Ave',
      distance: '5.2 km',
      fare: '$25',
      status: 'pending',
      customer: 'John Doe'
    },
    {
      id: '2',
      pickup: '789 Pine Rd',
      dropoff: '321 Elm St',
      distance: '3.8 km',
      fare: '$18',
      status: 'completed',
      customer: 'Jane Smith'
    }
  ])

  const handleAccept = (rideId) => {
    setRides(rides.map(ride => 
      ride.id === rideId ? {...ride, status: 'accepted'} : ride
    ))
  }

  const handleReject = (rideId) => {
    setRides(rides.filter(ride => ride.id !== rideId))
  }

  const handleComplete = (rideId) => {
    setRides(rides.map(ride => 
      ride.id === rideId ? {...ride, status: 'completed'} : ride
    ))
  }

  return (
    <div className="driver-dashboard">
      <div className="container">
        <div className="dashboard-header">
          <h1>Driver Dashboard</h1>
          <div className="availability-toggle">
            <span>Status: {available ? 'Available' : 'Offline'}</span>
            <button
              className={`toggle-btn ${available ? 'active' : ''}`}
              onClick={() => setAvailable(!available)}
            >
              {available ? 'Go Offline' : 'Go Online'}
            </button>
          </div>
        </div>

        <div className="stats-grid">
          <div className="stat-card">
            <DollarSign size={32} />
            <div>
              <div className="stat-value">$1,250</div>
              <div className="stat-label">Total Earnings</div>
            </div>
          </div>
          <div className="stat-card">
            <CheckCircle size={32} />
            <div>
              <div className="stat-value">45</div>
              <div className="stat-label">Completed Rides</div>
            </div>
          </div>
          <div className="stat-card">
            <Clock size={32} />
            <div>
              <div className="stat-value">4.8</div>
              <div className="stat-label">Rating</div>
            </div>
          </div>
        </div>

        <div className="rides-section">
          <h2>Ride Requests</h2>
          <div className="rides-list">
            {rides.map(ride => (
              <div key={ride.id} className="ride-card">
                <div className="ride-header">
                  <div className="ride-id">Ride #{ride.id}</div>
                  <div className={`status-badge status-${ride.status}`}>
                    {ride.status}
                  </div>
                </div>
                
                <div className="ride-details">
                  <div className="detail-row">
                    <MapPin size={18} />
                    <div>
                      <div className="detail-label">Pickup</div>
                      <div className="detail-value">{ride.pickup}</div>
                    </div>
                  </div>
                  <div className="detail-row">
                    <MapPin size={18} />
                    <div>
                      <div className="detail-label">Dropoff</div>
                      <div className="detail-value">{ride.dropoff}</div>
                    </div>
                  </div>
                  <div className="detail-row">
                    <Clock size={18} />
                    <div>
                      <div className="detail-label">Distance</div>
                      <div className="detail-value">{ride.distance}</div>
                    </div>
                  </div>
                  <div className="detail-row">
                    <DollarSign size={18} />
                    <div>
                      <div className="detail-label">Fare</div>
                      <div className="detail-value">{ride.fare}</div>
                    </div>
                  </div>
                </div>

                <div className="ride-actions">
                  {ride.status === 'pending' && (
                    <>
                      <button
                        onClick={() => handleAccept(ride.id)}
                        className="btn btn-accept"
                      >
                        <CheckCircle size={18} />
                        Accept
                      </button>
                      <button
                        onClick={() => handleReject(ride.id)}
                        className="btn btn-reject"
                      >
                        <XCircle size={18} />
                        Reject
                      </button>
                    </>
                  )}
                  {ride.status === 'accepted' && (
                    <button
                      onClick={() => handleComplete(ride.id)}
                      className="btn btn-complete"
                    >
                      Complete Ride
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default DriverDashboard

