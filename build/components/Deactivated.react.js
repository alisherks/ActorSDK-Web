'use strict';

exports.__esModule = true;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactIntl = require('react-intl');

var _SharedContainer = require('../utils/SharedContainer');

var _SharedContainer2 = _interopRequireDefault(_SharedContainer);

var _ActorAppConstants = require('../constants/ActorAppConstants');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /*
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Copyright (C) 2015-2016 Actor LLC. <https://actor.im>
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */

var Deactivated = function (_Component) {
  _inherits(Deactivated, _Component);

  function Deactivated(props) {
    _classCallCheck(this, Deactivated);

    var _this = _possibleConstructorReturn(this, _Component.call(this, props));

    var SharedActor = _SharedContainer2.default.get();
    _this.appName = SharedActor.appName ? SharedActor.appName : _ActorAppConstants.appName;
    return _this;
  }

  Deactivated.prototype.render = function render() {
    return _react2.default.createElement(
      'div',
      { className: 'deactivated row center-xs middle-xs' },
      _react2.default.createElement(
        'div',
        { className: 'deactivated__window' },
        _react2.default.createElement(
          'h2',
          null,
          _react2.default.createElement(_reactIntl.FormattedMessage, { id: 'main.deactivated.header' })
        ),
        _react2.default.createElement(
          'p',
          null,
          _react2.default.createElement(_reactIntl.FormattedMessage, { id: 'main.deactivated.text', values: { appName: this.appName } })
        )
      )
    );
  };

  return Deactivated;
}(_react.Component);

exports.default = Deactivated;
//# sourceMappingURL=Deactivated.react.js.map