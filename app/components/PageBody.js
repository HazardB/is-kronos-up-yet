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
          <img src="img/mind-blown.gif" alt="Kronos is experiencing problems!" className="center-block img-responsive"></img>

          <h2 className="text-center">Kronos is still experiencing some latency issues</h2>
          <p className="text-center">The server might pop up and down over the next few days. Thanks to TwinStar for the continued effort.</p>
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
