/*
  Footer de todas las vistas de la página con un botón de contacto que dirige a la vista de Contacto.js.
  El logo de la página no reacciona adecuadamente al breakpoint de los componentes en el diseño responsivo.
 */
import { Col, Container, Row, Image, Button, Nav } from "react-bootstrap/";
import { NavLink } from "react-router-dom";
import logo from "../images/logoCompletoFooter.webp";
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
                style={{ width: "200px", height: "65px" }}
              />
            </Nav.Link>
          </Col>
          <Col xs={6} md={3}>
            <div>{t("Footer.Office")}</div>
            <div
              style={{ fontSize: "13px", cursor: "pointer" }}
              onClick={() =>
                window.open(
                  "https://www.google.com.mx/maps/place/Berl%C3%ADn+43,+Del+Carmen,+Coyoac%C3%A1n,+04100+Ciudad+de+M%C3%A9xico,+CDMX/@19.3572997,-99.1579865,17z/data=!3m1!4b1!4m5!3m4!1s0x85d1ffc8965675bb:0xc3b0e470fdb7c5a5!8m2!3d19.3572997!4d-99.1557978",
                  "_blank"
                )
              }
            >
              <i className="bi bi-geo-alt hvr-push"></i> Berlín 43, piso 2,
              Coyoacán, CDMX
            </div>
            <Row>
              <Col className="mt-3">
                <div>{t("Footer.Schedule")}</div>
                <div style={{ fontSize: "13px" }}>
                  <i className="bi bi-clock hvr-push"></i> {t("Footer.Moday")}
                </div>
              </Col>
            </Row>
          </Col>
          <Col xs={6} md={3}>
            <div>{t("Footer.Info")}</div>
            <div style={{ fontSize: "13px" }}>
              <a href="tel:55 9039 1301" style={{textDecoration: "none", color: "white"}}>
                <i className="bi bi-telephone hvr-push"></i>
                {" "}55 9039 1301
              </a>
            </div>
            <Row>
              <Col className="mt-3">
                <div>{t("Footer.Email")}</div>
                  <div style={{ fontSize: "13px" }}>
                    <a href="mailto:contacto@kaminoit.tech" style={{textDecoration: "none", color: "white"}}>
                      <i className="bi bi-envelope-paper hvr-push"></i>{" "}
                      contacto@kaminoit.tech
                    </a>
                  </div>
              </Col>
            </Row>
          </Col>
          <Col xs={12} md={3}>
            <Row>
              <Col md={6} xs={12} className="text-center mt-3">
                <Nav.Link as={NavLink} to="/Contacto">
                  <Button
                    className="mx-auto hvr-pulse boton-principal"
                    variant="success"
                  >
                    {t("General.Contact")}
                  </Button>
                </Nav.Link>
              </Col>
              <Col md={6} xs={12} className="text-center text-md-start mt-3">
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
          <p className="mb-0 mt-3">{t("Footer.Copyright")}</p>
        </Row>
      </Container>
    </>
  );
}

export default Footer;
