'use client';

import { ShopifyProvider } from '@shopify/hydrogen-react';
import { useAnalytics } from '@/hooks/useAnalytics';
import { usePathname, useSearchParams } from 'next/navigation';
import { useEffect } from 'react';

function PageViewTracker() {
  const { publish } = useAnalytics();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    // When pathname or searchParams change, fire a page_viewed event
    publish('page_viewed', {
      url: window.location.href,
    });
  }, [pathname, searchParams, publish]);

  return null;
}

export default function AnalyticsProviderWrapper({ children }) {
  const rawDomain = process.env.NEXT_PUBLIC_SHOPIFY_STORE_DOMAIN?.trim();
  const storefrontToken = process.env.NEXT_PUBLIC_SHOPIFY_STOREFRONT_ACCESS_TOKEN?.trim();

  // If Shopify credentials are not provided (e.g. keys removed or mock mode),
  // skip ShopifyProvider to avoid crashing with:
  // "Error: Please provide the necessary props to '<ShopifyProvider/>'"
  if (
    !rawDomain || 
    !storefrontToken || 
    rawDomain.includes('your-store') || 
    storefrontToken.includes('your-') ||
    storefrontToken.length < 10
  ) {
    return <>{children}</>;
  }

  const storeDomain = rawDomain.replace(/^https?:\/\//, '').replace(/\/$/, '');

  return (
    <ShopifyProvider
      storeDomain={storeDomain}
      storefrontToken={storefrontToken}
      storefrontApiVersion={process.env.NEXT_PUBLIC_SHOPIFY_STOREFRONT_API_VERSION || '2026-04'}
      countryIsoCode="US"
      languageIsoCode="EN"
    >
      <PageViewTracker />
      {children}
    </ShopifyProvider>
  );
}
