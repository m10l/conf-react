'use strict';

import React from 'react';
import AudioPlayerComponent from 'components/AudioPlayerComponent';
import DateComponent from 'components/DateComponent';

require('styles/Post.scss');

class PostComponent extends React.Component {
  render() {
    return (
      <li className="post-component">
        <AudioPlayerComponent audio={ this.props.audio } />
        <div className="post-component__meta">
          <DateComponent date={this.props.date} />
        </div>
      </li>
    );
  }
}

PostComponent.displayName = 'PostComponent';

// Uncomment properties you need
// PostComponent.propTypes = {};
// PostComponent.defaultProps = {};

export default PostComponent;
