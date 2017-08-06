'use strict';

var _lodash = require('lodash.template');

var _lodash2 = _interopRequireDefault(_lodash);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var options = {
  interpolate: /{{([\s\S]+?)}}/g
};

var Template = '\n  # {{ repo }}\n\n  Deployed here: [{{ repo }}]({{ deployUrl }})\n\n  This is an export from the parent: (constantinescu.io)[https://github.com/andreiconstantinescu/constantinescu.io]\n';

module.exports = function (props) {
  return (0, _lodash2.default)(Template, options)(props);
};
