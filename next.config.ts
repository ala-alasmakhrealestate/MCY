// import type { NextConfig } from "next";
//
// const nextConfig: NextConfig = {
//   /* config options here */
// };
//
// export default nextConfig;

/** @type {import('tailwindcss').Config} */
module.exports = {
    reactStrictMode: true,
    eslint: {
        ignoreDuringBuilds: true,
    },
    content: [
        "./app/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}"
    ],
    theme: {
    },
    plugins: []
}