
import { useState } from 'react';
import { useAuth } from '@/contexts/AuthContext';
import { useToast } from '@/hooks/use-toast';

export const SignupForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const { signUp } = useAuth();
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    try {
      await signUp(email, password);
      toast({
        title: 'Account created',
        description: 'Your admin account has been created successfully',
      });
    } catch (error: any) {
      toast({
        title: 'Signup failed',
        description: error.message || 'An error occurred during signup',
        variant: 'destructive',
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label htmlFor="signup-email" className="block font-seasons text-luminous-brown mb-1">
          Email
        </label>
        <input
          id="signup-email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="w-full px-4 py-2 border border-luminous-mauve/30 rounded-md focus:outline-none focus:ring-2 focus:ring-luminous-gold/50"
        />
      </div>
      <div>
        <label htmlFor="signup-password" className="block font-seasons text-luminous-brown mb-1">
          Password
        </label>
        <input
          id="signup-password"
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
          {loading ? 'Creating account...' : 'Create admin account'}
        </button>
      </div>
    </form>
  );
};
