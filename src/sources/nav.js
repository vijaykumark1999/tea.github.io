import React, { useEffect } from 'react';
import lottie from 'lottie-web';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import lottieJson from './1.json'; // Import your Lottie JSON file



function NavScrollExample() {
  useEffect(() => {
    const container = document.getElementById('lottie-container'); // An HTML element to render the animation
    const animation = lottie.loadAnimation({
      container: container,
      renderer: 'svg', // Use 'svg' or 'canvas' depending on your preference
      loop: false, // Set to true if you want the animation to loop
      autoplay: true, // Set to true to start the animation automatically
      animationData: lottieJson, // Your imported Lottie JSON data
    });
    // Customize animation settings here (e.g., animation.setSpeed(2.0);)

    // Cleanup the animation when the component unmounts
    return () => {
      animation.destroy();
    };
  }, []);
  return (
    <>
     
    <Navbar expand="lg" className="bgc">
        <Container fluid>
          <Navbar.Brand href="#">
            <div id="lottie-container" style={{ width: '50px', height: '50px' }}></div>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: '100px' }}
              navbarScroll
            >
              <Nav.Link to={'/'} href="/">Home</Nav.Link>
              <Nav.Link to={'/about'} href="/about">About Us</Nav.Link>
              <NavDropdown title="Link" id="navbarScrollingDropdown">
                <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action4">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action5">
                  Something else here
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>

          </Navbar.Collapse>
        </Container>
  </Navbar>
    </>
  );
}

export default NavScrollExample;