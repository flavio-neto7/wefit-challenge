/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: "wefit-react-web-test.s3.amazonaws.com",
      },
    ],
  },
  compiler: {
    styledComponents: true,
  },
}

export default nextConfig
