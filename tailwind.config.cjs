/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
    theme: {
        extend: {
            screens: {
                '3xl': '2560px',
            },
            animation: {
                bubble: 'bubble 8s infinite',
            },
            keyframes: {
                bubble: {
                    '0%': {
                        transform: 'scale(1)',
                    },
                    '33%': {
                        transform: 'scale(1.2)',
                    },
                    '66%': {
                        transform: 'scale(0.8)',
                    },
                    '100%': {
                        transform: 'scale(1)',
                    },
                },
            },
        },
    },
    plugins: [],
}
