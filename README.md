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

<!-- example here -->
Add the util.js file to the app/helper folder

    // app/helper/util.js
    module.exports={
        foo(param) {
            // this  it`s a helper Object，In which other helper methods can be called
            // this.ctx => context Object
            // this.app => application Object
        },
    }
在Controller中可以如下使用

    DemoController extends Controller{
        async index(){
            this.ctx.helper.util.foo(); // You can access your method through the following path
        }

    }

## Questions & Suggestions

Please open an issue [here](https://github.com/eggjs/egg/issues).

## License

[MIT](LICENSE)
