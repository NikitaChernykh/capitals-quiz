/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      keyframes: {
        slide_from_left: {
          '0%': { transform: 'translateX(-10%)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
      },
      animation: {
        'slide-from-left': 'slide_from_left 0.3s ease-in-out',
      },
    },
  },
  plugins: [],
};
