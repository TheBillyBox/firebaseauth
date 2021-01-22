module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    minWidth: {
      '0' : '0',
      '25' : '25%',
      '50' : '50%',
      '75' : '75%',
      '90' : '90%',
      '100' : '100%'
    },
    minHeight: {
      '0' : '0',
      '25' : '25%',
      '50' : '50%',
      '75' : '75%',
      '100' : '100%',
      '100' : '100%'
    },
    maxWidth: {
      '0' : '0',
      '25' : '25%',
      '30' : '30%',
      '40' : '40%',
      '50' : '50%',
      '75' : '75%',
      '90' : '90%',
    },
    maxHeight: {
      '0' : '0',
      '25' : '25%',
      '50' : '50%',
      '75' : '75%',
      '100' : '100%'
    },
    backgroundColor: theme => ({
      ...theme ('colors'),
      'nav': '#111111',
      'hoverNav': '#272727',
      'primary': '#007acc',
      'hoverPrimary' : '#006FBB',
      'secondary': '#0098ff',
      'ground': '#e4f5ff',
      'white':'#ffffff'
    }),
    textColor: theme => ({
      ...theme('colors'),
       'primary': '#3490dc',
       'hoverPrimary' : '#006FBB',
       'secondary': '#ffed4a',
       'danger': '#e3342f',
     }),
     borderColor: theme => ({
      ...theme('colors'),
       'primary': '#3490dc',
       'hoverPrimary' : '#006FBB',
       'secondary': '#ffed4a',
       'danger': '#e3342f',
     }),
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
