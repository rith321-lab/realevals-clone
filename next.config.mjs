/** @type {import('next').NextConfig} */
const nextConfig = {
  // We'll use Netlify's Next.js plugin instead of static export
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
