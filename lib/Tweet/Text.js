'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

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

var _twemoji = require('twemoji');

var _twemoji2 = _interopRequireDefault(_twemoji);

var _twitterText = require('twitter-text');

var _twitterText2 = _interopRequireDefault(_twitterText);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Text = function (_React$Component) {
  (0, _inherits3.default)(Text, _React$Component);

  function Text() {
    (0, _classCallCheck3.default)(this, Text);
    return (0, _possibleConstructorReturn3.default)(this, (Text.__proto__ || (0, _getPrototypeOf2.default)(Text)).apply(this, arguments));
  }

  (0, _createClass3.default)(Text, [{
    key: 'render',
    value: function render() {
      var data = this.props.data;
      var text = data.text,
          entities = data.entities,
          extended_entities = data.extended_entities;

      // remove any embedded media links

      if (entities && entities.media) {
        entities.media.forEach(function (e) {
          text = text.replace(e.url, '');
        });
      }

      // remove any quote links
      if (entities && data.quoted_status) {
        entities.urls.forEach(function (u) {
          if (u.expanded_url.indexOf('/status/') > -1) {
            text = text.replace(u.url, '');
          }
        });
      }

      // replace + style links and mentions
      text = _twitterText2.default.autoLinkWithJSON(text, entities || {}, { 'usernameIncludeSymbol': true });
      text = text.replace(/href=/g, 'style="text-decoration: none;color:#1da1f2;" href=');

      // replace + style emoji
      text = _twemoji2.default.parse(text);
      text = text.replace(/<img class="emoji"/g, '<img class="emoji" style="height:14px;margin-right:5px;"');
      // browsers add http which causes isomorphic rendering probs
      text = text.replace(/src="\/\/twemoji/g, 'src="http://twemoji');

      // remove any extended entities links
      if (extended_entities && extended_entities.media) {
        extended_entities.media.forEach(function (e) {
          text = text.replace(e.display_url, '');
        });
      }

      var tweetProps = {
        'className': 'tweet-text',
        'style': _styles2.default.tweetText,
        'dangerouslySetInnerHTML': {
          '__html': text
        }
      };

      return _react2.default.createElement('p', tweetProps);
    }
  }]);
  return Text;
}(_react2.default.Component);

Text.propTypes = {
  'data': _propTypes2.default.object
};

Text.displayName = 'Text';

exports.default = Text;