import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async rewrites() {
    
    const backendUrl = process.env.BACKEND_URL
    
    return [
      {
        source: '/backend/:path*',
        destination: `${backendUrl}/:path*` // Proxy to Backend
      }
    ];
  }
  
};

export default nextConfig;