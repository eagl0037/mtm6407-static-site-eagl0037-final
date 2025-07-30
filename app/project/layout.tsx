// app/project/layout.tsx
import React from 'react';
import Link from 'next/link';

export const metadata = {
  title: 'Project - Natasha Eagles Portfolio',
  description: 'Project details and showcase',
};

export default function ProjectLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body style={{ margin: 0, fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif" }}>
        <header style={{
          backgroundColor: '#5148e6',
          padding: '1rem 2rem',
          color: 'white',
          fontWeight: '700',
          fontSize: '1.5rem',
        }}>
          <Link href="/" style={{ color: 'white', textDecoration: 'none' }}>Natasha Eagles Portfolio</Link>
        </header>
        <div style={{ display: 'flex', minHeight: '90vh' }}>
          <aside style={{
            width: '250px',
            backgroundColor: '#6c63ff',
            color: 'white',
            padding: '2rem 1rem',
            boxShadow: '2px 0 5px rgba(0,0,0,0.1)',
          }}>
            <nav style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <Link href="/" style={{ color: 'white', textDecoration: 'none' }}>Home</Link>
              <Link href="/about" style={{ color: 'white', textDecoration: 'none' }}>About</Link>
              <Link href="/contact" style={{ color: 'white', textDecoration: 'none' }}>Contact</Link>
              <Link href="/fun" style={{ color: 'white', textDecoration: 'none' }}>Fun</Link>
              <Link href="/project" style={{ color: '#fff', fontWeight: 'bold', textDecoration: 'underline' }}>Project</Link>
            </nav>
          </aside>

          <main style={{ flex: 1, padding: '3rem 2rem', backgroundColor: '#f5f5ff' }}>
            {children}
          </main>
        </div>

        <footer style={{
          textAlign: 'center',
          padding: '1rem',
          backgroundColor: '#5148e6',
          color: 'white',
          fontWeight: '600',
        }}>
          © 2025 Natasha Eagles
        </footer>
      </body>
    </html>
  );
}
