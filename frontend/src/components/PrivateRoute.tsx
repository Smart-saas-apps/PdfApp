import React from 'react';
import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from '../store';

interface PrivateRouteProps {
  children: React.ReactElement;
}

const PrivateRoute: React.FC<PrivateRouteProps> = ({ children }) => {
  const { isAuthenticated, loading } = useSelector((state: RootState) => state.auth);
  const token = localStorage.getItem('token');

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!isAuthenticated && !token) {
    return <Navigate to="/login" />;
  }

  return children;
};

export default PrivateRoute;
