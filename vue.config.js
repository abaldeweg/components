module.exports = {
  configureWebpack: {
    output: {
      libraryExport: 'default',
    },
  },
  devServer: {
    open: true,
  },
  pluginOptions: {
    i18n: {
      locale: 'en-US',
      fallbackLocale: 'en-US',
      localeDir: 'locales',
      enableInSFC: false,
    },
  },
}
