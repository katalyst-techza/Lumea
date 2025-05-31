// src/pages/Login.tsx
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { PageHeader } from '@/components/PageHeader';
import { LoginForm } from '@/components/LoginForm';
import { useAuth } from '@/contexts/AuthContext';

const Login = () => {
  const { isAdmin, isLoading } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!isLoading && isAdmin) {
      navigate('/admin/dashboard');
    }
  }, [isAdmin, isLoading, navigate]);

  return (
    <div className="min-h-screen">
      <PageHeader 
        title="Admin Login" 
        subtitle="Sign in to access the admin dashboard"
      />

      <section className="py-12 md:py-16">
        <div className="max-w-md mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white p-8 rounded-lg shadow-sm border border-luminous-mauve/10">
            <h2 className="font-seasons text-2xl text-luminous-brown mb-6 text-center">
              Sign In
            </h2>
            <LoginForm />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Login;
