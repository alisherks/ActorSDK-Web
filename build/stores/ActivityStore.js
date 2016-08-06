'use strict';

exports.__esModule = true;

var _utils = require('flux/utils');

var _ActorAppDispatcher = require('../dispatcher/ActorAppDispatcher');

var _ActorAppDispatcher2 = _interopRequireDefault(_ActorAppDispatcher);

var _ActorAppConstants = require('../constants/ActorAppConstants');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /*
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Copyright (C) 2015 Actor LLC. <https://actor.im>
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */

var _isOpen = false;

var ActivityStore = function (_Store) {
  _inherits(ActivityStore, _Store);

  function ActivityStore(dispatcher) {
    _classCallCheck(this, ActivityStore);

    return _possibleConstructorReturn(this, _Store.call(this, dispatcher));
  }

  ActivityStore.prototype.isOpen = function isOpen() {
    return _isOpen;
  };

  ActivityStore.prototype.__onDispatch = function __onDispatch(action) {
    switch (action.type) {
      case _ActorAppConstants.ActionTypes.CALL_MODAL_OPEN:
      case _ActorAppConstants.ActionTypes.ACTIVITY_HIDE:
        _isOpen = false;
        this.__emitChange();
        break;
      case _ActorAppConstants.ActionTypes.ACTIVITY_SHOW:
        _isOpen = true;
        this.__emitChange();
        break;
      default:
    }
  };

  return ActivityStore;
}(_utils.Store);

exports.default = new ActivityStore(_ActorAppDispatcher2.default);
//# sourceMappingURL=ActivityStore.js.map