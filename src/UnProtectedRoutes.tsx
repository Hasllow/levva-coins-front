import { Navigate, Outlet } from 'react-router-dom';
import { validateToken } from './helpers/validateToken';

export const UnProtectedRoutes = () => {
  const isAuthenticated = validateToken();

  return isAuthenticated ? <Navigate to="/home" replace /> : <Outlet />;
};
