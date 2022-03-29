import './NavBar.css';
import {Nav, Navbar, Container, NavDropdown} from 'react-bootstrap'



const NavBar = () => { 
    return(
        <Navbar bg="dark" expand="lg">
  <Container>
  <Navbar.Brand>
      <img
        src="https://w7.pngwing.com/pngs/622/171/png-transparent-goalkeeper-football-player-poster-football-player-silhouette-sport-photography-vertebrate-thumbnail.png"
        width="60"
        height="60"
        className="d-inline-block align-top"
       
      />
    </Navbar.Brand>
    <Navbar.Brand>The GoalKepper Store</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">
        <Nav.Link href="#home">Guantes</Nav.Link>
        <Nav.Link href="#link">Indumentaria</Nav.Link>
        <Nav.Link href="#link">Accesorios</Nav.Link> 
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
    )
}

export default NavBar 