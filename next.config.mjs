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
    // https://pzbdncisbmytfhydqojl.supabase.co/storage/v1/object/public/blogs-images/mainImage-1-blogs-min.jpg
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
