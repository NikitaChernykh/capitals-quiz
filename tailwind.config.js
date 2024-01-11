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
        slide_left: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-95%)' },
        },
        slide_from_right_to_left: {
          '0%': { transform: 'translateX(20%)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        slide_to_top: {
          '0%': { transform: 'translateY(0)', scale: '1' },
          '100%': { transform: 'translateY(-10%)', scale: '1.4' },
        },
      },
      animation: {
        'slide-from-left': 'slide_from_left 0.3s ease-in-out',
        'slide-left': 'slide_left 0.5s ease-in-out 0.1s forwards',
        'slide-from-right-to-left':
          'slide_from_right_to_left 0.5s ease-in-out 0.5s forwards',
        'slide-from-right-to-left-slow':
          'slide_from_right_to_left 1s ease-in-out 4s forwards',
        'slide-to-top': 'slide_to_top 0.2s ease-in-out forwards',
      },
    },
  },
  plugins: [],
};
