import logo from './logo_exod.png';
import './App.css';

//react-bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
import React from "react";
import { Nav, Navbar, Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Carousel from 'react-bootstrap/Carousel'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

//import MediaQuery from 'react-responsive'

function App() {
  return (
    <div className="App">
      <Navbar className="Navbar" collapseOnSelect variant="light" bg="light" expand="lg" >
        <Container>
          <Navbar.Brand href="#">
         
          <img src={logo} alt="Logo" id="logo_img" />

          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
          <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-end">
            <Nav style={{color:'black'}}>
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
              <Button id="btnPartners" variant="outline-primary">Partners</Button>
            </Nav>
          </Navbar.Collapse>
          </Container>
          </Navbar>

      <header className="App-header">
      <Carousel fade>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="holder.js/800x400?text=First slide&bg=373940"
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>First slide label</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="holder.js/800x400?text=Second slide&bg=282c34"
      alt="Second slide"
    />

    <Carousel.Caption>
      <h3>Second slide label</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="holder.js/800x400?text=Third slide&bg=20232a"
      alt="Third slide"
    />

        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
      </header>
      
      <div id="contents">
      <Container>
      <Row>
          <Col  class="border border-secondary"><h2>Our Story</h2></Col>
          <Col><h2>Our Story Img</h2></Col>
      </Row>

      <Row>
        <Col>Our services</Col>
      </Row>
      </Container>

      </div>
    </div>
  );
}

export default App;
