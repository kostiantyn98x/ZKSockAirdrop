module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
  },
  plugins: [],
  variants: {
    // ...
     textColor: ['responsive', 'hover', 'focus', 'active', 'group-hover'],
     borderColor: ['responsive'],
  }
};