'use strict';
const path = require('path');

module.exports = app => {
  const unitPathInfo = app.loader.getLoadUnits();
  const FileLoader = app.loader.FileLoader;
  for (const item of unitPathInfo) {
    const p = path.join(item.path, 'app/helper');
    new FileLoader({
      directory: p,
      target: app.Helper.prototype,
      inject: app,
    }).load();
  }


};
