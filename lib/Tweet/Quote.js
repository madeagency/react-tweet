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

var _Text = require('./Text');

var _Text2 = _interopRequireDefault(_Text);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Quote = function (_React$Component) {
  (0, _inherits3.default)(Quote, _React$Component);

  function Quote() {
    (0, _classCallCheck3.default)(this, Quote);
    return (0, _possibleConstructorReturn3.default)(this, (Quote.__proto__ || (0, _getPrototypeOf2.default)(Quote)).apply(this, arguments));
  }

  (0, _createClass3.default)(Quote, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          data = _props.data,
          linkProps = _props.linkProps;


      return _react2.default.createElement(
        'div',
        { className: 'QuoteTweet', style: _styles2.default.QuoteTweet },
        _react2.default.createElement('a', (0, _extends3.default)({ className: 'QuoteTweet-link', style: _styles2.default.QuoteLink, href: 'https://twitter.com/' + data.user.screen_name + '/status/' + data.id_str }, linkProps)),
        _react2.default.createElement(
          'div',
          { className: 'QuoteTweet-innerContainer', style: _styles2.default.QuoteTweetInner },
          _react2.default.createElement(
            'div',
            { className: 'QuoteTweet-originalAuthor', style: _styles2.default.QuoteTweetAuthor },
            _react2.default.createElement(
              'b',
              null,
              data.user.name
            ),
            _react2.default.createElement(
              'span',
              { className: 'QuoteTweet-screenname', style: _styles2.default.time },
              ' ',
              '@',
              data.user.screen_name
            )
          ),
          _react2.default.createElement(
            'div',
            { className: 'QuoteTweet-text', style: _styles2.default.QuoteTweetText },
            _react2.default.createElement(_Text2.default, { data: data })
          )
        )
      );
    }
  }]);
  return Quote;
}(_react2.default.Component);

Quote.propTypes = {
  'data': _propTypes2.default.object
};

Quote.displayName = 'Quote';

exports.default = Quote;