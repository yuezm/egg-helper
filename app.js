'use strict';
const path = require('path');

module.exports = app => {
  const dir = app.loader.getLoadUnits().map(unit => {
    return path.join(unit.path, 'app/helper');
  });
  const loadName = app.config.helper.loadName || 'helper';
  app.loader.loadToContext(dir, loadName, {
    inject: app,
  });
};
