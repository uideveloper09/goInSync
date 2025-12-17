import { MapPin, Clock, DollarSign, Star } from 'lucide-react'
import './RideHistory.css'

function RideHistory({ user }) {
  const rides = [
    {
      id: '1',
      date: '2024-01-15',
      time: '10:30 AM',
      pickup: '123 Main St',
      dropoff: '456 Oak Ave',
      fare: '$25',
      driver: 'John Driver',
      rating: 5,
      status: 'completed'
    },
    {
      id: '2',
      date: '2024-01-14',
      time: '2:15 PM',
      pickup: '789 Pine Rd',
      dropoff: '321 Elm St',
      fare: '$18',
      driver: 'Jane Driver',
      rating: 4,
      status: 'completed'
    },
    {
      id: '3',
      date: '2024-01-13',
      time: '8:45 AM',
      pickup: '555 Broadway',
      dropoff: '777 Market St',
      fare: '$32',
      driver: 'Mike Driver',
      rating: 5,
      status: 'completed'
    }
  ]

  return (
    <div className="ride-history">
      <div className="container">
        <h1 className="page-title">Ride History</h1>
        
        <div className="history-container">
          {rides.length === 0 ? (
            <div className="empty-state">
              <p>No ride history yet</p>
            </div>
          ) : (
            <div className="rides-list">
              {rides.map(ride => (
                <div key={ride.id} className="ride-card">
                  <div className="ride-header">
                    <div>
                      <div className="ride-date">{ride.date}</div>
                      <div className="ride-time">{ride.time}</div>
                    </div>
                    <div className={`status-badge status-${ride.status}`}>
                      {ride.status}
                    </div>
                  </div>

                  <div className="ride-details">
                    <div className="detail-item">
                      <MapPin size={20} />
                      <div>
                        <div className="detail-label">Pickup</div>
                        <div className="detail-value">{ride.pickup}</div>
                      </div>
                    </div>
                    <div className="detail-item">
                      <MapPin size={20} />
                      <div>
                        <div className="detail-label">Dropoff</div>
                        <div className="detail-value">{ride.dropoff}</div>
                      </div>
                    </div>
                    <div className="detail-item">
                      <DollarSign size={20} />
                      <div>
                        <div className="detail-label">Fare</div>
                        <div className="detail-value">{ride.fare}</div>
                      </div>
                    </div>
                    <div className="detail-item">
                      <div className="driver-info">
                        <div className="detail-label">Driver</div>
                        <div className="detail-value">{ride.driver}</div>
                        <div className="rating">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              size={16}
                              className={i < ride.rating ? 'filled' : ''}
                            />
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default RideHistory

