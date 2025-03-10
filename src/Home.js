import React from "react";
import { Container, Navbar, Nav, Row, Col, Carousel } from "react-bootstrap";

const Home = () => {
  return (
    <div>
      {/* Navbar */}
      <Navbar bg="dark" variant="dark" expand="lg">
        <Navbar.Brand href="#home">My Website</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
            <Nav.Link href="#contact">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>

      {/* Slideshow (Carousel) */}
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://placehold.co/800x300?text=Slide+1"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>First Slide</h3>
            <p>Description of the first slide</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://placehold.co/800x300?text=Slide+2"
            alt="Second slide"
          />
          <Carousel.Caption>
            <h3>Second Slide</h3>
            <p>Description of the second slide</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://placehold.co/800x300?text=Slide+3"
            alt="Third slide"
          />
          <Carousel.Caption>
            <h3>Third Slide</h3>
            <p>Description of the third slide</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>

      <Container>
        {/* Services Carousel */}
        <Row>
          <Col>
            <Carousel>
              {/* First Slide - Three Columns */}
              <Carousel.Item>
                <Row>
                  <Col md={4}>
                    <div className="box">
                      <figure>
                        <img
                          src="https://www.global-remote.net/wp-content/uploads/2022/03/Flare-Tip-Replacement.webp"
                          alt="Oil and Gas"
                          className=""
                        />
                      </figure>
                      <div className="">
                        <h2>Oil and Gas</h2>
                        <div className="description">
                          Global Remote services a growing global client base in
                          the oil and gas upstream and downstream sectors. We
                          offer industrial rope access services tailored to meet
                          ongoing demands.
                        </div>
                      </div>
                    </div>
                  </Col>

                  <Col md={4}>
                    <div className="box">
                      <figure>
                        <img
                          src="https://www.global-remote.net/wp-content/uploads/2022/03/IRATA-Global-remote-Training.webp"
                          alt="Training"
                          className=""
                        />
                      </figure>
                      <div className="">
                        <h2>Training</h2>
                        <div className="description">
                          Global Remote offers specialized height safety
                          training and consultancy across various sectors. As
                          accredited trainers, we offer IRATA courses to meet
                          industry standards.
                        </div>
                      </div>
                    </div>
                  </Col>

                  <Col md={4}>
                    <div className="box">
                      <figure>
                        <img
                          src="https://www.global-remote.net/wp-content/uploads/2023/12/Rope-Access-Building-Maintenance.webp"
                          alt="Civil"
                          className=""
                        />
                      </figure>
                      <div className="">
                        <h2>Civil</h2>
                        <div className="description">
                          Global Remote's experience spans a wide range of civil
                          infrastructure projects, from multi-story buildings to
                          bridges and power stations.
                        </div>
                      </div>
                    </div>
                  </Col>
                </Row>
              </Carousel.Item>

              {/* Second Slide - Three Columns */}
              <Carousel.Item>
                <Row>
                  <Col md={4}>
                    <div className="box">
                      <figure>
                        <img
                          src="https://www.global-remote.net/wp-content/uploads/2023/12/wind-turbine-rope-access-services.webp"
                          alt="Wind"
                          className=""
                        />
                      </figure>
                      <div className="">
                        <h2>Wind</h2>
                        <div className="description">
                          We provide a variety of wind turbine services,
                          utilizing our expertise in industrial rope access
                          systems to maintain and service wind industry
                          infrastructure.
                        </div>
                      </div>
                    </div>
                  </Col>

                  <Col md={4}>
                    <div className="box">
                      <figure>
                        <img
                          src="https://www.global-remote.net/wp-content/uploads/2023/12/marine.webp"
                          alt="Marine"
                          className=""
                        />
                      </figure>
                      <div className="">
                        <h2>Marine</h2>
                        <div className="description">
                          We offer industrial rope access services to the marine
                          sector, tailoring our solutions to meet the ongoing
                          demands of our global client base.
                        </div>
                      </div>
                    </div>
                  </Col>

                  <Col md={4}>
                    <div className="box">
                      <figure>
                        <img
                          src="https://www.global-remote.net/wp-content/uploads/2023/12/Advanced-NDT.webp"
                          alt="NDT Inspection"
                          className=""
                        />
                      </figure>
                      <div className="">
                        <h2>NDT Inspection</h2>
                        <div className="description">
                          Global Remote provides expert Non-Destructive Testing
                          (NDT) of tanks of varying shape and size, used in a
                          range of different industries.
                        </div>
                      </div>
                    </div>
                  </Col>
                </Row>
              </Carousel.Item>

              {/* Add more slides if needed */}
            </Carousel>
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

export default Home;
