module.exports = {
    presets: ['@babel/preset-env'],
    plugins: [
      ['@babel/plugin-proposal-decorators', { legacy: true }]  // 如果使用装饰器
    ]
  };