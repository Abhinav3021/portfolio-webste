export default {
  theme: {
    extend: {
      keyframes: {
        wave: {
          '0%, 100%': { transform: 'rotate(0deg)' },
          '20%': { transform: 'rotate(-20deg)' },
          '40%': { transform: 'rotate(10deg)' },
          '60%': { transform: 'rotate(-10deg)' },
          '80%': { transform: 'rotate(5deg)' },
        },
      },
      animation: {
        wave: 'wave 0.7s ease-in-out',
      },
    },
  },
};