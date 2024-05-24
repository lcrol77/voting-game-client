/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/**/*.{js,jsx,ts,tsx}"
    ],
    content: [
        "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                'east-bay': {
                    '50': '#f4f7fa',
                    '100': '#e6ecf3',
                    '200': '#d3dcea',
                    '300': '#b5c6db',
                    '400': '#91a8c9',
                    '500': '#778eba',
                    '600': '#6579ab',
                    '700': '#59699c',
                    '800': '#4d5780',
                    '900': '#434c6b',
                    '950': '#2b2f40',
                },

            }
        },
    },
    plugins: [
        require('@tailwindcss/forms'),
    ],
}

