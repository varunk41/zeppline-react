import React, { Component } from 'react';
import {Navbar,Nav,NavDropdown,NavItem,MenuItem, Image} from 'react-bootstrap';
import kylo from './kylo.jpg';
import zeppel from './zeppel.jpg';

export default class NavigationBar extends Component {
  render() {
    return (
        <Navbar inverse collapseOnSelect>
        <Navbar.Header>
          <Navbar.Brand >
            <a href="/">Zepplin-poc</a>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav pullRight>
            <NavItem eventKey={1} href="/home">
            <Image src = {kylo} style ={{width:"45px" ,height:"28pxpx", paddingTop:"0px"}}/>
            </NavItem>
            <NavItem eventKey={2} href="/about">
            <Image src = {zeppel} style ={{width:"45px" ,height:"28pxpx", paddingTop:"0px"}}/>
            </NavItem>
            {/* <NavDropdown eventKey={3} title="Dropdown" id="basic-nav-dropdown">
              <MenuItem eventKey={3.1}>Action</MenuItem>
              <MenuItem eventKey={3.2}>Another action</MenuItem>
              <MenuItem eventKey={3.3}>Something else here</MenuItem>
              <MenuItem divider />
              <MenuItem eventKey={3.3}>Separated link</MenuItem>
            </NavDropdown> */}
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    )
  }
}
