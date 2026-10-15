'use client';
import { useState } from 'react';
import Link from 'next/link';
import styles from './Footer.module.css';

export default function Footer({ 
  shopName = 'CURIOUS CIRCUIT CO.', 
  shopLogo = null,
  shippingPolicyUrl = '/policies/shipping-policy',
  refundPolicyUrl = '/policies/refund-policy',
  contactPolicyUrl = '/pages/contact',
  instagramUrl = '#',
  emailUrl = 'mailto:hello@curiouscircuitco.com'
}) {
  const [clickCount, setClickCount] = useState(0);
  const [showDev, setShowDev] = useState(false);

  const handleSecretClick = () => {
    if (!showDev) {
      const nextCount = clickCount + 1;
      if (nextCount >= 5) setShowDev(true);
      else setClickCount(nextCount);
    }
  };

  return (
    <footer className={styles.footer}>
      <div className={styles.footerInner}>
        <div className={styles.grid}>
          {/* Brand */}
          <div className={styles.brandColumn}>
            <Link href="/" className={styles.logoLink}>
              <svg width="28" height="28" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
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
            <p className={styles.tagline}>Wear your curiosity.</p>
          </div>

          {/* Store */}
          <div className={styles.column}>
            <h4 className={styles.heading}>Store</h4>
            <ul className={styles.links}>
              <li><Link href="/collections/all">Shop All</Link></li>
              <li><Link href="/tags/ai-tech">AI & Tech</Link></li>
              <li><Link href="/tags/space-science">Space & Science</Link></li>
              <li><Link href="/tags/creative-designs">Creative Designs</Link></li>
            </ul>
          </div>

          {/* Brand */}
          <div className={styles.column}>
            <h4 className={styles.heading}>The Brand</h4>
            <ul className={styles.links}>
              <li><Link href="/brand-story">About Us</Link></li>
            </ul>
          </div>

          {/* Customer Care */}
          <div className={styles.column}>
            <h4 className={styles.heading}>Customer Care</h4>
            <ul className={styles.links}>
              <li><Link href={contactPolicyUrl}>Contact Us</Link></li>
              <li><Link href={shippingPolicyUrl}>Shipping</Link></li>
              <li><Link href={refundPolicyUrl}>Returns</Link></li>
              <li><Link href="/pages/faq">FAQ</Link></li>
            </ul>
          </div>

          {/* Socials */}
          <div className={styles.column}>
            <h4 className={styles.heading}>Connect</h4>
            <div className={styles.socialLinks}>
              <a href={instagramUrl} className={styles.socialIcon} aria-label="Instagram" target="_blank" rel="noopener noreferrer">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                </svg>
              </a>
              <a
                href={emailUrl.includes('@') && !emailUrl.startsWith('mailto:') ? `mailto:${emailUrl}` : emailUrl}
                className={styles.socialIcon}
                aria-label="Email"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <polyline points="22,6 12,13 2,6" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        <div className={styles.bottom} onClick={handleSecretClick}>
          <div className={styles.copyright}>
            © {new Date().getFullYear()} Curious Circuit Co. All rights reserved.
          </div>
          <div className={styles.footerLegal}>
            <Link href="/terms-of-service">Terms of Service</Link>
            <span className={styles.separator}>|</span>
            <Link href="/privacy-policy">Privacy Policy</Link>
          </div>
        </div>
      </div>

      <div className={styles.devClickArea} onClick={handleSecretClick}>
        {showDev ? (
          <div className={styles.devSubtextVisible}>Designed with curiosity.</div>
        ) : (
          <div className={styles.devSubtextHidden} />
        )}
      </div>
    </footer>
  );
}
