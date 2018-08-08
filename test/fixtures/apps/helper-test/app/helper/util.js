'use strict';
module.exports = app => {
  return {
    foo() {
      // app is Application Object
      console.log(app);
      return 'hello helper';
    },
  };
};
