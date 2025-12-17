import { useState } from 'react'
import { Users, Car, DollarSign, TrendingUp, Search } from 'lucide-react'
import './AdminDashboard.css'

function AdminDashboard() {
  const [searchTerm, setSearchTerm] = useState('')
  
  const stats = {
    totalUsers: 1250,
    totalDrivers: 85,
    totalRides: 5420,
    totalRevenue: 125000
  }

  const recentRides = [
    { id: '1', customer: 'John Doe', driver: 'Mike Johnson', fare: '$25', status: 'completed' },
    { id: '2', customer: 'Jane Smith', driver: 'Sarah Williams', fare: '$18', status: 'completed' },
    { id: '3', customer: 'Bob Brown', driver: 'Tom Davis', fare: '$32', status: 'in-progress' },
    { id: '4', customer: 'Alice Green', driver: 'Chris Wilson', fare: '$15', status: 'completed' }
  ]

  return (
    <div className="admin-dashboard">
      <div className="container">
        <h1 className="page-title">Admin Dashboard</h1>

        <div className="stats-grid">
          <div className="stat-card">
            <Users size={32} />
            <div>
              <div className="stat-value">{stats.totalUsers}</div>
              <div className="stat-label">Total Users</div>
            </div>
          </div>
          <div className="stat-card">
            <Car size={32} />
            <div>
              <div className="stat-value">{stats.totalDrivers}</div>
              <div className="stat-label">Active Drivers</div>
            </div>
          </div>
          <div className="stat-card">
            <TrendingUp size={32} />
            <div>
              <div className="stat-value">{stats.totalRides}</div>
              <div className="stat-label">Total Rides</div>
            </div>
          </div>
          <div className="stat-card">
            <DollarSign size={32} />
            <div>
              <div className="stat-value">${stats.totalRevenue.toLocaleString()}</div>
              <div className="stat-label">Total Revenue</div>
            </div>
          </div>
        </div>

        <div className="dashboard-sections">
          <div className="section-card">
            <div className="section-header">
              <h2>Recent Rides</h2>
              <div className="search-box">
                <Search size={20} />
                <input
                  type="text"
                  placeholder="Search rides..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
            </div>
            <div className="table-container">
              <table className="rides-table">
                <thead>
                  <tr>
                    <th>Ride ID</th>
                    <th>Customer</th>
                    <th>Driver</th>
                    <th>Fare</th>
                    <th>Status</th>
                  </tr>
                </thead>
                <tbody>
                  {recentRides.map(ride => (
                    <tr key={ride.id}>
                      <td>#{ride.id}</td>
                      <td>{ride.customer}</td>
                      <td>{ride.driver}</td>
                      <td>{ride.fare}</td>
                      <td>
                        <span className={`status-badge status-${ride.status}`}>
                          {ride.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="section-card">
            <h2>Quick Actions</h2>
            <div className="actions-grid">
              <button className="action-btn">
                <Users size={24} />
                Manage Users
              </button>
              <button className="action-btn">
                <Car size={24} />
                Manage Drivers
              </button>
              <button className="action-btn">
                <DollarSign size={24} />
                View Reports
              </button>
              <button className="action-btn">
                <TrendingUp size={24} />
                Analytics
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AdminDashboard

