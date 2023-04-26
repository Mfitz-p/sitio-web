import React from 'react';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Nav from 'react-bootstrap/Nav';
import NavbarRB from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import logo from '../images/logoVertical3.webp';
import { NavLink } from 'react-router-dom';
import "../App.css";
import "../css/Salud.css"
import { useTranslation } from 'react-i18next';
// Componente Navbar contiene la barra de navegacion de la pagina y el logotipo de Kaminoittech

const Navbar = () => {
  const [t] = useTranslation("global")
  return (
    <>
    {/* NavbarRB tiene todo el contenido  de la barra de navegación este fue obtenido de react-bootstrap con un fondo de color negro y funcional responsive para version moviles */}
      <NavbarRB id="navbarStyle" collapseOnSelect expand="md" >
        <Container className='p-0'> 
          <NavbarRB.Brand className='mr-auto' to="/Inicio">
            {/* Se le coloco un Nav.Link junto con una etiqueta image para colocar el logotipo y es redirijido a la pagina de Inicio  */}
            <Nav.Link className='px-3' as={NavLink} to="/Inicio">
             <Image fluid src={logo} alt='logo' style={{ maxWidth: "50vw"}} />
            </Nav.Link>
          </NavbarRB.Brand>
          {/* Esta parte del código del navbar es cuando se usa en version movil, se colapsa el menu y se convierte en el menú de burger famoso para moviles */}
          <NavbarRB.Toggle aria-controls="responsive-navbar-nav" className='m-3 me-4' />
          <NavbarRB.Collapse className='flex-grow-0 ' id="responsive-navbar-nav">
            {/*  */}
            <Nav className='p-3'>
              <Nav.Link as={NavLink} to="/Inicio" className='text-white hvr-underline-from-left-modificado'>{t("Navbar.Home")}</Nav.Link>
              <Nav.Link as={NavLink} to="/Nosotros" className='text-white hvr-underline-from-left-modificado'>{t("Navbar.Us")}</Nav.Link>
              {/*<Nav.Link as={NavLink} to="/Productos" className='text-white hvr-underline-from-left-modificado'>{t("Navbar.Products")}</Nav.Link>*/}
              <NavDropdown title={t("Navbar.Products")} className='text-white' id='navTitle'>
                <NavDropdown.Item  as={NavLink} to="/Infraestructura" id='product'>{t("General.Title1")}</NavDropdown.Item>
                <NavDropdown.Item as={NavLink} to="/Retail" id='product'>{t("General.Title2")}</NavDropdown.Item>
                <NavDropdown.Item as={NavLink} to="/Salud" id='product'>{t("General.Title3")}</NavDropdown.Item>
                <NavDropdown.Item as={NavLink} to="/Movilidad" id='product'>{t("General.Title4")}</NavDropdown.Item>
                <NavDropdown.Item as={NavLink} to="/Banca" id='product'>{t("General.Title5")}</NavDropdown.Item>
              </NavDropdown>
              <Nav.Link as={NavLink} to="/Contacto" className='text-white hvr-underline-from-left-modificado'>{t("Navbar.Contact")}</Nav.Link>
              {/* <Nav.Link as={NavLink} to="/Carreras" className='text-white hvr-underline-from-left-modificado'>{t("Navbar.Carrers")}</Nav.Link> */}
            </Nav>
          </NavbarRB.Collapse>
        </Container>
      </NavbarRB>
    </>
  );
}
export default Navbar;
