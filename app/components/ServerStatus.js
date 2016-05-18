var React = require('react');
var ReactBootstrap = require('react-bootstrap');
var moment = require('moment');

var reactNotifications = require('react-notifications');
var NotificationManager = reactNotifications.NotificationManager;

var API = require('../utils/api');

var Button  = ReactBootstrap.Button,
    Row  = ReactBootstrap.Row,
    Col  = ReactBootstrap.Col,
    Label  = ReactBootstrap.Label,
    Alert  = ReactBootstrap.Alert,
    Table  = ReactBootstrap.Table,
    Checkbox  = ReactBootstrap.Checkbox;

var ServerStatus = React.createClass({
  componentDidMount: function() {
    API.retrieveServers()
    .then(function(response){
      this.setState({
        servers: response.data,
        latestStatus: null,
      });
      this.timer = setInterval(this.tick, 15000);
      this.tick();
    }.bind(this));
  },
  componentWillUnmount: function(){
    clearInterval(this.timer);
  },
  onStatusRetrieved: function(response){

  },
  tick: function(){
    API.retrieveStatus()
    .then(function(response){
      var statusResponse = response.data;
      var newStatuses = this.state.servers.map(function(server) {
        var serverId = server.Id;

        for(var i = 0, len = statusResponse.length; i < len; i++){
          if(statusResponse[i].Id == serverId){
            return { id: serverId, name: server.Name, host: server.IP, lastUpdated: statusResponse[i].LastUpdated, up: statusResponse[i].Up, tracked: false };
          }
        }
      });

      // Diff the previous statuses to understand whether a server has gone up or down
      if(this.state.latestStatus != null)
      {
        for(var i = 0, len = this.state.latestStatus.length; i < len; i++){
          for(var j = 0, len = newStatuses.length; j < len; j++){
            var previous = this.state.latestStatus[i];
            var next = newStatuses[j];
            if(previous.id == next.id && previous.tracked)
            {
              newStatuses[j].tracked = true;
              if(previous.up != next.up){
                if(next.up){
                  NotificationManager.success('Server up', next.name + ' is now responding.');
                }
                else {
                  NotificationManager.error('Server down', next.name + ' is no longer responding to our requests.');
                }
                document.getElementById('notify').play();
                continue;
              }
            }
          }
        }
      }


      this.setState({
        servers: this.state.servers,
        latestStatus: newStatuses,
      });
    }.bind(this));
  },
  handleTracked: function(event){
    var serverId = event.target.name;
    var value = event.target.value == 'on';

    var newStatuses = this.state.latestStatus.map(function(oldStatus){
      var updated = oldStatus;
      if(serverId == oldStatus.id){
        updated.tracked = value;
        return updated;
      }
      return oldStatus;
    });

    this.setState({
      servers: this.state.servers,
      latestStatus: newStatuses,
    });
  },
  render: function(){
    var hasStatus = this.state != null && this.state.latestStatus != null;

    if(hasStatus){
      var rows = this.state.latestStatus.map(function(status){
        if(status.up){
          var statusLabel = (<Label bsStyle="success">UP</Label>);
        }
        else{
          var statusLabel = (<Label bsStyle="danger">DOWN</Label>);
        }

        var now = moment.utc();
        var lastUpdate = moment(status.lastUpdated);
        var msDiff = lastUpdate.diff(now);

        var seconds = Math.floor((msDiff/1000) % 60) * -1;
        return (
          <tr key={status.id}>
          <td>{status.name}</td>
          <td>{statusLabel}</td>
          <td>{seconds} seconds ago...</td>
          <td><Checkbox name={status.id} checked={status.tracked} onChange={this.handleTracked}/></td>
          </tr>
        )}.bind(this));
    }
    else {
      var rows = (<tr><td colSpan="5">Loading data...</td></tr>);
    }

    return (
     <div>
      <h4>Live Realm Status:</h4>
      <Row>
        <Col xs={4} xsOffset={8}>
          <small>LIVE - Automatically updating every 15 seconds.</small>
        </Col>
      </Row>
      <Table striped bordered condensed hover>
    <thead>
      <tr>
        <th>Server</th>
        <th>Status</th>
        <th>Last checked</th>
        <th>Track</th>
      </tr>
    </thead>
    <tbody>
      {rows}
    </tbody>
  </Table>
  <Row>
    <Col xs={6} >
      <small>Servers under heavy load may report as "down".</small>
    </Col>
    <Col xs={2} xsOffset={10}>
      <small><a href="https://github.com/HazardB/is-kronos-up-yet/wiki/FAQ#q-how-does-the-automated-server-status-work" target="_blank">Learn how this works</a></small>
    </Col>
  </Row>
  </div>
    )
  }
});

module.exports = ServerStatus;
