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

var _Header = require('./Header');

var _Header2 = _interopRequireDefault(_Header);

var _Text = require('./Text');

var _Text2 = _interopRequireDefault(_Text);

var _Media = require('./Media');

var _Media2 = _interopRequireDefault(_Media);

var _Footer = require('./Footer');

var _Footer2 = _interopRequireDefault(_Footer);

var _styles = require('./styles');

var _styles2 = _interopRequireDefault(_styles);

var _utils = require('./utils');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Modal = function (_React$Component) {
  (0, _inherits3.default)(Modal, _React$Component);

  function Modal(props, context) {
    (0, _classCallCheck3.default)(this, Modal);
    return (0, _possibleConstructorReturn3.default)(this, (Modal.__proto__ || (0, _getPrototypeOf2.default)(Modal)).call(this, props, context));
  }

  (0, _createClass3.default)(Modal, [{
    key: 'close',
    value: function close() {
      this.context.closeModal();
    }
  }, {
    key: 'render',
    value: function render() {
      if (typeof window === "undefined") return null;

      var _props = this.props,
          data = _props.data,
          modalIndex = _props.modalIndex,
          isRT = false;

      var MediaComponent = null;

      // use retweet as data if its a RT
      if (data.retweeted_status) {
        data = data.retweeted_status;
        isRT = true;
      }

      var media = data.entities.media[modalIndex];

      if (data.extended_entities && data.extended_entities.media) {
        media = data.extended_entities.media[modalIndex];
      }

      var tweetStyle = {
        'backgroundColor': '#ffffff',
        'minHeight': '51px',
        'minWidth': '350px',
        'color': 'white',
        'fontFamily': '"Helvetica Neue", "Helvetica", "Arial", "sans-serif"',
        'fontSize': '14px',
        'lineHeight': '20px',
        'listStyleImage': 'none',
        'listStylePosition': 'outisde',
        'listStyleType': 'none',
        'position': 'relative',
        'textAlign': 'start'
      };

      var contentStyle = (0, _utils.cloneDeep)(_styles2.default.content);
      contentStyle.padding = _styles2.default.tweet.padding;

      var modalWrap = {
        'position': 'relative',
        'display': 'inline-block',
        'verticalAlign': 'middle',
        'margin': '0 auto',
        'zIndex': 20,
        'marginTop': '50px',
        'borderRadius': '5px',
        'overflow': 'hidden'
      };

      var imgStyle = {
        'width': '100%',
        'margin': '0 auto',
        'display': 'block'
      };

      var imgWrapStyle = {
        'width': '100%',
        'background': 'black'
      };

      var closeModalStyle = {
        'height': '50px',
        'width': '100%',
        'display': 'flex',
        'justifyContent': 'flex-end',
        'alignItems': 'center',
        'background': 'white'
      };

      var w = media.sizes.large.w;
      var h = media.sizes.large.h;

      if (w > 1000) {
        if (h > 650) {
          imgStyle.width, modalWrap.width = media.sizes.large.w / media.sizes.large.h * 650 + 'px';
        } else {
          modalWrap.width = media.sizes.large.w / media.sizes.large.h * 650 + 'px';
          imgStyle.height = media.sizes.large.h / media.sizes.large.w * 1000 + 'px';
        }
      } else {
        if (h > 650) {
          modalWrap.width = media.sizes.large.w / media.sizes.large.h * 650 + 'px';
          imgStyle.width = media.sizes.large.w / media.sizes.large.h * 650 + 'px';
        } else {
          modalWrap.width = w + 'px';
        }
      }

      return _react2.default.createElement(
        'div',
        { className: 'Modal', style: _styles2.default.Modal },
        _react2.default.createElement('span', { style: { 'height': '100%', 'display': 'inline-block', 'verticalAlign': 'middle' } }),
        _react2.default.createElement('div', { className: 'ModalClose', style: _styles2.default.ModalClose, onClick: this.close.bind(this) }),
        _react2.default.createElement(
          'div',
          { className: 'Modal-wrap', style: modalWrap },
          _react2.default.createElement(
            'div',
            { className: 'closeModal', style: closeModalStyle, onClick: this.close.bind(this) },
            _react2.default.createElement(
              'svg',
              { fill: '#657786', style: { 'margin': '10px' }, height: '28', viewBox: '0 0 24 24', width: '28', xmlns: 'http://www.w3.org/2000/svg' },
              _react2.default.createElement('path', { d: 'M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z' }),
              _react2.default.createElement('path', { d: 'M0 0h24v24H0z', fill: 'none' })
            )
          ),
          _react2.default.createElement(
            'div',
            { className: 'tweet', style: tweetStyle },
            _react2.default.createElement(
              'div',
              { className: 'media-wrap', style: imgWrapStyle },
              _react2.default.createElement('img', { src: media.media_url, style: imgStyle })
            ),
            _react2.default.createElement(
              'div',
              { className: 'content', style: contentStyle },
              _react2.default.createElement(_Header2.default, { data: data }),
              _react2.default.createElement(_Text2.default, { data: data }),
              _react2.default.createElement(_Footer2.default, { data: data })
            )
          )
        )
      );
    }
  }]);
  return Modal;
}(_react2.default.Component);

Modal.contextTypes = {
  'closeModal': _propTypes2.default.func
};

Modal.propTypes = {
  'data': _propTypes2.default.object,
  'active': _propTypes2.default.number
};

Modal.defaultProps = {
  'data': {
    'entities': {},
    'user': {}
  },
  'active': 0
};

exports.default = Modal;