import { Col, Container, Row, Card, Image, Button, Nav } from 'react-bootstrap';
import { Link } from 'react-scroll';
import { NavLink } from 'react-router-dom';
import { useInView } from 'react-intersection-observer';
import { NavHashLink } from 'react-router-hash-link';
import "../App.css";
//Imágenes
import page from '../images/Inicio/frontpage.webp';
import infraestructura from '../images/Inicio/infraestructura.webp';
import medicaIA from '../images/Inicio/medicaIA.webp';
import retail from '../images/Inicio/retail.webp';
import movilidad from '../images/Inicio/movilidad.webp';
import banca from '../images/Inicio/banca.webp';
import { useTranslation } from 'react-i18next';

const Inicio = () => {
  const [t] = useTranslation("global")
  //Hook que se recibe desde la librería react-intersection-observer para cada elemento a modificar con el efecto de intersection observer 
  //para más información de su uso consultar la página Productos o la documentación de la librería https://github.com/thebuilder/react-intersection-observer.
  const { ref: textcard1, inView: effectScroll } = useInView({
    threshold: 0,

  });
  const { ref: textcard2, inView: effectScroll2 } = useInView({
    threshold: 0,

  });
  const { ref: textcard3, inView: effectScroll3 } = useInView({
    threshold: 0,

  });
  const { ref: textcard4, inView: effectScroll4 } = useInView({
    threshold: 0,

  });
  const { ref: textcard5, inView: effectScroll5 } = useInView({
    threshold: 0,

  });
  const { ref: imgcard1, inView: effectImgScroll } = useInView({
    threshold: 0,

  });
  const { ref: imgcard2, inView: effectImgScroll2 } = useInView({
    threshold: 0,

  });
  const { ref: imgcard3, inView: effectImgScroll3 } = useInView({
    threshold: 0,

  });
 
  const { ref: imgcard4, inView: effectImgScroll4 } = useInView({
    threshold: 0,

  });
  const { ref: imgcard5, inView: effectImgScroll5 } = useInView({
    threshold: 0,

  });
 
  const { ref: btn, inView: up } = useInView({
    threshold: 1,
    triggerOnce: true,
    delay: 0
  });

  return (
    <>
      <Container fluid>
        <section id="portada-principal">
          <Row>
            <Card className="bg-dark text-white" style={{ borderRadius: "0" }}>
              <Image
                fluid
                src={page}
                alt="img-page"
                style={{ objectFit: "cover", height: "39.3rem" }}
              />
              <Card.ImgOverlay className="d-flex flex-column  m-4 animate__animated animate__fadeInUp">
                <Col className="d-flex justify-content-center flex-column">
                  <Card.Title style={{ fontSize: "2.3rem", lineHeight: "1.2" }}>
                    <Row>
                      <Col sm={7} className='gx-0'>{t("Home.Section")}</Col>
                      <Col ></Col>
                    </Row>
                  </Card.Title>
                  {/* Botón contáctanos que redirige al inicio de la página */}
                  <Col xs={12} md={2}>
                    <Nav.Link as={NavLink} to="/Contacto">
                      <Button
                        className="mx-auto hvr-pulse boton-principal"
                        variant="success"
                      >
                        {t("General.Contact")}
                      </Button>
                    </Nav.Link>
                  </Col>
                </Col>
                {/* Ícono de flecha que despliega hacia abajo para cambiar a la siguientes secciones */}
                <Link
                  className=" d-flex justify-content-center text-white"
                  to="cards-servicios"
                  smooth={true}
                  duration={0}
                >
                  <i
                    className="bi bi-arrow-down-circle hvr-hang change-Color"
                    style={{ fontSize: "45px", cursor: "pointer" }}
                  ></i>
                </Link>
              </Card.ImgOverlay>
            </Card>
          </Row>
        </section>
      </Container>

      <Container fluid className="hideX">
      
        <section id="cards-servicios" >
          <Row>
            <Col >
              <Card className="p-3 " style={{ border: "none" }}>
                <Card.Body className="animate__animated animate__pulse">
                  <Card.Title
                    className="subrayado d-flex justify-content-center px-5"
                    style={{ fontSize: "3rem", textAlign: "justify" }}
                  >
                    {t("Home.Title")}
                  </Card.Title>
                  <Card.Text className='mx-md-5' style={{ fontSize: "20px", textAlign: "justify"  }}>
                    {t("Home.Description1")}
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
          
          <Row style={{ background: "#6BBBAE" }}>
            <div
              className=" d-flex justify-content-center"
              style={{ fontSize: "3rem", textAlign: "justify" }}
            >
              {t("Home.Services")}
            </div>

          </Row>

           
            
          {/* Comienzan las cards de servicios */}
          <Row >
            <Col className="d-flex align-items-center g-0" lg={6} md={12}>
              <Card className="p-1 g-0" style={{ border: "none" }}>
                <Card.Body
                  ref={textcard1}
                  className={`${
                    effectScroll
                      ? "animate__animated animate__fadeInLeft"
                      : "reverseObserver"
                  }`}
                >
                  <Card.Title
                    className="mb-0 infra"
                    style={{
                      fontSize: "46px",
                      fontWeight: "bold",
                      textDecoration: "underline",
                      textDecorationColor: "#6BBBAE",
                    }}
                  >
                    {t("General.Title1")}
                  </Card.Title>
                  <Card.Text
                    className=" mt-2 mb-2 pe-2"
                    style={{ fontSize: "18px", textAlign: "justify" }}
                  >
                    {t("Home.Description2")}
                  </Card.Text>
              
                  <NavHashLink
                  className=" mb-2 "
                  to="/Productos#infraestructura"
                  >
                  {t("General.More")}
                  </NavHashLink>
                </Card.Body>
              </Card>
            </Col>
            <Col id="imagenInicio" lg={6} md={12}>
              <Image
              loading="lazy"
                fluid
                src={infraestructura}
                ref={imgcard1}
                className={`${
                  effectImgScroll
                    ? "animate__animated animate__fadeInRight"
                    : "reverseObserver"
                }` }
                alt="img-page"
                style={{ objectFit: "cover", height: "39.3rem" }}
              />
            </Col>
          </Row>

          <Row >
            <Col
              id="imagenInicio"
              md={{ order: "last", span: 12 }}
              lg={{ order: "first", span: 6 }}
            >
              <Image
              loading="lazy"
                fluid
                src={retail}
                alt="img-page"
                ref={imgcard2}
                className={`${
                  effectImgScroll2
                    ? "animate__animated animate__fadeInLeft"
                    : "reverseObserver"
                }`}
                style={{ objectFit: "cover", height: "39.3rem" }}
              />
            </Col>
            <Col
              className="d-flex align-items-center g-0"
              md={{ order: "first", span: 12 }}
              lg={{ order: "last", span: 6 }}
            >
              <Card className="p-1" style={{ border: "none" }}>
                <Card.Body
                  ref={textcard2}
                  className={`${
                    effectScroll2
                      ? "animate__animated animate__fadeInRight"
                      : "reverseObserver"
                  }`}
                >
                  <Card.Title
                    className="mb-0 ps-2 mt-3 infra"
                    style={{
                      fontSize: "50px",
                      fontWeight: "bold",
                      textDecoration: "underline",
                      textDecorationColor: "#6BBBAE",
                    }}
                  >
                    {t("General.Title2")}
                  </Card.Title>
                  <Card.Text
                    className=" mt-2 mb-2 ps-2"
                    style={{ fontSize: "18px", textAlign: "justify" }}
                  >
                    {t("Home.Description3")}
                  </Card.Text>
                  <NavHashLink
                  className=" mb-0 ps-2"
                  to="/Productos#retail"
                  >
                  {t("General.More")}
                  </NavHashLink>
                </Card.Body>
              </Card>
            </Col>
          </Row>

          <Row >
            <Col className="d-flex align-items-center g-0" lg={6} md={12}>
              <Card className="p-1" style={{ border: "none" }}>
                <Card.Body
                  ref={textcard3}
                  className={`${
                    effectScroll3
                      ? "animate__animated animate__fadeInLeft"
                      : "reverseObserver"
                  }`}
                >
                  <Card.Title
                    className=" mb-0 mt-3 infra"
                    style={{
                      fontSize: "50px",
                      fontWeight: "bold",
                      textDecoration: "underline",
                      textDecorationColor: "#6BBBAE",
                    }}
                  >
                    {t("General.Title3")}
                  </Card.Title>
                  <Card.Text
                    className=" mt-2 mb-2 pe-4"
                    style={{ fontSize: "18px", textAlign: "justify" }}
                  >
                    {t("Home.Description4")}
                  </Card.Text>
               
                  <NavHashLink
                   className=" mb-0"
                   to="/Productos#salud"
                  >
                  {t("General.More")}
                  </NavHashLink>
                </Card.Body>
              </Card>
            </Col>
            <Col id="imagenInicio" lg={6} md={12}>
              <Image
              loading="lazy"
                fluid
                src={medicaIA}
                ref={imgcard3}
                className={`${
                  effectImgScroll3
                    ? "animate__animated animate__fadeInRight"
                    : "reverseObserver"
                }`}
                alt="img-page"
                style={{ objectFit: "cover", height: "39.3rem" }}
              />
            </Col>
          </Row>

          <Row >
            <Col
              id="imagenInicio"
              md={{ order: "last", span: 12 }}
              lg={{ order: "first", span: 6 }}
            >
              <Image
              loading="lazy"
                fluid
                src={movilidad}
                alt="img-page"
                ref={imgcard4}
                className={`${
                  effectImgScroll4
                    ? "animate__animated animate__fadeInLeft"
                    : "reverseObserver"
                }`}
                style={{ objectFit: "cover", height: "39.3rem" }}
              />
            </Col>
            <Col
              className="d-flex align-items-center g-0"
              md={{ order: "first", span: 12 }}
              lg={{ order: "last", span: 6 }}
            >
              <Card className="p-1" style={{ border: "none" }}>
                <Card.Body
                  ref={textcard4}
                  className={`${
                    effectScroll4
                      ? "animate__animated animate__fadeInRight"
                      : "reverseObserver"
                  }`}
                >
                  <Card.Title
                    className="mb-0 ps-2 mt-0 infra"
                    style={{
                      fontSize: "45px",
                      fontWeight: "bold",
                      textDecoration: "underline",
                      textDecorationColor: "#6BBBAE",
                    }}
                  >
                    {t("General.Title4")}
                  </Card.Title>
                  <Card.Text
                    className=" mt-2 mb-2 ps-2"
                    style={{ fontSize: "18px", textAlign: "justify" }}
                  >
                  {t("Home.Description5")}
                  </Card.Text>

                  <NavHashLink
                  className=" mb-0 ps-2"
                  to="/Productos#movilidad"
                  >
                  {t("General.More")}
                  </NavHashLink>
                </Card.Body>
              </Card>
            </Col>
          </Row>

          <Row className="mb-5">
            <Col className="d-flex align-items-center g-0" lg={6} md={12}>
              <Card className="p-1" style={{ border: "none" }}>
                <Card.Body
                  ref={textcard5}
                  className={`${
                    effectScroll5
                      ? "animate__animated animate__fadeInLeft"
                      : "reverseObserver"
                  }`}
                >
                  <Card.Title
                    className="mb-0 ps-2 mt-0 infra"
                    style={{
                      fontSize: "45px",
                      fontWeight: "bold",
                      textDecoration: "underline",
                      textDecorationColor: "#6BBBAE",
                    }}
                  >
                    {t("General.Title5")}
                  </Card.Title>
                  <Card.Text
                    className=" mt-2 mb-2 ps-2"
                    style={{ fontSize: "18px", textAlign: "justify" }}
                  >
                    {t("Home.Description6")}
                  </Card.Text>
                  <NavHashLink
                  className=" mb-0 ps-2"
                  to="/Productos#banca"
                  >
                  {t("General.More")}
                  </NavHashLink>
             
                </Card.Body>
              </Card>
            </Col>
            <Col id="imagenInicio" lg={6} md={12}>
              <Image
              loading="lazy"
                fluid
                src={banca}
                ref={imgcard5}
                className={`${
                  effectImgScroll5
                    ? "animate__animated animate__fadeInRight"
                    : "reverseObserver"
                }`}
                alt="img-page"
                style={{ objectFit: "cover", height: "39.3rem" }}
              />
            </Col>
          </Row>
        </section>
           {/* Boton de regreso */}
           <div
              ref={btn}
              className="btn-arriba d-flex justify-content-end sticky-sm-top "
            >
              <Link to="portada-principal" smooth={true} duration={0}>
                <i
                  className={`${
                    up
                      ? "bi bi-arrow-up-circle animate__animated animate__fadeInUp hvr-icon-up "
                      : null
                  } `}
                ></i>
              </Link>
            </div>
      </Container>
    </>
  );
}
export default Inicio;
