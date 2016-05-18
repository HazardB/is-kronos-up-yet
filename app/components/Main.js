var React = require('react');
var ReactDOM = require('react-dom');

var reactNotifications = require('react-notifications');
var NotificationContainer = reactNotifications.NotificationContainer;

var Navigation = require('./Navigation');
var ServerStatus = require('./ServerStatus');
var PageBody = require('./PageBody');
var Social = require('./Social');
var Footer = require('./Footer');

var Main = React.createClass({
  render: function(){
    return (
      <div>
      <div className="container">
        <Navigation />
        <PageBody />
        <ServerStatus />
        <Social />
        <Footer />
      </div>
      <NotificationContainer/>
      </div>
    )
  }
});

ReactDOM.render(<Main />, document.getElementById('app'))
