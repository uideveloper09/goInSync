import { Link, useNavigate } from 'react-router-dom'
import { Menu, X, User, LogOut, Phone, Mail, Home, Car, Settings, Users as UsersIcon, FileText, Headphones, Facebook, Twitter, Instagram, Linkedin, Clock, LogIn } from 'lucide-react'
import { useState } from 'react'
import Logo from '../Logo'
import styles from './Header.module.scss'

function Header({ user, userType, setUser, setUserType }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const navigate = useNavigate()

  const handleLogout = () => {
    setUser(null)
    setUserType(null)
    navigate('/')
  }

  return (
    <>
      <div className={styles.topBar}>
        <div className={styles.topBarContent}>
          <div className={styles.contactInfo}>
            <a href="mailto:inquiry@goinsync.com" className={styles.contactLink}>
              <Mail size={16} />
              inquiry@goinsync.com
            </a>
            <a href="tel:+919540051954" className={styles.contactLink}>
              <Phone size={16} />
              +91-9540051954
            </a>
            <span className={styles.supportText}>
              <Clock size={16} />
              24 x 7 x 365 days
            </span>
          </div>
          <div className={styles.topBarActions}>
            {user ? (
              <>
                <Link to="/profile" className={styles.topBarLink}>
                  <User size={16} />
                  Profile
                </Link>
                <button onClick={handleLogout} className={styles.topBarLink}>
                  <LogOut size={16} />
                  Logout
                </button>
              </>
            ) : (
              <>
                <Link to="/login" className={styles.topBarLink}>
                  <LogIn size={16} />
                  Login
                </Link>
                <Link to="/register" className={styles.topBarLink}>
                  <Car size={16} />
                  Register
                </Link>
              </>
            )}
            <div className={styles.socialLinks}>
              <span>Follow Us:</span>
              <a href="#"><Facebook size={16} /></a>
              <a href="#"><Twitter size={16} /></a>
              <a href="#"><Instagram size={16} /></a>
              <a href="#"><Linkedin size={16} /></a>
            </div>
          </div>
        </div>
      </div>

      <header className={styles.header}>
        <div className={styles.container}>
          <Link to="/" className={styles.logo}>
            <Logo size="medium" />
          </Link>

          <nav className={`${styles.nav} ${mobileMenuOpen ? styles.navOpen : ''}`}>
            <Link to="/" className={styles.navLink}>
              <Home size={18} />
              HOME
            </Link>
            <Link to="/corporate" className={styles.navLink}>
              <Car size={18} />
              CORPORATE CAR RENTAL
            </Link>
            <div className={styles.dropdown}>
              <span className={styles.navLink}>
                <Settings size={18} />
                SERVICES
              </span>
              <div className={styles.dropdownMenu}>
                <Link to="/services/car-rental" className={styles.dropdownItem}>Car Rental</Link>
                <Link to="/services/outstation" className={styles.dropdownItem}>Outstation</Link>
                <Link to="/services/airport-transfer" className={styles.dropdownItem}>Airport Transfer</Link>
                <Link to="/services/employee-transfer" className={styles.dropdownItem}>Employee Transfer Service</Link>
              </div>
            </div>
            <Link to="/about" className={styles.navLink}>
              <UsersIcon size={18} />
              ABOUT US
            </Link>
            <Link to="/blog" className={styles.navLink}>
              <FileText size={18} />
              BLOG
            </Link>
            <Link to="/contact" className={styles.navLink}>
              <Headphones size={18} />
              CONTACT US
            </Link>
          </nav>

          <button 
            className={styles.mobileMenuBtn}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </header>
    </>
  )
}

export default Header
