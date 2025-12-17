import { useState } from 'react'
import { MapPin, Calendar, Clock } from 'lucide-react'
import styles from './BookingForm.module.scss'

function BookingForm({ activeTab = 'local', onTabChange }) {
  const [formData, setFormData] = useState({
    from: '',
    to: '',
    pickupDate: '',
    returnDate: '',
    pickupTime: '',
    returnTime: '',
    tripType: 'one-way' // one-way, round-trip
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle booking submission
    console.log('Booking submitted:', formData)
  }

  return (
    <div className={styles.formContainer}>
      <div className={styles.tabs}>
        <button 
          type="button"
          className={`${styles.tab} ${activeTab === 'airport' ? styles.active : ''}`}
          onClick={() => onTabChange && onTabChange('airport')}
        >
          Airport
        </button>
        <button 
          type="button"
          className={`${styles.tab} ${activeTab === 'local' ? styles.active : ''}`}
          onClick={() => onTabChange && onTabChange('local')}
        >
          Local
        </button>
        <button 
          type="button"
          className={`${styles.tab} ${activeTab === 'outstation' ? styles.active : ''}`}
          onClick={() => onTabChange && onTabChange('outstation')}
        >
          Outstation
        </button>
      </div>
      <form className={styles.bookingForm} onSubmit={handleSubmit}>
        <div className={styles.formRow}>
        <div className={styles.formGroup}>
          <input
            type="text"
            name="from"
            placeholder=" "
            value={formData.from}
            onChange={handleChange}
            required
          />
          <label>
            <MapPin size={18} />
            From
          </label>
        </div>

        <div className={styles.formGroup}>
          <input
            type="text"
            name="to"
            placeholder=" "
            value={formData.to}
            onChange={handleChange}
            required
          />
          <label>
            <MapPin size={18} />
            To
          </label>
        </div>

        <div className={styles.formGroup}>
          <input
            type="date"
            name="pickupDate"
            value={formData.pickupDate}
            onChange={handleChange}
            required
          />
          <label>
            <Calendar size={18} />
            Pickup Date
          </label>
        </div>

        {formData.tripType === 'round-trip' && (
          <div className={styles.formGroup}>
            <input
              type="date"
              name="returnDate"
              value={formData.returnDate}
              onChange={handleChange}
            />
            <label>
              <Calendar size={18} />
              Return Date
            </label>
          </div>
        )}

        <div className={styles.formGroup}>
          <select
            name="pickupTime"
            value={formData.pickupTime}
            onChange={handleChange}
            required
          >
            <option value=""> </option>
            {Array.from({ length: 48 }, (_, i) => {
              const hour = Math.floor(i / 2)
              const minute = i % 2 === 0 ? '00' : '30'
              const time24 = `${String(hour).padStart(2, '0')}:${minute}`
              const period = hour >= 12 ? 'PM' : 'AM'
              const hour12 = hour === 0 ? 12 : hour > 12 ? hour - 12 : hour
              const time12 = `${hour12}:${minute} ${period}`
              return (
                <option key={i} value={time24}>
                  {time12}
                </option>
              )
            })}
          </select>
          <label>
            <Clock size={18} />
            Pickup Time
          </label>
        </div>

        {formData.tripType === 'round-trip' && (
          <div className={styles.formGroup}>
            <select
              name="returnTime"
              value={formData.returnTime}
              onChange={handleChange}
            >
              <option value=""> </option>
              {Array.from({ length: 48 }, (_, i) => {
                const hour = Math.floor(i / 2)
                const minute = i % 2 === 0 ? '00' : '30'
                const time24 = `${String(hour).padStart(2, '0')}:${minute}`
                const period = hour >= 12 ? 'PM' : 'AM'
                const hour12 = hour === 0 ? 12 : hour > 12 ? hour - 12 : hour
                const time12 = `${hour12}:${minute} ${period}`
                return (
                  <option key={i} value={time24}>
                    {time12}
                  </option>
                )
              })}
            </select>
            <label>
              <Clock size={18} />
              Return Time
            </label>
          </div>
        )}
      </div>

      <div className={styles.formActions}>
        <div className={styles.tripType}>
          <label>
            <input
              type="radio"
              name="tripType"
              value="one-way"
              checked={formData.tripType === 'one-way'}
              onChange={handleChange}
            />
            One Way
          </label>
          <label>
            <input
              type="radio"
              name="tripType"
              value="round-trip"
              checked={formData.tripType === 'round-trip'}
              onChange={handleChange}
            />
            Round Trip
          </label>
        </div>
        <button type="submit" className={styles.submitBtn}>
          Book Now
        </button>
      </div>
    </form>
    </div>
  )
}

export default BookingForm

