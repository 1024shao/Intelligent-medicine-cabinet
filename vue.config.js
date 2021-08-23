module.exports = {
  devServer: {
    //解决内网映射问题
    disableHostCheck: true,
    //开机本地服务器代理
    // proxy: 'http://localhost:5000'
  },
  // lintOnSave: false, //是否开启eslint
  // devServer: {
  //   proxy: {
  //     '/api': {
  //       target: 'http://localhost:5001',
  //       pathRewrite: { '^/api': '' },
  //       changeOrigin: true  //用于控制请求头中的host值
  //     },
  //   }
  // }
}