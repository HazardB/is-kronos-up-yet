var React = require('react');
var ReactDOM = require('react-dom');

var Navigation = require('./Navigation');
var ServerStatus = require('./ServerStatus');
var PageBody = require('./PageBody');
var Social = require('./Social');
var Footer = require('./Footer');

var Main = React.createClass({
  render: function(){
    return (
      <div className="container">
        <Navigation />
        <PageBody />
        <ServerStatus />
        <Social />
        <Footer />
      </div>
    )
  }
});

ReactDOM.render(<Main />, document.getElementById('app'))
