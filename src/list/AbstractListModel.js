/**
 * Copyright (с) 2015, SoftIndex LLC.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @providesModule UIKernel
 */

'use strict';

/**
 * Abstract List model
 * @constructor
 */
function AbstractListModel() {}

/**
 * Get data
 *
 * @param {string}    search  Search query
 * @param {Function}  cb      CallBack function
 * @abstract
 */
AbstractListModel.read = function (search, cb) {
  cb(null, []);
};

/**
 * Get option name using ID
 *
 * @param {*}         id  Option ID
 * @param {Function}  cb  CallBack function
 */
AbstractListModel.getLabel = function (id, cb) {
  cb(null, '');
};

module.exports = AbstractListModel;
