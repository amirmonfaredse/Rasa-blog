/** @type {import('next').NextConfig} */
const nextConfig = {
    headers: () => [
        {
          source: '/:path*',
          headers: [
            {
              key: 'Cache-Control',
              value: 'no-cache',
            },
          ],
        },
      ],
};


export default nextConfig;
