"use client"

import "./dashboard.css"

const stats = [
  { label: "Total Sections", value: "48", icon: "fa-layer-group", color: "#7c88e0" },
  { label: "Home Components", value: "12", icon: "fa-house", color: "#e5a243" },
  { label: "Multi-page Sections", value: "6", icon: "fa-file-lines", color: "#97e7d1" },
  { label: "Active Updates", value: "24", icon: "fa-clock", color: "#fc8ebe" },
]

const recentActivities = [
  { action: "Updated Hero Slider", section: "Home", time: "2 hours ago", user: "Admin" },
  { action: "Added new event", section: "Campus Life", time: "4 hours ago", user: "Admin" },
  { action: "Modified admission info", section: "Admissions", time: "1 day ago", user: "Admin" },
  { action: "Updated placement stats", section: "Placement", time: "2 days ago", user: "Admin" },
]

const quickActions = [
  { label: "Add Event", icon: "fa-calendar-plus", color: "#7c88e0" },
  { label: "Upload Media", icon: "fa-cloud-upload-alt", color: "#e5a243" },
  { label: "Edit Homepage", icon: "fa-edit", color: "#97e7d1" },
  { label: "View Analytics", icon: "fa-chart-line", color: "#fc8ebe" },
]

export default function Dashboard() {
  return (
    <div className="dashboard">
      <div className="dashboard-header">
        <h1>Dashboard</h1>
        <p>Welcome to SVGI College Admin Panel</p>
      </div>

      <div className="stats-grid">
        {stats.map((stat, index) => (
          <div key={index} className="stat-card" style={{ borderLeftColor: stat.color }}>
            <div className="stat-icon" style={{ backgroundColor: `${stat.color}20`, color: stat.color }}>
              <i className={`fa ${stat.icon}`}></i>
            </div>
            <div className="stat-info">
              <h3>{stat.value}</h3>
              <p>{stat.label}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="dashboard-grid">
        <div className="dashboard-card recent-activity">
          <div className="card-header">
            <h2>Recent Activity</h2>
            <a href="#">View All</a>
          </div>
          <div className="activity-list">
            {recentActivities.map((activity, index) => (
              <div key={index} className="activity-item">
                <div className="activity-icon">
                  <i className="fa fa-edit"></i>
                </div>
                <div className="activity-info">
                  <h4>{activity.action}</h4>
                  <p>
                    {activity.section} • {activity.time}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="dashboard-card quick-actions">
          <div className="card-header">
            <h2>Quick Actions</h2>
          </div>
          <div className="actions-grid">
            {quickActions.map((action, index) => (
              <button key={index} className="action-btn" style={{ backgroundColor: `${action.color}15` }}>
                <i className={`fa ${action.icon}`} style={{ color: action.color }}></i>
                <span>{action.label}</span>
              </button>
            ))}
          </div>
        </div>

        <div className="dashboard-card sections-overview">
          <div className="card-header">
            <h2>Sections Overview</h2>
          </div>
          <div className="sections-list">
            <div className="section-item">
              <span className="section-name">Home</span>
              <span className="section-count">12 components</span>
              <div className="section-bar">
                <div className="bar-fill" style={{ width: "100%", backgroundColor: "#7c88e0" }}></div>
              </div>
            </div>
            <div className="section-item">
              <span className="section-name">Campus Life</span>
              <span className="section-count">9 pages</span>
              <div className="section-bar">
                <div className="bar-fill" style={{ width: "75%", backgroundColor: "#e5a243" }}></div>
              </div>
            </div>
            <div className="section-item">
              <span className="section-name">News</span>
              <span className="section-count">8 components</span>
              <div className="section-bar">
                <div className="bar-fill" style={{ width: "66%", backgroundColor: "#97e7d1" }}></div>
              </div>
            </div>
            <div className="section-item">
              <span className="section-name">Admissions</span>
              <span className="section-count">5 pages</span>
              <div className="section-bar">
                <div className="bar-fill" style={{ width: "42%", backgroundColor: "#fc8ebe" }}></div>
              </div>
            </div>
            <div className="section-item">
              <span className="section-name">Academics</span>
              <span className="section-count">5 pages</span>
              <div className="section-bar">
                <div className="bar-fill" style={{ width: "42%", backgroundColor: "#b99fed" }}></div>
              </div>
            </div>
          </div>
        </div>

        <div className="dashboard-card system-status">
          <div className="card-header">
            <h2>System Status</h2>
          </div>
          <div className="status-content">
            <div className="status-circle">
              <div className="circle-progress" style={{ "--progress": "92%" }}>
                <span>92%</span>
              </div>
              <p>System Health</p>
            </div>
            <div className="status-info">
              <div className="status-item">
                <span className="status-dot online"></span>
                <span>Server Status: Online</span>
              </div>
              <div className="status-item">
                <span className="status-dot online"></span>
                <span>Database: Connected</span>
              </div>
              <div className="status-item">
                <span className="status-dot warning"></span>
                <span>Storage: 78% Used</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
