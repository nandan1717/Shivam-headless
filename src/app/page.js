import Link from 'next/link';
import Image from 'next/image';
import Hero from '@/components/Hero/Hero';
import { shopifyFetch } from '@/lib/shopify/client';
import { getProductsQuery } from '@/lib/shopify/queries';
import styles from './page.module.css';

// Static fallback products for when Shopify returns no results
const FALLBACK_PRODUCTS = [
  { id: '1', handle: 'lunar-explorer',   title: 'Lunar Explorer',  price: '24.99', image: '/cc-tshirt-lunar.jpg' },
  { id: '2', handle: 'digital-mind',     title: 'Digital Mind',    price: '24.99', image: '/cc-tshirt-digital.jpg' },
  { id: '3', handle: 'solar-system',     title: 'Solar System',    price: '24.99', image: '/cc-tshirt-solar.jpg' },
  { id: '4', handle: 'cosmic-wave',      title: 'Cosmic Wave',     price: '24.99', image: '/cc-tshirt-wave.jpg' },
  { id: '5', handle: 'mission-control',  title: 'Mission Control', price: '24.99', image: '/cc-tshirt-mission.jpg' },
  { id: '6', handle: 'lunar-explorer',   title: 'Lunar Explorer',  price: '24.99', image: '/cc-tshirt-lunar.jpg' },
];

const INTEREST_COLLECTIONS = [
  {
    name: 'AI & TECH',
    href: '/tags/ai-tech',
    icon: (
      <svg viewBox="0 0 64 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Brain with circuit paths */}
        <ellipse cx="32" cy="24" rx="22" ry="17" stroke="white" strokeWidth="1.2" fill="none" opacity="0.6"/>
        <path d="M20 18 Q24 14 28 18 Q32 22 28 26 Q24 30 20 26 Q16 22 20 18Z" stroke="white" strokeWidth="1" fill="none" opacity="0.5"/>
        <path d="M36 14 Q42 10 46 16 Q50 22 44 28 Q40 32 36 26 Q32 20 36 14Z" stroke="white" strokeWidth="1" fill="none" opacity="0.5"/>
        <line x1="28" y1="22" x2="36" y2="22" stroke="white" strokeWidth="1.2" opacity="0.8"/>
        <circle cx="20" cy="22" r="1.5" fill="white" opacity="0.9"/>
        <circle cx="44" cy="22" r="1.5" fill="white" opacity="0.9"/>
        <circle cx="32" cy="16" r="1" fill="white" opacity="0.7"/>
        <line x1="32" y1="10" x2="32" y2="16" stroke="white" strokeWidth="0.8" opacity="0.5"/>
        <line x1="32" y1="30" x2="32" y2="38" stroke="white" strokeWidth="0.8" opacity="0.5" strokeDasharray="2 1.5"/>
        <circle cx="18" cy="12" r="0.8" fill="white" opacity="0.4"/>
        <circle cx="46" cy="12" r="0.8" fill="white" opacity="0.4"/>
        <circle cx="28" cy="36" r="0.8" fill="white" opacity="0.4"/>
        <circle cx="36" cy="36" r="0.8" fill="white" opacity="0.4"/>
      </svg>
    ),
  },
  {
    name: 'SPACE & SCIENCE',
    href: '/tags/space-science',
    icon: (
      <svg viewBox="0 0 64 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Planet with rings */}
        <circle cx="32" cy="24" r="11" stroke="white" strokeWidth="1.2" fill="none" opacity="0.7"/>
        <ellipse cx="32" cy="24" rx="22" ry="6" stroke="white" strokeWidth="1.2" fill="none" opacity="0.5"/>
        <circle cx="24" cy="18" r="1" fill="white" opacity="0.6"/>
        <circle cx="42" cy="16" r="0.8" fill="white" opacity="0.4"/>
        <circle cx="14" cy="30" r="0.6" fill="white" opacity="0.4"/>
        <circle cx="50" cy="28" r="0.6" fill="white" opacity="0.4"/>
        <circle cx="38" cy="32" r="0.5" fill="white" opacity="0.3"/>
        <circle cx="20" cy="10" r="0.5" fill="white" opacity="0.3"/>
      </svg>
    ),
  },
  {
    name: 'INVESTING & IDEAS',
    href: '/tags/investing-ideas',
    icon: (
      <svg viewBox="0 0 64 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Bar chart ascending */}
        <rect x="10" y="32" width="8" height="10" fill="white" opacity="0.4"/>
        <rect x="22" y="24" width="8" height="18" fill="white" opacity="0.55"/>
        <rect x="34" y="16" width="8" height="26" fill="white" opacity="0.7"/>
        <rect x="46" y="8"  width="8" height="34" fill="white" opacity="0.85"/>
        <polyline points="14,28 26,20 38,12 50,4" stroke="white" strokeWidth="1.2" fill="none" opacity="0.6"/>
        <circle cx="14" cy="28" r="1.5" fill="white" opacity="0.8"/>
        <circle cx="26" cy="20" r="1.5" fill="white" opacity="0.8"/>
        <circle cx="38" cy="12" r="1.5" fill="white" opacity="0.8"/>
        <circle cx="50" cy="4"  r="1.5" fill="white" opacity="0.8"/>
        <line x1="8" y1="43" x2="58" y2="43" stroke="white" strokeWidth="0.8" opacity="0.3"/>
      </svg>
    ),
  },
  {
    name: 'CREATIVE DESIGNS',
    href: '/tags/creative-designs',
    icon: (
      <svg viewBox="0 0 64 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Lightbulb with starfield */}
        <path d="M32 8 C24 8 18 14 18 22 C18 27 21 31 26 33 L26 38 L38 38 L38 33 C43 31 46 27 46 22 C46 14 40 8 32 8Z" stroke="white" strokeWidth="1.2" fill="none" opacity="0.7"/>
        <line x1="26" y1="38" x2="38" y2="38" stroke="white" strokeWidth="1.2" opacity="0.7"/>
        <line x1="27" y1="41" x2="37" y2="41" stroke="white" strokeWidth="1" opacity="0.5"/>
        <circle cx="32" cy="22" r="3" fill="white" opacity="0.6"/>
        <circle cx="15" cy="12" r="0.8" fill="white" opacity="0.5"/>
        <circle cx="50" cy="10" r="0.8" fill="white" opacity="0.5"/>
        <circle cx="12" cy="28" r="0.6" fill="white" opacity="0.4"/>
        <circle cx="52" cy="30" r="0.6" fill="white" opacity="0.4"/>
        <circle cx="20" cy="6"  r="0.5" fill="white" opacity="0.3"/>
        <circle cx="44" cy="5"  r="0.5" fill="white" opacity="0.3"/>
        <circle cx="8"  cy="18" r="0.5" fill="white" opacity="0.3"/>
        <circle cx="56" cy="20" r="0.5" fill="white" opacity="0.3"/>
      </svg>
    ),
  },
];

