import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";

function Header() {
  return (
    <Navbar bg="light" variant="light">
      <Container>
      <Navbar.Brand href="/">National Parks</Navbar.Brand>
      <Nav className="me-auto">
        <Nav.Link href="/">Home</Nav.Link>
        <Nav.Link href="/activities">Activities</Nav.Link>
        <Nav.Link href="/search">Search</Nav.Link>
      </Nav>
      </Container>
    </Navbar>
  );
}

export default Header;