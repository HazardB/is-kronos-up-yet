var React = require('react');
var ReactBootstrap = require('react-bootstrap');
var ServerStatus = require('./ServerStatus');

var Button  = ReactBootstrap.Button,
    Row  = ReactBootstrap.Row,
    Col  = ReactBootstrap.Col,
    Label  = ReactBootstrap.Label,
    Alert  = ReactBootstrap.Alert,
    Table  = ReactBootstrap.Table,
    Checkbox  = ReactBootstrap.Checkbox;

var PageBody = React.createClass({
  render: function(){
    return (
      <div>
      <Alert bsStyle="warning">
          <img src="img/down.gif" alt="Kronos is experiencing problems!" className="center-block img-responsive"></img>

          <h2 className="text-center">Kronos is still experiencing issues!</h2>
          <p className="text-center">Kronos is having network issues after the server move. Keep your eyes peeled here for live updates to the server status. </p>
          <Row>
          <Col xs={4} xsOffset={8}>
          <Button bsStyle="warning" bsSize="xsmall" className="text-center" href="http://www.kronos-wow.com/2016/05/16/maintenance/" target="_blank">Latest announcement</Button>
          </Col>
          </Row>
      </Alert>
      <ServerStatus />
  </div>
    )
  }
});

module.exports = PageBody;
