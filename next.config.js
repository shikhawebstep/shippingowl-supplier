/** @type {import('next').NextConfig} */
const nextConfig = {
    trailingSlash: true, // Ensures static HTML file creation

    images: {
        unoptimized: true, // ✅ Disable Next.js image optimization
    },


    basePath: "/demo/ShippingOwl", // ✅ Sets the base path for the app
    assetPrefix: "/demo/ShippingOwl/", // ✅ Ensures assets load from the correct path
};

module.exports = nextConfig; // ✅ Correct way to export config
