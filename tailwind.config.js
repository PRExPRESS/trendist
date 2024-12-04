module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./node_modules/@material-tailwind/react/**/*.js"  // Add Material Tailwind path
  ],
  theme: {
    extend: {
      fontFamily: {
        'albert': ['Albert Sans', 'sans-serif'],
      },
      colors:{
        line:'#ebebeb',
        'accent':"#db1215"
      },
      animation:{
        'left-to-right': 'left-to-right 3s ease-in-out infinite',
        'top-to-bottom': 'top-to-bottom 0.5s ease-in-out',
        'bottom-to-top': 'bottom-to-top 0.5s ease-in'
      },
      keyframes: {
        'left-to-right': {
          '0%, 100%': { transform: 'translateX(0)' },
          '50%': { transform: 'translateX(100%)' },
        },
        'top-to-bottom': {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(0)' },
        },
        'bottom-to-top': {
          '0%': { transform: 'translateY(0)' },      
          '100%': { transform: 'translateY(100%)' }, 
        },
      },
      backgroundImage: {
        'pag-title': "url('/src/assets/images/page-title.png')",
      }
    },
  },
  plugins: [],
}
