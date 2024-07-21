import React from 'react';
import './EcoScrapHub.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Navbar, Nav, Container, Form, FormControl, Button, Card } from 'react-bootstrap';
import { motion } from 'framer-motion';
import 'bootstrap/dist/css/bootstrap.min.css';

const cards = [
  {
    id: 1,
    title: "Recycling Tips",
    text: "Learn how to sort and recycle your waste effectively.",
    imageUrl: "https://www.freepik.com/free-vector/people-sorting-garbage-recycling_3226179.htm#query=waste%20sorting&position=0&from_view=keyword&track=ais_user&uuid=4221babb-2c6f-4312-a9fe-87516e1cc9f3",
  },
  {
    id: 2,
    title: "Eco-Friendly Products",
    text: "Discover products that help reduce your environmental footprint.",
    imageUrl: "https://img.freepik.com/free-vector/people-recycling-concept_23-2148522561.jpg?w=996&t=st=1721586192~exp=1721586792~hmac=8d18bc0cfe87252dc35ea58f32d80b535c986a6cbca769995dac525550e0c35e",
  },
  {
    id: 3,
    title: "Sustainable Living",
    text: "Adopt sustainable living practices to protect our planet.",
    imageUrl: "https://img.freepik.com/premium-vector/earth-day-people-care-about-ecology-planet-plant-trees-water-flowers-women-man-with-globe-protect-save-world-modern-concept-flat-vector-cartoon-isolated-illustration_176411-2018.jpg?w=740",
  },
];

function EcoScrapHub() {
  return (
    <Router>
      <Navbar bg="dark" variant="dark" expand="lg">
        <Container>
          <Navbar.Brand href="#home">EcoScrapHub</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#about">About</Nav.Link>
              <Nav.Link href="#contact">Contact</Nav.Link>
            </Nav>
            <Form className="d-flex">
              <FormControl
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
              <Button variant="outline-success">Search</Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <Container className="mt-5 text-center">
          <motion.div
            initial={{ y: -50 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="welcome-title">Welcome to EcoScrapHub</h1>
            <p className="welcome-text">
              Connect with local scrap dealers for eco-friendly scrap pickups. 
              Promote recycling and reduce waste. 🌍
            </p>
          </motion.div>
        </Container>
      </motion.div>
      
      <Container className="card-container mt-5">
        {cards.map(card => (
          <motion.div
            className="card"
            key={card.id}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Card>
              <Card.Img variant="top" src={card.imageUrl} />
              <Card.Body>
                <Card.Title>{card.title}</Card.Title>
                <Card.Text>{card.text}</Card.Text>
                <Button variant="primary">Learn More</Button>
              </Card.Body>
            </Card>
          </motion.div>
        ))}
      </Container>
    </Router>
  );
}

export default EcoScrapHub;
