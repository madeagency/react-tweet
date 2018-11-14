import React from 'react'
import PropTypes from 'prop-types'
import Context from './Context'
import Header from './Header'
import Text from './Text'
import Media from './Media'
import Modal from './Modal'
import Quote from './Quote'
import styles from './styles'

class Tweet extends React.Component {
  constructor (props) {
    super(props)
    this.toggleModal = this.toggleModal.bind(this)
    this.closeModal = this.closeModal.bind(this)
    this.state = {
      'modalActive': false,
      'modalIndex': 0
    }
  }

  toggleModal (idx) {
    this.setState({
      'modalActive': true,
      'modalIndex': idx
    })
  }

  closeModal () {
    this.setState({
      'modalActive': false
    })
  }

  getChildContext () {
    return {
      'toggleModal': this.toggleModal,
      'closeModal': this.closeModal
    }
  }

  render () {
    const {modalActive, modalIndex} = this.state
    let {data, linkProps} = this.props, isRT = false
    let MediaComponent = null, QuoteComponent = null
    
    //Support for extended tweets
    if (data.full_text) {
      data.text = data.full_text;

      if (data.quoted_status) {
        data.quoted_status.text = data.quoted_status.full_text;
      }
      
      if (data.retweeted_status) {
        data.retweeted_status.text = data.retweeted_status.full_text;

        if (data.retweeted_status.quoted_status) {
          data.retweeted_status.quoted_status.text = data.retweeted_status.quoted_status.full_text;
        }
      }
    }
    
    // use retweet as data if its a RT
    if (data.retweeted_status) {
      data = data.retweeted_status
      isRT = true
    }

    // use Media component if media entities exist
    if (data.entities && data.entities.media) {
      MediaComponent = <Media  autoPlay={this.props.autoPlay} media={data.entities.media} />
    }

    // extended_entities override, these are multi images, videos, gifs
    if (data.extended_entities && data.extended_entities.media) {
      MediaComponent = <Media autoPlay={this.props.autoPlay} media={data.extended_entities.media} />
    }

    // use Quote component if quoted status exists
    if (data.quoted_status) {
      QuoteComponent = <Quote data={data.quoted_status} linkProps={linkProps}/>
    }

    if (data.extended_tweet) {
      data.text = data.extended_tweet.full_text;
      data.entities = data.extended_tweet.entities;
      data.extended_entities = data.extended_tweet.extended_entities;
      data.display_text_range = data.extended_tweet.display_text_range;
    }
    if (data.quoted_status) {
      if (data.quoted_status.extended_tweet) {
        data.quoted_status.text = data.quoted_status.extended_tweet.full_text;
        data.quoted_status.entities = data.quoted_status.extended_tweet.entities;
        data.quoted_status.extended_entities = data.quoted_status.extended_tweet.extended_entities;
        data.quoted_status.display_text_range = data.quoted_status.extended_tweet.display_text_range;
      }
    }
    if (data.retweeted_status) {
      if (data.retweeted_status.extended_tweet) {
        data.retweeted_status.text = data.retweeted_status.extended_tweet.full_text;
        data.retweeted_status.entities = data.retweeted_status.extended_tweet.entities;
        data.retweeted_status.extended_entities = data.retweeted_status.extended_tweet.extended_entities;
        data.retweeted_status.display_text_range = data.retweeted_status.extended_tweet.display_text_range;
      }
      if (data.retweeted_status.is_quote_status data.retweeted_status.quoted_status) {
        if (data.retweeted_status.quoted_status.extended_tweet) {
          data.retweeted_status.quoted_status.text = data.retweeted_status.quoted_status.extended_tweet.full_text;
          data.retweeted_status.quoted_status.entities = data.retweeted_status.quoted_status.extended_tweet.entities;
          data.retweeted_status.quoted_status.extended_entities = data.retweeted_status.quoted_status.extended_tweet.extended_entities;
          data.retweeted_status.quoted_status.display_text_range = data.retweeted_status.quoted_status.extended_tweet.display_text_range;
        }
      }
    }

    return (
      <div className="tweet" style={styles.tweet}>
        {isRT ? <Context {... this.props} /> : null}
        <div className="content" style={styles.content}>
          <Header data={data} linkProps={linkProps} />
          <a style={styles.link} href={`https://twitter.com/${data.user.screen_name}/status/${data.id_str}`} {...linkProps}>
            <Text data={data} />
          </a>
          {MediaComponent}
          {QuoteComponent}
        </div>
        {modalActive ? <Modal data={data} modalIndex={modalIndex} /> : null}
      </div>
    )
  }
}

Tweet.childContextTypes = {
  'toggleModal': PropTypes.func,
  'closeModal': PropTypes.func
}

Tweet.propTypes = {
  'data': PropTypes.object,
  'linkProps': PropTypes.object
}

Tweet.defaultProps = {
  'data': {
    'entities': {},
    'user': {}
  },
  'linkProps': {}
}

export default Tweet
