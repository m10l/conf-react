'use strict';

import React from 'react';
import PostListFilterComponent from 'components/PostListFilterComponent';
import PostComponent from 'components/PostComponent';

require('styles/PostList.scss');

class PostListComponent extends React.Component {
  render() {
    var postsArray = [
      {
        'recording_url': 'http://api.twilio.com/2010-04-01/Accounts/AC2ec2a27cc56241e89887e63de463f7bb/Recordings/REb45c5ba936f3980c9e5f749537163e35',
        'from': 'test',
        'votes': 2,
        'updated': 1429566400826,
        '__v': 0
      },
      {
        'recording_url': 'http://api.twilio.com/2010-04-01/Accounts/AC2ec2a27cc56241e89887e63de463f7bb/Recordings/REb45c5ba936f3980c9e5f749537163e35',
        'from': 'test',
        'votes': 2,
        'updated': 1429566402608,
        '__v': 0
      },
      {
        'recording_url': 'http://api.twilio.com/2010-04-01/Accounts/AC2ec2a27cc56241e89887e63de463f7bb/Recordings/REb45c5ba936f3980c9e5f749537163e35',
        'from': 'test',
        'votes': 4,
        'updated': 1429566409761,
        '__v': 0
      },
      {
        'recording_url': 'http://api.twilio.com/2010-04-01/Accounts/AC2ec2a27cc56241e89887e63de463f7bb/Recordings/REb45c5ba936f3980c9e5f749537163e35',
        'from': 'test',
        'votes': 1,
        'updated': 1429566452774,
        '__v': 0
      },
      {
        'recording_url': 'http://api.twilio.com/2010-04-01/Accounts/AC2ec2a27cc56241e89887e63de463f7bb/Recordings/REb45c5ba936f3980c9e5f749537163e35',
        'from': 'test',
        'votes': 0,
        'updated': 1429566465165,
        '__v': 0
      },
      {
        'recording_url': 'http://api.twilio.com/2010-04-01/Accounts/AC2ec2a27cc56241e89887e63de463f7bb/Recordings/REb45c5ba936f3980c9e5f749537163e35',
        'from': 'test',
        'votes': 2,
        'updated': 1429566467349,
        '__v': 0
      },
      {
        'recording_url': 'http://api.twilio.com/2010-04-01/Accounts/AC2ec2a27cc56241e89887e63de463f7bb/Recordings/REb45c5ba936f3980c9e5f749537163e35',
        'from': 'test',
        'votes': -2,
        'updated': 1429566469165,
        '__v': 0
      },
      {
        'recording_url': 'http://api.twilio.com/2010-04-01/Accounts/AC2ec2a27cc56241e89887e63de463f7bb/Recordings/REb45c5ba936f3980c9e5f749537163e35',
        'from': 'test',
        'votes': -2,
        'updated': 1429566474210,
        '__v': 0
      },
      {
        'recording_url': 'http://api.twilio.com/2010-04-01/Accounts/AC2ec2a27cc56241e89887e63de463f7bb/Recordings/REb45c5ba936f3980c9e5f749537163e35',
        'from': 'test',
        'votes': -2,
        'updated': 1429566476493,
        '__v': 0
      },
      {
        'recording_url': 'http://api.twilio.com/2010-04-01/Accounts/AC2ec2a27cc56241e89887e63de463f7bb/Recordings/REb45c5ba936f3980c9e5f749537163e35',
        'from': 'test',
        'votes': 10,
        'updated': 1429566480274,
        '__v': 0
      },
      {
        'recording_url': 'http://api.twilio.com/2010-04-01/Accounts/AC2ec2a27cc56241e89887e63de463f7bb/Recordings/REb45c5ba936f3980c9e5f749537163e35',
        'from': 'test',
        'votes': 14,
        'updated': 1429566482417,
        '__v': 0
      }
    ];

    var posts = postsArray.map(
      (post, index) => (
        <PostComponent
          key = {index}
          audio = {post.recording_url}
          votes = {post.votes}
          date = {post.updated}
        />
      )
    )

    return (
      <div className="postlist-component">
        <PostListFilterComponent filterTitles={['Latest', 'Best', 'Worst']} />
        <ul className="postlist-component__list">
          { posts }
        </ul>
      </div>
    );
  }
}

PostListComponent.displayName = 'PostListComponent';

// Uncomment properties you need
// PostListComponent.propTypes = {};
// PostListComponent.defaultProps = {};

export default PostListComponent;