export default async function Home() {
  let shopifyProducts = [];
  try {
    const { body } = await shopifyFetch({ query: getProductsQuery });
    shopifyProducts = body?.data?.products?.edges || [];
  } catch (e) {
    // Fail silently — use fallback
  }

  // Build product list: prefer Shopify, fall back to static
  const products = shopifyProducts.length > 0
    ? shopifyProducts.slice(0, 6).map(({ node }) => ({
        id: node.id,
        handle: node.handle,
        title: node.title,
        price: node.priceRange?.minVariantPrice?.amount || '24.99',
        currency: node.priceRange?.minVariantPrice?.currencyCode || 'USD',
        image: node.images?.edges?.[0]?.node?.url || null,
        altText: node.images?.edges?.[0]?.node?.altText || node.title,
      }))
    : FALLBACK_PRODUCTS.map(p => ({
        ...p,
        currency: 'USD',
        altText: p.title,
      }));

  return (
    <div className={styles.page}>
      {/* ── Hero Banner ── */}
      <Hero products={shopifyProducts} />

      {/* ── Featured Products ── */}
      <section className={styles.section}>
        <div className={styles.sectionHeader}>
          <div>
            <h2 className={styles.sectionTitle}>EXPLORE OUR DESIGNS</h2>
            <p className={styles.sectionSubtitle}>
              Find graphic tees inspired by the ideas, discoveries, and technology that make you curious.
            </p>
          </div>
          <Link href="/collections/all" className={styles.viewAllBtn}>
            VIEW ALL TEES
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <line x1="5" y1="12" x2="19" y2="12" />
              <polyline points="12 5 19 12 12 19" />
            </svg>
          </Link>
        </div>

        <div className={styles.productGrid}>
          {products.map((product, i) => (
            <Link key={product.id || i} href={`/products/${product.handle}`} className={styles.productCard}>
              <div className={styles.productImageWrap}>
                {product.image ? (
                  <Image
                    src={product.image}
                    alt={product.altText}
                    fill
                    sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 16vw"
                    className={styles.productImage}
                  />
                ) : (
                  <div className={styles.productImagePlaceholder} />
                )}
              </div>
              <div className={styles.productMeta}>
                <span className={styles.productName}>{product.title}</span>
                <span className={styles.productPrice}>
                  {new Intl.NumberFormat('en-US', {
                    style: 'currency',
                    currency: product.currency || 'USD',
                    minimumFractionDigits: 2,
                  }).format(product.price || 24.99)}
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* ── Interest Collections ── */}
      <section className={styles.section}>
        <div className={styles.sectionHeaderSimple}>
          <h2 className={styles.sectionTitle}>SHOP BY INTEREST</h2>
          <p className={styles.sectionSubtitle}>Explore collections based on what you love.</p>
        </div>

        <div className={styles.collectionsGrid}>
          {INTEREST_COLLECTIONS.map((col) => (
            <Link key={col.name} href={col.href} className={styles.collectionCard}>
              <div className={styles.collectionIllustration}>
                {col.icon}
              </div>
              <div className={styles.collectionInfo}>
                <span className={styles.collectionName}>{col.name}</span>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={styles.collectionArrow}>
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* ── Brand Benefits ── */}
      <section className={styles.benefitsSection}>
        <div className={styles.benefitsGrid}>
          {[
            {
              icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-8 2a2 2 0 1 0 0 4 2 2 0 0 0 0-4z"/></svg>,
              title: 'Thoughtful Designs',
              desc: 'Original artwork for curious minds.',
            },
            {
              icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10z"/><path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"/></svg>,
              title: 'Printed On Demand',
              desc: 'Produced only when you order.',
            },
            {
              icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>,
              title: 'Reliable Shipping',
              desc: 'Shipped with trusted partners.',
            },
            {
              icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M3 18v-6a9 9 0 0 1 18 0v6"/><path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z"/></svg>,
              title: 'Customer Support',
              desc: "We're here to help.",
            },
          ].map((item, i, arr) => (
            <div key={item.title} className={styles.benefitItem}>
              <span className={styles.benefitIcon}>{item.icon}</span>
              <div className={styles.benefitText}>
                <span className={styles.benefitTitle}>{item.title}</span>
                <span className={styles.benefitDesc}>{item.desc}</span>
              </div>
              {i < arr.length - 1 && <div className={styles.benefitDivider} />}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
