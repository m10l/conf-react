var alt = require('../alt');
var ConfessionActions = require('../actions/ConfessionActions');

class ConfessionStore {
  constructor() {
    this.confessions = [];
    this.error = null;

    this.bindListeners({
      handleUpdateConfessions: ConfessionActions.UPDATE_CONFESSIONS,
      handleFetchConfessions: ConfessionActions.FETCH_CONFESSIONS,
      handleConfessionsFailed: ConfessionActions.CONFESSIONS_FAILED
    });
  }

  handleUpdateConfessions(confessions) {
    this.confessions = confessions;
    this.error = null;
  }

  handleFetchConfessions() {
    this.confessions = [];
  }

  handleConfessionsFailed(error) {
    this.error = error;
  }
}

module.exports = alt.createStore(ConfessionStore, 'ConfessionStore');
