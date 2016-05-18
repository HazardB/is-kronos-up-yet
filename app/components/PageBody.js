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
  getInitialState: function() {
    return { gif: 'down.gif'};
  },

  changeGif: function(){
    var newGif = this.randomiseGif();
    while(newGif == this.state.gif){
      newGif = this.randomiseGif();
    }

    this.setState({ gif: newGif});
  },
  randomiseGif: function(){
    var availableImages = [ 'down.gif', 'fuck.gif', 'sad.gif', 'sp-down.gif', 'drink-swirl.gif', 'dumb-and-dumber.gif', 'homer-monkey.gif', 'the-doctor.gif', 'rare-pepe.jpg'];
    var rand = Math.floor(Math.random() * availableImages.length);
    return availableImages[rand];
  },
  render: function(){
    var gif = this.state.gif;

    return (
      <div>
      <Alert bsStyle="warning">
        <img src={"img/" + gif} alt="Kronos is experiencing problems!" className="main-image center-block img-responsive" onClick={this.changeGif}></img>

          <h2 className="text-center">Kronos is still experiencing issues!</h2>
          <p className="text-center">Kronos is having network issues after the server move. Keep your eyes peeled here for live updates to the server status. </p>
      </Alert>
  </div>
    )
  }
});

module.exports = PageBody;
