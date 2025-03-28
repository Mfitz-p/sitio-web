import React from "react";
import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";
import Nav from "react-bootstrap/Nav";
import NavbarRB from "react-bootstrap/Navbar";
import logo from "../images/logoMF.png";
import { NavLink } from "react-router-dom";
import "../App.css";
import { useTranslation } from "react-i18next";
import { useState } from "react";
// Componente Navbar contiene la barra de navegacion de la pagina y el logotipo.

const Navbar = () => {
  const [t] = useTranslation("global");

  // Estado expanded se inicializa en false para que mantenga el navbar cerrado al recargar por primera vez
  const [expanded, setExpanded] = useState(false);

  // Esta es una función que alterna el valor de la variable "expanded".
  const toggle = () => {
    setExpanded(!expanded);
  };

  /**
   La función `onSelect` cambia cuando `eventKey` es mayor o igual a 1.
    * El parámetro eventKey es un valor que se pasa a la función onSelect cuando se desencadena un evento específico, como un clic o una pulsación de tecla. En el fragmento de código dado, la función onSelect comprueba si eventKey es mayor o igual a 1.
   */
  const onSelect = (eventKey) => {
    if (eventKey >= 1) {
      toggle();
    }
  };

  return (
    <>
      {/* NavbarRB tiene todo el contenido  de la barra de navegación este fue obtenido de react-bootstrap con un fondo de color negro y funcional responsive para version moviles */}
      <NavbarRB
        id="navbarStyle"
        collapseOnSelect
        expand="md"
        onToggle={toggle}
        expanded={expanded}
        onSelect={onSelect}
      >
        <Container className="p-0 py-2">
          <NavbarRB.Brand className="mr-auto" to="/Inicio">
            {/* Se le coloco un Nav.Link junto con una etiqueta image para colocar el logotipo y es redirijido a la pagina de Inicio  */}
            <Nav.Link className="px-3" as={NavLink} to="/Inicio">
              <Image fluid src={logo} alt="logo" style={{ maxWidth: "10vw" }} />
            </Nav.Link>
          </NavbarRB.Brand>
          {/* Esta parte del código del navbar es cuando se usa en version movil, se colapsa el menu y se convierte en el menú de burger famoso para moviles */}
          <NavbarRB.Toggle
            aria-controls="responsive-navbar-nav"
            className="m-3"
          />
          <NavbarRB.Collapse
            className="flex-grow-0 "
            id="responsive-navbar-nav"
          >
            {/*  */}
            {/* <Offcanvas.Body></Offcanvas.Body> */}
            <Nav className="p-3">
              <Nav.Link
                eventKey={1} 
                as={NavLink}
                to="/Inicio"
                className="text-dark hvr-underline-from-left-modificado"
              >
                {t("Navbar.Home")}
              </Nav.Link>
              <Nav.Link
                eventKey={2} 
                as={NavLink}
                to="/Habilidades"
                className="text-dark hvr-underline-from-left-modificado"
              >
                {t("Navbar.Us")}
              </Nav.Link>
            </Nav>
          </NavbarRB.Collapse>
        </Container>
      </NavbarRB>
    </>
  );
};
export default Navbar;
