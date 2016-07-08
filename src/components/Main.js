require('normalize.css/normalize.css');
require('styles/App.scss');

import React from 'react';
import AppHeaderComponent from 'components/AppHeaderComponent';

class AppComponent extends React.Component {
  render() {
    return (
      <div className="index">
        <AppHeaderComponent />
      </div>
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
