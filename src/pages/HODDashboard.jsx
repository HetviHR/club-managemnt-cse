import React from "react";
import "./HODdashboard.css"; // Import the CSS file

const HODDashboard = () => {
  return (
    <div className="dashboard">
      <div className="dashboard-container">
        {/* Header */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <h2>HOD Dashboard</h2>
        </div>

        {/* Stats Grid */}
        <div className="stats-grid">
          <div className="stat-box">
            <h2>3</h2>
            <p>Total Faculty</p>
          </div>
          <div className="stat-box">
            <h2>6</h2>
            <p>Total Students</p>
          </div>
          <div className="stat-box">
            <h2>2</h2>
            <p>Upcoming Events</p>
          </div>
          
        </div>

        {/* Faculty + Events */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "20px", marginBottom: "20px" }}>
          {/* Faculty Activity */}
          <div className="blue-card">
            <h3>Recent Faculty Activity</h3>
            <p>Latest updates from faculty members</p>
            <ul style={{ listStyle: "none", padding: 0 }}>
              <li style={{ marginBottom: "12px" }}>
                <strong>Dr. Sarah Johnson</strong> — Updated course materials
              </li>
              <li style={{ marginBottom: "12px" }}>
                <strong>Prof. Michael Chen</strong> — Updated course materials
              </li>
              <li style={{ marginBottom: "12px" }}>
                <strong>Dr. Emily Rodriguez</strong> — Updated course materials
              </li>
            </ul>
          </div>

          {/* Events */}
          <div className="blue-card">
            <h3>Upcoming Events</h3>
            <p>Events organized by faculty</p>
            <ul style={{ listStyle: "none", padding: 0 }}>
              <li style={{ marginBottom: "12px" }}>
                <strong>AI Research Symposium</strong> <br />
                by Dr. Sarah Johnson <br />
                2024-01-15 at 10:00 AM
              </li>
              <li>
                <strong>Software Engineering Workshop</strong> <br />
                by Prof. Michael Chen <br />
                2024-01-20 at 2:00 PM
              </li>
            </ul>
          </div>
        </div>

        {/* Students */}
        <div className="blue-card">
          <h3>Enrolled Students</h3>
          <p>List of currently enrolled students</p>
          <ul style={{ listStyle: "none", padding: 0 }}>
            <li style={{ marginBottom: "12px" }}>
              <strong>John Doe</strong> — 3rd Year
            </li>
            <li style={{ marginBottom: "12px" }}>
              <strong>Alice Smith</strong> — 2nd Year
            </li>
            <li>
              <strong>Rohit Sharma</strong> — 1st Year
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default HODDashboard;
