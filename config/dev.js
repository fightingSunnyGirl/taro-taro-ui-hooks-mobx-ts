const isH5 = process.env.TARO_ENV === 'h5';
const HOST = '"http://www.sunny.com"';

module.exports = {
  env: {
    NODE_ENV: '"development"'
  },
  defineConstants: {
    HOST: isH5 ? '"/proxy"' : HOST
  },
  mini: {},
  h5: {
    devServer: {
      proxy: {
        '/proxy/': {
          target: JSON.parse(HOST),
          pathRewrite: {
            '^/proxy/': ''
          },
          changeOrigin: true
        }
      }
    }
  }
}
