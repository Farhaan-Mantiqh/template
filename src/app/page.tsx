// app/page.tsx
'use client';

import { useTheme } from '../context/ThemeContext';
import { Button } from '../components';

export default function HomePage() {
  const { theme, toggleTheme } = useTheme();

  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-center ${theme === 'dark' ? 'bg-gray-900 text-white' : 'bg-white text-black'}`}>
      <h1 className="mb-4 text-3xl font-bold">Current Theme: {theme}</h1>
      <Button onClick={toggleTheme}>Toggle Theme</Button>
    </main>
  );
}
