const path = require('path');
const resolve = dir => path.join(__dirname, dir)
module.exports = {
  chainWebpack: (config) => {
    config.resolve.alias
      .set('#', resolve('public'))
      .set('@c', resolve('src/components'))
      .set('@a', resolve('src/assets'))
      .set('@v', resolve('src/views'))
      .set('@css', resolve('src/assets/styles'))
      .set('@img', resolve('src/assets/images'))
  }
}