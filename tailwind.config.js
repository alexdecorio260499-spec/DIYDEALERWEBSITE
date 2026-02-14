/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                'gsd-cream': '#f4f4f3',
                'gsd-black': '#1a1a1a',
                'gsd-grey': '#54595f',
                'gsd-olive': '#8f9483', // Muted olive/sage
                primary: {
                    DEFAULT: '#1a1a1a',
                    foreground: '#f4f4f3',
                },
                secondary: {
                    DEFAULT: '#8f9483',
                    foreground: '#FFFFFF',
                },
                accent: {
                    DEFAULT: '#f4f4f3',
                    foreground: '#1a1a1a',
                },
                background: '#f4f4f3',
                text: '#54595f',
            },
            fontFamily: {
                sans: ['"Open Sans"', 'sans-serif'],
                serif: ['"Cormorant Garamond"', 'serif'],
            },
            spacing: {
                'xs': '4px',
                'sm': '8px',
                'md': '16px',
                'lg': '24px',
                'xl': '32px',
                '2xl': '48px',
                '3xl': '64px',
            },
        },
    },
    plugins: [],
}
