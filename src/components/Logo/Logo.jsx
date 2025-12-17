import { Car } from 'lucide-react'
import styles from './Logo.module.scss'

function Logo({ size = 'medium' }) {
  return (
    <div className={`${styles.logo} ${styles[size]}`}>
      <div className={styles.logoContent}>
        <div className={styles.logoText}>
          <span className={styles.logoTextFirst}>g</span>
          <span className={styles.logoTextRest}>oinsyn</span>
          <span className={styles.logoTextRest}>c</span>
          <div className={styles.logoWheelsIcon}>
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="12" cy="12" r="8" stroke="currentColor" strokeWidth="2" fill="none"/>
              <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.5" fill="none"/>
              <circle cx="12" cy="12" r="1.5" fill="currentColor"/>
              <line x1="12" y1="4" x2="12" y2="8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
              <line x1="12" y1="16" x2="12" y2="20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
              <line x1="4" y1="12" x2="8" y2="12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
              <line x1="16" y1="12" x2="20" y2="12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
            </svg>
          </div>
          <div className={styles.logoTextIcon}>
            <Car size="100%" strokeWidth={2.5} />
          </div>
        </div>
        <div className={styles.logoSlogan}>
          <span className={styles.sloganText}>Stay Connected, Stay Synced</span>
        </div>
      </div>
    </div>
  )
}

export default Logo

