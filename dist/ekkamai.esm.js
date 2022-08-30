import React from 'react';

var ButtonComponent = function ButtonComponent(props) {
  var _props$text;

  return React.createElement("button", null, (_props$text = props.text) != null ? _props$text : 'No text');
};

var sayHello = function sayHello(text) {
  console.log("Hello, " + (text != null ? text : 'world'));
  return "Hello, " + (text != null ? text : 'world ja');
};

export { ButtonComponent as Button, sayHello as hello };
//# sourceMappingURL=ekkamai.esm.js.map
