import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from './components/Authcontext'; // Ensure this path is correct

const ProtectedRoute = () => {
  const { auth } = useAuth();

  return auth ? <Outlet/> : <Navigate to="/signin" />;
};

export default ProtectedRoute;
