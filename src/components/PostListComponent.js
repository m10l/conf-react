'use strict';

import React from 'react';
import Axios from 'axios';
import PostListFilterComponent from 'components/PostListFilterComponent';
import PostComponent from 'components/PostComponent';

require('styles/PostList.scss');

class PostListComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = { confessions: [] };
  }

  loadAjax() {
    Axios.get('http://only-god-forgives.herokuapp.com/api/all')
      .then( (response) =>
        this.setState({confessions: response.data})
      )
  }

  componentDidMount() {
    this.loadAjax();
    setInterval(this.loadAjax.bind(this), 2000);
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
