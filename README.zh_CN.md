# egg-helper

[![NPM version][npm-image]][npm-url]
[![build status][travis-image]][travis-url]
[![Test coverage][codecov-image]][codecov-url]
[![David deps][david-image]][david-url]
[![Known Vulnerabilities][snyk-image]][snyk-url]
[![npm download][download-image]][download-url]

[npm-image]: https://img.shields.io/npm/v/egg-helper.svg?style=flat-square
[npm-url]: https://npmjs.org/package/egg-helper
[travis-image]: https://img.shields.io/travis/yuezm/egg-helper.svg?style=flat-square
[travis-url]: https://travis-ci.org/yuezm/egg-helper
[codecov-image]: https://img.shields.io/codecov/c/github/yuezm/egg-helper.svg?style=flat-square
[codecov-url]: https://codecov.io/github/yuezm/egg-helper?branch=master
[david-image]: https://img.shields.io/david/yuezm/egg-helper.svg?style=flat-square
[david-url]: https://david-dm.org/yuezm/egg-helper
[snyk-image]: https://snyk.io/test/npm/egg-helper/badge.svg?style=flat-square
[snyk-url]: https://snyk.io/test/npm/egg-helper
[download-image]: https://img.shields.io/npm/dm/egg-helper.svg?style=flat-square
[download-url]: https://npmjs.org/package/egg-helper

<!--
Description here.
-->

## 依赖说明

### 依赖的 egg 版本

egg-helper 版本 | egg 1.x
--- | ---
1.x | 😁
0.x | ❌

### 依赖的插件
<!--

如果有依赖其它插件，请在这里特别说明。如

- security
- multipart

-->

## 开启插件

```js
// config/plugin.js
exports.helper = {
  enable: true,
  package: 'egg-helper',
};
```
## 使用场景

- Why and What: 将helper目录下的方法全部挂载在Helper上，将help分成不同文件，方便维护，当然原来的helper.js文件中的方法依然存在，不会覆盖
- How:
    <!-- example here -->
在app/helper文件夹中增加 util.js文件 必须参照以下格式

    // app/helper/util.js
    module.exports = app => {
      return {
        foo() {
          // app is Application的实例
          console.log(app);
          return 'hello helper';
        },
      };
    };
如果你想使用两级或多级目录，例如

    //app/helper/util/util1.js
    module.exports = app => {
      return {
        foo1() {
          // app is Application的实例
          console.log(app);
          return 'hello helper';
        },
      };
    };
在Controller中可以如下使用

    DemoController extends Controller{
      async index(){
        this.ctx.helper.util.foo(); // 通过如下路径可以访问到你的方法
        this.ctx.helper.util.util1.foo1(); // 当你使用多级目录的时候，也是通过文件名来使用
      }
    }

## 详细配置

请到 [config/config.default.js](config/config.default.js) 查看详细配置项说明。

## 单元测试

<!-- 描述如何在单元测试中使用此插件，例如 schedule 如何触发。无则省略。-->

## 提问交流

请到 [egg issues](https://github.com/eggjs/egg/issues) 异步交流。

## License

[MIT](LICENSE)
