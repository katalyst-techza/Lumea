// src/contexts/AuthContext.tsx
import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { useNavigate } from 'react-router-dom';
import PocketBase, { Record } from 'pocketbase';

const client = new PocketBase('http://127.0.0.1:8090');

interface AuthContextType {
  user: Record | null;
  isAdmin: boolean;
  isLoading: boolean;
  signIn: (email: string, password: string) => Promise<void>;
  signUp: (email: string, password: string) => Promise<void>;
  signOut: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<Record | null>(null);
  const [isAdmin, setIsAdmin] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const authModel = client.authStore.model;
    setUser(authModel as Record | null);
    setIsAdmin(!!authModel);
    setIsLoading(false);

    client.authStore.onChange(() => {
      const currentUser = client.authStore.model;
      setUser(currentUser as Record | null);
      setIsAdmin(!!currentUser);
    });
  }, []);

  const signIn = async (email: string, password: string) => {
    try {
      await client.collection('admins').authWithPassword(email, password);
      setUser(client.authStore.model as Record);
      setIsAdmin(true);
      navigate('/admin/dashboard');
    } catch (error) {
      console.error('Error signing in:', error);
      throw error;
    }
  };

  const signUp = async (email: string, password: string) => {
    try {
      await client.collection('admins').create({ email, password, passwordConfirm: password });
      await signIn(email, password);
    } catch (error) {
      console.error('Error signing up:', error);
      throw error;
    }
  };

  const signOut = async () => {
    try {
      client.authStore.clear();
      setUser(null);
      setIsAdmin(false);
      window.location.href = '/login';
    } catch (error) {
      console.error('Error signing out:', error);
      throw error;
    }
  };

  const value = {
    user,
    isAdmin,
    isLoading,
    signIn,
    signUp,
    signOut,
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
