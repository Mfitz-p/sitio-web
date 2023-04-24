import { Col, Container, Row, Card, Image, Button, Nav } from 'react-bootstrap';
import { Link } from 'react-scroll';
import { NavLink } from 'react-router-dom';
import { NavHashLink } from 'react-router-hash-link';
import "../App.css";
import "../css/Inicio.css"

//Imágenes
import page from '../images/Inicio/frontpage.webp';
import infraestructura from '../images/Inicio/infraestructura.webp';
import medicaIA from '../images/Inicio/medicaIA.webp';
import retail from '../images/Inicio/retail.webp';
import movilidad from '../images/Inicio/movilidad.webp';
import banca from '../images/Inicio/banca.webp';
import metrics from '../images/Inicio/metrics.png'
import { useTranslation } from 'react-i18next';

//Iconos 
import city from '../icons/city.svg';
import basket from '../icons/basket.svg';
import health from '../icons/health.svg';
import car from '../icons/car.svg';
import money from '../icons/money.svg';

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

  return (
    <>
        <section id="portada-principal">
          <div className='banner'>
            <div id="particles">
              <Particle />
            </div>
            <div className='wrapper'>
              <Card.ImgOverlay className="d-flex flex-column  m-4 animate__animated animate__fadeInUp">
                <Col className="d-flex justify-content-center flex-column">
                  <Card.Title style={{ fontSize: "2.3rem", lineHeight: "1.2" }}>
                    <Row>
                      <Col sm={7} className='gx-0' style={{color: 'white'}}>{t("Home.Section")}</Col>
                      <Col ></Col>
                    </Row>
                  </Card.Title>
                  {/* Botón contáctanos que redirige al inicio de la página */}
                  <Col xs={12} md={1}>
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
            </div> 
          </div>
        </section>

      <Container fluid className="hideX" style={{padding: "0px"}}>
      
        <section id="cards-servicios" >
          <OnScrollItems
          >
            <Container className='d-flex align-items-center' style={{minHeight: "100vh"}}>
              <Row>
                <Col className='d-grid align-items-center'>
                  <div>
                    <h1 className='title mb-5'>{t("Home.Title")}</h1>
                    <p style={{ fontSize: "20px", textAlign: "justify"  }}>{t("Home.Description1")}</p>
                  </div>
                </Col>
                <Col className='d-none d-sm-block text-center'>
                  <Image fluid
                    src={metrics}
                    alt='metrics'
                  />
                </Col>
              </Row> 
            </Container>
          </OnScrollItems>
          {/* Comienzan las cards de servicios */}
          {/* Infraestructura */}
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
                      <div className='d-flex align-items-center m-auto' style={{width: "fit-content"}}>
                          <Image
                              height={70}
                              className="m-3 hvr-float d-inline"
                              src={city}
                              alt="city"
                            />
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
                    <Row className="d-flex flex-column mt-5">
                      <OnScrollItems>
                        <Row className="infraItem serviceItem m-auto mb-4" style={{width: 'fit-content'}}>
                          {t("Products.1Bullet1")}
                        </Row>
                      </OnScrollItems>
                      <OnScrollItems>
                        <Row className="infraItem serviceItem m-auto mb-4" style={{width: 'fit-content'}}>
                          {t("Products.1Bullet2")}
                        </Row>
                      </OnScrollItems>
                      <OnScrollItems>
                        <Row className="infraItem serviceItem m-auto mb-4" style={{width: 'fit-content'}}>
                          {t("Products.1Bullet3")}
                        </Row>
                      </OnScrollItems>
                      <OnScrollItems>
                        <Row className="infraItem serviceItem m-auto mb-4" style={{width: 'fit-content'}}>
                          {t("Products.1Bullet4")}
                        </Row>
                      </OnScrollItems>
                    </Row>
                  </Card.Body>
                </Card>
              </Col>
              <Col id="imagenInicio" lg={6} md={12} style={{padding: "0px"}}>
                <OnScrollRight>
                  <Image
                  loading="lazy"
                    fluid
                    src={infraestructura}
                    alt="img-page"
                    style={{ objectFit: "cover", position: "relative", zIndex: "-1"}}
                  />
                </OnScrollRight>
                <OnScrollRight><Row className="divInfraImg"></Row>  </OnScrollRight>
              </Col>
            </Row>
          </Container>

          {/* Retail */}
          <Row style={{minHeight: "100vh"}}>
            <Col
              id="imagenInicio"
              md={{ order: "last", span: 12 }}
              lg={{ order: "first", span: 6 }}
              style={{padding: "0px", margin: "auto"}}
            >
              <Row>
                <Col lg={11} style={{padding: "0px"}}>
                <OnScrollLeft>
                  <Row>
                    <Image
                      loading="lazy"
                      fluid
                      src={retail}
                      alt="img-page"
                      style={{ objectFit: "cover", height: "39.3rem", width: "100%" }}/>
                  </Row>
                </OnScrollLeft>
                <OnScrollLeft>
                  <Row style={{backgroundColor: "#F2D7A7", height: "2em", padding: "0px", width: "90%", float: "right"}}>
                  </Row>
                </OnScrollLeft>
                </Col>
                <Col style={{position: "relative", padding: "0px"}}>
                  <div style={{backgroundColor: "#F2D7A7", height: "80%", width: "50%", position: "absolute", bottom: '0'}}>
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
                  <OnScrollRight>
                    <div className='d-flex align-items-center m-auto' style={{width: "fit-content"}}>
                      <Image
                        height={70}
                        className="m-3 hvr-float d-inline"
                        src={basket}
                        alt="basket"
                      />
                      <Card.Title
                        className="d-inline serviceTitle"
                        style={{
                          fontSize: "45px",
                          fontWeight: "bold"
                        }}
                      >
                        {t("General.Title2")}
                      </Card.Title>
                    </div>
                  </OnScrollRight>
                  <OnScrollRight>
                    <Card.Text
                      className=" mt-2 ps-2 serviceDescr"
                      style={{ textAlign: "center" }}
                    >
                      {t("Home.Description3")}
                    </Card.Text>
                  </OnScrollRight>
                  <OnScrollRight>
                    <Row className="serviceItemsContainer">
                        <Col>
                          <OnScrollItems><p className='underline'>01</p></OnScrollItems>
                          <p className='serviceItem'>{t("Products.2Bullet1")}</p>
                        </Col>
                        <Col>
                        <OnScrollItems><p className='underline'>02</p></OnScrollItems>
                          <p className='serviceItem'>{t("Products.2Bullet2")}</p>
                        </Col>
                        <Col>
                          <OnScrollItems><p className='underline'>03</p></OnScrollItems>
                          <p className='serviceItem'>{t("Products.2Bullet3")}</p>
                        </Col>
                        <Col>
                          <OnScrollItems><p className='underline'>04</p></OnScrollItems>
                          <p className='serviceItem'>{t("Products.2Bullet4")}</p>
                        </Col>
                        <Col>
                          <OnScrollItems><p className='underline'>05</p></OnScrollItems>
                          <p className='serviceItem'>{t("Products.2Bullet5")}</p>
                        </Col>
                    </Row>
                  </OnScrollRight>
                </Card.Body>
              </Card>
            </Col>
          </Row>

          {/* Salud */}
          <Row className='position-relative' style={{minHeight: "100vh"}}>
            <Card className="d-flex" style={{border: "none"}}>
            <Card.Img
              fluid
              src={medicaIA}
              className='healthImg'
              alt="salud"
              style={{ objectFit: "cover", minHeight: "100vh"}}
                />
            <Card.ImgOverlay className='d-flex align-items-center'>
              <Card.Body>
                <Row>
                  <Col></Col>
                  <Col lg={6}>
                    <OnScrollRight>
                      <div className='d-flex align-items-center m-auto' style={{width: "fit-content"}}>
                        <Image
                            height={70}
                            className="m-3 hvr-float d-inline"
                            src={health}
                            alt="health"
                          />
                        <Card.Title
                          className="text-center serviceTitle d-inline"
                          style={{
                            fontSize: "45px",
                            fontWeight: "bold"
                          }}
                        >
                          {t("General.Title3")}
                        </Card.Title>
                      </div>
                    </OnScrollRight>
                    <OnScrollRight>
                      <Card.Text
                        className="mt-2 mb-2 pe-4 serviceDescr"
                      >
                        {t("Home.Description4")}
                      </Card.Text>
                    </OnScrollRight>
                    <Row className="mt-5">
                      <Col lg={6} style={{display: "flex", flexDirection: "column", justifyContent: "space-between"}}>
                        <OnScrollItems>
                          <Row className="healthItem" style={{margin: "auto", marginBottom: "1em"}}>
                            <div style={{backgroundColor: "#434242", height: "10px", borderRadius: "10px"}}></div>
                            <p className="healthText serviceItem">{t("Products.3Bullet1")}</p>
                          </Row>
                        </OnScrollItems>
                        <OnScrollItems>
                          <Row className="healthItem" style={{margin: "auto", marginBottom: "1em"}}>
                            <div style={{backgroundColor: "#434242", height: "10px", borderRadius: "10px"}}></div>
                            <p className="healthText serviceItem">{t("Products.3Bullet3")}</p>
                          </Row>
                        </OnScrollItems>
                      </Col>
                      <Col lg={6} style={{display: "flex", flexDirection: "column", justifyContent: "space-between"}}>
                        <OnScrollItems>
                          <Row className="healthItem" style={{margin: "auto", marginBottom: "1em"}}>
                            <div style={{backgroundColor: "#434242", height: "10px", borderRadius: "10px"}}></div>
                            <p className="healthText serviceItem">{t("Products.3Bullet2")}</p>
                          </Row>
                        </OnScrollItems>
                        <OnScrollItems>
                          <Row className="healthItem" style={{margin: "auto", marginBottom: "1em"}}>
                            <div style={{backgroundColor: "#434242", height: "10px", borderRadius: "10px"}}></div>
                            <p className="healthText serviceItem">{t("Products.3Bullet4")}</p>
                          </Row>
                        </OnScrollItems>
                      </Col>
                    </Row>
                  </Col>
                </Row>
              </Card.Body>
              <NavHashLink to="/Salud">
                <button className='moreBtn'>
                  <span className='circle' aria-hidden='true'>
                    <span className='arrow_icon'></span>
                  </span>
                  <span className='button_text'>{t("General.More")}</span>
                </button>
              </NavHashLink>
              </Card.ImgOverlay>
            </Card>
          </Row>
          
          {/* Movilidad */}
          <Row className='mainContainerHealth' style={{minHeight: "100vh", display: "flex", alignItems: "center"}}>
            <Col className="d-flex g-0" lg={6} md={12}>
              <Card className="p-1 g-0" style={{ border: "none"}}>
                <Card.Body
                  style={{display: "flex", flexDirection: "column" }}
                >
                  <OnScrollLeft>
                    <div className="d-flex justify-content-center align-items-center">
                      <Image
                        height={70}
                        className="m-3 hvr-float"
                        src={car}
                        alt="car"
                      />
                      <Card.Title
                        className="mb-0 serviceTitle text-center"
                        style={{
                          fontSize: "45px",
                          fontWeight: "bold"
                        }}
                      >
                        {t("General.Title4")}
                      </Card.Title>
                    </div>
                  </OnScrollLeft>
                  <OnScrollLeft>
                    <div className='containerCar'>
                      <Card.Text
                        className=" mt-2 mb-2 pe-2 serviceDescr"
                      >
                        {t("Home.Description5")}
                      </Card.Text>
                    </div>
                  </OnScrollLeft>
                </Card.Body>
              </Card>
            </Col>
            <Col id="imagenInicio" lg={6} md={12} style={{padding: "0px", zIndex: "9"}}>
              <OnScrollRight>
                <Image
                  loading="lazy"
                    fluid
                    src={movilidad}
                    alt="img-page"
                    style={{ objectFit: "cover", height: "39.3rem", width: "100%" }}
                  />
                </OnScrollRight>
            </Col>
            <Row className="itemsCar m-auto">
              <Col sm className="text-center itemCar align-middle serviceItem"><OnScrollItems>{t("Products.4Bullet1")}</OnScrollItems></Col>
              <Col sm className="text-center itemCar serviceItem"><OnScrollItems>{t("Products.4Bullet2")}</OnScrollItems></Col>
              <Col sm className="text-center itemCar serviceItem"><OnScrollItems>{t("Products.4Bullet3")}</OnScrollItems></Col>
              <Col sm className="text-center itemCar serviceItem"><OnScrollItems>{t("Products.4Bullet4")}</OnScrollItems></Col>
            </Row>
          </Row>

          {/* Banca */}
          <Row style={{minHeight: "100vh"}}>
          <Col
              id="imagenInicio"
              md={{ order: "last", span: 12 }}
              lg={{ order: "first", span: 6 }}
              style={{ zIndex: "9" }}
            >
              <OnScrollLeft>
                <Image
                loading="lazy"
                  fluid
                  src={banca}
                  alt="img-page"
                  style={{ objectFit: "cover", height: "39.3rem", width: "100%" }}
                />
              </OnScrollLeft>
            </Col>
            <Col
              className="d-flex g-0 align-items-center"
              md={{ order: "first", span: 12 }}
              lg={{ order: "last", span: 6 }}
            >
              <Card className="p-1" style={{ border: "none" }}>
                <Card.Body
                  style={{display: "flex", flexDirection: "column"}}
                >
                  <div className='d-flex align-items-center' style={{width: "fit-content", margin: "0 auto"}}>
                    <OnScrollRight>
                      <Image
                        height={70}
                        className="m-3 hvr-float"
                        src={money}
                        alt="money"
                      />
                    </OnScrollRight>
                    <OnScrollRight>
                      <Card.Title
                        className="serviceTitle"
                        style={{
                          fontSize: "45px",
                          fontWeight: "bold"
                        }}
                      >
                        {t("General.Title5")}
                      </Card.Title>
                    </OnScrollRight>
                  </div>
                  <Row className="brownBackgr"></Row>
                  <Row className="mt-5">
                    <div className='description mt-5 mb-5 ps-3'>
                      <OnScrollRight>
                        <Card.Text
                          className=" mt-2 mb-2 ps-2 serviceDescr bancaText"
                        >
                          {t("Home.Description6")}
                        </Card.Text>
                      </OnScrollRight>
                    </div>
                    <Row className='mt-5 mb-5' style={{zIndex: "9", margin: "auto"}}>
                      <Col sm className="bancaItem mb-5">
                        <div className='circle mb-2'></div>
                        <OnScrollItems>
                          <p className= "bancaText serviceItem">{t("Products.5Bullet1")}</p>
                        </OnScrollItems>
                      </Col>
                      <Col sm className="bancaItem mb-5">
                        <div className='circle mb-2'></div>
                        <OnScrollItems>
                          <p className= "bancaText serviceItem">{t("Products.5Bullet3")}</p>
                        </OnScrollItems>
                      </Col>
                      <Col sm className="bancaItem mb-5">
                        <div className='circle mb-2'></div>
                        <OnScrollItems>
                          <p className= "bancaText serviceItem">{t("Products.5Bullet2")}</p>
                        </OnScrollItems>
                      </Col>
                      <Col sm className="bancaItem mb-5">
                        <div className='circle mb-2'></div>
                        <OnScrollItems>
                          <p className= "bancaText serviceItem">{t("Products.5Bullet4")}</p>
                        </OnScrollItems>
                      </Col>
                    </Row>
                  </Row>
                  {/*<NavHashLink
                  className=" mb-0 ps-2"
                  to="/Productos#retail"
                  >
                  {t("General.More")}
                  </NavHashLink>*/}
                </Card.Body>
              </Card>
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
