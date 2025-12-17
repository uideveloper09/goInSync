import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import { useState } from 'react'
import Header from './components/Header'
import Home from './pages/Home'
import BookRide from './pages/BookRide'
import TrackRide from './pages/TrackRide'
import Login from './pages/Login'
import Register from './pages/Register'
import Profile from './pages/Profile'
import DriverDashboard from './pages/DriverDashboard'
import AdminDashboard from './pages/AdminDashboard'
import RideHistory from './pages/RideHistory'
import styles from './App.module.scss'

function App() {
  const [user, setUser] = useState(null)
  const [userType, setUserType] = useState(null) // 'customer', 'driver', 'admin'

  return (
    <Router>
      <div className={styles.app}>
        <Header user={user} userType={userType} setUser={setUser} setUserType={setUserType} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/book" element={<BookRide user={user} />} />
          <Route path="/track" element={<TrackRide user={user} />} />
          <Route path="/login" element={<Login setUser={setUser} setUserType={setUserType} />} />
          <Route path="/register" element={<Register setUser={setUser} setUserType={setUserType} />} />
          <Route 
            path="/profile" 
            element={user ? <Profile user={user} /> : <Navigate to="/login" />} 
          />
          <Route 
            path="/driver" 
            element={userType === 'driver' ? <DriverDashboard user={user} /> : <Navigate to="/login" />} 
          />
          <Route 
            path="/admin" 
            element={userType === 'admin' ? <AdminDashboard /> : <Navigate to="/login" />} 
          />
          <Route 
            path="/history" 
            element={user ? <RideHistory user={user} /> : <Navigate to="/login" />} 
          />
          <Route path="/corporate" element={<Home />} />
          <Route path="/about" element={<Home />} />
          <Route path="/contact" element={<Home />} />
          <Route path="/blog" element={<Home />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
