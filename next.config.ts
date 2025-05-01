import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    unoptimized: true, // ✅ disables Vercel image optimization to avoid cost
  },
};

export default nextConfig;
