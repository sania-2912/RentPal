import { Routes, Route, Navigate } from 'react-router-dom';
import DashboardLayout from './components/DashboardLayout';
import LoginPage from './pages/LoginPage';
import Dashboard from './pages/Dashboard';
import AddListing from './pages/AddListing';
import ManageListings from './pages/ManageListings';
import TenantQueue from './pages/TenantQueue';

function App() {
  return (
    <Routes>
      {/* Redirect base URL to the login page */}
      <Route path="/" element={<Navigate to="/login" />} />
      <Route path="/login" element={<LoginPage />} />

      {/* Dashboard routes are nested inside the DashboardLayout */}
      <Route path="/dashboard" element={<DashboardLayout />}>
        <Route index element={<Dashboard />} />
        <Route path="add-listing" element={<AddListing />} />
        <Route path="manage-listings" element={<ManageListings />} />
        <Route path="tenant-queue" element={<TenantQueue />} />
      </Route>
    </Routes>
  );
}

export default App;