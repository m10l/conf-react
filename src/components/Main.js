require('normalize.css/normalize.css');
require('styles/App.scss');

import React from 'react';
import AppHeaderComponent from 'components/AppHeaderComponent';
import PostListComponent from 'components/PostListComponent';

class AppComponent extends React.Component {
  render() {
    return (
      <div className="index">
        <AppHeaderComponent />
        <PostListComponent />
      </div>
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
