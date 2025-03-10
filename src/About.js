import React from 'react';
import { Container, Navbar, Nav, Row, Col } from 'react-bootstrap';

const About = () => {
  return (
    <div>
      

      {/* Features Section */}
      <Container>
        <Row className="mb-4">
          <Col md={4}>
            <h3>About</h3>
            <p>Details about Feature 1...</p>
          </Col>
          <Col md={4}>
            <h3>Feature 2</h3>
            <p>Details about Feature 2...</p>
          </Col>
          <Col md={4}>
            <h3>Feature 3</h3>
            <p>Details about Feature 3...</p>
          </Col>
        </Row>
      </Container>

      {/* Footer */}
      <footer className="bg-dark text-white text-center py-3">
        <p>&copy; 2025 My Website. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default About;
