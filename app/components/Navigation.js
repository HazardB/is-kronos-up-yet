var React = require('react');
var ReactBootstrap = require('react-bootstrap');

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
      <NavItem eventKey={1} href="https://github.com/HazardB/is-kronos-up-yet/wiki/FAQ" target="_blank">FAQ</NavItem>
      <NavItem eventKey={2} href="https://github.com/HazardB/is-kronos-up-yet/wiki/API" target="_blank">API</NavItem>
      <NavDropdown eventKey={3} title="Contact" id="basic-nav-dropdown">
        <MenuItem eventKey={3.1} href="http://chat.mibbit.com/?channel=%23kronos-wow&server=irc.mibbit.net" target="_blank">Kronos IRC</MenuItem>
        <MenuItem eventKey={3.2} href="https://github.com/HazardB/is-kronos-up-yet/issues/new" target="_blank">Report a bug</MenuItem>
        <MenuItem divider />
        <MenuItem eventKey={3.3} href="mailto:hazard@iskronosupyet.com">Send an email</MenuItem>
      </NavDropdown>
    </Nav>
  </Navbar>
    )
  }
});

module.exports = Navigation;
