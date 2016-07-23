/* ================================================================
 * findfile by xdf(xudafeng[at]126.com)
 *
 * first created at : Sat Jul 23 2016 22:42:21 GMT+0800 (CST)
 *
 * ================================================================
 * Copyright  xdf
 *
 * Licensed under the MIT License
 * You may not use this file except in compliance with the License.
 *
 * ================================================================ */

'use strict';

const fs = require('fs');
const path = require('path');

module.exports = function(p, isExecutable) {

  for (var i = 0; i < module.paths.length; i++) {
    const res = path.join(module.paths[i], p);

    if (isExecutable && process.platform === 'win32') {
      res = `${res}.cmd`;
    }

    if (fs.existsSync(res)) {
      return res;
    }
  };
};
