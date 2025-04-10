// app/page.tsx
'use client';

import React, { useEffect, useState } from 'react';
import { useTheme } from '../context/ThemeContext';
import { Button } from '../components/atoms/Button';
import { fetchData } from '../utils/axios/api';

type User = {
  id: number;
  name: string;
  email: string;
};

export default function HomePage() {
  const { theme, toggleTheme } = useTheme();
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadUser = async () => {
      try {
        const data = await fetchData<User>('/user/1'); // 🔁 Replace with your actual endpoint
        setUser(data);
      } catch (error) {
        console.error('Error fetching user:', error);
      } finally {
        setLoading(false);
      }
    };

    loadUser();
  }, []);

  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-center p-4 ${
        theme === 'dark' ? 'bg-gray-900 text-white' : 'bg-white text-black'
      }`}>
      <h1 className="mb-4 text-3xl font-bold">Current Theme: {theme}</h1>
      <Button onClick={toggleTheme}>
        {theme === 'light' ? 'Light' : 'Dark'}
      </Button>

      <div className="mt-8">
        {loading ? (
          <p>Loading user...</p>
        ) : user ? (
          <div className="text-center">
            <p>
              <strong>User :</strong> {user.name}
            </p>
            <p>
              <strong>Email:</strong> {user.email}
            </p>
          </div>
        ) : (
          <p>Could not load user data.</p>
        )}
      </div>
    </main>
  );
}
