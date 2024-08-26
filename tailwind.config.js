/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        pink: '#e89ac7',
        green: '#97ce4c',
        yellow: '#f0e14a',
        peach: '#e4a788',
        primary: '#24282F',
        accent: '#3C3E44',
      },
      backgroundImage: {
        'home-background': "url('./assets/background.png')",
      },
    },
  },
  plugins: [],
};
