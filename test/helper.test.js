'use strict';

const mock = require('egg-mock');

describe('test/helper.test.js', () => {
  let app;
  before(() => {
    app = mock.app({
      baseDir: 'apps/helper-test',
    });
    return app.ready();
  });

  after(() => app.close());
  afterEach(mock.restore);

  it('should GET /', () => {
    return app.httpRequest()
      .get('/')
      .expect('hi, helper')
      .expect(200);
  });
});
