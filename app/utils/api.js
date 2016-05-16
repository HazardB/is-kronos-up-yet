var axios = require('axios');
var api = {
  retrieveServers: function() {
    return axios.get('http://iskronosupyet-api.azurewebsites.net/api/servers/');
  },
  retrieveStatus: function() {
    return axios.get('http://iskronosupyet-api.azurewebsites.net/api/status/');
  }
};

module.exports = api;
