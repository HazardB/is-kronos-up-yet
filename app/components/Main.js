var React = require('react');
var ReactDOM = require('react-dom');

var Main = React.createClass({
  render: function(){
    return (
      <div>
        <h1>Hello World</h1>
      </div>
    )
  }
});

ReactDOM.render(<Main />, document.getElementById('app'))
