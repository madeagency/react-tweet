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

var _reactVideoWrapper = require('react-video-wrapper');

var _reactVideoWrapper2 = _interopRequireDefault(_reactVideoWrapper);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Video = function (_React$Component) {
  (0, _inherits3.default)(Video, _React$Component);

  function Video() {
    (0, _classCallCheck3.default)(this, Video);
    return (0, _possibleConstructorReturn3.default)(this, (Video.__proto__ || (0, _getPrototypeOf2.default)(Video)).apply(this, arguments));
  }

  (0, _createClass3.default)(Video, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          media = _props.media,
          gif = _props.gif,
          autoPlay = _props.autoPlay,
          videoSrc = '';


      media[0].video_info.variants.forEach(function (v) {
        if (v.url.indexOf('.mp4') > -1) {
          videoSrc = v.url;
        }
      });

      var VideoComponent = _react2.default.createElement(
        'video',
        { src: videoSrc, controls: !gif, autoPlay: gif || autoPlay, loop: gif, style: _styles2.default.video },
        'Your browser does not support the ',
        _react2.default.createElement(
          'code',
          null,
          'video '
        ),
        'element.'
      );

      if (typeof videojs !== 'undefined') {
        VideoComponent = _react2.default.createElement(
          _reactVideoWrapper2.default,
          { src: videoSrc, controls: !gif, autoPlay: gif || autoPlay, loop: gif, style: _styles2.default.video },
          'Your browser does not support the ',
          _react2.default.createElement(
            'code',
            null,
            'video '
          ),
          'element.'
        );
      }

      return _react2.default.createElement(
        'div',
        { className: 'AdaptiveMedia', style: _styles2.default.AdaptiveMedia },
        VideoComponent,
        gif ? _react2.default.createElement(
          'div',
          { className: 'AdaptiveMedia-badge', style: _styles2.default.AdaptiveMediaBadge },
          'GIF'
        ) : null
      );
    }
  }]);
  return Video;
}(_react2.default.Component);

Video.propTypes = {
  'media': _propTypes2.default.array,
  'gif': _propTypes2.default.bool
};

Video.defaultProps = {
  'media': [],
  'gif': false
};

Video.displayName = 'Video';

exports.default = Video;