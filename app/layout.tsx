// app/layout.tsx or app/layout.jsx (whichever you use)
import '../styles/globals.css';
import Navbar from '../components/Navbar';
import { Poppins } from 'next/font/google';

const poppins = Poppins({ weight: ['400', '600'], subsets: ['latin'] });

export const metadata = {
  title: 'Natasha Eagles Portfolio',
  description: 'Full Stack Developer Portfolio',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={poppins.className}>
      <body>
        <header>
          <Navbar />
        </header>
        <main>{children}</main>
      </body>
    </html>
  );
}
