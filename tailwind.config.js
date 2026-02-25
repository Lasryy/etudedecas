/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                'metal-navy': '#0A0F1E',
                'metal-gold': '#F59E0B',
                'metal-slate': '#1E293B',
            },
            fontFamily: {
                inter: ['Inter', 'sans-serif'],
                sora: ['Sora', 'sans-serif'],
            },
        },
    },
    plugins: [],
}
