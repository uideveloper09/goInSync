import { useState, useEffect } from 'react'
import { ArrowUp, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react'
import styles from './Footer.module.scss'

function Footer() {
  const [showScrollTop, setShowScrollTop] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className={styles.footer}>
      <div className={styles.footerContainer}>
        <div className={styles.footerLeft}>
          <p className={styles.copyright}>
            © Copyright {new Date().getFullYear()} <span className={styles.brandName}>GoInSync</span>. All Rights Reserved.
          </p>
        </div>
      </div>
      <button 
        className={styles.scrollTopBtn} 
        onClick={scrollToTop}
        aria-label="Scroll to top"
      >
        <ArrowUp size={20} />
      </button>
    </footer>
  )
}

export default Footer
