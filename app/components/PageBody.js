var React = require('react');
var ReactBootstrap = require('react-bootstrap')

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

          <p><h2 className="text-center">Kronos realms are being moved to new hardware</h2></p>
          <p className="text-center">The TwinStar team are moving Kronos I and II to new dedicated servers.</p>
          <p className="text-center">The latest update indicated Tuesday May 18th as the day the realms will return.</p>
          <Button bsStyle="warning" bsSize="xsmall" className="center-block">Read more</Button>
      </Alert>
      <h4>Live Realm Status:</h4>
      <Row>
        <Col xs={4} xsOffset={4}>
          <Checkbox pullRight>
           Listen for live updates
         </Checkbox>
        </Col>
        <Col xs={4}>
         <Checkbox pullRight>
          Notify me when servers come up
        </Checkbox>
        </Col>
      </Row>
      <Table striped bordered condensed hover>
    <thead>
      <tr>
        <th>Server</th>
        <th>Host</th>
        <th>Status</th>
        <th>Last updated</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>TwinStar Login</td>
        <td>wow.twinstar.cz</td>
        <td><Label bsStyle="success">UP</Label></td>
        <td>21 seconds ago...</td>
      </tr>
      <tr>
        <td>Kronos Login</td>
        <td>login.kronos-wow.com</td>
          <td><Label bsStyle="danger">DOWN</Label></td>
        <td>23 seconds ago...</td>
      </tr>
      <tr>
        <td>Kronos I</td>
          <td>192.121.44.154</td>
          <td><Label bsStyle="danger">DOWN</Label></td>
        <td>22 seconds ago...</td>
      </tr>
      <tr>
        <td>Kronos II</td>
          <td>192.121.44.163</td>
          <td><Label bsStyle="danger">DOWN</Label></td>
        <td>23 seconds ago...</td>
      </tr>
    </tbody>

  </Table>
  <Row>
    <Col xs={2} xsOffset={10}>
      <small><a href="#">Learn how this works</a></small>
    </Col>
  </Row>
  </div>
    )
  }
});

module.exports = PageBody;
