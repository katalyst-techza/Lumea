
import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';

export const AdminLayout = () => {
  const { isAdmin, isLoading } = useAuth();
  
  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-luminous-brown/70">Loading...</p>
      </div>
    );
  }
  
  if (!isAdmin) {
    return <Navigate to="/login" replace />;
  }
  
  return <Outlet />;
};
