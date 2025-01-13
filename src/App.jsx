
import React, { useEffect } from 'react';
import { Routes, Route, useLocation, Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ReservationsTable from './pages/ReservationsTable';
import './css/style.css';
import './charts/ChartjsConfig';

// Import pages
import Dashboard from './pages/Dashboard';
import Login from './pages/Login';
import Reservations from './pages/Reservations';

// Helper function to check authentication (Redux-based)
const isAuthenticated = (userInfo) => {
  return userInfo !== null;  // Check if userInfo exists in Redux state
};

// ProtectedRoute component
const ProtectedRoute = ({ element, userInfo }) => {
  return isAuthenticated(userInfo) ? element : <Navigate to="/login" replace />;
};

function App() {
  const location = useLocation();
  const { userInfo } = useSelector((state) => state.auth);  // Access userInfo from Redux store

  useEffect(() => {
    document.querySelector('html').style.scrollBehavior = 'auto';
    window.scroll({ top: 0 });
    document.querySelector('html').style.scrollBehavior = '';
  }, [location.pathname]);

  return (
    <>
        <Routes>
        {/* Login Route */}
        <Route path="/login" element={<Login />} />
        {/* Protected Dashboard Route */}
        <Route 
          path="/" 
          element={<ProtectedRoute element={<Dashboard />} userInfo={userInfo} />} 
        />
        {/* Reservations Page Route */}
        <Route
          path="/dashboard/reservations"
          element={<ProtectedRoute element={<Reservations />} userInfo={userInfo} />}
        />
      </Routes>
    </>
  );
}

export default App;

