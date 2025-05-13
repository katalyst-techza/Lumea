
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { PageHeader } from '@/components/PageHeader';
import { LoginForm } from '@/components/LoginForm';
import { SignupForm } from '@/components/SignupForm';
import { useAuth } from '@/contexts/AuthContext';

const Login = () => {
  const { isAdmin, isLoading } = useAuth();
  const navigate = useNavigate();
  const [mode, setMode] = useState<'login' | 'signup'>('login');

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
            <div className="flex justify-center mb-6">
              <div className="inline-flex rounded-md overflow-hidden">
                <button 
                  className={`px-4 py-2 text-sm font-medium ${mode === 'login' ? 'bg-luminous-mauve text-white' : 'bg-gray-100 text-gray-600'}`}
                  onClick={() => setMode('login')}
                >
                  Sign In
                </button>
                <button 
                  className={`px-4 py-2 text-sm font-medium ${mode === 'signup' ? 'bg-luminous-mauve text-white' : 'bg-gray-100 text-gray-600'}`}
                  onClick={() => setMode('signup')}
                >
                  Create Admin
                </button>
              </div>
            </div>
            <h2 className="font-seasons text-2xl text-luminous-brown mb-6 text-center">
              {mode === 'login' ? 'Sign In' : 'Create Admin Account'}
            </h2>
            {mode === 'login' ? <LoginForm /> : <SignupForm />}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Login;
