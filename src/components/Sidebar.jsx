import { NavLink } from 'react-router-dom';
import logo from '../assets/logo_rentpal.png';

function Sidebar() {
  return (
    <aside className="sidebar">
      <div className="sidebar-header">
        <img src={logo} alt="RentPal Logo" className="logo" />
      </div>
      <nav className="sidebar-nav">
        <ul>
          <li><NavLink to="/dashboard" end><i className="fas fa-tachometer-alt"></i><span>Dashboard</span></NavLink></li>
          <li><NavLink to="/dashboard/add-listing"><i className="fas fa-plus-circle"></i><span>Add Listing</span></NavLink></li>
          <li><NavLink to="/dashboard/manage-listings"><i className="fas fa-tasks"></i><span>Manage Listings</span></NavLink></li>
          <li><NavLink to="/dashboard/tenant-queue"><i className="fas fa-hourglass-half"></i><span>Queue Status</span></NavLink></li>
        </ul>
      </nav>
    </aside>
  );
}

export default Sidebar;