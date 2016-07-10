'use strict';

import React from 'react';
import Wavesurfer from 'react-wavesurfer';
import DateComponent from 'components/DateComponent';

require('styles/Post.scss');

class PostComponent extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      playing: false
    }

    this.handleTogglePlay = this.handleTogglePlay.bind(this);
  }

  handleTogglePlay() {
    this.setState({
      playing: !this.state.playing
    });
  }

  render() {
    return (
      <li className="post-component">
        <button className="post-component__play-button" onClick={this.handleTogglePlay.bind(this)} >
          <svg width="53px" height="53px" viewBox="0 0 53 53">
            <g id="-" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd" >
              <g id="Desktop"  transform="translate(-496.000000, -469.000000)" fill="#333333">
                <g id="Audio-Post"  transform="translate(422.000000, 469.000000)">
                  <g id="Play-Button" transform="translate(74.000000, 0.000000)" >
                    <path d="M26.5,53 C41.1355459,53 53,41.1355459 53,26.5 C53,11.8644541 41.1355459,0 26.5,0 C11.8644541,0 0,11.8644541 0,26.5 C0,41.1355459 11.8644541,53 26.5,53 Z M38,26.6726471 L20.1125,37 L20.1125,16.3452941 L38,26.6726471 Z" id="Oval-1"></path>
                  </g>
                </g>
              </g>
            </g>
          </svg>
        </button>
        <div className="post-component__audio">
          <Wavesurfer
            audioFile = { this.props.audio }
            playing={ this.state.playing }
            options = {
              {
                barWidth: 2,
                progressColor: '#c6b266',
                cursorWidth: 0,
                waveColor: '#eeeeee',
                height: '53'
              }
            }
          />
        </div>
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
