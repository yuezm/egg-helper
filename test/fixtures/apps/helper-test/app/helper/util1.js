'use strict';
module.exports = app => {
  return {
    foo1() {
      // app is Application Object
      console.log(app);
      return 'hello helper';
    },
  };
};
