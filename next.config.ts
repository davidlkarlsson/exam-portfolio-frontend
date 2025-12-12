import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async rewrites() {
    
    const backendUrl = process.env.NEXT_PUBLIC_ADMIN;
    
    return [
      {
        source: '/backend/:path*',
        destination: `${backendUrl}/:path*` // Proxy to Backend
      }
    ];
  }
  
};

export default nextConfig;