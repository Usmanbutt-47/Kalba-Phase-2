/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,
    env: {
      BASE_URL: process.env.BASE_URL,
      DOMAIN: process.env.DOMAIN,
      AWS_REGION: process.env.AWS_REGION,
      AWS_ACCESS_KEY_ID: process.env.AWS_ACCESS_KEY_ID,
      AWS_SECRET_ACCESS_KEY: process.env.AWS_SECRET_ACCESS_KEY,
      REACT_APP_STRIPE_PUBLISHABLE_KEY: process.env.REACT_APP_STRIPE_PUBLISHABLE_KEY,
      REACT_APP_STRIPE_SECRET_KEY: process.env.REACT_APP_STRIPE_SECRET_KEY,
      REACT_APP_STRIPE_TEST_PUBLISHABLE_KEY: process.env.REACT_APP_STRIPE_TEST_PUBLISHABLE_KEY,
      REACT_APP_STRIPE_TEST_SECRET_KEY: process.env.REACT_APP_STRIPE_TEST_SECRET_KEY,
      REACT_APP_FIREBASE_API_KEY: process.env.REACT_APP_FIREBASE_API_KEY,
      REACT_APP_FIREBASE_VAPID_KEY: process.env.REACT_APP_FIREBASE_VAPID_KEY,
      REACT_APP_VIDEOSDK_API_KEY: process.env.REACT_APP_VIDEOSDK_API_KEY,
      REACT_APP_GOOGLE_CLIENTID: process.env.REACT_APP_GOOGLE_CLIENTID,
      REACT_APP_LINKEDIN_APPID: process.env.REACT_APP_LINKEDIN_APPID,
      REACT_APP_LINKEDIN_SECRET_KEY: process.env.REACT_APP_LINKEDIN_SECRET_KEY,
      DOMAIN_WWW: process.env.DOMAIN_WWW,
      REACT_APP_PAYPAL_CLIENTID: process.env.REACT_APP_PAYPAL_CLIENTID,
      REACT_APP_PAYPAL_SECRET_KEY: process.env.REACT_APP_PAYPAL_SECRET_KEY,
      PAYPAL_MERCHANT_ID: process.env.PAYPAL_MERCHANT_ID,
      REACT_APP_ACCOUNT_ID: process.env.REACT_APP_ACCOUNT_ID,
      ENVIRONMENT: process.env.ENVIRONMENT,
    },
    eslint: {
      ignoreDuringBuilds: true,
  },
    images: {
      // domains:['skill-yah-dev-bucket.s3.amazonaws.com', 'courses.edx.org', 'prod-discovery.edx-cdn.org']
      domains:['static.wixstatic.com','skill-yah-dev-bucket.s3.amazonaws.com', 'courses.edx.org', 'prod-discovery.edx-cdn.org']
    }
};

export default nextConfig;
