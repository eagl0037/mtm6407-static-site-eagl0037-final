import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';

export default function Navbar() {
  const pathname = usePathname();

  const links = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/contact', label: 'Contact' },
    { href: '/fun', label: 'Fun' },
    { href: '/project', label: 'Project' },
  ];

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
      position: 'relative',
    }}>
      {links.map(({ href, label }) => (
        <Link key={href} href={href} style={{ color: 'white', textDecoration: 'none', position: 'relative' }}>
          {label}
          {pathname === href && (
            <motion.span
              layoutId="underline"
              style={{
                position: 'absolute',
                height: 3,
                backgroundColor: '#fff',
                bottom: -6,
                left: 0,
                right: 0,
                borderRadius: 3,
              }}
            />
          )}
        </Link>
      ))}
    </nav>
  );
}
