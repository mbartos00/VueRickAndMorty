/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        pink: '#e89ac7',
        green: '#97ce4c',
        yellow: '#f0e14a',
        peach: '#e4a788',
        brown: '#44281d',
      },
    },
  },
  plugins: [],
};
