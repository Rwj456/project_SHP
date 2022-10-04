const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  lintOnSave: false,
  transpileDependencies: true,
  devServer: {
    host: 'localhost',
    port: 8080,
    https: false,
    hot: false,
    proxy: null,
    proxy: {
      '/api': {
        target: 'http://gmall-h5-api.atguigu.cn/',
        changeOrigin: true,
      },
    },
  },
})
