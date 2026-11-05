/** @type {import('next').NextConfig} */
module.exports = {
  experimental: { serverComponentsExternalPackages: ["pg", "@prisma/adapter-pg"] },
};
