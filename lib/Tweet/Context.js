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

var _styles = require('./styles');

var _styles2 = _interopRequireDefault(_styles);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Context = function (_React$Component) {
  (0, _inherits3.default)(Context, _React$Component);

  function Context() {
    (0, _classCallCheck3.default)(this, Context);
    return (0, _possibleConstructorReturn3.default)(this, (Context.__proto__ || (0, _getPrototypeOf2.default)(Context)).apply(this, arguments));
  }

  (0, _createClass3.default)(Context, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          data = _props.data,
          linkProps = _props.linkProps;


      return _react2.default.createElement(
        'div',
        { className: 'context', style: _styles2.default.context },
        _react2.default.createElement(
          'div',
          { className: 'tweet-context' },
          _react2.default.createElement(
            'svg',
            { xmlns: 'http://www.w3.org/2000/svg', width: '14', height: '15', viewBox: '0 0 24 24', style: { 'vertical-align': 'sub' } },
            _react2.default.createElement('path', { opacity: '0', d: 'M0 0h24v24H0z' }),
            _react2.default.createElement('path', { fill: 'rgb(101, 119, 134)', d: 'M23.615 15.477c-.47-.47-1.23-.47-1.697 0l-1.326 1.326V7.4c0-2.178-1.772-3.95-3.95-3.95h-5.2c-.663 0-1.2.538-1.2 1.2s.537 1.2 1.2 1.2h5.2c.854 0 1.55.695 1.55 1.55v9.403l-1.326-1.326c-.47-.47-1.23-.47-1.697 0s-.47 1.23 0 1.697l3.374 3.375c.234.233.542.35.85.35s.613-.116.848-.35l3.375-3.376c.467-.47.467-1.23-.002-1.697zM12.562 18.5h-5.2c-.854 0-1.55-.695-1.55-1.55V7.547l1.326 1.326c.234.235.542.352.848.352s.614-.117.85-.352c.468-.47.468-1.23 0-1.697L5.46 3.8c-.47-.468-1.23-.468-1.697 0L.388 7.177c-.47.47-.47 1.23 0 1.697s1.23.47 1.697 0L3.41 7.547v9.403c0 2.178 1.773 3.95 3.95 3.95h5.2c.664 0 1.2-.538 1.2-1.2s-.535-1.2-1.198-1.2z' })
          ),
          _react2.default.createElement(
            'span',
            { className: 'retweet-text', style: _styles2.default.retweet },
            _react2.default.createElement(
              'a',
              (0, _extends3.default)({ className: 'pretty-link', href: 'https://twitter.com/' + data.user.screen_name, style: { 'textDecoration': 'none', 'color': '#657786' } }, linkProps),
              data.user.name
            ),
            ' Retweeted'
          )
        )
      );
    }
  }]);
  return Context;
}(_react2.default.Component);

Context.propTypes = {
  'data': _propTypes2.default.object
};

Context.displayName = 'Context';

exports.default = Context;