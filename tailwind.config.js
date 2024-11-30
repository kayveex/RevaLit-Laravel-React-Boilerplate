import defaultTheme from 'tailwindcss/defaultTheme';

/** @type {import('tailwindcss').Config} */
export default {
    content: [
        './vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php',
        './storage/framework/views/*.php',
        './resources/**/*.blade.php',
        './resources/**/*.jsx',
        './resources/**/*.vue',
    ],
    theme: {
        extend: {
            fontFamily: {
                sans: ['Figtree', ...defaultTheme.fontFamily.sans],
            },
            backgroundImage : {
                'revalit-gradient': 'linear-gradient(180deg, #1D232A 50%, #00D8FF 204.94%)'
            },
            colors: {
                "primaryDark": "#1D232A",
                "secondaryDark": "#242A31",
                "laravel": "#F23A22",
                "react" : "#61DAFB",
            }
        },
    },
    plugins: [],
};
