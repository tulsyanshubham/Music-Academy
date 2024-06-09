/** @type {import('next').NextConfig} */
const nextConfig = {
    basePath: "/Music-Academy",
    output: "export",
    reactStrictMode: true,
    images: {
        domains: ['images.unsplash.com'],
    }
};

export default nextConfig;
