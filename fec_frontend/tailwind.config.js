/** @type {import('tailwindcss').Config} */

export default {
  content: ['./src/**/*.{js,jsx}',
  ],
  theme: {
    extend:
    {
      fontFamily: {
        'sans': ['Nunito', "Gruppo", 'sans-serif'], 
        
      },
    },
  },
  plugins: ['@tailwindcss/forms'],
}

