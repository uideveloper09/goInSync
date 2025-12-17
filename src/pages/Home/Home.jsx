import { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { MapPin, Clock, Shield, Star, Car, Plane, Users, CheckCircle, MessageCircle, ChevronLeft, ChevronRight } from 'lucide-react'
import BookingForm from '../../components/BookingForm'
import Footer from '../../components/Footer'
import styles from './Home.module.scss'

function Home() {
  const [activeTab, setActiveTab] = useState('airport')
  const [currentSlide, setCurrentSlide] = useState(0)
  const carouselRef = useRef(null)

  const bannerImages = [
    { id: 1, image: '/banners/banner1.png' },
    { id: 2, image: '/banners/banner2.png' },
    { id: 3, image: '/banners/banner3.png' },
    { id: 4, image: '/banners/banner4.png' },
    { id: 5, image: '/banners/banner5.png' },
    { id: 6, image: '/banners/banner6.png' }
  ].filter(banner => {
    // Only include banners that exist - for now all are included
    // You can add image existence check here if needed
    return true
  })

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % bannerImages.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [bannerImages.length])

  const goToSlide = (index) => {
    setCurrentSlide(index)
  }

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % bannerImages.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + bannerImages.length) % bannerImages.length)
  }

  const services = [
    {
      icon: <MapPin size={32} />,
      title: 'Intercity & Outstation Rentals',
      description: 'Flexible, chauffeur-driven car rentals for business travel across cities—perfect for meetings, site visits, or corporate tours'
    },
    {
      icon: <Car size={32} />,
      title: 'Daily & On-Demand Car Rentals',
      description: 'Reliable local travel options for employees—ideal for client meetings, hotel transfers, or routine business errands.'
    },
    {
      icon: <Plane size={32} />,
      title: 'Airport Transfer',
      description: 'Our Airport Transfers provide reliable and timely airport transfer services. Whether you\'re arriving or departing, enjoy stress-free travel.'
    },
    {
      icon: <Users size={32} />,
      title: 'Executive Airport Transfers',
      description: 'Ensure seamless airport commutes for your executives, VIP guests, and employees with our professional chauffeurs and 24/7 service support.'
    }
  ]

  const features = [
    {
      icon: <CheckCircle size={32} />,
      title: 'Trained Chauffeurs',
      description: 'Our Chauffeurs have experience and knowledge of routes so that you can sit back and relax'
    },
    {
      icon: <Shield size={32} />,
      title: 'Travel Safety Guarantee',
      description: 'Traveler\'s can sit back and enjoy long drives without worrying about driving'
    },
    {
      icon: <Clock size={32} />,
      title: 'Zero Cancellation',
      description: 'We have seamless pricing policies thus we don\'t believe in extracting any other hidden charges'
    },
    {
      icon: <Star size={32} />,
      title: 'Neat and Clean Cabs',
      description: 'Well maintained and Clean Cars that makes even your long journey easy. We believe in offering you a doorstep pick up and drop facility.'
    }
  ]

  const testimonials = [
    { name: 'Sylvia H Green', role: 'Customer', text: 'There are many variations of passages available but the majority have suffered to the alteration in some injected.' },
    { name: 'Gordo Novak', role: 'Customer', text: 'There are many variations of passages available but the majority have suffered to the alteration in some injected.' },
    { name: 'Reid E Butt', role: 'Customer', text: 'There are many variations of passages available but the majority have suffered to the alteration in some injected.' },
    { name: 'Parker Jimenez', role: 'Customer', text: 'There are many variations of passages available but the majority have suffered to the alteration in some injected.' }
  ]

  const processSteps = [
    { number: '01', title: 'Book a Ride', description: 'Fill out the booking form through our website.' },
    { number: '02', title: 'Confirm Your Ride', description: 'Our support team will contact you via email, phone, or whatsapp.' },
    { number: '03', title: 'Advance payment', description: 'The customer has to pay 30% in advance to confirm the ride.' },
    { number: '04', title: 'Enjoy the Ride', description: 'Reach your destination in a comfortable ride.' }
  ]

  return (
    <div className={styles.home}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroCarousel} ref={carouselRef}>
          <div className={styles.heroSlides}>
            {bannerImages.map((banner, index) => (
              <div 
                key={banner.id} 
                className={`${styles.heroSlide} ${index === currentSlide ? styles.active : ''}`}
              >
                <div 
                  className={styles.heroSlideImage}
                  style={{ 
                    backgroundImage: `url(${banner.image})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center bottom',
                    backgroundRepeat: 'no-repeat'
                  }}
                >
                  <div className={styles.heroContent}>
                    <h1 className={styles.heroTitle}>CORPORATE CAR RENTAL</h1>
                    <p className={styles.heroSubtitle}>
                      At an affordable price one of the great Luxury Car Hire Agency in India Since 1989 because of so many years of exposure, 
                      it is worth your trust 24-hour support before, during, and also after your trip
                    </p>
                    <div className={styles.heroButtons}>
                      <Link to="/about" className={styles.btnArrowLink}>About GoInSync</Link>
                      <Link to="/corporate" className={styles.btnArrowLink}>Learn more about our corporate services</Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Navigation Arrows */}
          <button 
            className={styles.carouselNav} 
            onClick={prevSlide}
            aria-label="Previous slide"
          >
            <ChevronLeft size={30} />
          </button>
          <button 
            className={`${styles.carouselNav} ${styles.carouselNavNext}`} 
            onClick={nextSlide}
            aria-label="Next slide"
          >
            <ChevronRight size={30} />
          </button>
          
          {/* Dots Indicator */}
          <div className={styles.carouselDots}>
            {bannerImages.map((_, index) => (
              <button
                key={index}
                className={`${styles.carouselDot} ${index === currentSlide ? styles.active : ''}`}
                onClick={() => goToSlide(index)}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Booking Form Section */}
      <section className={styles.bookingSection}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>EXPERIENCE THE CORPORATE CAB SERVICE</h2>
          <p className={styles.sectionSubtitle}>India's Largest Intercity, Local Cab and Employee transportation Services</p>
          
          <BookingForm activeTab={activeTab} onTabChange={setActiveTab} />
        </div>
      </section>

      {/* Services Section */}
      <section className={styles.servicesSection}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>Our Special Services</h2>
          <p className={styles.sectionSubtitle}>
            At GoInSync, we specialize in providing reliable and professional corporate car rental solutions in Mumbai and across India. 
            From hassle-free airport transfers to full-scale employee mobility management, we support your business with chauffeur-driven cars 
            tailored for every corporate need.
          </p>
          <div className={styles.servicesGrid}>
            {services.map((service, index) => (
              <div key={index} className={styles.serviceCard}>
                <div className={styles.serviceIcon}>{service.icon}</div>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className={styles.whyChooseSection}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>We Provide Dedicated Quality Service</h2>
          <p className={styles.sectionSubtitle}>
            GoInSync have delved into the fact that every voyage is a different feeling and placed with an impeccable story. 
            Every second of the clock, we are there to give you impeccable services.
          </p>
          <div className={styles.featuresGrid}>
            {features.map((feature, index) => (
              <div key={index} className={styles.featureCard}>
                <div className={styles.featureNumber}>{String(index + 1).padStart(2, '0')}</div>
                <div className={styles.featureIcon}>{feature.icon}</div>
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className={styles.testimonialsSection}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>What Our Client Say's</h2>
          <div className={styles.testimonialsGrid}>
            {testimonials.map((testimonial, index) => (
              <div key={index} className={styles.testimonialCard}>
                <MessageCircle className={styles.testimonialIcon} />
                <p className={styles.testimonialText}>"{testimonial.text}"</p>
                <div className={styles.testimonialAuthor}>
                  <h4>{testimonial.name}</h4>
                  <span>{testimonial.role}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Working Process Section */}
      <section className={styles.processSection}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>Our Working Process</h2>
          <div className={styles.processGrid}>
            {processSteps.map((step, index) => (
              <div key={index} className={styles.processCard}>
                <div className={styles.processNumber}>{step.number}</div>
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default Home
