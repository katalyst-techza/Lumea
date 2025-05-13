
import { useState } from 'react';
import { useAuth } from '@/contexts/AuthContext';
import { useToast } from '@/hooks/use-toast';

export const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const { signIn } = useAuth();
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    try {
      await signIn(email, password);
      toast({
        title: 'Login successful',
        description: 'You have been logged in successfully',
      });
    } catch (error: any) {
      toast({
        title: 'Login failed',
        description: error.message || 'An error occurred during login',
        variant: 'destructive',
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label htmlFor="email" className="block font-seasons text-luminous-brown mb-1">
          Email
        </label>
        <input
          id="email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="w-full px-4 py-2 border border-luminous-mauve/30 rounded-md focus:outline-none focus:ring-2 focus:ring-luminous-gold/50"
        />
      </div>
      <div>
        <label htmlFor="password" className="block font-seasons text-luminous-brown mb-1">
          Password
        </label>
        <input
          id="password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          className="w-full px-4 py-2 border border-luminous-mauve/30 rounded-md focus:outline-none focus:ring-2 focus:ring-luminous-gold/50"
        />
      </div>
      <div>
        <button
          type="submit"
          disabled={loading}
          className="w-full px-4 py-2 bg-luminous-mauve text-white rounded-md hover:bg-luminous-mauve/80 transition-colors disabled:opacity-70"
        >
          {loading ? 'Signing in...' : 'Sign in'}
        </button>
      </div>
    </form>
  );
};
