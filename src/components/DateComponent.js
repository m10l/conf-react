'use strict';

import React from 'react';
import Moment from 'moment';

require('styles/Date.scss');

class DateComponent extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      relative: true
    }

    this.handleToggle = this.handleToggle.bind(this);
  }

  handleToggle() {
    this.setState({
      relative: !this.state.relative
    });
  }

  render() {
    return (
      <div className="date-component" onClick={this.handleToggle.bind(this)}>
        Posted { this.state.relative? Moment(this.props.date).fromNow() : Moment(this.props.date).format('MMMM Do, YYYY | h:mm') }
      </div>
    );
  }
}

DateComponent.displayName = 'DateComponent';

// Uncomment properties you need
// DateComponent.propTypes = {};
// DateComponent.defaultProps = {};

export default DateComponent;
