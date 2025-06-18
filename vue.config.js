const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave: false,
  devServer: {
    proxy: {
      "/api": {
        target: "http://localhost:8080", // 代理到本地 public 目录
        pathRewrite: {
          "^/api": "/api", // 重写路径
        },
      },
    },
  },
});