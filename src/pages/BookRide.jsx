import { useState } from 'react'
import { MapPin, Calendar, Clock, Car, CreditCard } from 'lucide-react'
import './BookRide.css'

function BookRide({ user }) {
  const [pickup, setPickup] = useState('')
  const [dropoff, setDropoff] = useState('')
  const [vehicleType, setVehicleType] = useState('standard')
  const [date, setDate] = useState('')
  const [time, setTime] = useState('')
  const [paymentMethod, setPaymentMethod] = useState('card')
  const [showPayment, setShowPayment] = useState(false)

  const vehicleTypes = [
    { id: 'standard', name: 'Standard', price: 15, icon: '🚗' },
    { id: 'premium', name: 'Premium', price: 25, icon: '🚙' },
    { id: 'luxury', name: 'Luxury', price: 40, icon: '🏎️' },
    { id: 'suv', name: 'SUV', price: 30, icon: '🚙' }
  ]

  const handleBook = (e) => {
    e.preventDefault()
    if (!pickup || !dropoff) {
      alert('Please enter pickup and dropoff locations')
      return
    }
    setShowPayment(true)
  }

  const handlePayment = () => {
    alert('Ride booked successfully! Your driver will arrive soon.')
    setPickup('')
    setDropoff('')
    setDate('')
    setTime('')
    setShowPayment(false)
  }

  const selectedVehicle = vehicleTypes.find(v => v.id === vehicleType)

  return (
    <div className="book-ride">
      <div className="container">
        <h1 className="page-title">Book Your Ride</h1>
        
        <div className="booking-container">
          <form className="booking-form" onSubmit={handleBook}>
            <div className="form-group">
              <label>
                <MapPin size={20} />
                Pickup Location
              </label>
              <input
                type="text"
                placeholder="Enter pickup address"
                value={pickup}
                onChange={(e) => setPickup(e.target.value)}
                required
              />
            </div>

            <div className="form-group">
              <label>
                <MapPin size={20} />
                Dropoff Location
              </label>
              <input
                type="text"
                placeholder="Enter dropoff address"
                value={dropoff}
                onChange={(e) => setDropoff(e.target.value)}
                required
              />
            </div>

            <div className="form-row">
              <div className="form-group">
                <label>
                  <Calendar size={20} />
                  Date
                </label>
                <input
                  type="date"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                />
              </div>

              <div className="form-group">
                <label>
                  <Clock size={20} />
                  Time
                </label>
                <input
                  type="time"
                  value={time}
                  onChange={(e) => setTime(e.target.value)}
                />
              </div>
            </div>

            <div className="form-group">
              <label>
                <Car size={20} />
                Vehicle Type
              </label>
              <div className="vehicle-options">
                {vehicleTypes.map(vehicle => (
                  <div
                    key={vehicle.id}
                    className={`vehicle-option ${vehicleType === vehicle.id ? 'selected' : ''}`}
                    onClick={() => setVehicleType(vehicle.id)}
                  >
                    <span className="vehicle-icon">{vehicle.icon}</span>
                    <div>
                      <div className="vehicle-name">{vehicle.name}</div>
                      <div className="vehicle-price">${vehicle.price}/km</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {!showPayment && (
              <button type="submit" className="btn btn-primary btn-large">
                Continue to Payment
              </button>
            )}
          </form>

          {showPayment && (
            <div className="payment-section">
              <h2>Payment Details</h2>
              <div className="ride-summary">
                <div className="summary-item">
                  <span>Pickup:</span>
                  <span>{pickup}</span>
                </div>
                <div className="summary-item">
                  <span>Dropoff:</span>
                  <span>{dropoff}</span>
                </div>
                <div className="summary-item">
                  <span>Vehicle:</span>
                  <span>{selectedVehicle.name}</span>
                </div>
                <div className="summary-item total">
                  <span>Estimated Fare:</span>
                  <span>${selectedVehicle.price * 5}</span>
                </div>
              </div>

              <div className="payment-methods">
                <div
                  className={`payment-option ${paymentMethod === 'card' ? 'selected' : ''}`}
                  onClick={() => setPaymentMethod('card')}
                >
                  <CreditCard size={24} />
                  <span>Credit/Debit Card</span>
                </div>
                <div
                  className={`payment-option ${paymentMethod === 'cash' ? 'selected' : ''}`}
                  onClick={() => setPaymentMethod('cash')}
                >
                  💵 Cash
                </div>
                <div
                  className={`payment-option ${paymentMethod === 'wallet' ? 'selected' : ''}`}
                  onClick={() => setPaymentMethod('wallet')}
                >
                  💳 Wallet
                </div>
              </div>

              {paymentMethod === 'card' && (
                <div className="card-details">
                  <input type="text" placeholder="Card Number" />
                  <div className="card-row">
                    <input type="text" placeholder="MM/YY" />
                    <input type="text" placeholder="CVV" />
                  </div>
                </div>
              )}

              <div className="payment-actions">
                <button onClick={() => setShowPayment(false)} className="btn btn-secondary">
                  Back
                </button>
                <button onClick={handlePayment} className="btn btn-primary">
                  Confirm Booking
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default BookRide

