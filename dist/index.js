'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _readlineSync = require('readline-sync');

var _readlineSync2 = _interopRequireDefault(_readlineSync);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
  var actual = _readlineSync2.default.question('May I have your name? ');
  console.log('Hello, ' + actual + '!');
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9pbmRleC5qcyJdLCJuYW1lcyI6WyJhY3R1YWwiLCJxdWVzdGlvbiIsImNvbnNvbGUiLCJsb2ciXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBOzs7Ozs7a0JBRWUsWUFBTTtBQUNuQixNQUFNQSxTQUFTLHVCQUFhQyxRQUFiLENBQXNCLHdCQUF0QixDQUFmO0FBQ0FDLFVBQVFDLEdBQVIsYUFBc0JILE1BQXRCO0FBQ0QsQyIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCByZWFkbGluZVN5bmMgZnJvbSAncmVhZGxpbmUtc3luYyc7XG5cbmV4cG9ydCBkZWZhdWx0ICgpID0+IHtcbiAgY29uc3QgYWN0dWFsID0gcmVhZGxpbmVTeW5jLnF1ZXN0aW9uKCdNYXkgSSBoYXZlIHlvdXIgbmFtZT8gJyk7XG4gIGNvbnNvbGUubG9nKGBIZWxsbywgJHthY3R1YWx9IWApO1xufTtcbiJdfQ==