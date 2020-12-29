const path = require('path')

module.exports = {
  configureWebpack: {
    entry: './src/main.ts',
    externals: {
      jquery: 'jQuery'
    },
    resolve: {
      alias: {
        '@slime-modal':join('slime-modal/src'),
        '@css': join('src/assets/css'),
        '@img': join('src/assets/img'),
        '@src': join('src')
      }
    }
  },
};

function join(dir) {
  return path.join(__dirname, dir)
}