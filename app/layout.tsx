import './globals.css';
import Link from 'next/link';
import { ReactNode } from 'react';

export const metadata = {
  title: 'Camilla’s Site',
  description: 'Welcome to my site!',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <nav className="bg-white shadow-sm py-4 px-6 flex gap-6">
          <Link
            href="/"
            className="text-blue-800 font-medium hover:underline focus:outline focus:outline-2 focus:outline-blue-500"
          >
            Home
          </Link>
          <Link
            href="/things-to-read"
            className="text-blue-800 font-medium hover:underline focus:outline focus:outline-2 focus:outline-blue-500"
          >
            Things to Read
          </Link>
        </nav>
        <main>{children}</main>
      </body>
    </html>
  );
}
