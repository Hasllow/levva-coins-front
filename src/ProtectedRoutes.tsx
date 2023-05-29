import { Navigate, Outlet } from 'react-router-dom';
import { validateToken } from './helpers/validateToken';

export const ProtectedRoutes = () => {
  const isAuthenticated = validateToken();

  return isAuthenticated ? <Outlet /> : <Navigate to="/login" />;
};
