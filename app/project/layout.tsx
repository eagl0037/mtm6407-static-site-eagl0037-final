// components/Layout.tsx
'use client';
import React from 'react';
import Link from 'next/link';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
     
      <main className="container">{children}</main>
      <footer>© {new Date().getFullYear()} Natasha Eagles • Made with ❤️</footer>
    </>
  );
}
