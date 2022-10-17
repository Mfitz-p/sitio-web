import React from 'react';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Nav from 'react-bootstrap/Nav';
import NavbarRB from 'react-bootstrap/Navbar';
import logo from '../images/logo-navbar.png';
import { NavLink } from  'react-router-dom'
import "../App.css";
// Componente Navbar contiene la barra de navegacion de la pagina y el logotipo de Kaminoittech

const Navbar = () => {
  return (
    <>
        <NavbarRB bg="dark" variant="dark">
        <Container>
            <Image fluid src={logo} alt='logo' style={{ width: "100px", position: "relative" }} />
            <Nav >
            <Nav.Link> <NavLink  className='Navtexto' to="/Inicio">Inicio</NavLink> </Nav.Link>
            <Nav.Link> <NavLink className='Navtexto' to="/Nosotros">Nosotros</NavLink> </Nav.Link>
            <Nav.Link> <NavLink className='Navtexto' to="/Productos">Productos</NavLink></Nav.Link>
            <Nav.Link> <NavLink className='Navtexto' to="/Contacto">Contacto</NavLink></Nav.Link>
            </Nav>
        </Container>
      </NavbarRB> 
    </>
  );
}
export default Navbar;
