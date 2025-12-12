import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async rewrites() {
    return [
      {
        source: '/backend/:path*',
        destination: 'http://localhost:8080/api/v1/:path*'  // Lokal backend
      }
    ];
  }
  
};

export default nextConfig;