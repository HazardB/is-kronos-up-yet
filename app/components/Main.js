var React = require('react');
var ReactDOM = require('react-dom');

var Main = React.createClass({
  render: function(){
    return (
      <div>
        <div className="container">
          <No />
          <div className="irc">
            <a href="http://chat.mibbit.com/?channel=%23kronos-wow&server=irc.mibbit.net" target="_new_win">Submit an "up" or "down" image via IRC »</a>
          </div>
          <div className="survey">
            <a href="https://forum.nostalrius.org/viewtopic.php?f=2&t=44103" target="_new_win">Why not fill in the Nostalrius Legacy Servers survey? »</a>
          </div>
        </div>
      </div>
    )
  }
});

var No = React.createClass({
  getInitialState: function(){
    var availableImages = [ 'down.gif', 'fuck.gif', 'sad.gif', 'sp-down.gif', 'drink-swirl.gif', 'dumb-and-dumber.gif', 'homer-monkey.gif', 'the-doctor.gif', 'rare-pepe.jpg'];
    var rand = Math.floor(Math.random() * availableImages.length);

    var srcImage = availableImages[rand];
    return { source: srcImage };
  },
  render: function(){
    return (
      <div>
        <p><i>"The servers are expected to be off/down until Sunday or Monday."</i> - Chero, Lead Developer</p>
        <strong>NEW!</strong> <a href="http://www.kronos-wow.com/2016/05/10/kronos-united/">Read the full news post</a>

        <div className="result">
          <img src={"img/" + this.state.source} alt="Kronos is DOWN!"></img>
          <h1>No, Kronos is <i>still</i> down. </h1>
          <p>(Last updated 18:23 GMT +1)</p>
        </div>
      </div>
    )
  }
});

var Disclaimer = React.createClass({
  render: function(){
    return (
      <div>
        <div className="disclaimer">
          This website is not endorsed by or affiliated with TwinStar - just a fan project!
        </div>
      </div>
    )
  }
});

var Yes = React.createClass({
  getInitialState: function(){
    var availableImages = [ 'feels-good-man.jpg'];
    var rand = Math.floor(Math.random() * availableImages.length);

    var srcImage = availableImages[rand];
    return { source: srcImage };
  },
  render: function(){
    return (
      <div>
        <div className="result">
          <img src={"img/" + this.state.source} alt="Kronos is UP!"></img>
          <h1>Kronos is back up and fully operational.</h1>
        </div>
      </div>
    )
  }
});

ReactDOM.render(<Main />, document.getElementById('app'))
ReactDOM.render(<Disclaimer />, document.getElementById('disclaimer'))
