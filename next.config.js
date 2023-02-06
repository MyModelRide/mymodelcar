/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Enables the styled-components SWC transform
  styledComponents: true,
  images: {
    domains: ["cdn.sanity.io"],
  },
  i18n: {
    locales: ["en", "bn"],
    defaultLocale: "en",
  },
};

module.exports = nextConfig;
