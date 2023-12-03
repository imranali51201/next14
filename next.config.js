/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    JWT_SALT: process.env.JWT_SALT,
    PASSWORD_SALT: process.env.PASSWORD_SALT
  },
  experimental: {
    serverComponentsExternalPackages: ['sequelize'],
  },
  webpack: (config) => {
    return config;
  },
  images: {
    remotePatterns: [
      {
        hostname: 'seeklogo.com',
        pathname: '**',
        protocol: 'https'
      },
      {
        hostname: "static-00.iconduck.com",
        pathname: '**',
        protocol: 'https'
      },
      {
        hostname: "upload.wikimedia.org",
        pathname: '**',
        protocol: 'https'
      },
    ]

  },
}


module.exports = nextConfig