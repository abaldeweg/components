module.exports = {
  productionSourceMap: false,
  configureWebpack: {
    output: {
      libraryExport: 'default',
    },
  },
  chainWebpack: (config) => {
    if ('production' !== process.env.NODE_ENV) return     
    
    config.externals({
      ...config.get('externals'),
      '@vue/composition-api': '@vue/composition-api',
    })
  },
  pluginOptions: {},
}
