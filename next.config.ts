import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ["png.pngtree.com" , "www.pockethrms.com", "storage.googleapis.com", "tse2.mm.bing.net"], // ← required for your profile image
  },
};

export default nextConfig;
