import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function NavbarSetupApp() {
  return (
    <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">Shreya Securitech</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#features">Home</Nav.Link>
            {/* dropdown PRODUCTS */}
            <NavDropdown title="Products" id="collapsible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Network Products</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">ADH Products</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">I Home Series</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4">4G/5G Series</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.5">Smart SSD Series</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.6">Explosion Proof & Anti Corrosion Series</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.7">Mobile & Traffic Series</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.8">ANPR Series</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.9">VMS</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.10">Accessories</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.11">CMS</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.12">Software</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.13">Networking Devices</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.14">Storage</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.15">Power Supply</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.16">Wearable Products</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.11">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
            {/* DROPDOWN SOLUTIONS */}
            <NavDropdown title="Solutions" id="collapsible-nav-dropdown">
              <NavDropdown.Item href="#action/4.1">Defence</NavDropdown.Item>
              <NavDropdown.Item href="#action/4.2">Banking</NavDropdown.Item>
              <NavDropdown.Item href="#action/4.3">Education</NavDropdown.Item>
              <NavDropdown.Item href="#action/4.4">Health Care</NavDropdown.Item>
              <NavDropdown.Item href="#action/4.5">Law enforcement</NavDropdown.Item>
              <NavDropdown.Item href="#action/4.6">Oil and Gases</NavDropdown.Item>
              <NavDropdown.Item href="#action/4.7">Railways</NavDropdown.Item>
              <NavDropdown.Item href="#action/4.8">Real Estate</NavDropdown.Item>
              <NavDropdown.Item href="#action/4.9">Retail Sector</NavDropdown.Item>
              <NavDropdown.Item href="#action/4.10">Smart City</NavDropdown.Item>
              <NavDropdown.Item href="#action/4.11">Tower Solution</NavDropdown.Item>
              <NavDropdown.Item href="#action/4.12">Traffic Solution</NavDropdown.Item>
              <NavDropdown.Item href="#action/4.13">Transport Solution</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#pricing">About Us</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link href="#deets">Contact Us</Nav.Link>
            <Nav.Link eventKey={2} href="#memes">
              Sign In
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarSetupApp;