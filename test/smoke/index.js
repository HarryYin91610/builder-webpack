const path = require('path');
const webpack = require('webpack');
const rimraf = require('rimraf');
const Mocha = require('mocha');

const mocha = new Mocha({
  timeout: '10000ms',
});

// 进入template目录
process.chdir(path.join(__dirname, 'template'));

// 清空dist文件夹
rimraf('./dist', () => {
  const prodConfig = require('../../lib/webpack.prod'); // eslint-disable-line
  // 清空后回调，运行打包配置
  webpack(prodConfig, (err, stats) => {
    if (err) {
      console.log('build error');
      console.log(err); // eslint-disable-line
      // 抛出错误码
      process.exit(2);
    }

    console.log(stats.toString({ // eslint-disable-line
      colors: true,
      modules: false,
      children: false,
    }));

    console.log('Webpack build success, begin run test'); // eslint-disable-line

    mocha.addFile(path.join(__dirname, 'html-test.js'));
    mocha.addFile(path.join(__dirname, 'css-js-test.js'));

    mocha.run();
  });
});
