module.exports = {
  plugins: [
    require('autoprefixer'),
    require('stylelint'),
    require('cssnano'),
    require('postcss-sorting')({
      'order': ['custom-properties', 'declarations'],
      'properties-order': 'alphabetical',
      'unspecified-properties-position': 'bottomAlphabetical'
    }),
    require('postcss-reporter')({
      'clearReportedMessages': true
    })
  ]
}
