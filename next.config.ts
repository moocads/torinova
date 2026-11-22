import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin("./i18n/request.ts");

const nextConfig: NextConfig = {
  cacheComponents: true,
  partialPrefetching: true,
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
  images: {
    // Strapi media lives in the project's S3 bucket (<project>-mooc, ca-central-1)
    remotePatterns: [
      { protocol: "https", hostname: "*.s3.ca-central-1.amazonaws.com" },
      { protocol: "http", hostname: "localhost", port: "1337" },
    ],
  },
};

export default withNextIntl(nextConfig);
