import type {Config} from "tailwindcss";

const config: Config = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                avenirLight: ["Avenir-Light", "sans-serif"],
                avenirBook: ["Avenir-Book", "sans-serif"],
                avenirRoman: ["Avenir-Roman", "sans-serif"],
                avenirMedium: ["Avenir-Medium", "sans-serif"],
                avenirHeavy: ["Avenir-Heavy", "sans-serif"],
            },
            colors: {
                background: "var(--background)",
                foreground: "var(--foreground)",
            },
        },
    },
    plugins: [],
};
export default config;
