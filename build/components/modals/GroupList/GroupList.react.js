'use strict';

exports.__esModule = true;

var _lodash = require('lodash');

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _utils = require('flux/utils');

var _reactIntl = require('react-intl');

var _history = require('../../../utils/history');

var _history2 = _interopRequireDefault(_history);

var _PeerUtils = require('../../../utils/PeerUtils');

var _PeerUtils2 = _interopRequireDefault(_PeerUtils);

var _Scrollbar = require('../../common/Scrollbar.react');

var _Scrollbar2 = _interopRequireDefault(_Scrollbar);

var _ActorAppConstants = require('../../../constants/ActorAppConstants');

var _GroupListActionCreators = require('../../../actions/GroupListActionCreators');

var _GroupListActionCreators2 = _interopRequireDefault(_GroupListActionCreators);

var _DialogActionCreators = require('../../../actions/DialogActionCreators');

var _DialogActionCreators2 = _interopRequireDefault(_DialogActionCreators);

var _GroupListStore = require('../../../stores/GroupListStore');

var _GroupListStore2 = _interopRequireDefault(_GroupListStore);

var _Group = require('./Group.react');

var _Group2 = _interopRequireDefault(_Group);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /*
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Copyright (C) 2015-2016 Actor LLC. <https://actor.im>
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */

