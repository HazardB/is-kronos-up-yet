var React = require('react');
var ReactDOM = require('react-dom');

var Main = React.createClass({
  render: function(){
    return (
      <div className="container">
        <No />
        <div className="irc">
          <a href="http://chat.mibbit.com/?channel=%23kronos-wow&server=irc.mibbit.net" target="_new_win">Join IRC for the quickest updates.</a>
        </div>
      </div>
    )
  }
});

var No = React.createClass({
  getInitialState: function(){
    var availableImages = [ 'down.gif', 'fuck.gif', 'sad.gif', 'sp-down.gif', 'drink-swirl.gif', 'dumb-and-dumber.gif', 'homer-monkey.gif', 'the-doctor.gif'];
    var rand = Math.floor(Math.random() * availableImages.length);

    var srcImage = availableImages[rand];
    return { source: srcImage };
  },
  render: function(){
    return (
      <div>
        <div className="result">
          <img src={"img/" + this.state.source} alt="FIRE!!!!!"></img>
          <h1>No, Kronos is still down. </h1>
        </div>
      </div>
    )
  }
});

var Yes = React.createClass({
  render: function(){
    return (
      <div>
        <div className="result">
          <img src="img/thumbs-up.gif" alt="We're ALIVE!"></img>
          <h1>Kronos is up!! </h1>
        </div>
      </div>
    )
  }
});

ReactDOM.render(<Main />, document.getElementById('app'))
