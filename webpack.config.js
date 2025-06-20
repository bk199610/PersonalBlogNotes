const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const {CleanWebpackPlugin} = require('clean-webpack-plugin')
const cleanPlugin = new CleanWebpackPlugin()
module.exports = {
    // 结论：开发时候一定要用development，因为追求的是打包速度，而不是体积
    // 发布上线的时候一定要用production，因为追求的是体积小，而不是打包速度
    mode: 'development',   // mode 用来指定构建模式，可选值有development和production
    //eval-source-map 仅限在"开发模式"下使用，不建议在“生产模式”下使用
    //此选项生成的 Source Map 能够保证"运行时报错的行数"与"源代码的行数"保持一致
    // devtool: 'eval-source-map',
    // 只定位错误发生的行数，不暴露源码
    devtool: 'nosources-source-map',
    entry: path.join(__dirname, "./src/index1.js"),     // 打包入口的文件路径，__dirname：当前文件的最高路径
    output: {
        path: path.join(__dirname, "./dist"),       // 输出文件的存放路径
        filename: 'js/bundle.js'       // 输出文件的名称
    },
    devServer: {
        static: {
          directory: path.join(__dirname, 'src'), // 托管静态文件目录
        },
        // 在http协议中，如果端口号是80，可以被省略
        port: 80,
        hot: true,
        open: true,
        // 指定运行的主机地址
        host: '127.0.0.1'
      },
      plugins: [
        new HtmlWebpackPlugin({
          template: './src/index.html', // 可选：指定自定义模板
          // 如果不指定模板，插件会生成默认 HTML
          filename: './index.html'
        }),
        cleanPlugin
      ],
      module: {
        rules: [
          {
            test: /\.css$/, // 匹配所有 .css 文件
            use: ['style-loader', 'css-loader'], // 使用这两个 Loader 处理
          },
          {
            test: /\.less$/, // 匹配所有 .less 文件
            use: ['style-loader', 'css-loader', 'less-loader'], // 使用这两个 Loader 处理
          },
          {
            test: /\.jpg|png|gif$/, // 匹配所有图片文件
            use: {
              loader: 'url-loader',
              options: {
                limit: 22229,
                outputPath: 'image'
              }
            }
          },
          {
            test: /\.js$/,
            exclude: /node_modules/,
            use: 'babel-loader' // 配置已移至 babel.config.js
          }
        ],
      },
}