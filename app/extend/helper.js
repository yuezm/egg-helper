'use strict';
const fs = require('fs');
const path = require('path');


function loadUtils() {
  const helper = {};
  const p = `${process.cwd()}/app/helper`;
  if (!fs.existsSync(p)) return helper;
  const files = fs.readdirSync(p);

  for (const file of files) {
    const f = require(path.join(p, file));
    const name = path.basename(file, '.js');
    const properties = Object.assign(Object.getOwnPropertyNames(f), Object.getOwnPropertySymbols(f));
    Object.defineProperty(helper, name, {
      get() {
        const modules = {};
        const _this = this;
        for (const property of properties) {
          const pro = f[ property ];
          modules[ property ] = typeof pro === 'function' ? pro.bind(_this) : pro;
        }
        return modules;
      },
    });
  }
  return helper;
}

module.exports = loadUtils();

