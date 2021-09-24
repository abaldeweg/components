module.exports = {
  productionSourceMap: false,
  configureWebpack: {
    output: {
      libraryExport: 'default',
    },
  },
  chainWebpack: (config) => {
    config.externals({
      ...config.get('externals'),
      '@vue/composition-api': '@vue/composition-api',
    })
  },
  devServer: {
    open: true,
  },
  pluginOptions: {},
}
