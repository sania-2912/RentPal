function Dashboard() {
  return (
    <>
      <section className="welcome-header">
        <h1>Welcome, Property Owner!</h1>
        <p>Here's a quick overview of your rental portfolio and recent activities.</p>
        <a href="#" className="primary-button"><i className="fas fa-plus"></i> Add New Property</a>
      </section>

      <section className="portfolio-overview">
        <h2>Your Portfolio Overview</h2>
        <div className="stats-grid">
            {/* Stat cards would be mapped from data in a real app */}
            <div className="stat-card">
                <i className="fas fa-building stat-icon"></i>
                <h3 className="stat-title">Total Properties</h3>
                <div className="stat-number">18</div>
                <p className="stat-description">Number of properties under management.</p>
            </div>
            <div className="stat-card">
                <i className="fas fa-list-alt stat-icon"></i>
                <h3 className="stat-title">Active Listings</h3>
                <div className="stat-number">12</div>
                <p className="stat-description">Currently available properties for rent.</p>
            </div>
            <div className="stat-card">
                <i className="fas fa-file-signature stat-icon"></i>
                <h3 className="stat-title">Pending Applications</h3>
                <div className="stat-number">5</div>
                <p className="stat-description">Tenant applications awaiting review.</p>
            </div>
            <div className="stat-card">
                <i className="fas fa-users stat-icon"></i>
                <h3 className="stat-title">Total Tenants</h3>
                <div className="stat-number">34</div>
                <p className="stat-description">Current number of active tenants.</p>
            </div>
        </div>
      </section>

      <section className="recent-activities">
          <h2>Recent Activities</h2>
          <ul className="activity-list">
              <li className="activity-item">
                  <i className="fas fa-file-alt activity-icon"></i>
                  <span className="activity-description">New tenant application received for Apartment 4B.</span>
                  <span className="activity-time">5 minutes ago</span>
              </li>
              <li className="activity-item">
                  <i className="fas fa-wrench activity-icon"></i>
                  <span className="activity-description">Maintenance request submitted for House 2A.</span>
                  <span className="activity-time">1 hour ago</span>
              </li>
          </ul>
      </section>
    </>
  );
}

export default Dashboard;