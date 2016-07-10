'use strict';

import React from 'react';
import _ from 'lodash';
import PostListFilterComponent from 'components/PostListFilterComponent';
import PostComponent from 'components/PostComponent';

require('styles/PostList.scss');

class PostListComponent extends React.Component {
  constructor() {
    super();
    this.state = {
      data: _.orderBy([
        {
          '_id': '5530f9140857b80300388c6e',
          '__v': 0,
          'recording_url': 'http://api.twilio.com/2010-04-01/Accounts/AC2ec2a27cc56241e89887e63de463f7bb/Recordings/REb45c5ba936f3980c9e5f749537163e35',
          'updated': '2015-04-20T22:26:29.399Z',
          'votes': 23
        },
        {
          '_id': '5530fb5e0857b80300388c6f',
          '__v': 0,
          'recording_url': 'http://api.twilio.com/2010-04-01/Accounts/AC2ec2a27cc56241e89887e63de463f7bb/Recordings/RE5e147fbe4eb9a91a19de414a9a3b2bbf',
          'updated': '2015-04-21T09:00:08.210Z',
          'votes': 19
        },
        {
          '_id': '5530fb730857b80300388c70',
          '__v': 0,
          'recording_url': 'http://api.twilio.com/2010-04-01/Accounts/AC2ec2a27cc56241e89887e63de463f7bb/Recordings/RE365097472def4dc100312aab9a926eb7',
          'updated': '2015-04-20T22:26:20.372Z',
          'votes': 19
        },
        {
          '_id': '5530fe0de9bf8c03009287c0',
          '__v': 0,
          'recording_url': 'http://api.twilio.com/2010-04-01/Accounts/AC2ec2a27cc56241e89887e63de463f7bb/Recordings/RE68b60e1ce417e871433673ad9326d182',
          'updated': '2015-04-20T22:26:16.369Z',
          'votes': 13
        },
        {
          '_id': '553190a6e9bf8c03009287c4',
          '__v': 0,
          'recording_url': 'http://api.twilio.com/2010-04-01/Accounts/AC2ec2a27cc56241e89887e63de463f7bb/Recordings/RE3e23ce1d51648a797a3969e02c364b19',
          'updated': '2015-04-21T09:02:31.344Z',
          'votes': 16
        },
        {
          '_id': '5536470e3856740300195fe2',
          '__v': 0,
          'recording_url': 'http://api.twilio.com/2010-04-01/Accounts/AC2ec2a27cc56241e89887e63de463f7bb/Recordings/RE6dc1e9f0b2a7f9bb1a23112d83771398',
          'updated': '2015-04-21T12:48:14.181Z',
          'votes': 18
        },
        {
          '_id': '5546a1550204a403006f59bc',
          '__v': 0,
          'recording_url': 'http://api.twilio.com/2010-04-01/Accounts/AC2ec2a27cc56241e89887e63de463f7bb/Recordings/RE78af3e674e0fc645ef1d2260b1fea7f3',
          'updated': '2015-05-03T22:29:41.628Z',
          'votes': 17
        }
      ], 'updated', 'desc')
    }
  }

  render() {
    var posts = this.state.data.map(
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
