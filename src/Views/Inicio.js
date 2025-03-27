import { Col, Container, Row, Card, Image, Button } from 'react-bootstrap';
import { Link } from 'react-scroll';
import "../App.css";
import "../css/Inicio.css"

//Imágenes
import fotoClinicaParis from '../images/Inicio/fotoClinicaParis.png';
import fotoFormNutricion from '../images/Inicio/fotoFormNutricion.png';
import fotoGrupoZOM from '../images/Inicio/fotoGrupoZOM.png';
import foto from '../images/Inicio/foto_mf.jpg'
import { useTranslation } from 'react-i18next';



//Componentes
import Particle from '../Components/Particles';

// Animation
import { useInView } from "react-intersection-observer";
import OnScrollItems from './Animation/OnScrollItems';
import OnScrollRight from './Animation/OnScrollRight';
import OnScrollLeft from './Animation/OnScrollLeft';

const Inicio = () => {
  const [t] = useTranslation("global")
  //Hook que se recibe desde la librería react-intersection-observer para cada elemento a modificar con el efecto de intersection observer 
  //para más información de su uso consultar la página Productos o la documentación de la librería https://github.com/thebuilder/react-intersection-observer.
 
  const { ref: btn, inView: up } = useInView({
    threshold: 1,
    triggerOnce: true,
    delay: 0
  });

  const description = t("Home.Description1");
  const resaltaText = description.replace(
    "front end de aplicaciones web con diseño responsivo",
    "<mark>front end de aplicaciones web con diseño responsivo</mark>"
  );

  return (
    <>
        {/* Sección de bienvenida */}
        <section id="portada-principal">
          <div className='banner'>
            <div id="particles">
            <Particle />
            </div>
            <div className='wrapper'>
              <Card.ImgOverlay className="d-flex flex-column  m-4 animate__animated animate__fadeInUp">
              <Container>
                <Col className="d-flex flex-column" style={{ justifyContent: 'center'}}>
                  <Card.Title style={{ fontSize: "2.3rem", lineHeight: "1.2" }}>
                    <Row>
                      <Col sm={7} className='pb-3' style={{ color: '#000' }}>{t("Home.Section")}</Col>
                      <Col ></Col>
                    </Row>
                  </Card.Title>
                  {/* Botón contáctanos que redirige al inicio de la página */}
                  {/* <Col xs={12} md={1}>
                    <Nav.Link as={NavLink} to="/Contacto">
                      <Button
                        className="mx-auto hvr-pulse "
                        variant="outline-dark"
                      >
                        {t("General.Contact")}
                      </Button>
                    </Nav.Link>
                  </Col> */}
                </Col>
              </Container>
                {/* Ícono de flecha que despliega hacia abajo para cambiar a la siguientes secciones */}
                <Link
                  className=" d-flex justify-content-center text-dark"
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
            </div> 
          </div>
        </section>

      <Container fluid className="hideX" style={{padding: "0px"}}>
      
        <section id="cards-servicios" >
          <OnScrollItems>
            {/* Acerca de mí  */}
            <Container className='d-flex align-items-center' style={{minHeight: "100vh"}}>
              <Row>
                <Col className='d-grid align-items-center'>
                  <Card className='shadow p-3 mb-5 bg-body-tertiary rounded border-0'>
                    <Card.Body>
                      <Card.Title>
                        <h1 className='title mb-5'>{t("Home.Title")}</h1>
                      </Card.Title>
                      <Card.Text>
                        <p style={{ fontSize: "20px", textAlign: "justify" }} dangerouslySetInnerHTML={{ __html: resaltaText }}></p>
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
                <Col className='d-none d-sm-block text-center'>
                  <Image
                    style={{ width: '430px', height: '430px' }}
                    className='me-3 rounded-circle'
                    src={foto}
                    alt='Photo face'
                  />
                </Col>
              </Row> 
            </Container>
          </OnScrollItems>
          {/* Comienzan las cards de proyectos*/}
          {/* App clínica parís */}
          <Container fluid style={{minHeight: "100vh", display: "grid"}}>
            <div
              className=" d-flex justify-content-center"
            >
              <OnScrollItems><h1 className='servicesTitle'> {t("Home.Services")}</h1></OnScrollItems>
            </div>
            <Row className="p-0">
              <Col className="d-flex g-0" lg={6} md={12}>
                <Card className="p-1 g-0" style={{ border: "none" }}>
                  <Card.Body
                  >
                    <OnScrollLeft>
                      <div className='service-header'>
                          <Card.Title
                            className="mb-0 infra d-inline serviceTitle"
                            style={{
                              fontSize: "45px",
                              fontWeight: "bold"
                            }}
                          >
                            {t("General.Title1")}
                          </Card.Title>
                      </div>
                      <Card.Text
                        className=" mt-2 mb-2 pe-2 serviceDescr infraText"
                        style={{ textAlign: "center" }}
                      >
                        {t("Home.Description2")}
                      </Card.Text>
                    </OnScrollLeft>
                    <div className='text-center mt-3'>
                      <Button variant="link" href='https://dev.clinica-paris.com.mx/auth/login' className='text-danger' target='blank'>Ir al sitio web</Button>
                    </div>
                  </Card.Body>
                </Card>
              </Col>
              <Col id="imagenInicio" lg={6} md={12} style={{padding: "0px"}}>
                <OnScrollRight>
                  <Image
                    loading="lazy"
                    fluid
                    src={fotoClinicaParis}
                    alt="img-page"
                    style={{ objectFit: "cover", position: "relative", zIndex: "-1"}}
                  />
                </OnScrollRight>
                <OnScrollRight><Row className="divClinicaImg"></Row>  </OnScrollRight>
              </Col>
            </Row>
          </Container>

          {/* App grupo ZOM */}
          <Container>
            <Row style={{ minHeight: "100vh" }}>
              <Col
                id="imagenInicio"
                md={{ order: "last", span: 12 }}
                lg={{ order: "first", span: 6 }}
                style={{ padding: "0px", margin: "auto" }}
              >
                <Row>
                  <Col lg={11} style={{ padding: "0px" }}>
                    <OnScrollLeft>
                      <Row className='mx-2'>
                        <Image
                          loading="lazy"
                          fluid
                          src={fotoGrupoZOM}
                          alt="img-page"
                          style={{ objectFit: "cover", position: "relative", zIndex: "-1" }} />
                      </Row>
                    </OnScrollLeft>
                    <OnScrollLeft>
                      <Row style={{ backgroundColor: "#706BD1", height: "2em", padding: "0px", width: "90%", float: "right" }}>
                      </Row>
                    </OnScrollLeft>
                  </Col>
                  <Col style={{ position: "relative", padding: "0px" }}>
                    <div style={{ backgroundColor: "#706BD1", height: "80%", width: "50%", position: "absolute", bottom: '0' }}>
                    </div>
                  </Col>
                </Row>
              </Col>
              <Col
                className="d-flex g-0"
                md={{ order: "first", span: 12 }}
                lg={{ order: "last", span: 6 }}
              >
                <Card className="p-1" style={{ border: "none" }}>
                  <Card.Body className='d-grid'>
                    <div className="service-header">
                      <Card.Title
                        className="d-inline infra serviceTitle mb-3"
                        style={{
                          fontSize: "45px",
                          fontWeight: "bold"
                        }}
                      >
                        {t("General.Title2")}
                      </Card.Title>
                    </div>
                    <OnScrollRight>
                      <Card.Text
                        className=" mt-2 ps-2 serviceDescr"
                        style={{ textAlign: "center" }}
                      >
                        {t("Home.Description3")}
                      </Card.Text>
                    </OnScrollRight>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </Container>

          {/* Cuestionario Nutrición */}
          <Container>
            <Row className="p-0">
              <Col className="d-flex g-0" lg={6} md={12}>
                <Card className="p-1 g-0" style={{ border: "none" }}>
                  <Card.Body
                  >
                    <OnScrollLeft>
                      <div className='service-header'>
                        <Card.Title
                          className="mb-0 infra d-inline serviceTitle"
                          style={{
                            fontSize: "45px",
                            fontWeight: "bold"
                          }}
                        >
                          {t("General.Title3")}
                        </Card.Title>
                      </div>
                    </OnScrollLeft>
                    <Col lg={12} className='mt-4'>
                      <OnScrollItems>
                        <Row className="nutriItem px-2" style={{ marginBottom: "1em" }}>
                          <div style={{ backgroundColor: "#434242", height: "10px", borderRadius: "10px" }}></div>
                          {t("Home.Description4")}
                          </Row>
                        </OnScrollItems>
                    </Col>
                  </Card.Body>
                </Card>
              </Col>
              <Col id="imagenInicio" lg={6} md={12} style={{ padding: "0px" }}>
                <OnScrollRight>
                  <Image
                    loading="lazy"
                    fluid
                    src={fotoFormNutricion}
                    alt="img-page"
                    style={{ objectFit: "cover", position: "relative", zIndex: "-1" }}
                  />
                </OnScrollRight>
                <OnScrollRight><Row className="divNutriImg"></Row>  </OnScrollRight>
              </Col>
            </Row>
          </Container>
           {/* Boton de regreso */}
           <div
              ref={btn}
              className="btn-arriba d-flex justify-content-end sticky-sm-top "
            >
              <Link to="portada-principal" smooth={true} duration={0}>
                <i
                  className={`${
                    up
                  ? "bi bi-arrow-up-circle animate__animated animate__fadeInUp hvr-icon-up"
                      : null
                  } `}
                ></i>
              </Link>
            </div>
        </section>
      </Container>
    </>
  );
}
export default Inicio;
