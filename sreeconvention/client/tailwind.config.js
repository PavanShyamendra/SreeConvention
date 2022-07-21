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
      },
    },
  },
  plugins: [],
}
