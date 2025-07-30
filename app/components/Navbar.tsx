import Link from 'next/link';

export default function Navbar() {
  return (
    <nav style={{
      display: 'flex',
      justifyContent: 'center',
      gap: '2rem',
      padding: '1rem',
      backgroundColor: '#6c63ff',
      color: 'white',
      fontWeight: '600',
      fontSize: '1.2rem',
    }}>
      <Link href="/" style={{ color: 'white', textDecoration: 'none' }}>
        Home
      </Link>
      <Link href="/about" style={{ color: 'white', textDecoration: 'none' }}>
        About
      </Link>
      <Link href="/contact" style={{ color: 'white', textDecoration: 'none' }}>
        Contact
      </Link>
      <Link href="/fun" style={{ color: 'white', textDecoration: 'none' }}>
        Fun
      </Link>
      <Link href="/project" style={{ color: 'white', textDecoration: 'none' }}>
        Project
      </Link>
    </nav>
  );
}
