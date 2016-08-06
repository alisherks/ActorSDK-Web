'use strict';

exports.__esModule = true;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactIntl = require('react-intl');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /*
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               * Copyright (C) 2015-2016 Actor LLC. <https://actor.im>
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               */

var CallHeader = function (_Component) {
  _inherits(CallHeader, _Component);

  function CallHeader() {
    _classCallCheck(this, CallHeader);

    return _possibleConstructorReturn(this, _Component.apply(this, arguments));
  }

  CallHeader.prototype.renderLabel = function renderLabel() {
    if (this.props.isOutgoing) {
      return _react2.default.createElement(_reactIntl.FormattedMessage, { id: 'call.outgoing' });
    }

    return _react2.default.createElement(_reactIntl.FormattedMessage, { id: 'call.incoming' });
  };

  CallHeader.prototype.render = function render() {
    return _react2.default.createElement(
      'header',
      { className: 'call__header' },
      _react2.default.createElement(
        'h2',
        null,
        this.renderLabel()
      )
    );
  };

  return CallHeader;
}(_react.Component);

CallHeader.propTypes = {
  isOutgoing: _react.PropTypes.bool.isRequired
};
exports.default = CallHeader;
//# sourceMappingURL=CallHeader.react.js.map