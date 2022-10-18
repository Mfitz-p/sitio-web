import React from 'react';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Nav from 'react-bootstrap/Nav';
import NavbarRB from 'react-bootstrap/Navbar';
import logo from '../images/logo-navbar.png';
import { NavLink } from  'react-router-dom';
import "../App.css";
// Componente Navbar contiene la barra de navegacion de la pagina y el logotipo de Kaminoittech

const Navbar = () => {
  return (
    <>
    <NavbarRB collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <NavbarRB.Brand className='mr-auto' to="/Inicio">
          <Image fluid src={logo} alt='logo' style={{ width: "100px" }} />
        </NavbarRB.Brand>
        <NavbarRB.Toggle aria-controls="responsive-navbar-nav" />
        <NavbarRB.Collapse className='flex-grow-0' id="responsive-navbar-nav">
          <Nav >
            <NavLink> <Nav.Link to="/Inicio">Inicio</Nav.Link> </NavLink>
            <NavLink> <Nav.Link to="/Nosotros">Nosotros</Nav.Link> </NavLink>
            <NavLink> <Nav.Link to="/Productos">Productos</Nav.Link> </NavLink>
            <NavLink> <Nav.Link to="/Contacto">Contacto</Nav.Link> </NavLink>
          </Nav>
        </NavbarRB.Collapse>
      </Container>
    </NavbarRB>
    </>
  );
}
export default Navbar;
