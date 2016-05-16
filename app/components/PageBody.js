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
      <Alert bsStyle="danger">
          <img src="img/down.gif" alt="Kronos is DOWN!" className="center-block img-responsive"></img>

          <h2 className="text-center">Kronos realms have been moved to new hardware!</h2>
          <p className="text-center">The new realms are being tracked below and will be up between 10AM and 2PM CEST (GMT+2)</p>
          <Row>
          <Col xs={4} xsOffset={8}>
          <Button bsStyle="warning" bsSize="xsmall" className="text-center" href="http://www.kronos-wow.com/2016/05/16/maintenance/" target="_blank">Read the announcement</Button>
          </Col>
          </Row>
      </Alert>
      <ServerStatus />
  </div>
    )
  }
});

module.exports = PageBody;
