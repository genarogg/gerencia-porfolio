/** @type {import('tailwindcss').Config} */
export default {
    content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
    darkMode: 'class',
    theme: {
        extend: {
            colors: {
                scooter: {
                    50: '#ecffff',
                    100: '#cffdfe',
                    200: '#a6f7fb',
                    300: '#68f0f8',
                    400: '#24deec',
                    500: '#08c0d1', //main
                    600: '#0a9ab0',
                    700: '#0f7b8f',
                    800: '#166474',
                    900: '#175362',
                    950: '#093743',
                },
                mango: {
                    50: '#fef9ec',
                    100: '#faedcb',
                    200: '#f6da91',
                    300: '#f0bd4f', //main
                    400: '#edaa32',
                    500: '#e6891a',
                    600: '#cb6714',
                    700: '#a94814',
                    800: '#8a3816',
                    900: '#712f16',
                    950: '#411607',
                },
            },
        },
    },
    plugins: [],
}
