// app/layout.tsx
import './globals.css';
import { ThemeProvider } from '../context/ThemeContext';

export const metadata = {
  title: 'My App',
  description: 'Next.js App Router with best practices',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
