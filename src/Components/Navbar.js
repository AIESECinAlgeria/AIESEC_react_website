

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import aieseclogo from '../img/aieseclogo.png'
import "../Components/Navbar.css" 

function BasicExample() {
  return (
    <div className='box-shadow'>
      <Navbar bg="" expand="lg">
      <Container>
        <Navbar.Brand href="#home">
          <img src={aieseclogo} alt="" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto navelements">
          <div className='navelements'>
            <Nav.Link  href="index"><span className='links'>For Youth</span></Nav.Link>
            <Nav.Link  href="index"><span className='links'>Offices</span></Nav.Link>
            <Nav.Link  href="index"><span className='links'>Our Product</span></Nav.Link>
            <Nav.Link  href="index"><span className='links'>About US</span></Nav.Link>
          </div>
          </Nav>
          <button type="button" class="btn btn-primary w-15">Apply Now</button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  );
}

export default BasicExample;