var GroupList = function (_Component) {
  _inherits(GroupList, _Component);

  function GroupList(props) {
    _classCallCheck(this, GroupList);

    var _this = _possibleConstructorReturn(this, _Component.call(this, props));

    _this.setFocus = function () {
      return (0, _reactDom.findDOMNode)(_this.refs.search).focus();
    };

    _this.handleClose = function () {
      return _GroupListActionCreators2.default.close();
    };

    _this.handleSearchChange = function (event) {
      var query = event.target.value;
      _this.setState({ query: query });
      _this.searchGroups(query);
    };

    _this.searchGroups = (0, _lodash.debounce)(function (query) {
      return _GroupListActionCreators2.default.search(query);
    }, 300, { trailing: true });

    _this.handleGroupSelect = function (peer) {
      var peerStr = _PeerUtils2.default.peerToString(peer);
      _history2.default.push('/im/' + peerStr);
      _this.handleClose();
    };

    _this.handleKeyDown = function (event) {
      var _this$state = _this.state;
      var results = _this$state.results;
      var selectedIndex = _this$state.selectedIndex;

      var index = selectedIndex;

      var selectNext = function selectNext() {
        if (index < results.length - 1) {
          index += 1;
        } else if (index === results.length - 1) {
          index = 0;
        }

        _this.setState({ selectedIndex: index });

        var scrollContainerNode = (0, _reactDom.findDOMNode)(_this.refs.results).getElementsByClassName('ss-scrollarea')[0];
        var selectedNode = (0, _reactDom.findDOMNode)(_this.refs.selected);
        var scrollContainerNodeRect = scrollContainerNode.getBoundingClientRect();
        var selectedNodeRect = selectedNode.getBoundingClientRect();

        if (scrollContainerNodeRect.top + scrollContainerNodeRect.height < selectedNodeRect.top + selectedNodeRect.height) {
          _this.handleScroll(scrollContainerNode.scrollTop + (selectedNodeRect.top + selectedNodeRect.height) - (scrollContainerNodeRect.top + scrollContainerNodeRect.height));
        } else if (scrollContainerNodeRect.top > selectedNodeRect.top) {
          _this.handleScroll(0);
        }
      };
      var selectPrev = function selectPrev() {
        if (index > 0) {
          index -= 1;
        } else if (index === 0) {
          index = results.length - 1;
        }

        _this.setState({ selectedIndex: index });

        var scrollContainerNode = (0, _reactDom.findDOMNode)(_this.refs.results).getElementsByClassName('ss-scrollarea')[0];
        var selectedNode = (0, _reactDom.findDOMNode)(_this.refs.selected);
        var scrollContainerNodeRect = scrollContainerNode.getBoundingClientRect();
        var selectedNodeRect = selectedNode.getBoundingClientRect();

        if (scrollContainerNodeRect.top > selectedNodeRect.top) {
          _this.handleScroll(scrollContainerNode.scrollTop + selectedNodeRect.top - scrollContainerNodeRect.top);
        } else if (selectedNodeRect.top > scrollContainerNodeRect.top + scrollContainerNodeRect.height) {
          _this.handleScroll(scrollContainerNode.scrollHeight);
        }
      };

      switch (event.keyCode) {
        case _ActorAppConstants.KeyCodes.ENTER:
          event.stopPropagation();
          event.preventDefault();
          _this.handleGroupSelect(results[selectedIndex].peerInfo.peer);
          break;

        case _ActorAppConstants.KeyCodes.ARROW_UP:
          event.stopPropagation();
          event.preventDefault();
          selectPrev();
          break;
        case _ActorAppConstants.KeyCodes.ARROW_DOWN:
          event.stopPropagation();
          event.preventDefault();
          selectNext();
          break;
        case _ActorAppConstants.KeyCodes.TAB:
          event.stopPropagation();
          event.preventDefault();
          if (event.shiftKey) {
            selectPrev();
          } else {
            selectNext();
          }
          break;
        default:
      }
    };

    _this.handleScroll = function (top) {
      return _this.refs.results.scrollTo(top);
    };

    return _this;
  }

  GroupList.calculateState = function calculateState() {
    return {
      list: _GroupListStore2.default.getList(),
      results: _GroupListStore2.default.getResults(),
      selectedIndex: 0
    };
  };

  GroupList.prototype.componentDidMount = function componentDidMount() {
    this.setFocus();
    document.addEventListener('keydown', this.handleKeyDown, false);
  };

  GroupList.prototype.componentWillUnmount = function componentWillUnmount() {
    document.removeEventListener('keydown', this.handleKeyDown, false);
  };

  GroupList.prototype.render = function render() {
    var _this2 = this;

    var _state = this.state;
    var query = _state.query;
    var results = _state.results;
    var selectedIndex = _state.selectedIndex;
    var list = _state.list;
    var intl = this.context.intl;


    var groupList = (0, _lodash.map)(results, function (result, index) {
      return _react2.default.createElement(_Group2.default, { group: result, key: index,
        isSelected: selectedIndex === index,
        ref: selectedIndex === index ? 'selected' : null,
        onClick: _this2.handleGroupSelect,
        onMouseOver: function onMouseOver() {
          return _this2.setState({ selectedIndex: index });
        } });
    });

    return _react2.default.createElement(
      'div',
      { className: 'newmodal newmodal__groups' },
      _react2.default.createElement(
        'header',
        { className: 'newmodal__header' },
        _react2.default.createElement(
          'h2',
          null,
          intl.messages['modal.groups.title']
        )
      ),
      _react2.default.createElement(
        'section',
        { className: 'newmodal__search' },
        _react2.default.createElement('input', { className: 'newmodal__search__input',
          onChange: this.handleSearchChange,
          placeholder: intl.messages['modal.groups.search'],
          type: 'search',
          ref: 'search',
          value: query })
      ),
      _react2.default.createElement(
        _Scrollbar2.default,
        { ref: 'results' },
        _react2.default.createElement(
          'ul',
          { className: 'newmodal__result group__list' },
          list.length === 0 ? _react2.default.createElement(
            'div',
            null,
            intl.messages['modal.groups.loading']
          ) : results.length === 0 ? _react2.default.createElement(
            'li',
            { className: 'group__list__item group__list__item--empty text-center' },
            _react2.default.createElement(_reactIntl.FormattedHTMLMessage, { id: 'modal.groups.notFound',
              values: { query: query } })
          ) : groupList
        )
      )
    );
  };

  return GroupList;
}(_react.Component);

GroupList.contextTypes = {
  intl: _react.PropTypes.object
};

GroupList.getStores = function () {
  return [_GroupListStore2.default];
};

exports.default = _utils.Container.create(GroupList, { pure: false });
//# sourceMappingURL=GroupList.react.js.map