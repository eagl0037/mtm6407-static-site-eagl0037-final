import Link from 'next/link';

export default function Navbar() {
  const linkStyle = {
    color: 'white',
    textDecoration: 'none',
  };

  return (
    <nav style={{
      display: 'flex',
      justifyContent: 'center',
      gap: '2rem',
      padding: '1rem',
      backgroundColor: '#6c63ff',
      fontWeight: '600',
      fontSize: '1.2rem',
    }}>
      <Link href="/" style={linkStyle}>Home</Link>
      <Link href="/about" style={linkStyle}>About</Link>
      <Link href="/contact" style={linkStyle}>Contact</Link>
      <Link href="/fun" style={linkStyle}>Fun</Link>
      <Link href="/project" style={linkStyle}>Project</Link>
    </nav>
  );
}

