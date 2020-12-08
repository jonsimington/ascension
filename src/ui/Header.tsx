import React, { Component } from "react";
import { Button, Nav } from "react-bootstrap";
import Navbar from "react-bootstrap/Navbar";

class Header extends Component {
  render() {
    return (
      <Navbar className="navbar" bg="dark" variant="dark">
        <Navbar.Brand href="#home">ASCENSION</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#resources">Resources</Nav.Link>
          <Nav.Link href="#support">Support</Nav.Link>
          <Button variant="outline-primary">Dashboard</Button>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default Header;