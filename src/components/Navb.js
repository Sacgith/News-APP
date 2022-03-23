import React, { Component } from "react";
import { Container, Navbar, Nav } from "react-bootstrap";
export default class Navb extends Component {
  render() {
    return (
      <Navbar bg="dark" n expand="lg" style={{ color: "white" }}>
        <Container>
          <Navbar.Brand to="#home" style={{ color: "white" }}>
            DailyNews
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/general" style={{ color: "white" }}>
                General
              </Nav.Link>
              <Nav.Link href="/business" style={{ color: "white" }}>
                Business{" "}
              </Nav.Link>
              <Nav.Link href="/science" style={{ color: "white" }}>
                Science{" "}
              </Nav.Link>
              <Nav.Link href="/technology" style={{ color: "white" }}>
                Technology
              </Nav.Link>
              <Nav.Link href="/health" style={{ color: "white" }}>
                Health{" "}
              </Nav.Link>
              <Nav.Link href="/sports" style={{ color: "white" }}>
                Sports{" "}
              </Nav.Link>
              <Nav.Link href="/entertainment" style={{ color: "white" }}>
                Entertainment{" "}
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
  }
}
