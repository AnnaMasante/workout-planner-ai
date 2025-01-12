import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    forceSwcTransforms: true,
  },
  swcMinify: true,  // SWC pour la minification en production
  // Vous pouvez ajouter d'autres configurations ici si nécessaire
};

export default nextConfig;
