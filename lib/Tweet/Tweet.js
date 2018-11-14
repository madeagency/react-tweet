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

var _Context = require('./Context');

var _Context2 = _interopRequireDefault(_Context);

var _Header = require('./Header');

var _Header2 = _interopRequireDefault(_Header);

var _Text = require('./Text');

var _Text2 = _interopRequireDefault(_Text);

var _Media = require('./Media');

var _Media2 = _interopRequireDefault(_Media);

var _Modal = require('./Modal');

var _Modal2 = _interopRequireDefault(_Modal);

var _Quote = require('./Quote');

var _Quote2 = _interopRequireDefault(_Quote);

var _Footer = require('./Footer');

var _Footer2 = _interopRequireDefault(_Footer);

var _styles = require('./styles');

var _styles2 = _interopRequireDefault(_styles);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Tweet = function (_React$Component) {
  (0, _inherits3.default)(Tweet, _React$Component);

  function Tweet(props) {
    (0, _classCallCheck3.default)(this, Tweet);

    var _this = (0, _possibleConstructorReturn3.default)(this, (Tweet.__proto__ || (0, _getPrototypeOf2.default)(Tweet)).call(this, props));

    _this.toggleModal = _this.toggleModal.bind(_this);
    _this.closeModal = _this.closeModal.bind(_this);
    _this.state = {
      'modalActive': false,
      'modalIndex': 0
    };
    return _this;
  }

  (0, _createClass3.default)(Tweet, [{
    key: 'toggleModal',
    value: function toggleModal(idx) {
      this.setState({
        'modalActive': true,
        'modalIndex': idx
      });
    }
  }, {
    key: 'closeModal',
    value: function closeModal() {
      this.setState({
        'modalActive': false
      });
    }
  }, {
    key: 'getChildContext',
    value: function getChildContext() {
      return {
        'toggleModal': this.toggleModal,
        'closeModal': this.closeModal
      };
    }
  }, {
    key: 'render',
    value: function render() {
      var _state = this.state,
          modalActive = _state.modalActive,
          modalIndex = _state.modalIndex;
      var _props = this.props,
          data = _props.data,
          linkProps = _props.linkProps,
          isRT = false;

      var MediaComponent = null,
          QuoteComponent = null;

      //Support for extended tweets
      if ('full_text' in data) {
        data.text = data.full_text;

        if ('quoted_status' in data) {
          data.quoted_status.text = data.quoted_status.full_text;
        }

        if ('retweeted_status' in data) {
          data.retweeted_status.text = data.retweeted_status.full_text;

          if ('quoted_status' in data.retweeted_status) {
            data.retweeted_status.quoted_status.text = data.retweeted_status.quoted_status.full_text;
          }
        }
      }

      // use retweet as data if its a RT
      if (data.retweeted_status) {
        data = data.retweeted_status;
        isRT = true;
      }

      // use Media component if media entities exist
      if (data.entities && data.entities.media) {
        MediaComponent = _react2.default.createElement(_Media2.default, { autoPlay: this.props.autoPlay, media: data.entities.media });
      }

      // extended_entities override, these are multi images, videos, gifs
      if (data.extended_entities && data.extended_entities.media) {
        MediaComponent = _react2.default.createElement(_Media2.default, { autoPlay: this.props.autoPlay, media: data.extended_entities.media });
      }

      // use Quote component if quoted status exists
      if (data.quoted_status) {
        QuoteComponent = _react2.default.createElement(_Quote2.default, { data: data.quoted_status, linkProps: linkProps });
      }

      return _react2.default.createElement(
        'div',
        { className: 'tweet', style: _styles2.default.tweet },
        isRT ? _react2.default.createElement(_Context2.default, this.props) : null,
        _react2.default.createElement(
          'div',
          { className: 'content', style: _styles2.default.content },
          _react2.default.createElement(_Header2.default, { data: data, linkProps: linkProps }),
          _react2.default.createElement(
            'a',
            (0, _extends3.default)({ style: _styles2.default.link, href: 'https://twitter.com/' + data.user.screen_name + '/status/' + data.id_str }, linkProps),
            _react2.default.createElement(_Text2.default, { data: data })
          ),
          MediaComponent,
          QuoteComponent,
          _react2.default.createElement(_Footer2.default, { data: data, linkProps: linkProps })
        ),
        modalActive ? _react2.default.createElement(_Modal2.default, { data: data, modalIndex: modalIndex }) : null
      );
    }
  }]);
  return Tweet;
}(_react2.default.Component);

Tweet.childContextTypes = {
  'toggleModal': _propTypes2.default.func,
  'closeModal': _propTypes2.default.func
};

Tweet.propTypes = {
  'data': _propTypes2.default.object,
  'linkProps': _propTypes2.default.object
};

Tweet.defaultProps = {
  'data': {
    'entities': {},
    'user': {}
  },
  'linkProps': {}
};

exports.default = Tweet;
