var alt = require('../alt');
import Axios from 'axios';

class ConfessionActions {
  updateConfessions(confessions) {
    return confessions;
  }

  fetchConfessions() {
    return (dispatch) => {
      dispatch();
      Axios.get('https://only-god-forgives.herokuapp.com/api/all')
        .then((response) => {
          this.updateConfessions(response.data);
        })
        .catch((error) => {
          this.confessionsFailed(error);
        });
    };
  }

  confessionsFailed(error) {
    return error;
  }
}

module.exports = alt.createActions(ConfessionActions);
