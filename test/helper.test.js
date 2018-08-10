'use strict';

const mock = require('egg-mock');
const assert = require('assert');

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

  it('should get the original helper.js method', () => {
    // 检查是否能拿到egg原来的helper.js里面的方法
    const context = app.mockContext();
    assert.equal(context.helper.originalHelper.name, 'originalHelper');
  });

  it('should get the method under the helper directory', () => {
    // 检查是否能拿到helper目录下的方法
    const context = app.mockContext();
    assert.equal(context.helper.util1.foo1(), 'hello helper');
    assert.equal(context.helper.util.util2.foo2(), 'hello helper');
    assert.equal(context.helper.util.util.util3.foo3(), 'hello helper');
  });
});
