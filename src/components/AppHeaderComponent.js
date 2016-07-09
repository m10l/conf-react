'use strict';

import React from 'react';

require('styles/AppHeader.scss');

class AppHeaderComponent extends React.Component {
  render() {
    return (
      <header className="appheader-component">
        <svg width="34px" height="53px" viewBox="135 9 34 53">
          <polygon stroke="none" fill="#333333" points="168.550781 30.1601562 155.636719 30.1601562 155.636719 62 148.4375 62 148.4375 30.1601562 135.412109 30.1601562 135.412109 23.0722656 148.4375 23.0722656 148.4375 9.56445312 155.636719 9.56445312 155.636719 23.0722656 168.550781 23.0722656"></polygon>
        </svg>
        <h1 className="appheader-component__title">Only God<br/> Forgives</h1>
        <h2 className="appheader-component__subtitle">01474 771 666</h2>
      </header>
    );
  }
}

AppHeaderComponent.displayName = 'AppHeaderComponent';

// Uncomment properties you need
// AppHeaderComponent.propTypes = {};
// AppHeaderComponent.defaultProps = {};

export default AppHeaderComponent;
