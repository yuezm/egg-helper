'use strict';
const path = require('path');

module.exports = app => {
  const dir = path.join(app.config.baseDir, 'app/helper');
  app.loader.loadToContext(dir, 'helper', {
    caseStyle: 'lower',
    inject: app,
  });
};
