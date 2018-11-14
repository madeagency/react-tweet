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

var _utils = require('./utils');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Photos = function (_React$Component) {
  (0, _inherits3.default)(Photos, _React$Component);

  function Photos(props, context) {
    (0, _classCallCheck3.default)(this, Photos);
    return (0, _possibleConstructorReturn3.default)(this, (Photos.__proto__ || (0, _getPrototypeOf2.default)(Photos)).call(this, props, context));
  }

  (0, _createClass3.default)(Photos, [{
    key: 'onClick',
    value: function onClick(idx) {
      this.context.toggleModal(idx);
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var media = this.props.media;


      var mediaElements = [],
          mediaStyle = (0, _utils.cloneDeep)(_styles2.default.AdaptiveMedia);
      if (media.length === 2) mediaStyle.height = '253px';
      if (media.length === 3) mediaStyle.height = '337px';
      if (media.length === 4) mediaStyle.height = '380px';

      // start media loop
      media.forEach(function (m, i) {
        // set initial sizes / styles
        var containStyle = { 'width': '100%', 'position': 'relative', 'overflow': 'hidden' };
        var photoStyle = { 'width': '100%', 'position': 'relative', 'verticalAlign': 'bottom' };
        var mediaHeight = m.sizes.large.h,
            mediaWidth = m.sizes.large.w;

        /*
         * format single photo
         */
        if (media.length === 1) {
          // 508 is the width of a tweet media wrapper
          // if image is wider than this, it's height will be reduced
          // proportionally, so we adjust our calculation
          if (mediaWidth > 508) {
            var ratio = 100 / mediaWidth * 508;
            mediaHeight = mediaHeight * (ratio / 100);
          }

          // check if image is taller than maxHeight, if so
          // center it with a negative top value
          var maxHeight = parseInt(mediaStyle.maxHeight.replace('px', ''));

          if (mediaHeight > maxHeight) {
            photoStyle.top = (maxHeight - mediaHeight) / 2 + 'px';
          }
        }

        /*
         * format two photos
         */
        if (media.length === 2) {
          var _maxHeight = 253;
          photoStyle.width = 'auto';
          photoStyle.height = '100%';
          containStyle.display = 'inline-block';
          containStyle.height = '100%';
          // give first image 1px margin right and calc width to adjust
          if (i === 0) containStyle.marginRight = '1px';
          containStyle.width = 'calc(50% - .5px)';

          var _ratio = 100 / mediaWidth * (508 / 2);
          mediaHeight = mediaHeight * (_ratio / 100);

          if (mediaHeight > _maxHeight) {
            photoStyle.top = (_maxHeight - mediaHeight) / 2 + 'px';
            photoStyle.width = '100%';
            photoStyle.height = 'auto';
          } else if (mediaWidth > 508 / 2) {
            var _ratio2 = 100 / m.sizes.large.h * 253;
            mediaWidth = mediaWidth * (_ratio2 / 100);
            photoStyle.left = (508 / 2 - mediaWidth) / 2 + 'px';
          }
        }

        /*
         * format three photos
         */
        if (media.length === 3) {
          if (i === 0) {
            var _maxHeight2 = 337;
            containStyle.width = 100 * (2 / 3) + '%';
            containStyle.marginRight = '1px';
            containStyle.height = '337px';
            containStyle.float = 'left';
            var firstWrapWidth = 508 * (2 / 3);

            var _ratio3 = 100 / mediaHeight * 337;
            mediaWidth = mediaWidth * (_ratio3 / 100);

            var newRatio = 100 / m.sizes.medium.w * firstWrapWidth;
            mediaHeight = mediaHeight * (newRatio / 100);

            if (mediaHeight > _maxHeight2) {
              photoStyle.top = (_maxHeight2 - mediaHeight) / 2 + 'px';
            }

            if (mediaWidth > firstWrapWidth) {
              photoStyle.width = 'auto';
              photoStyle.height = '100%';
              photoStyle.left = (508 * (2 / 3) - mediaWidth) / 2 + 'px';
            }
          }
          if (i !== 0) {
            mediaHeight = m.sizes.medium.h;
            mediaWidth = m.sizes.medium.w;
            var _maxHeight3 = 337 / 2;
            var maxWidth = 508 * 1 / 3;

            var _ratio4 = 100 / mediaWidth * maxWidth;
            mediaHeight = mediaHeight * (_ratio4 / 100);

            if (mediaHeight > _maxHeight3) {
              photoStyle.top = (_maxHeight3 - mediaHeight) / 2 + 'px';
            } else if (mediaWidth > maxWidth) {
              photoStyle.width = 'auto';
              photoStyle.height = '100%';
              var _newRatio = 100 / m.sizes.medium.h * maxWidth;
              mediaWidth = mediaWidth * (_newRatio / 100);
              photoStyle.left = (maxWidth - mediaWidth) / 2 + 'px';
            }

            containStyle.float = 'left';
            containStyle.marginBottom = '1px';
            containStyle.height = 'calc(100% / 2 - 1px/2)';
            containStyle.width = 'calc(100% / 3 - 1px)';
          }
        }

        /*
         * format four photos
         */
        if (media.length === 4) {
          if (i === 0) {
            containStyle.width = '75%';
            containStyle.marginRight = '1px';
            containStyle.height = '380px';
            containStyle.float = 'left';
            var _firstWrapWidth = 508 * 0.75;
            var _maxHeight4 = 380;

            var _ratio5 = 100 / mediaHeight * 380;
            mediaWidth = mediaWidth * (_ratio5 / 100);

            var _newRatio2 = 100 / m.sizes.medium.w * _firstWrapWidth;
            mediaHeight = mediaHeight * (_newRatio2 / 100);

            if (mediaHeight > _maxHeight4) {
              photoStyle.top = (_maxHeight4 - mediaHeight) / 2 + 'px';
            }

            if (mediaWidth > _firstWrapWidth) {
              photoStyle.width = 'auto';
              photoStyle.height = '100%';
              photoStyle.left = (508 * 0.75 - mediaWidth) / 2 + 'px';
            }
          }
          if (i !== 0) {
            mediaHeight = m.sizes.medium.h;
            mediaWidth = m.sizes.medium.w;
            var _maxHeight5 = 380 / 3;
            var _maxWidth = 508 * 1 / 4;

            var _ratio6 = 100 / mediaWidth * _maxWidth;
            mediaHeight = mediaHeight * (_ratio6 / 100);

            if (mediaHeight > _maxHeight5) {
              photoStyle.top = (_maxHeight5 - mediaHeight) / 2 + 'px';
            } else if (mediaWidth > _maxWidth) {
              photoStyle.width = 'auto';
              photoStyle.height = '100%';
              var _newRatio3 = 100 / m.sizes.medium.h * _maxWidth;
              mediaWidth = mediaWidth * (_newRatio3 / 100);
              photoStyle.left = (_maxWidth - mediaWidth) / 2 + 'px';
            }

            containStyle.height = 'calc(100% / 3 - 2px/3)';
            containStyle.marginBottom = '1px';
            containStyle.float = 'left';
            containStyle.width = 'calc(25% - 1px)';
          }
        }

        mediaElements.push(_react2.default.createElement(
          'div',
          { onClick: _this2.onClick.bind(_this2, i), className: 'AdaptiveMedia-photoContainer', style: containStyle, key: i },
          _react2.default.createElement('img', { src: m.media_url, style: photoStyle })
        ));
      });
      // end media loop

      return _react2.default.createElement(
        'div',
        { className: 'AdaptiveMedia', style: mediaStyle },
        mediaElements
      );
    }
  }]);
  return Photos;
}(_react2.default.Component);

Photos.contextTypes = {
  'toggleModal': _propTypes2.default.func
};

Photos.propTypes = {
  'media': _propTypes2.default.array
};

Photos.displayName = 'Photos';

exports.default = Photos;