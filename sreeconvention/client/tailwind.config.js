/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: ['./src/**/*.{js,jsx,ts,tsx}', './node_modules/flowbite/**/*.js'],
  theme: {
    extend: {
      colors:{
        light: '#FCFBFB',
        main: '#FBA1A1',
        other: '#8F1746',
        contactCard :'#E97979',
        werejust :'#D88181',
        creamy :'#FFF9CA',
        well : '#535353',
        diningcol: '#FFD1AF',
        diningfont: '#644561',
        parkingcol: '#2C3639',
        parkingfont:'#DCD7C9',
      },
    },
  },
  plugins: [],
}
