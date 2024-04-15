import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';


export default function NavBar(){

    return(
      <Navbar expand="lg" className="navbar-background">
        <Container>
        <Navbar.Brand href="#home"><strong className='navbar-logo-color'>Franky Nava</strong></Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="../../public/Nava_Francisco_Resume.pdf" target="_blank">Resume</Nav.Link>
              <NavDropdown title="Contact Me" id="basic-nav-dropdown">
                <NavDropdown.Item href="https://github.com/frankynava22" target='_blank'>GitHub</NavDropdown.Item>
                <NavDropdown.Item href="https://www.linkedin.com/in/frankynava/" target='_blank'>LinkedIn</NavDropdown.Item>
                <NavDropdown.Item href="mailto:frankynava2201.com" target='_blank'>Gmail</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    )
  }