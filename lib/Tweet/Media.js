'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _Photos = require('./Photos');

var _Photos2 = _interopRequireDefault(_Photos);

var _Video = require('./Video');

var _Video2 = _interopRequireDefault(_Video);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Media = function (_React$Component) {
  (0, _inherits3.default)(Media, _React$Component);

  function Media() {
    (0, _classCallCheck3.default)(this, Media);
    return (0, _possibleConstructorReturn3.default)(this, (Media.__proto__ || (0, _getPrototypeOf2.default)(Media)).apply(this, arguments));
  }

  (0, _createClass3.default)(Media, [{
    key: 'render',
    value: function render() {
      switch (this.props.media[0].type) {
        case 'photo':
          return _react2.default.createElement(_Photos2.default, this.props);
        case 'video':
          return _react2.default.createElement(_Video2.default, this.props);
        case 'animated_gif':
          return _react2.default.createElement(_Video2.default, (0, _extends3.default)({ gif: true }, this.props));
        default:
          return _react2.default.createElement('div', null);
      }
    }
  }]);
  return Media;
}(_react2.default.Component);

Media.propTypes = {
  'media': _propTypes2.default.array
};

Media.defaultProps = {
  'media': [{ 'type': '' }]
};

Media.displayName = 'Media';

exports.default = Media;