import React from 'react';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Nav from 'react-bootstrap/Nav';
import NavbarRB from 'react-bootstrap/Navbar';
import logo from '../images/logo-navbar.png';

// Componente Navbar contiene la barra de navegacion de la pagina y el logotipo de Kaminoittech

const Navbar = () => {
  return (
    <>
        <NavbarRB bg="dark" variant="dark">
        <Container>
          <NavbarRB.Brand href="#inicio">
            <Image fluid src={logo} alt='logo' style={{ width: "100px", position: "relative" }} />
          </NavbarRB.Brand>
          <Nav className="ml-auto">
            <Nav.Link href="#inicio">Inicio</Nav.Link>
            <Nav.Link href="#nosotros">Nosotros</Nav.Link>
            <Nav.Link href="#productos">Productos</Nav.Link>
            <Nav.Link href="#contacto">Contacto</Nav.Link>
          </Nav>
        </Container>
      </NavbarRB> 
    </>
  );
}
export default Navbar;
