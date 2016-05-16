var React = require('react');
var moment = require('moment');
var ReactBootstrap = require('react-bootstrap');

var Row  = ReactBootstrap.Row,
    Col  = ReactBootstrap.Col,
    Well  = ReactBootstrap.Well;

var TuesdayCountdown = React.createClass({
  getInitialState: function(){
    return { days: 0, hours: 0, minutes: 0, seconds: 0};
  },
  componentDidMount: function(){
    this.timer = setInterval(this.tick, 500);
    this.tick();
  },
  componentWillUnmount: function(){
    clearInterval(this.timer);
  },
  tick: function(){
    var now = moment.utc();
    var msDiff = this.props.start.diff(now);

    var seconds = Math.floor((msDiff/1000) % 60);
    var minutes = Math.floor((msDiff/(1000*60)) % 60);
    var hours = Math.floor((msDiff/(1000*60*60)) % 24);
    var days = Math.floor((msDiff/(1000*60*60*24)) % 24);

    this.setState({days: days, hours: hours, minutes: minutes, seconds: seconds});
  },
  render: function(){
    var days = this.state.days;
    var hours = this.state.hours;
    var minutes = this.state.minutes;
    var seconds = this.state.seconds;

    return (
        <Col md={6}>
          <h3>Countdown</h3>
          <Well>
            <h2>{days}d {hours}h {minutes}m {seconds}s...</h2>
            <p>Until Tuesday May 17th 2 PM CEST (GMT+2)</p>
<small className="text-center"><a href="https://github.com/HazardB/is-kronos-up-yet/wiki/FAQ#q-why-is-the-timer-set-to-tuesday-17th-may-at-2pm-cest"><strong>Why this time?</strong></a></small>
          </Well>

        </Col>
      )
    }
  });

  module.exports = TuesdayCountdown;
