module.exports = {
  devServer: {
    host: 'localhost',
    port: 8080,//端口号
    open: true,//运行项目自启
    proxy: {
      '/api': {
        target: 'http://admintest.happymmall.com',//跨域请求资源地址
        ws: false,//是否启用websockets
        changeOrigin: true,//开启代理：在本地会创建一个虚拟服务端，然后发送请求的数据，并同时接收请求的数据，这样服务端和服务端进行数据的交互就不会有跨域问题
        pathRewrite: {
          '^/api': ''//注册全局路径
        }
      }
    }
  }
}
