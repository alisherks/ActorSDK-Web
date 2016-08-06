'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _lodash = require('lodash');

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactMixin = require('react-mixin');

var _reactMixin2 = _interopRequireDefault(_reactMixin);

var _reactAddonsPureRenderMixin = require('react-addons-pure-render-mixin');

var _reactAddonsPureRenderMixin2 = _interopRequireDefault(_reactAddonsPureRenderMixin);

var _GroupMember = require('../activity/GroupMember.react');

var _GroupMember2 = _interopRequireDefault(_GroupMember);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /*
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Copyright (C) 2015-2016 Actor LLC. <https://actor.im>
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */

var GroupProfileMembers = function (_Component) {
  _inherits(GroupProfileMembers, _Component);

  function GroupProfileMembers(props) {
    _classCallCheck(this, GroupProfileMembers);

    return _possibleConstructorReturn(this, _Component.call(this, props));
  }

  GroupProfileMembers.prototype.render = function render() {
    var _props = this.props;
    var groupId = _props.groupId;
    var members = _props.members;


    var membersList = (0, _lodash.map)(members, function (member, index) {
      return _react2.default.createElement(_GroupMember2.default, _extends({}, member, { gid: groupId, key: index }));
    });

    return _react2.default.createElement(
      'ul',
      { className: 'group_profile__members__list' },
      membersList
    );
  };

  return GroupProfileMembers;
}(_react.Component);

GroupProfileMembers.propTypes = {
  groupId: _react.PropTypes.number,
  members: _react.PropTypes.array.isRequired
};


_reactMixin2.default.onClass(GroupProfileMembers, _reactAddonsPureRenderMixin2.default);

exports.default = GroupProfileMembers;
//# sourceMappingURL=GroupProfileMembers.react.js.map