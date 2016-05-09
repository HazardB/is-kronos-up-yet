var React = require('react');
var ReactDOM = require('react-dom');

var Main = React.createClass({
  render: function(){
    return (
      <div className="container">
        Is Kronos up yet?

        <No />

        <a href="http://chat.mibbit.com/?channel=%23kronos-wow&server=irc.mibbit.net" target="_new_win">Join IRC for the quickest updates.</a>
      </div>
    )
  }
});

var No = React.createClass({
  render: function(){
    return (
      <div className="result">
        <img src="img/down.gif" alt="FIRE!!!!!"></img>
        <h1>No, Kronos is still down. </h1>
      </div>
    )
  }
});

ReactDOM.render(<Main />, document.getElementById('app'))
