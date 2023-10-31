import React, { useEffect } from 'react';
import lottie from 'lottie-web';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import lottieJson from './1.json'; // Import your Lottie JSON file

function LogoFunction() { // Change the function name to LogoFunction
  useEffect(() => {
    const container = document.getElementById('lottie-container');
    const animation = lottie.loadAnimation({
      container: container,
      renderer: 'svg',
      loop: true,
      autoplay: true,
      animationData: lottieJson,
    });

    return () => {
      animation.destroy();
    };
  }, []);

  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container fluid>
        <Navbar.Brand href="#">
          <div id="lottie-container"></div>
          Navbar scroll
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            {/* Your navigation links here */}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default LogoFunction; // Update the export name to LogoFunction
