'use client';

import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { useCart } from '@/context/CartContext';
import { useAuth } from '@/context/AuthContext';
import SearchModal from '../Search/SearchModal';
import styles from './Navbar.module.css';

export default function Navbar({ shopName = 'CURIOUS CIRCUIT CO.', shopLogo = null }) {
  const [scrolled, setScrolled] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { cart, openCart } = useCart();
  const { user } = useAuth();
  const pathname = usePathname();
  const itemCount = cart?.totalQuantity || 0;

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/collections/all', label: 'Shop All' },
    { href: '/brand-story', label: 'About Us' },
    { href: '/pages/contact', label: 'Contact' },
  ];

  return (
    <>
      <header className={`${styles.navbar} ${scrolled ? styles.scrolled : ''}`}>
        <div className={styles.navInner}>

          {/* Logo */}
          <Link href="/" className={styles.logo} title="Curious Circuit Co.">
            <svg
              className={styles.circuitIcon}
              width="32" height="32" viewBox="0 0 32 32" fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="16" cy="16" r="14" stroke="currentColor" strokeWidth="1.5" />
              <circle cx="16" cy="16" r="9" stroke="currentColor" strokeWidth="1" strokeDasharray="2 1.5" />
              <circle cx="16" cy="16" r="4" fill="currentColor" />
              <line x1="2" y1="16" x2="7" y2="16" stroke="currentColor" strokeWidth="1.5" />
              <line x1="25" y1="16" x2="30" y2="16" stroke="currentColor" strokeWidth="1.5" />
              <line x1="16" y1="2" x2="16" y2="7" stroke="currentColor" strokeWidth="1.5" />
              <line x1="16" y1="25" x2="16" y2="30" stroke="currentColor" strokeWidth="1.5" />
              <circle cx="7" cy="16" r="1.5" fill="currentColor" />
              <circle cx="25" cy="16" r="1.5" fill="currentColor" />
              <circle cx="16" cy="7" r="1.5" fill="currentColor" />
              <circle cx="16" cy="25" r="1.5" fill="currentColor" />
            </svg>
            <div className={styles.logoText}>
              <span className={styles.logoMain}>CURIOUS</span>
              <span className={styles.logoSub}>CIRCUIT CO.</span>
            </div>
          </Link>

          {/* Desktop nav */}
          <nav className={styles.navLinks}>
            {navLinks.map(link => (
              <Link
                key={link.href}
                href={link.href}
                className={`${styles.navLink} ${pathname === link.href ? styles.navLinkActive : ''}`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Actions */}
          <div className={styles.actions}>
            {/* Search */}
            <button
              className={styles.iconBtn}
              onClick={() => setIsSearchOpen(true)}
              aria-label="Search"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="11" cy="11" r="8" />
                <line x1="21" y1="21" x2="16.65" y2="16.65" />
              </svg>
            </button>

            {/* Account */}
            <Link href="/profile" className={styles.iconBtn} aria-label="Account">
              <div className={styles.iconWrap}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                  <circle cx="12" cy="7" r="4" />
                </svg>
                {user && <span className={styles.activeDot} />}
              </div>
            </Link>

            {/* Cart */}
            <button className={styles.iconBtn} onClick={openCart} aria-label="Shopping bag">
              <div className={styles.iconWrap}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />
                  <line x1="3" y1="6" x2="21" y2="6" />
                  <path d="M16 10a4 4 0 0 1-8 0" />
                </svg>
                {itemCount > 0 && (
                  <span className={styles.cartBadge}>{itemCount > 9 ? '9+' : itemCount}</span>
                )}
              </div>
            </button>

            {/* Hamburger – mobile only */}
            <button
              className={styles.hamburger}
              onClick={() => setIsMobileMenuOpen(v => !v)}
              aria-label="Menu"
              aria-expanded={isMobileMenuOpen}
            >
              <span className={`${styles.hamburgerLine} ${isMobileMenuOpen ? styles.open : ''}`} />
              <span className={`${styles.hamburgerLine} ${isMobileMenuOpen ? styles.open : ''}`} />
              <span className={`${styles.hamburgerLine} ${isMobileMenuOpen ? styles.open : ''}`} />
            </button>
          </div>
        </div>

        {/* Mobile drawer */}
        <nav className={`${styles.mobileDrawer} ${isMobileMenuOpen ? styles.mobileDrawerOpen : ''}`}>
          {navLinks.map(link => (
            <Link
              key={link.href}
              href={link.href}
              className={`${styles.mobileNavLink} ${pathname === link.href ? styles.mobileNavLinkActive : ''}`}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </header>

      {isMobileMenuOpen && (
        <div className={styles.mobileOverlay} onClick={() => setIsMobileMenuOpen(false)} />
      )}

      <SearchModal isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />
    </>
  );
}
