import React, { Component } from "react";
import { Container, Navbar, Nav, NavDropdown } from "react-bootstrap";

export default class Navb extends Component {
  render() {
    return (
      <Navbar bg="dark" n expand="lg" style={{ color: "white" }}>
        <Container>
          <Navbar.Brand href="#home" style={{ color: "white" }}>
            DailyNews
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home" style={{ color: "white" }}>
                Home
              </Nav.Link>
              <Nav.Link href="#about" style={{ color: "white" }}>
                about
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
  }
}
