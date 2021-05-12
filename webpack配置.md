
1.将工程的webpack配置更改为webpack-chain配置
2.配置：
  分dev启动，build打包
  baseConfig、devConfig、buildConfig

------------------------------- 主要两个依赖包

Vuepress

G:\demo\vuepress-demo\node_modules\vuepress
const { dev, build, eject } = require('@vuepress/core')

@vuepress

G:\demo\vuepress-demo\node_modules\@vuepress\core\lib\node\dev\index.js
G:\demo\vuepress-demo\node_modules\@vuepress\core\lib\node\build\index.js

配合webpack-merge
G:\demo\vuepress-demo\node_modules\@vuepress\core\lib\node\util\index.js

------------------

Vuepress

1.主要入口文件
G:\demo\vuepress-demo\node_modules\vuepress\lib\registerCoreCommands.js

const { dev, build, eject } = require('@vuepress/core')
const { wrapCommand } = require('./util')

// 调用执行
 wrapCommand(dev)({
    sourceDir: path.resolve(sourceDir),
    ...options,
    ...commandOptions
  })

wrapCommand(build)({
	sourceDir: path.resolve(sourceDir),
	...options,
	...commandOptions
})


@vuepress入口文件
G:\demo\vuepress-demo\node_modules\@vuepress\core\lib\index.js
// 调用dev、build
G:\demo\vuepress-demo\node_modules\@vuepress\core\lib\node\App.js



 -----------------------------
webpack热热加载配置：
https://www.cnblogs.com/liuguiqian/p/11014518.html

 devConfig.js

const webpackDevServer = require('webpack-dev-server');
const webpack = require('webpack');

const config = require('./webpack.config.js');
const options = {
  contentBase: './dist',
  hot: true,
  host: 'localhost'
};

webpackDevServer.addDevServerEntrypoints(config, options);
const compiler = webpack(config);
const server = new webpackDevServer(compiler, options);

server.listen(5000, 'localhost', () => {
  console.log('dev server listening on port 5000');
});


// ------------------------------------------
G:\demo\vuepress-demo\node_modules\@vuepress\core\lib\node\build\index.js

/**
 * Compile a webpack application and return stats json.
 *
 * @param {Object} config
 * @returns {Promise<Object>}
 */

function compile (config) {
  return new Promise((resolve, reject) => {
    webpack(config, (err, stats) => {
      if (err) {
        return reject(err)
      }
      if (stats.hasErrors()) {
        stats.toJson().errors.forEach(err => {
          console.error(err)
        })
        reject(new Error(`Failed to compile with errors.`))
        return
      }
      if (env.isDebug && stats.hasWarnings()) {
        stats.toJson().warnings.forEach(warning => {
          console.warn(warning)
        })
      }
      resolve(stats.toJson({ modules: false }))
    })
  })
}