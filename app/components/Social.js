var React = require('react');
var ReactBootstrap = require('react-bootstrap')

var Button  = ReactBootstrap.Button,
    Row  = ReactBootstrap.Row,
    Col  = ReactBootstrap.Col,
    Label  = ReactBootstrap.Label,
    Well  = ReactBootstrap.Well,
    Glyphicon  = ReactBootstrap.Glyphicon;

var Social = React.createClass({
  render: function(){
    return (
      <Row className="show-grid">
        <Col md={6}>
          <h3>Countdown</h3>
          <Well>
            <h2>1d 7h 36m 15s...</h2>
            <p>Until Tuesday May 18th 23:59:59 CET</p>

          </Well>
          <p className="text-center"><small className="text-center"><a href="#">Why this time?</a></small></p>
        </Col>

        <Col md={6}>
          <h3>More</h3>
          <p><Label bsStyle="success">OFFICIAL:</Label></p>
          <Button block>
            Project Kronos Facebook
          </Button>
          <Button block>
            @KronosWoW Twitter
          </Button>
          <Button block>
              #kronos-wow IRC
          </Button>
          <p></p>
          <p><Label bsStyle="warning">UNOFFICIAL:</Label></p>
          <Button block>
            /r/Kronos2WoW subreddit
          </Button>
        </Col>
      </Row>
    )
  }
});

module.exports = Social;
