'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = _interopDefault(require('react'));

var ButtonComponent = function ButtonComponent(props) {
  var _props$text;

  return React.createElement("button", null, (_props$text = props.text) != null ? _props$text : 'No text');
};

var sayHello = function sayHello(text) {
  console.log("Hello, " + (text != null ? text : 'world'));
  return "Hello, " + (text != null ? text : 'world ja');
};

exports.Button = ButtonComponent;
exports.hello = sayHello;
//# sourceMappingURL=ekkamai.cjs.development.js.map
