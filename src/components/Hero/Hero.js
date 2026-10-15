import Image from 'next/image';
import Link from 'next/link';
import styles from './Hero.module.css';

export default function Hero({ products = [] }) {
  return (
    <section className={styles.hero}>
      {/* Background */}
      <div className={styles.bg}>
        <Image
          src="/cc-hero.jpg"
          alt="Curious Circuit Co. — Space themed graphic tees campaign"
          fill
          priority
          sizes="100vw"
          className={styles.bgImg}
        />
        <div className={styles.bgOverlay} />
      </div>

      {/* Content */}
      <div className={styles.content}>
        {/* Left */}
        <div className={styles.left}>
          <h1 className={styles.headline}>
            WEAR YOUR<br />CURIOSITY.
          </h1>
          <p className={styles.description}>
            Clever designs for curious minds. Discover graphic tees inspired by
            technology, science, AI, and the ideas shaping tomorrow.
          </p>
          <Link href="/collections/all" className={styles.cta}>
            SHOP ALL TEES
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <line x1="5" y1="12" x2="19" y2="12" />
              <polyline points="12 5 19 12 12 19" />
            </svg>
          </Link>

          {/* Trust indicators */}
          <div className={styles.trust}>
            <div className={styles.trustItem}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-8 2a2 2 0 1 0 0 4 2 2 0 0 0 0-4z" />
              </svg>
              <div>
                <span className={styles.trustTitle}>UNIQUE</span>
                <span className={styles.trustSub}>DESIGNS</span>
              </div>
            </div>
            <div className={styles.trustDivider} />
            <div className={styles.trustItem}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10" />
                <line x1="2" y1="12" x2="22" y2="12" />
                <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
              </svg>
              <div>
                <span className={styles.trustTitle}>PRINTED</span>
                <span className={styles.trustSub}>ON DEMAND</span>
              </div>
            </div>
            <div className={styles.trustDivider} />
            <div className={styles.trustItem}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                <polyline points="9 12 11 14 15 10" />
              </svg>
              <div>
                <span className={styles.trustTitle}>SECURE</span>
                <span className={styles.trustSub}>CHECKOUT</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
