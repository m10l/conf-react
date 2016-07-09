'use strict';

import React from 'react';
import PostListFilterComponent from 'components/PostListFilterComponent';

require('styles/PostList.scss');

class PostListComponent extends React.Component {
  render() {
    return (
      <div className="postlist-component">
        <PostListFilterComponent filterTitles={['Latest', 'Best']} />
        <ul className="postlist-component__list">
          <li>Item 1</li>
          <li>Item 2</li>
          <li>Item 3</li>
          <li>Item 4</li>
          <li>Item 5</li>
          <li>Item 6</li>
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
