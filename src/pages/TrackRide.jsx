import { useState } from 'react'
import { MapPin, Clock, Car, Phone } from 'lucide-react'
import './TrackRide.css'

function TrackRide({ user }) {
  const [rideId, setRideId] = useState('')
  const [tracking, setTracking] = useState(false)
  const [rideData, setRideData] = useState(null)

  const handleTrack = () => {
    if (!rideId) {
      alert('Please enter a ride ID')
      return
    }
    setTracking(true)
    // Simulate tracking data
    setTimeout(() => {
      setRideData({
        id: rideId,
        driver: 'John Doe',
        vehicle: 'Toyota Camry',
        plate: 'ABC-1234',
        phone: '+1 234-567-8900',
        status: 'on-the-way',
        eta: '5 minutes',
        distance: '2.5 km',
        pickup: '123 Main St',
        dropoff: '456 Oak Ave'
      })
    }, 1000)
  }

  return (
    <div className="track-ride">
      <div className="container">
        <h1 className="page-title">Track Your Ride</h1>
        
        <div className="track-container">
          <div className="track-form">
            <div className="form-group">
              <label>Ride ID</label>
              <input
                type="text"
                placeholder="Enter your ride ID"
                value={rideId}
                onChange={(e) => setRideId(e.target.value)}
              />
              <button onClick={handleTrack} className="btn btn-primary">
                Track Ride
              </button>
            </div>
          </div>

          {tracking && rideData && (
            <div className="tracking-info">
              <div className="status-badge status-on-way">
                Driver On The Way
              </div>

              <div className="driver-card">
                <div className="driver-avatar">
                  <Car size={32} />
                </div>
                <div className="driver-info">
                  <h3>{rideData.driver}</h3>
                  <p>{rideData.vehicle} • {rideData.plate}</p>
                  <div className="driver-contact">
                    <Phone size={18} />
                    <span>{rideData.phone}</span>
                  </div>
                </div>
              </div>

              <div className="ride-details">
                <div className="detail-item">
                  <MapPin size={20} />
                  <div>
                    <div className="detail-label">Pickup</div>
                    <div className="detail-value">{rideData.pickup}</div>
                  </div>
                </div>
                <div className="detail-item">
                  <MapPin size={20} />
                  <div>
                    <div className="detail-label">Dropoff</div>
                    <div className="detail-value">{rideData.dropoff}</div>
                  </div>
                </div>
                <div className="detail-item">
                  <Clock size={20} />
                  <div>
                    <div className="detail-label">ETA</div>
                    <div className="detail-value">{rideData.eta}</div>
                  </div>
                </div>
                <div className="detail-item">
                  <Car size={20} />
                  <div>
                    <div className="detail-label">Distance</div>
                    <div className="detail-value">{rideData.distance}</div>
                  </div>
                </div>
              </div>

              <div className="map-placeholder">
                <div className="map-content">
                  <MapPin size={48} />
                  <p>Live Map View</p>
                  <small>Driver location will appear here</small>
                </div>
              </div>
            </div>
          )}

          {tracking && !rideData && (
            <div className="loading">
              <div className="spinner"></div>
              <p>Tracking your ride...</p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default TrackRide

