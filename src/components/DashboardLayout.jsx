import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';
import TopBar from './TopBar';

function DashboardLayout() {
  return (
    <div className="dashboard-container">
      <Sidebar />
      <main className="main-content">
        <TopBar />
        <div className="content-wrapper">
          {/* Child routes will be rendered here */}
          <Outlet />
        </div>
      </main>
    </div>
  );
}

export default DashboardLayout;