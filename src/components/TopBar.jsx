import { NavLink, Link } from 'react-router-dom';

function TopBar() {
  return (
    <header className="top-bar">
      <nav className="top-nav">
        <NavLink to="/dashboard" end>Dashboard</NavLink>
        <NavLink to="/dashboard/add-listing">Add Listing</NavLink>
        <NavLink to="/dashboard/manage-listings">Manage Listings</NavLink>
        <NavLink to="/dashboard/tenant-queue">Queue Status</NavLink>
      </nav>
      <div className="user-actions">
        <Link to="/login" className="logout-button">
          <i className="fas fa-sign-out-alt"></i> Logout
        </Link>
      </div>
    </header>
  );
}

export default TopBar;