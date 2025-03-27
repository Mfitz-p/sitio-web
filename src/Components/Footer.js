/*
  Footer de todas las vistas de la página con un botón de contacto que dirige a la vista de Contacto.js.
  El logo de la página no reacciona adecuadamente al breakpoint de los componentes en el diseño responsivo.
 */
import { Col, Container, Row, Image, Nav } from "react-bootstrap/";
import { NavLink } from "react-router-dom";
import logo from "../images/logoMF.png";
import { useTranslation } from "react-i18next";
import { setCookie } from "../functions/cookie";

function Footer() {
  const [t, i18n] = useTranslation("global");
  return (
    <>
      <Container
        fluid
        className="bg-dark text-white pt-3 mt-auto"
        style={{ fontSize: "13px"}}
      >
        {/* Este Row contiene todos los elementos del footer, sin los derechos reservados */}
        <Row className="align-items-center">
          <Col
            xs={12}
            md={3}
            className="d-flex aligns-items-center justify-content-center mb-3"
          >
            <Nav.Link as={NavLink} to="/Inicio">
              <Image
                fluid
                src={logo}
                alt="logo"
                style={{ width: "150px", height: "85px" }}
              />
            </Nav.Link>
          </Col>
          <Col xs={6} md={2}>
            <div
              style={{ fontSize: "13px", cursor: "pointer" }}
              
            >
              <i className="bi bi-geo-alt hvr-push"></i> Ciudad De México.
            </div>
            
          </Col>
          <Col xs={6} md={3}>
            <div>{t("Footer.Info")}</div>
            <div style={{ fontSize: "13px" }}>
              <a href="tel:56 1408 0780" style={{textDecoration: "none", color: "white"}}>
                <i className="bi bi-telephone hvr-push"></i>
                {" "}56 1408 0780
              </a>
            </div>
            <Row>
              <Col className="mt-3">
                <div>{t("Footer.Email")}</div>
                  <div style={{ fontSize: "13px" }}>
                    <a href="mailto:marthafp49@gmail.com" style={{textDecoration: "none", color: "white"}}>
                      <i className="bi bi-envelope-paper hvr-push"></i>{" "}
                      marthafp49@gmail.com
                    </a>
                  </div>
              </Col>
            </Row>
          </Col>
          <Col xs={12} md={4}>
            <Row>
              <Col md={4} xs={12} className="text-center mt-3">
                {/* <Nav.Link as={NavLink} to="/Contacto">
                  <Button
                    className="mx-auto hvr-pulse"
                    variant="light"
                  >
                    {t("General.Contact")}
                  </Button>
                </Nav.Link> */}
              </Col>
              <Col md={8} xs={12} className="text-center text-md-start mt-3">
                <div>
                  <i className="bi bi-globe hvr-push"></i>{" "}
                  {t("Footer.Language")}
                </div>
                <div
                  style={{ fontSize: "13px" }}
                  onClick={() => {
                    i18n.changeLanguage("es");
                    setCookie("Language", "es");
                  }}
                >
                  Español
                </div>
                <div
                  style={{ fontSize: "13px" }}
                  onClick={() => {
                    i18n.changeLanguage("en");
                    setCookie("Language", "en");
                  }}
                >
                  English
                </div>
              </Col>
            </Row>
          </Col>
        </Row>
        {/* Row que contiene los derechos reservados */}
        <Row xs={12}>
          <p className="mb-0 mt-1">{t("Footer.Copyright")}</p>
        </Row>
      </Container>
    </>
  );
}

export default Footer;
