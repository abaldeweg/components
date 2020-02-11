module.exports = {
  plugins: [
    require('autoprefixer'),
    require('cssnano'),
    require('postcss-sorting')({
      'order': ['custom-properties', 'declarations'],
      'properties-order': 'alphabetical',
      'unspecified-properties-position': 'bottomAlphabetical'
    })
  ]
}
