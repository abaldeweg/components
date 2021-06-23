module.exports = {
  productionSourceMap: false,
  configureWebpack: {
    output: {
      libraryExport: 'default',
    },
  },
  devServer: {
    open: true,
  },
  pluginOptions: {},
}
