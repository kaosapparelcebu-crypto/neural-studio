/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                'brand-black': '#050505', // Jet Black
                'brand-red': '#D71E28',   // Brand Red
                'brand-white': '#FFFFFF', // Chrome White
                'brand-zinc': '#18181B',  // Zinc Gray
                'brand-green': '#22c55e', // Keep for positive stats
            }
        },
    },
    plugins: [],
}
