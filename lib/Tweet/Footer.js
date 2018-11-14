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

var Footer = function (_React$Component) {
  (0, _inherits3.default)(Footer, _React$Component);

  function Footer() {
    (0, _classCallCheck3.default)(this, Footer);
    return (0, _possibleConstructorReturn3.default)(this, (Footer.__proto__ || (0, _getPrototypeOf2.default)(Footer)).apply(this, arguments));
  }

  (0, _createClass3.default)(Footer, [{
    key: 'formatCount',
    value: function formatCount(count) {
      var readablize = function readablize(num) {
        var e = Math.floor(Math.log(num) / Math.log(1000));
        return (num / Math.pow(1000, e)).toFixed(1) + 'K';
      };

      if (count > 999) return readablize(count);else return count;
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          data = _props.data,
          linkProps = _props.linkProps;


      return _react2.default.createElement(
        'div',
        { className: 'footer', style: _styles2.default.footer },
        _react2.default.createElement(
          'a',
          (0, _extends3.default)({ className: 'ProfileTweet-actionList', style: _styles2.default.ProfileTweetActionList, href: 'http://twitter.com/' + data.user.screen_name + '/status/' + data.id_str }, linkProps),
          _react2.default.createElement(
            'div',
            { className: 'ProfileTweet-action', style: _styles2.default.ProfileTweetAction },
            _react2.default.createElement(
              'button',
              { className: 'ProfileTweet-actionButton', style: _styles2.default.ProfileTweetActionBtn },
              _react2.default.createElement(
                'div',
                { className: 'IconContainer', style: _styles2.default.IconContainer },
                _react2.default.createElement(
                  'svg',
                  { xmlns: 'http://www.w3.org/2000/svg', width: '18', height: '18', viewBox: '0 0 24 24' },
                  _react2.default.createElement('path', { opacity: '0', d: 'M0 0h24v24H0z' }),
                  _react2.default.createElement('path', { fill: '#657786', d: 'M14.046 2.242l-4.148-.01h-.002c-4.374 0-7.8 3.427-7.8 7.802 0 4.098 3.186 7.206 7.465 7.37v3.828c0 .108.044.286.12.403.142.225.384.347.632.347.138 0 .277-.038.402-.118.264-.168 6.473-4.14 8.088-5.506 1.902-1.61 3.04-3.97 3.043-6.312v-.004-.005-.008c-.006-4.367-3.43-7.787-7.8-7.788zm3.787 12.972c-1.134.96-4.862 3.405-6.772 4.643V16.67c0-.414-.335-.75-.75-.75h-.396c-3.66 0-6.318-2.476-6.318-5.886 0-3.534 2.768-6.302 6.3-6.302l4.147.01h.002c3.532 0 6.3 2.766 6.302 6.296-.003 1.91-.942 3.844-2.514 5.176z' })
                )
              )
            )
          ),
          _react2.default.createElement(
            'div',
            { className: 'ProfileTweet-action', style: _styles2.default.ProfileTweetAction },
            _react2.default.createElement(
              'button',
              { className: 'ProfileTweet-actionButton', style: _styles2.default.ProfileTweetActionBtn },
              _react2.default.createElement(
                'div',
                { className: 'IconContainer', style: _styles2.default.IconContainer },
                _react2.default.createElement(
                  'svg',
                  { xmlns: 'http://www.w3.org/2000/svg', width: '18', height: '18', viewBox: '0 0 24 24' },
                  _react2.default.createElement('path', { fill: '#657786', d: 'M23.77 15.67c-.292-.293-.767-.293-1.06 0l-2.22 2.22V7.65c0-2.068-1.683-3.75-3.75-3.75h-5.85c-.414 0-.75.336-.75.75s.336.75.75.75h5.85c1.24 0 2.25 1.01 2.25 2.25v10.24l-2.22-2.22c-.293-.293-.768-.293-1.06 0s-.294.768 0 1.06l3.5 3.5c.145.147.337.22.53.22s.383-.072.53-.22l3.5-3.5c.294-.292.294-.767 0-1.06zm-10.66 3.28H7.26c-1.24 0-2.25-1.01-2.25-2.25V6.46l2.22 2.22c.148.147.34.22.532.22s.384-.073.53-.22c.293-.293.293-.768 0-1.06l-3.5-3.5c-.293-.294-.768-.294-1.06 0l-3.5 3.5c-.294.292-.294.767 0 1.06s.767.293 1.06 0l2.22-2.22V16.7c0 2.068 1.683 3.75 3.75 3.75h5.85c.414 0 .75-.336.75-.75s-.337-.75-.75-.75z' })
                )
              ),
              _react2.default.createElement(
                'div',
                { className: 'IconTextContainer', style: _styles2.default.IconTextContainer },
                _react2.default.createElement(
                  'div',
                  { className: 'ProfileTweet-actionCount', style: _styles2.default.ProfileTweetActionCount },
                  data.retweet_count > 0 ? this.formatCount(data.retweet_count) : null
                )
              )
            )
          ),
          _react2.default.createElement(
            'div',
            { className: 'ProfileTweet-action', style: _styles2.default.ProfileTweetAction },
            _react2.default.createElement(
              'button',
              { className: 'ProfileTweet-actionButton', style: _styles2.default.ProfileTweetActionBtn },
              _react2.default.createElement(
                'div',
                { className: 'IconContainer', style: _styles2.default.IconContainer },
                _react2.default.createElement(
                  'svg',
                  { xmlns: 'http://www.w3.org/2000/svg', width: '18', height: '18', viewBox: '0 0 24 24' },
                  _react2.default.createElement('path', { opacity: '0', d: 'M0 0h24v24H0z' }),
                  _react2.default.createElement('path', { fill: '#657786', d: 'M12 21.638h-.014C9.403 21.59 1.95 14.856 1.95 8.478c0-3.064 2.525-5.754 5.403-5.754 2.29 0 3.83 1.58 4.646 2.73.814-1.148 2.354-2.73 4.645-2.73 2.88 0 5.404 2.69 5.404 5.755 0 6.376-7.454 13.11-10.037 13.157H12zM7.354 4.225c-2.08 0-3.903 1.988-3.903 4.255 0 5.74 7.034 11.596 8.55 11.658 1.518-.062 8.55-5.917 8.55-11.658 0-2.267-1.823-4.255-3.903-4.255-2.528 0-3.94 2.936-3.952 2.965-.23.562-1.156.562-1.387 0-.014-.03-1.425-2.965-3.954-2.965z' })
                )
              ),
              _react2.default.createElement(
                'div',
                { className: 'IconTextContainer', style: _styles2.default.IconTextContainer },
                _react2.default.createElement(
                  'div',
                  { className: 'ProfileTweet-actionCount', style: _styles2.default.ProfileTweetActionCount },
                  data.favorite_count > 0 ? this.formatCount(data.favorite_count) : null
                )
              )
            )
          )
        )
      );
    }
  }]);
  return Footer;
}(_react2.default.Component);

Footer.propTypes = {
  'data': _propTypes2.default.object
};

Footer.displayName = 'Footer';

exports.default = Footer;