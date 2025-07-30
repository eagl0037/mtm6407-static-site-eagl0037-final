import '../styles/globals.css';
import Navbar from '../components/Navbar';

export const metadata = {
  title: 'Natasha Eagles Portfolio',
  description: 'Full Stack Developer Portfolio',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  );
}
