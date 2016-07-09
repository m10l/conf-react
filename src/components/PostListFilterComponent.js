'use strict';

import React from 'react';
import PostListFilterItemComponent from 'components/PostListFilterItemComponent';

require('styles/PostListFilter.scss');

class PostListFilterComponent extends React.Component {
  constructor() {
    super();
    this.state = { activeIndex: 0 };
  }

  handleItemClick(index, event) {
    event.preventDefault();
    this.setState({activeIndex: index});
  }

  render() {
    var activeIndex = this.state.activeIndex;

    return (
      <nav className="postlistfilter-component">
        {
          this.props.filterTitles.map(
            (filterTitle, index) => (
              <PostListFilterItemComponent
                key={index}
                active={activeIndex === index}
                title={filterTitle}
                onClick={this.handleItemClick.bind(this, index)}
              />
            )
          )
        }
      </nav>
    );
  }
}

PostListFilterComponent.displayName = 'PostListFilterComponent';

export default PostListFilterComponent;
