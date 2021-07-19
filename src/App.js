import logo from './logo_exod.png';
import './App.css';


//react-bootstrap

import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from "react";
import { Nav, Navbar, Container } from 'react-bootstrap';
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";


function App() {
  return (
    <div className="App">
      <Navbar className="Navbar" collapseOnSelect variant="light" bg="light" expand="lg" >
        <Container>
          <Navbar.Brand href="#">
         
          <img src={logo} alt="Logo" id="logo_img" />

          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="justify-content-end">
              <Nav.Item>
              <Nav.Link href="#">About</Nav.Link>
              </Nav.Item>
              <Nav.Item>
              <Nav.Link href="#">Partners</Nav.Link>
              </Nav.Item>
              <Nav.Item>
              <Nav.Link href="#">Product Lines</Nav.Link>
              </Nav.Item>

              <Nav.Item>
                <Nav.Link href="#">Contact Us</Nav.Link>
              </Nav.Item>
              <Nav.Item>
              <Nav.Link href="https://b2b.exodint.com/users/login">
                Partners
              </Nav.Link>
              </Nav.Item>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <header className="App-header">
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
