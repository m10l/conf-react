'use strict';

import React from 'react';

import PostListFilterComponent from 'components/PostListFilterComponent';
import PostComponent from 'components/PostComponent';

var ConfessionStore = require('../stores/ConfessionStore');
var ConfessionActions = require('../actions/ConfessionActions');
require('styles/PostList.scss');

class PostListComponent extends React.Component {
  constructor() {
    super();
    this.state = ConfessionStore.getState();
  }

  componentDidMount() {
    ConfessionStore.listen(this.onChange.bind(this));
    ConfessionActions.fetchConfessions();
  }

  componentWillUnmount() {
    ConfessionStore.unlisten(this.onChange.bind(this));
  }

  onChange(state) {
    this.setState(state);
  }

  render() {
    var confessions = this.state.confessions.map(
      (confession, index) => (
        <PostComponent
          key = {index}
          audio = {confession.recording_url}
          votes = {confession.votes}
          date = {confession.updated}
        />
      )
    )

    return (
      <div className="postlist-component">
        <PostListFilterComponent filterTitles={['Latest', 'Best', 'Worst']} />
        <ul className="postlist-component__list">
          { confessions }
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
