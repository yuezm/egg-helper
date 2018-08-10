'use strict';
const path = require('path');

module.exports = app => {
  const FileLoader = app.loader.FileLoader;
  const dir = app.loader.getLoadUnits().map(unit => {
    return path.join(unit.path, 'app/helper');
  });
  new FileLoader({
    directory: dir,
    target: app.Helper.prototype,
    inject: app,
  }).load();
};
