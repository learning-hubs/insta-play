import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './navigation.styles.css';

function Navigation() {
  return (
<Navbar bg="dark" variant="dark" expand="xxl">
<Container>
  <Navbar.Brand href="#home">Streaming platform-S</Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
  <Nav className="me-auto">
    <Nav.Link href="#home">Home</Nav.Link>
    <Nav.Link href="#features">Features</Nav.Link>
    <Nav.Link href="#pricing">Pricing</Nav.Link>
  </Nav>
  </Navbar.Collapse>
</Container>
</Navbar>
  );
}

export default Navigation;