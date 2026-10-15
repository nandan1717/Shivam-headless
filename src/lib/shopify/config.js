export const SHOPIFY_STORE_DOMAIN =
  process.env.SHOPIFY_STORE_DOMAIN ||
  process.env.NEXT_PUBLIC_SHOPIFY_STORE_DOMAIN ||
  'shivam.myshopify.com';

export const SHOPIFY_STOREFRONT_ACCESS_TOKEN =
  process.env.SHOPIFY_STOREFRONT_ACCESS_TOKEN ||
  process.env.NEXT_PUBLIC_SHOPIFY_STOREFRONT_ACCESS_TOKEN ||
  process.env.NEXT_PUBLIC_SHOPIFY_STOREFRONT_TOKEN || '';

// Storefront API — for products, collections, cart
export const STOREFRONT_API_URL =
  `https://${SHOPIFY_STORE_DOMAIN}/api/2024-10/graphql.json`;
export const STOREFRONT_PUBLIC_TOKEN = SHOPIFY_STOREFRONT_ACCESS_TOKEN;

export const SHOPIFY_CUSTOMER_ACCOUNT_CLIENT_ID =
  process.env.NEXT_PUBLIC_SHOPIFY_CUSTOMER_ACCOUNT_CLIENT_ID ||
  process.env.NEXT_PUBLIC_SHOPIFY_CLIENT_ID || '';

export const SHOPIFY_CLIENT_ID = SHOPIFY_CUSTOMER_ACCOUNT_CLIENT_ID;

const rawShopId = process.env.NEXT_PUBLIC_SHOPIFY_SHOP_ID || '';
export const SHOPIFY_SHOP_ID =
  (rawShopId && !rawShopId.includes('myshopify.com')) ? rawShopId : '82540364031';

// Customer Account API — for login, orders, profile
export const CUSTOMER_ACCOUNT_API_URL =
  `https://shopify.com/${SHOPIFY_SHOP_ID}/account/customer/api/2024-07/graphql`;

export const APP_URL =
  (typeof window !== 'undefined')
    ? window.location.origin
    : (process.env.NEXT_PUBLIC_APP_URL || (process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : 'https://shivamstore.com'));

// Headless domain configuration
export const PUBLIC_CHECKOUT_DOMAIN =
  process.env.PUBLIC_CHECKOUT_DOMAIN || 'checkout.shivamstore.com';

export const PUBLIC_STOREFRONT_URL =
  process.env.PUBLIC_STOREFRONT_URL || 'https://shivamstore.com';
/**
 * Rewrite checkout URLs to use the custom checkout subdomain (checkout.shivamstore.com).
 *
 * Handles three cases:
 *  1. Relative URLs (/cart/c/...) — prepend https://checkout.shivamstore.com
 *  2. Absolute *.myshopify.com URLs — swap hostname
 *  3. Absolute URLs on any other domain containing checkout paths — swap hostname
 */
export function rewriteCheckoutUrl(checkoutUrl) {
  if (!checkoutUrl || !PUBLIC_CHECKOUT_DOMAIN) return checkoutUrl;

  const checkoutBase = `https://${PUBLIC_CHECKOUT_DOMAIN}`;

  // Case 1: Relative URL (starts with /) — common in Storefront API responses
  if (checkoutUrl.startsWith('/')) {
    return `${checkoutBase}${checkoutUrl}`;
  }

  try {
    const url = new URL(checkoutUrl);

    // Case 2: Already on the correct checkout domain
    if (url.hostname === PUBLIC_CHECKOUT_DOMAIN) {
      return checkoutUrl;
    }

    // Case 3: On *.myshopify.com or any other domain — rewrite to checkout subdomain
    if (url.hostname.endsWith('.myshopify.com') ||
        url.pathname.startsWith('/cart/c/') ||
        url.pathname.startsWith('/checkouts/')) {
      url.hostname = PUBLIC_CHECKOUT_DOMAIN;
      return url.toString();
    }

    return checkoutUrl;
  } catch {
    // Fallback: string-level rewrite
    return checkoutUrl.replace(
      /https?:\/\/[^/]*\.myshopify\.com/,
      checkoutBase
    );
  }
}

export const isShopifyConfigured =
  Boolean(SHOPIFY_STORE_DOMAIN) &&
  SHOPIFY_STORE_DOMAIN !== 'your-store.myshopify.com' &&
  Boolean(SHOPIFY_STOREFRONT_ACCESS_TOKEN) &&
  SHOPIFY_STOREFRONT_ACCESS_TOKEN !== 'your-access-token';

export const isCustomerAccountApiConfigured =
  Boolean(SHOPIFY_CUSTOMER_ACCOUNT_CLIENT_ID) &&
  SHOPIFY_CUSTOMER_ACCOUNT_CLIENT_ID !== 'your_client_id_here' &&
  SHOPIFY_CUSTOMER_ACCOUNT_CLIENT_ID !== 'your-client-id-here';

export const CART_COOKIE_NAME = 'cart-id';
export const MOCK_CART_COOKIE_NAME = 'mock-cart';

// Shopify Markets — international pricing
export const COUNTRY_COOKIE_NAME = 'buyer-country';
export const DEFAULT_COUNTRY = 'IN';

export const SUPPORTED_COUNTRIES = [
  { code: 'IN', name: 'India', currency: 'INR', flag: '🇮🇳' },
  { code: 'US', name: 'United States', currency: 'USD', flag: '🇺🇸' },
  { code: 'CA', name: 'Canada', currency: 'CAD', flag: '🇨🇦' },
  { code: 'GB', name: 'United Kingdom', currency: 'GBP', flag: '🇬🇧' },
  { code: 'AU', name: 'Australia', currency: 'AUD', flag: '🇦🇺' },
  { code: 'AE', name: 'UAE', currency: 'AED', flag: '🇦🇪' },
  { code: 'SG', name: 'Singapore', currency: 'SGD', flag: '🇸🇬' },
];
