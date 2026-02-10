/** @type {import('next').NextConfig} */
const config = {
  reactStrictMode: false,
  turbopack: {
    root: __dirname
  },
  transpilePackages: [
    '@fullcalendar/common',
    '@fullcalendar/react',
    '@fullcalendar/daygrid',
    '@fullcalendar/list',
    '@fullcalendar/timegrid',
    '@fullcalendar/timeline'
  ],
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack']
    });
    return config;
  },
  async redirects() {
    return [
      {
        source: '/docs',
        destination: '/docs/welcome',
        permanent: true
      }
    ];
  }
};

module.exports = config;
