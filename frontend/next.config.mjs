/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: "/", // The old path you want to redirect from
        destination: "/bitcoin", // The new path you want to redirect to
        permanent: false, // or true for a permanent redirect
      },
    ];
  },
};

export default nextConfig;
