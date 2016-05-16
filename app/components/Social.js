var React = require('react');
var ReactBootstrap = require('react-bootstrap');
var moment = require('moment');

var TuesdayCountdown = require('./TuesdayCountdown')

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
      <TuesdayCountdown start={moment("2016-05-17 12:00:00 +0000", "YYYY-MM-DD HH:mm Z")}/>
        <Col md={6}>
          <h3>More</h3>
          <p><Label bsStyle="success">OFFICIAL:</Label></p>
          <Button block href="https://www.facebook.com/TheProjectKronos" target="_blank">
            Project Kronos Facebook
          </Button>
          <Button block href="http://www.twitter.com/KronosWoW" target="_blank">
            @KronosWoW Twitter
          </Button>
          <Button block href="http://chat.mibbit.com/?channel=%23kronos-wow&server=irc.mibbit.net" target="_blank">
              #kronos-wow IRC
          </Button>
          <p></p>
          <p><Label bsStyle="warning">UNOFFICIAL:</Label></p>
          <Button block href="http://www.reddit.com/r/kronos2wow" target="_blank">
            /r/Kronos2WoW subreddit
          </Button>
        </Col>
      </Row>
    )
  }
});

module.exports = Social;
