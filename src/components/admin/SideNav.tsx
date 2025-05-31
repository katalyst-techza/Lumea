// src/components/admin/SideNav.tsx
import { useNavigate } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';

export const SideNav = () => {
  const navigate = useNavigate();
  const { signOut } = useAuth();

  const handleLogout = async () => {
    await signOut();
    navigate('/login');
  };

  return (
    <aside className="w-64 h-screen bg-luminous-brown text-white flex flex-col p-6">
      <h1 className="text-2xl font-bold mb-8">Dashboard</h1>
      <button
        onClick={handleLogout}
        className="mt-auto bg-white text-luminous-brown px-4 py-2 rounded hover:bg-luminous-brown/90 hover:text-white transition"
      >
        Logout
      </button>
    </aside>
  );
};
