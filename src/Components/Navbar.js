import React from 'react';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Nav from 'react-bootstrap/Nav';
import NavbarRB from 'react-bootstrap/Navbar';
import logo from '../images/logoVertical3.png';
import { NavLink } from 'react-router-dom';
import "../App.css";
// Componente Navbar contiene la barra de navegacion de la pagina y el logotipo de Kaminoittech

const Navbar = () => {
  return (
    <>
    {/* NavbarRB tiene todo el contenido  de la barra de navegación este fue obtenido de react-bootstrap con un fondo de color negro y funcional responsive para version moviles */}
      <NavbarRB collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container className='p-0'> 
          <NavbarRB.Brand className='mr-auto' to="/Inicio">
            {/* Se le coloco un Nav.Link junto con una etiqueta image para colocar el logotipo y es redirijido a la pagina de Inicio  */}
            <Nav.Link className='p-3' as={NavLink} to="/Inicio">
              <Image fluid src={logo} alt='logo' style={{ width: "250px" }} />
            </Nav.Link>
          </NavbarRB.Brand>
          {/* Esta parte del código del navbar es cuando se usa en version movil, se colapsa el menu y se convierte en el menú de burger famoso para moviles */}
          <NavbarRB.Toggle aria-controls="responsive-navbar-nav" className='m-3' />
          <NavbarRB.Collapse className='flex-grow-0 ' id="responsive-navbar-nav">
            {/*  */}
            <Nav className='p-3'>
              <Nav.Link as={NavLink} to="/Inicio" className='text-white hvr-underline-from-left-modificado'>Inicio </Nav.Link>
              <Nav.Link as={NavLink} to="/Nosotros" className='text-white hvr-underline-from-left-modificado'>Nosotros</Nav.Link>
              <Nav.Link as={NavLink} to="/Productos" className='text-white hvr-underline-from-left-modificado'> Productos </Nav.Link>
              <Nav.Link as={NavLink} to="/Contacto" className='text-white hvr-underline-from-left-modificado'>Contacto</Nav.Link>
            </Nav>
          </NavbarRB.Collapse>
        </Container>
      </NavbarRB>
    </>
  );
}
export default Navbar;
