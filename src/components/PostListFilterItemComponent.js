'use strict';

import React from 'react';

require('styles/PostListFilterItem.scss');

let PostListFilterItemComponent = (props) => (
  <a
    href="#"
    onClick={props.onClick}
    className={"postlistfilteritem-component" + (props.active? ' is-active' : '')}
  >
    <span className="postlistfilteritem-component__text">
      {props.title}
    </span>
  </a>
);

PostListFilterItemComponent.displayName = 'PostListFilterItemComponent';

// Uncomment properties you need
// PostListFilterItemComponent.propTypes = {};
// PostListFilterItemComponent.defaultProps = {};

export default PostListFilterItemComponent;
