'use strict';
module.exports = {
  foo() {
    // this  it`s a helper Object，In which other helper methods can be called
    // this.ctx => context Object
    // this.app => application Object
    return 'hello helper';
  },
};
