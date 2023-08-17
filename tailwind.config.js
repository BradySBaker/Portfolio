module.exports = {
  variants: {
    backgroundColor: ['responsive', 'hover', 'focus', 'active']
  },
  mode: 'jit',
  content: [
    './client/src/**/*.{js,jsx}'
  ],
  theme: {
    extend: {}
  },
  plugins: []
};
