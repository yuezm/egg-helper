'use strict';

const { Controller } = require('egg');

class HomeController extends Controller {
  async index() {
    const { ctx, app } = this;
    ctx.body = 'hi, ' + app.plugins.helper.name;
  }

  async getUtil() {
    const { ctx } = this;
    ctx.body = ctx.helper.util.foo();
  }
}

module.exports = HomeController;
