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
[egg-helper中文文档](README.zh_CN.md)

## Install

```bash
$ npm i egg-helper --save
```

## Usage

```js
// {app_root}/config/plugin.js
exports.helper = {
  enable: true,
  package: 'egg-helper',
};
```

## Configuration

```js
// {app_root}/config/config.default.js
exports.helper = {

};
```

see [config/config.default.js](config/config.default.js) for more detail.

## Example
**Divide egg's app/extend/help.js method into different files for easy maintenance**
<!-- example here -->
Add the util1.js file to the app/helper folder

    // app/helper/util.js
    module.exports = app => {
      return {
        foo() {
          // app is Application Object
          console.log(app);
          return 'hello helper';
        },
      };
    };
aslo you can use multiple levels of directories like app/helper/util/util1.js

    // app/helper/util/util1.js
    module.exports = app => {
      return {
        foo1() {
          // app is Application Object
          console.log(app);
          return 'hello helper';
        },
      };
    };
in Controller

    DemoController extends Controller{
      async index(){
        this.ctx.helper.util.foo(); // You can access your method through the following path
        this.ctx.helper.util.util1.foo1();// If you use a multi-level directory,You can access your method through the following path
      }
    }

## Questions & Suggestions

Please open an issue [here](https://github.com/eggjs/egg/issues).

## License

[MIT](LICENSE)
