var React = require('react');
var ReactBootstrap = require('react-bootstrap')

var Navbar = ReactBootstrap.Navbar,
    NavDropdown  = ReactBootstrap.NavDropdown,
    Nav  = ReactBootstrap.Nav,
    NavItem  = ReactBootstrap.NavItem,
    MenuItem  = ReactBootstrap.MenuItem;

var Navigation = React.createClass({
  render: function(){
    return (
      <Navbar>
        <Navbar.Header>
          <Navbar.Brand>
            <a href="#">Is Kronos Up Yet?</a>
          </Navbar.Brand>
        </Navbar.Header>
    <Nav pullRight>
      <NavItem eventKey={1} href="#">FAQ</NavItem>
      <NavItem eventKey={2} href="#">API</NavItem>
      <NavDropdown eventKey={3} title="Contact" id="basic-nav-dropdown">
        <MenuItem eventKey={3.1}>Kronos IRC</MenuItem>
        <MenuItem eventKey={3.2}>Report a bug</MenuItem>
        <MenuItem divider />
        <MenuItem eventKey={3.3}>Send an email</MenuItem>
      </NavDropdown>
    </Nav>
  </Navbar>
    )
  }
});

module.exports = Navigation;
