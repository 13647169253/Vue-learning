// 导入 path模块 用来处理路径
const path = require("path");
//导入包
const HtmlWebpackPlugin = require("html-webpack-plugin");


//创建对象
const htmlPlugin = new HtmlWebpackPlugin({
  //设置生成预览页面的模板文件
  template: "./src/index.html",
  //设置生成的预览页面名称
  filename: "index.html"
})

/*初始化配置*/
module.exports = {
  //编译模式    可以设置为development(开发模式)不会压缩混淆提高运行速度 ,production(发布模式)
  mode: "development",
  // mode: "production"

  /*配置打包的入口和出口 需要绝对路径 */
  entry: path.join(__dirname, "src/index.js"), // 设置入口文件路径
  output: {  // 设置出口文件
    path: path.join(__dirname, "./dist"),  // 设置路径
    filename: "newMain.js" // 设置文件名
  },
  plugins: [htmlPlugin],
  devServer: {
    // --open --host 127.0.0.1 --port 9999
    open: true,
    host: 'localhost',
    port: 3000
  },
  module: {
    rules: [
      { test: /\.css$/, use: ['style-loader', 'css-loader', 'postcss-loader'] },
      { test: /\.less$/, use: ['style-loader', 'css-loader', 'less-loader', 'postcss-loader'] },
      { test: /\.scss$/, use: ['style-loader', 'css-loader', 'sass-loader', 'postcss-loader'] }
    ]

  }
}
