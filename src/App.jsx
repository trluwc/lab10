import React from 'react';
import {
  Navbar,
  Nav,
  Container,
  Form,
  FormControl,
  Button,
  Carousel,
  Row,
  Col,
  Card,
  Badge
} from 'react-bootstrap';
import './App.css';
import Lab9 from './Lab9.jsx';

// Import images from imagesss folder outside src directory
import img1 from '../imagesss/anhpizza1.png';
import img2 from '../imagesss/anhpizza2.jpg';
import img3 from '../imagesss/anhpizza3.jpg';
import img4 from '../imagesss/anhpizza4.jpg';
import img5 from '../imagesss/anhpizza5.jpg';
import img6 from '../imagesss/anhpizza6.jpg';
import img7 from '../imagesss/anhpizza7.jpg';

function App() {
  return (
    <div style={{ backgroundColor: '#2b2b2b', minHeight: '100vh' }}>
      {/* Navbar Section */}
      <Navbar expand="lg" variant="dark" className="pizza-navbar">
        <Container>
          <Navbar.Brand href="#home" className="pizza-logo font-serif">
            Pizza House
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="pizza-navbar-nav" />
          <Navbar.Collapse id="pizza-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home" className="pizza-nav-link">Home</Nav.Link>
              <Nav.Link href="#about" className="pizza-nav-link">About Us</Nav.Link>
              <Nav.Link href="#contact" className="pizza-nav-link">Contact</Nav.Link>
            </Nav>
            <Form className="d-flex">
              <FormControl
                type="search"
                placeholder="Search"
                className="pizza-search-input"
                aria-label="Search"
              />
              <Button className="pizza-search-btn d-flex align-items-center justify-content-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                  <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0"/>
                </svg>
              </Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* Hero Carousel Section */}
      <Carousel fade controls={true} indicators={false} nextLabel="" prevLabel="">
        <Carousel.Item className="pizza-carousel-item">
          <img
            className="pizza-carousel-img"
            src={img1}
            alt="Neapolitan Pizza"
          />
          <Carousel.Caption>
            <div className="pizza-caption-container">
              <h3 className="pizza-caption-title font-serif">Neapolitan Pizza</h3>
              <p className="pizza-caption-desc">If you are looking for a traditional Italian pizza, the Neapolitan is the best option!</p>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item className="pizza-carousel-item">
          <img
            className="pizza-carousel-img"
            src={img2}
            alt="Mushroom Pizza Slide"
          />
          <Carousel.Caption>
            <div className="pizza-caption-container">
              <h3 className="pizza-caption-title font-serif">Classic Mushrooms</h3>
              <p className="pizza-caption-desc">Freshly picked organic mushrooms with rich mozzarella cheese topping.</p>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item className="pizza-carousel-item">
          <img
            className="pizza-carousel-img"
            src={img3}
            alt="Delicious Pizza Varieties"
          />
          <Carousel.Caption>
            <div className="pizza-caption-container">
              <h3 className="pizza-caption-title font-serif">Fresh and Delicious</h3>
              <p className="pizza-caption-desc">Handcrafted pizza baked to perfection in traditional stone woodfired ovens.</p>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>

      {/* Our Menu Section */}
      <Container className="menu-section">
        <h2 className="menu-title text-start font-serif">Our Menu</h2>
        <Row className="g-4">
          {/* Card 1 */}
          <Col lg={3} md={6} xs={12}>
            <Card className="pizza-card">
              <Badge className="pizza-card-badge">Sale</Badge>
              <Card.Img variant="top" src={img4} className="pizza-card-img" />
              <Card.Body className="d-flex flex-column text-start">
                <Card.Title className="pizza-card-title">Margherita Pizza</Card.Title>
                <div className="pizza-card-price">
                  <span className="pizza-price-original">$40.00</span>
                  <span className="pizza-price-sale">$24.00</span>
                </div>
                <Button className="pizza-buy-btn w-100 mt-auto">Buy</Button>
              </Card.Body>
            </Card>
          </Col>

          {/* Card 2 */}
          <Col lg={3} md={6} xs={12}>
            <Card className="pizza-card">
              <Card.Img variant="top" src={img5} className="pizza-card-img" />
              <Card.Body className="d-flex flex-column text-start">
                <Card.Title className="pizza-card-title">Mushroom Pizza</Card.Title>
                <div className="pizza-card-price">
                  <span className="pizza-price-normal">$25.00</span>
                </div>
                <Button className="pizza-buy-btn w-100 mt-auto">Buy</Button>
              </Card.Body>
            </Card>
          </Col>

          {/* Card 3 */}
          <Col lg={3} md={6} xs={12}>
            <Card className="pizza-card">
              <Badge className="pizza-card-badge">New</Badge>
              <Card.Img variant="top" src={img6} className="pizza-card-img" />
              <Card.Body className="d-flex flex-column text-start">
                <Card.Title className="pizza-card-title">Hawaiian Pizza</Card.Title>
                <div className="pizza-card-price">
                  <span className="pizza-price-normal">$30.00</span>
                </div>
                <Button className="pizza-buy-btn w-100 mt-auto">Buy</Button>
              </Card.Body>
            </Card>
          </Col>

          {/* Card 4 */}
          <Col lg={3} md={6} xs={12}>
            <Card className="pizza-card">
              <Badge className="pizza-card-badge">Sale</Badge>
              <Card.Img variant="top" src={img7} className="pizza-card-img" />
              <Card.Body className="d-flex flex-column text-start">
                <Card.Title className="pizza-card-title">Pesto Pizza</Card.Title>
                <div className="pizza-card-price">
                  <span className="pizza-price-original">$50.00</span>
                  <span className="pizza-price-sale">$30.00</span>
                </div>
                <Button className="pizza-buy-btn w-100 mt-auto">Buy</Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>

      {/* Book Your Table Section */}
      <Container className="booking-section">
        <h2 className="booking-title text-center font-serif">Book Your Table</h2>
        <Form onSubmit={(e) => { e.preventDefault(); alert("Table booked successfully!"); }}>
          <Row className="g-3 mb-3">
            <Col md={4} xs={12}>
              <Form.Control
                type="text"
                placeholder="Your Name *"
                className="booking-form-control"
                required
              />
            </Col>
            <Col md={4} xs={12}>
              <Form.Control
                type="email"
                placeholder="Your Email *"
                className="booking-form-control"
                required
              />
            </Col>
            <Col md={4} xs={12}>
              <Form.Select className="booking-form-control">
                <option>Select a Service</option>
                <option value="dine-in">Dine In</option>
                <option value="take-away">Take Away</option>
                <option value="delivery">Delivery</option>
              </Form.Select>
            </Col>
          </Row>
          <Row className="mb-4">
            <Col xs={12}>
              <Form.Control
                as="textarea"
                rows={5}
                placeholder="Please write your comment"
                className="booking-form-control"
              />
            </Col>
          </Row>
          <div className="text-start">
            <Button type="submit" className="booking-submit-btn">
              Send Message
            </Button>
          </div>
        </Form>
      </Container>

      {/* Lab 9 Component Sections */}
      <Lab9 />
    </div>
  );
}

export default App;
