'use strict';
module.exports = app => {
  return {
    foo3() {
      // app is Application Object
      console.log(app);
      return 'helper';
    },
  };
};
