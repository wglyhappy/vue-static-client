console.log('BASE_API: ' + process.env.VUE_APP_BASE_API)
console.log('OUTPUT_DIR: ' + process.env.VUE_APP_OUTPUT_DIR)
module.exports = {
  publicPath: "/",
  outputDir: process.env.VUE_APP_OUTPUT_DIR,
  assetsDir: "assets",
  devServer: {
    port: 80,
    overlay: {
      warnings: false,
      errors: true
    },
    proxy: {
      '^/': {
        target:  process.env.VUE_APP_BASE_API,
        changeOrigin: true,
        pathRewrite: {
          '^/public': ''
        }
      },
    }
  },
  transpileDependencies: [
    "vuetify"
  ]
}