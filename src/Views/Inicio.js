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
import React, { useEffect } from "react";
import { useAnimation, motion, Variants } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Inicio = () => {
  const [t] = useTranslation("global")
  //Hook que se recibe desde la librería react-intersection-observer para cada elemento a modificar con el efecto de intersection observer 
  //para más información de su uso consultar la página Productos o la documentación de la librería https://github.com/thebuilder/react-intersection-observer.
  
  const squareVariant = {
    visible: { opacity: 1, scale: 1, transition: { duration: 1 } },
    hidden: { opacity: 0, scale: 0 }
  };

  const listItems = {
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
    hidden: { opacity: 0, scale: 0 }
  }

  const controls = useAnimation();
  const [ref, inView] = useInView();
 
  const { ref: btn, inView: up } = useInView({
    threshold: 1,
    triggerOnce: true,
    delay: 0
  });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

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

      <Container fluid className="hideX">
      
        <section id="cards-servicios" >
          <motion.div
            variants={squareVariant}
            className="square"
            initial="hidden"
            ref={ref}
            animate={controls}
          >
            <Container className='mt-2'>
              <Row className="d-flex justify-content-center px-5">
                <h1 className='title'>{t("Home.Title")}</h1>
              </Row>
              <Row className='mx-md-5'>
                <p style={{ fontSize: "20px", textAlign: "justify"  }}>{t("Home.Description1")}</p>
              </Row>
            </Container>
          </motion.div>
          
          <Row>
            <div
              className=" d-flex justify-content-center"
            >
            <h1 className='servicesTitle'> {t("Home.Services")}</h1>
            </div>

          </Row>
           
          {/* Comienzan las cards de servicios */}
          <Row className="mb-4">
            <Col className="d-flex g-0" lg={6} md={12}>
              <Card className="p-1 g-0" style={{ border: "none" }}>
                <Card.Body
                >
                  <div className='infraTitle' style={{width: "fit-content"}}>
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
              
                  {/*<NavHashLink
                  className=" mb-2 "
                  to="/Productos#infraestructura"
                  >
                  {t("General.More")}
                  </NavHashLink>*/}
                  <Row className="d-flex flex-column mt-5">
                    <motion.div
                      variants={listItems}
                      initial="hidden"
                      ref={ref}
                      animate={controls}
                    >
                      <Row className="infraItem serviceItem m-auto mb-4">
                        {t("Products.1Bullet1")}
                      </Row>
                    </motion.div>
                    <motion.div
                      variants={listItems}
                      initial="hidden"
                      ref={ref}
                      animate={controls}
                    >
                      <Row className="infraItem serviceItem m-auto mb-4">
                        {t("Products.1Bullet2")}
                      </Row>
                    </motion.div>
                    <motion.div
                      variants={listItems}
                      initial="hidden"
                      ref={ref}
                      animate={controls}
                    >
                      <Row className="infraItem serviceItem m-auto mb-4">
                        {t("Products.1Bullet3")}
                      </Row>
                    </motion.div>
                    <motion.div
                      variants={listItems}
                      initial="hidden"
                      ref={ref}
                      animate={controls}
                    >
                      <Row className="infraItem serviceItem m-auto mb-4">
                        {t("Products.1Bullet4")}
                      </Row>
                    </motion.div>
                  </Row>
                </Card.Body>
              </Card>
            </Col>
            <Col id="imagenInicio" lg={6} md={12} style={{padding: "0px"}}>
              <Image
              loading="lazy"
                fluid
                src={infraestructura}
                alt="img-page"
                style={{ objectFit: "cover", position: "relative", zIndex: "-1"}}
              />
              <Row className="divInfraImg"></Row>  
            </Col>
          </Row>

          <Row className="mb-4">
            <Col
              id="imagenInicio"
              md={{ order: "last", span: 12 }}
              lg={{ order: "first", span: 6 }}
              style={{padding: "0px"}}
            >
              <Row className="d-flex">
                <Col xs={11}>
                  <Image
                  loading="lazy"
                    fluid
                    src={retail}
                    alt="img-page"
                    style={{ objectFit: "cover", height: "39.3rem", width: "100%" }}/>
                </Col>
                <Col className='d-flex .d-md-none .d-lg-block' style={{padding: "0px"}}>
                  <div className=' rigthContainer'></div>
                </Col>
              </Row>
              <Row>
                <Col xs={11}>
                  <Row className="divRetailImg"></Row>
                </Col>
                <Col>
                  <Row className="rightContainer2"></Row>
                </Col>
              </Row> 
            </Col>
            <Col
              className="d-flex g-0"
              md={{ order: "first", span: 12 }}
              lg={{ order: "last", span: 6 }}
            >
              <Card className="p-1" style={{ border: "none" }}>
                <Card.Body
                >
                  <div className='d-flex' style={{width: "fit-content"}}>
                    <Image
                      height={70}
                      className="m-3 hvr-float d-inline"
                      src={basket}
                      alt="basket"
                    />
                    <Card.Title
                      className="mb-4 ps-2 mt-5 d-inline serviceTitle"
                      style={{
                        fontSize: "45px",
                        fontWeight: "bold"
                      }}
                    >
                      {t("General.Title2")}
                    </Card.Title>
                  </div>
                 
                  <Card.Text
                    className=" mt-5 ps-2 serviceDescr"
                    style={{ textAlign: "center" }}
                  >
                    {t("Home.Description3")}
                  </Card.Text>
                  <Row className="mt-5">
                    <Col>
                      <p className='underline'>01</p>
                      <p className='serviceItem'>{t("Products.2Bullet1")}</p>
                    </Col>
                    <Col style={{display: "inline-block", alignSelf: "flex-end"}}>
                      <p className='underline'>02</p>
                      <p className='serviceItem'>{t("Products.2Bullet2")}</p></Col>
                    <Col>
                      <p className='underline'>03</p>
                      <p className='serviceItem'>{t("Products.2Bullet3")}</p>
                    </Col>
                    <Col style={{display: "inline-block", alignSelf: "flex-end"}}>
                      <p className='underline'>04</p>
                      <p className='serviceItem'>{t("Products.2Bullet4")}</p>
                    </Col>
                    <Col>
                      <p className='underline'>05</p>
                      <p className='serviceItem'>{t("Products.2Bullet5")}</p>
                    </Col>
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

          <Row className='position-relative mb-5'>
            <Card className="d-flex" style={{border: "none"}}>
            <Card.Img
              fluid
              src={medicaIA}
              className='healthImg'
              alt="salud"
              style={{ objectFit: "cover", opacity: "0.6"}}
                />
            <Card.ImgOverlay>
              <Image
                height={70}
                className="m-3 hvr-float position-absolute top-0 end-0"
                src={health}
                alt="health"
              />
              <Card.Body
              >
                <Card.Title
                  className="mb-5 text-center serviceTitle"
                  style={{
                    fontSize: "45px",
                    fontWeight: "bold"
                  }}
                >
                  {t("General.Title3")}
                </Card.Title>
                <Card.Text
                  className="mt-2 mb-2 pe-4 serviceDescr text-white healthDescrp"
                >
                  {t("Home.Description4")}
                </Card.Text>
            
                {/*<NavHashLink
                className=" mb-0"
                to="/Productos#salud"
                >
                {t("General.More")}
                </NavHashLink>*/}
                <Row className="healthItems m-auto mt-5 mb-3">
                  <Col sm className="healthItem" style={{backgroundColor: "#F2D7A7", padding: "0px"}}>
                    <div style={{backgroundColor: "#434242", height: "10px", borderRadius: "10px"}}></div>
                    <p className="healthText serviceItem">{t("Products.3Bullet1")}</p>
                  </Col>
                  <Col sm className="healthItem" style={{backgroundColor: "#F2D7A7", padding: "0px"}}>
                    <div style={{backgroundColor: "#434242", height: "10px", borderRadius: "10px"}}></div>
                    <p className="healthText serviceItem">{t("Products.3Bullet2")}</p>
                  </Col>
                </Row>
                <Row className="healthItems m-auto">
                  <Col sm className="healthItem" style={{backgroundColor: "#F2D7A7", padding: "0px"}}>
                    <div style={{backgroundColor: "#434242", height: "10px", borderRadius: "10px"}}></div>
                    <p className="healthText serviceItem">{t("Products.3Bullet3")}</p>
                  </Col>
                  <Col sm className="healthItem" style={{backgroundColor: "#F2D7A7", padding: "0px"}}>
                    <div style={{backgroundColor: "#434242", height: "10px", borderRadius: "10px"}}></div>
                    <p className="healthText serviceItem">{t("Products.3Bullet4")}</p>
                  </Col>
                </Row>
              </Card.Body>
              <NavHashLink to="/Productos#salud">
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

          <Row className="mb-5">
            <Col className="d-flex g-0" lg={6} md={12}>
              <Card className="p-1 g-0" style={{ border: "none"}}>
                <Card.Body
                  style={{display: "flex", flexDirection: "column" }}
                >
                  <div className="d-flex justify-content-center align-items-center">
                    <Card.Title
                      className="mb-0 serviceTitle text-center"
                      style={{
                        fontSize: "45px",
                        fontWeight: "bold"
                      }}
                    >
                      {t("General.Title4")}
                    </Card.Title>
                    <Image
                      height={70}
                      className="m-3 hvr-float"
                      src={car}
                      alt="car"
                    />
                  </div>
                  <div className='containerCar'>
                    <Card.Text
                      className=" mt-2 mb-2 pe-2 serviceDescr"
                    >
                      {t("Home.Description5")}
                    </Card.Text>
                  </div>
              
                  {/*<NavHashLink
                  className=" mb-2 "
                  to="/Productos#infraestructura"
                  >
                  {t("General.More")}
                  </NavHashLink>*/}
                </Card.Body>
              </Card>
            </Col>
            <Col id="imagenInicio" lg={6} md={12} style={{padding: "0px", zIndex: "9"}}>
              <Image
                loading="lazy"
                  fluid
                  src={movilidad}
                  alt="img-page"
                  style={{ objectFit: "cover", height: "39.3rem", width: "100%" }}
                />
            </Col>
            <Row className="itemsCar m-auto">
              <Col sm className="text-center itemCar align-middle serviceItem">{t("Products.4Bullet1")}</Col>
              <Col sm className="text-center itemCar serviceItem">{t("Products.4Bullet2")}</Col>
              <Col sm className="text-center itemCar serviceItem">{t("Products.4Bullet3")}</Col>
              <Col sm className="text-center itemCar serviceItem">{t("Products.4Bullet4")}</Col>
            </Row>
          </Row>

          <Row className="mb-5">
          <Col
              id="imagenInicio"
              md={{ order: "last", span: 12 }}
              lg={{ order: "first", span: 6 }}
              style={{ zIndex: "9" }}
            >
              <Image
              loading="lazy"
                fluid
                src={banca}
                alt="img-page"
                style={{ objectFit: "cover", height: "39.3rem", width: "100%" }}
              />
            </Col>
            <Col
              className="d-flex g-0"
              md={{ order: "first", span: 12 }}
              lg={{ order: "last", span: 6 }}
            >
              <Card className="p-1" style={{ border: "none" }}>
                <Card.Body
                  style={{display: "flex", flexDirection: "column"}}
                >
                  <div className="d-flex ">
                    <Card.Title
                      className="mb-0 ps-2 mt-3 serviceTitle"
                      style={{
                        fontSize: "45px",
                        fontWeight: "bold"
                      }}
                    >
                      {t("General.Title5")}
                    </Card.Title>
                    <Image
                      height={70}
                      className="m-3 hvr-float"
                      src={money}
                      alt="money"
                    />
                  </div>
                  <Row className="brownBackgr"></Row>
                  <div className='description mt-5 mb-5 ps-3'>
                    <Card.Text
                      className=" mt-2 mb-2 ps-2 serviceDescr bancaText"
                    >
                      {t("Home.Description6")}
                    </Card.Text>
                  </div>
                  <Row className='mt-5 mb-5' style={{zIndex: "9"}}>
                    <Col sm className="bancaItem mb-5">
                      <div className='circle mb-2'></div>
                      <p className= "bancaText serviceItem">{t("Products.5Bullet1")}</p>
                    </Col>
                    <Col sm className="bancaItem mb-5">
                      <div className='circle mb-2'></div>
                      <p className= "bancaText serviceItem">{t("Products.5Bullet3")}</p>
                    </Col>
                    <Col sm className="bancaItem mb-5">
                      <div className='circle mb-2'></div>
                      <p className= "bancaText serviceItem">{t("Products.5Bullet2")}</p>
                    </Col>
                    <Col sm className="bancaItem mb-5">
                      <div className='circle mb-2'></div>
                      <p className= "bancaText serviceItem">{t("Products.5Bullet4")}</p>
                    </Col>
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
