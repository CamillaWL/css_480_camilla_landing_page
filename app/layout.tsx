// trigger rebuild

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
        <nav className="p-4 bg-gray-100">
          <Link href="/" className="mr-4" tabIndex={0}>Home</Link>
          <Link href="/things-to-read" tabIndex={0}>Things to Read</Link>
        </nav>
        <main className="p-6">{children}</main>
      </body>
    </html>
  );
}
