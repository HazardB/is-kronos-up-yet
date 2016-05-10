var React = require('react');
var ReactDOM = require('react-dom');

var Main = React.createClass({
  render: function(){
    return (
      <div className="container">
        <No />
        <div className="irc">
          <a href="http://chat.mibbit.com/?channel=%23kronos-wow&server=irc.mibbit.net" target="_new_win">Submit a "down" or "up" image via IRC »</a>
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
        <div className="result">
          <img src={"img/" + this.state.source} alt="Kronos is DOWN!"></img>
          <h1>No, Kronos is <i>still</i> down. </h1>
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
