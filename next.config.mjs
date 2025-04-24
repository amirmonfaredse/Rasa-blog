/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverActions: {
      bodySizeLimit: "10mb",
    },
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "pzbdncisbmytfhydqojl.supabase.co",
        port: "",
        pathname: "/storage/v1/object/public/**",
        search: "",
      },
    ],
  },
  headers: () => [
    {
      source: "/:path*",
      headers: [
        {
          key: "Cache-Control",
          value: "no-cache",
        },
      ],
    },
  ],
  async redirects() {
    return [
      {
        source: "/about",
        destination: "/blogs",
        permanent: false,
      },
      {
        source: "/",
        destination: "/blogs",
        permanent: false,
      },

      {
        source: "/services",
        destination: "/blogs",
        permanent: false,
      },
      {
        source: "/experiences",
        destination: "/blogs",
        permanent: false,
      },
      {
        source: "/skills",
        destination: "/blogs",
        permanent: false,
      },
      {
        source: "/portfolio",
        destination: "/blogs",
        permanent: false,
      },
    ];
  },
};

export default nextConfig;
