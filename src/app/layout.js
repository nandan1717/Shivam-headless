import Navbar from '@/components/Navbar/Navbar';
import Footer from '@/components/Footer/Footer';
import CartShell from '@/components/Cart/CartShell';
import AnalyticsProviderWrapper from '@/components/Analytics/AnalyticsProviderWrapper';
import { Suspense } from 'react';
import { CartProvider } from '@/context/CartContext';
import { AuthProvider } from '@/context/AuthContext';
import { getCart } from '@/lib/shopify/cart-actions';
import { getShopName, getShopInfo } from '@/lib/shopify/client';
import './globals.css';

export async function generateMetadata() {
  return {
    title: 'Curious Circuit Co. | Wear Your Curiosity',
    description: 'Clever graphic tees for curious minds. Inspired by technology, science, AI, and the ideas shaping tomorrow.',
  };
}

export default async function RootLayout({ children }) {
  const [cart, shopInfo] = await Promise.all([
    getCart(),
    getShopInfo(),
  ]);

  const shopName = 'CURIOUS CIRCUIT CO.';
  const shopLogo = null;
  const instagramUrl = 'https://instagram.com/curiouscircuitco';
  const emailUrl = 'mailto:hello@curiouscircuitco.com';

  return (
    <html lang="en" data-scroll-behavior="smooth">
      <body>
        <Suspense fallback={null}>
          <AnalyticsProviderWrapper>
            <AuthProvider>
              <CartProvider initialCart={cart}>
                <Navbar shopName={shopName} shopLogo={shopLogo} />
                <main>{children}</main>
                <Footer 
                  shopName={shopName} 
                  shopLogo={null}
                  instagramUrl={instagramUrl}
                  emailUrl={emailUrl}
                />
                <CartShell />
              </CartProvider>
            </AuthProvider>
          </AnalyticsProviderWrapper>
        </Suspense>
      </body>
    </html>
  );
}
