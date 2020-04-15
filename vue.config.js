const path = require('path')

const resolve = function (dir) {
  return path.join(__dirname, dir)
}

module.exports = {
  lintOnSave: true,
  css: {
    loaderOptions: {
      less: {
        modifyVars: {},
        javascriptEnabled: true
      }
    }
  },
  chainWebpack: (config) => {
    //修改文件引入自定义路径
    config.resolve.alias
      .set('@', resolve('src'))
      .set('@views', resolve('src/views'))
  },
  devServer: {
    port: 2048
  }
}