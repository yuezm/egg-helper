# egg-helper

[![NPM version][npm-image]][npm-url]
[![build status][travis-image]][travis-url]
[![Test coverage][codecov-image]][codecov-url]
[![David deps][david-image]][david-url]
[![Known Vulnerabilities][snyk-image]][snyk-url]
[![npm download][download-image]][download-url]

[npm-image]: https://img.shields.io/npm/v/egg-helper.svg?style=flat-square
[npm-url]: https://npmjs.org/package/egg-helper
[travis-image]: https://img.shields.io/travis/eggjs/egg-helper.svg?style=flat-square
[travis-url]: https://travis-ci.org/eggjs/egg-helper
[codecov-image]: https://img.shields.io/codecov/c/github/eggjs/egg-helper.svg?style=flat-square
[codecov-url]: https://codecov.io/github/eggjs/egg-helper?branch=master
[david-image]: https://img.shields.io/david/eggjs/egg-helper.svg?style=flat-square
[david-url]: https://david-dm.org/eggjs/egg-helper
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
## 配置

```js
// {app_root}/config/config.default.js
exports.helper = {
    loadName:'util' //用来配置插件挂载在ctx上的key的名称，默认值是helper,如果你配置了该属性，那么你可以通过ctx[loadName][filename][function]来使用
};
```
## 使用场景

- Why and What: 将helper目录下的方法全部挂载在Helper上，将help分成不同文件，方便维护
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
    在Controller中可以如下使用

        DemoController extends Controller{
            async index(){
                this.ctx.helper.util.foo(); // 通过如下路径可以访问到你的方法
                // 如果你在config中配置了loadName,那么这边你需要使用 this.ctx[loadName].util.foo来调用
                例如，loadName为'util',则你需要使用 this.ctx.util.util.foo来调用
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
