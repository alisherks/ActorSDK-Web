'use strict';

exports.__esModule = true;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _JoinGroupActions = require('../actions/JoinGroupActions');

var _JoinGroupActions2 = _interopRequireDefault(_JoinGroupActions);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /*
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Copyright (C) 2015-2016 Actor LLC. <https://actor.im>
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */

var Join = function (_Component) {
  _inherits(Join, _Component);

  function Join(props) {
    _classCallCheck(this, Join);

    var _this = _possibleConstructorReturn(this, _Component.call(this, props));

    _JoinGroupActions2.default.joinGroupViaLink(props.params.token);
    return _this;
  }

  Join.prototype.render = function render() {
    return null;
  };

  return Join;
}(_react.Component);

Join.propTypes = {
  params: _react.PropTypes.object
};
exports.default = Join;
//# sourceMappingURL=Join.react.js.map