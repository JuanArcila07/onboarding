import { Navigate } from 'react-router-dom';
import { useAuth } from '../context/useAuth';

function ProtectedRoute({ children }) {
  const { userData } = useAuth();

  return userData ? children : <Navigate to="/login" replace />;
}

export default ProtectedRoute;
