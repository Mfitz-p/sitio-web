import { Col, Container, Row, Card, Image, Button, Nav } from 'react-bootstrap';
import { Link } from 'react-scroll';
import { NavLink } from 'react-router-dom';
import { useInView } from 'react-intersection-observer';
import "../App.css";
//Imágenes
import page from '../images/frontpage.jpg';
import infraestructura from '../images/infraestructura.jpg';
import medicaIA from '../images/medicaIA.jpg';
import retail from '../images/retail.jpg';
import movilidad from '../images/movilidad.jpg';
import banca from '../images/banca.jpg';
//Íconos
import basket from '../icons/basket.svg';
import city from '../icons/city.svg';
import health from '../icons/health.svg';

const Inicio = () => {

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
    delay: 3000
  });

  return (
    <>
      <Container fluid>
        <section id='portada-principal'>
          <Row>
            <Card className="bg-dark text-white" style={{ borderRadius: "0" }}>
              <Image fluid src={page} alt='img-page' style={{ objectFit: 'cover', height: '39.3rem' }} />
              <Card.ImgOverlay className='d-flex flex-column  m-4 animate__animated animate__fadeInUp'>
                <Col className='d-flex justify-content-center flex-column'>
                  <Card.Title style={{ fontSize: "2.3rem" }}>
                  Analítica predictiva y soluciones inteligentes para la transformación de tu negocio. 
                  </Card.Title>
                  {/* Botón contáctanos que redirige al inicio de la página */}
                  <Col xs={12} md={2} >
                    <Nav.Link as={NavLink} to="/Contacto">
                      <Button className='mx-auto hvr-pulse boton-principal' variant="success">Contáctanos</Button>
                    </Nav.Link>
                  </Col>
                </Col>
                {/* Ícono de flecha que despliega hacia abajo para cambiar a la siguientes secciones */}
                <Link className=' d-flex justify-content-center text-white' to='cards-servicios'
                  smooth={true}
                  duration={0}>
                  <i className="bi bi-arrow-down-circle hvr-hang change-Color" style={{ fontSize: '45px', cursor: 'pointer' }}></i>
                </Link>
              </Card.ImgOverlay>
            </Card>
          </Row>
        </section>
      </Container>

      <Container fluid>
        <section id='cards-servicios'>
          <Row>
            <Col className='d-flex flex-row' >
              <Card className="p-5 " style={{ border: 'none' }}>
                <Card.Body className='animate__animated animate__pulse'>
                  <Card.Title className='subrayado d-flex justify-content-center' style={{ fontSize: "3rem", textAlign: "justify" }}>
                    ¿Qué hacemos por ti?
                  </Card.Title>
                  <Card.Text style={{ fontSize: '20px', textAlign: "justify" }}>
                  Ofrecemos soluciones inteligentes enfocadas en el manejo de big data para asistir y optimizar los procesos de identificación de problemas, obtención de información, detección de tendencias y toma de decisiones, utilizando herramientas avanzadas de analítica predictiva, inteligencia artificial y visión por computadora.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        
          <Row style={{ background: '#6BBBAE' }}>
            <div className=' d-flex justify-content-center' style={{ fontSize: "3rem", textAlign: "justify" }}>Servicios</div>
          </Row>
         {/*  Ícono de la flecha que redirige a la sección inicial de la vista */}
          <div ref={btn} className='btn-arriba d-flex justify-content-end sticky-sm-top'>
            <Link to='portada-principal' smooth={true} duration={0}>
              <i className={`${up ? 'bi bi-arrow-up-circle animate__animated animate__fadeInUp' : null} `} ></i>
            </Link>
          </div>
          {/* Comienzan las cards de servicios */}
          <Row className='mx-5' >
            <Col className="d-flex align-items-center g-0" md={6}>
              <Card className="p-1 g-0" style={{ border: 'none' }} >
                <Card.Body ref={textcard1} className={`${effectScroll ? 'animate__animated animate__fadeInLeft' : 'reverseObserver'}`}>
                  <Card.Title className="mb-2" style={{ fontSize: '25px' }}>
                    <Image height={70} className='m-3 hvr-grow' src={city} alt='city' />
                    Infraestructura
                  </Card.Title>
                  <Card.Text style={{ fontSize: '18px', textAlign: 'justify' }}>
                  Estandarizamos tus procesos de supervisión y evaluación de activos de infraestructura pública y privada mediante métodos de visión por computadora e IA.
                  </Card.Text>
                  <Card.Link as={NavLink} to="/Productos#infraestructura">Ver más...</Card.Link>
                </Card.Body>
              </Card>
            </Col>
            <Col id="imagenInicio" md={6} >
              <Image fluid src={infraestructura} ref={imgcard1}  className={`${effectImgScroll ? 'animate__animated animate__fadeInRight' : 'reverseObserver'}`} alt='img-page' style={{ objectFit: 'cover', height: '39.3rem' }} />
            </Col>
          </Row>

          <Row className='mx-5'>
            <Col id="imagenInicio" md={6}>
              <Image fluid src={retail} alt='img-page' ref={imgcard2} className={`${effectImgScroll2 ? 'animate__animated animate__fadeInLeft' : 'reverseObserver'}`} style={{ objectFit: 'cover', height: '39.3rem' }} /></Col>
            <Col className="d-flex align-items-center g-0">
              <Card className="p-1" style={{ border: 'none' }}>
                <Card.Body ref={textcard2} className={`${effectScroll2 ? 'animate__animated animate__fadeInRight' : 'reverseObserver'}`}>
                  <Card.Title style={{ fontSize: '25px', border: 'none' }}>
                    <Image height={70} className='m-3 hvr-float' src={basket} alt='basket' />
                    Retail & B2B
                  </Card.Title>
                  <Card.Text className='pt-1' style={{ fontSize: '18px', textAlign: 'justify' }}>
                  Optimizamos tus estrategias de venta mediante la implementación de analítica descriptiva y predictiva del comportamiento del consumidor en tu negocio. 
                  </Card.Text>
                  <Card.Link as={NavLink} to="/Productos#retail">Ver más...</Card.Link>
                </Card.Body>
              </Card>
            </Col>
          </Row>

          <Row className='mx-5 mb-5'>
            <Col className="d-flex align-items-center g-0" md={6}>
              <Card className="p-1" style={{ border: 'none' }}>
                <Card.Body ref={textcard3} className={`${effectScroll3 ? 'animate__animated animate__fadeInLeft' : 'reverseObserver'}`}>
                  <Card.Title style={{ fontSize: '25px' }}>
                    <Image height={70} className='m-3 hvr-pulse' src={health} alt='health' />
                    Salud
                  </Card.Title>
                  <Card.Text style={{ fontSize: '18px', textAlign: 'justify' }}>
                  Desarrollamos soluciones basadas en aprendizaje por computadora para la asistencia en procedimientos clínicos y tareas rutinarias dentro de los sistemas de salud.
                  </Card.Text>
                  <Card.Link as={NavLink} to="/Productos#salud">Ver más...</Card.Link>
                </Card.Body>
              </Card>
            </Col>
            <Col id="imagenInicio" md={6}>
              <Image fluid src={medicaIA} ref={imgcard3} className={`${effectImgScroll3 ? 'animate__animated animate__fadeInRight' : 'reverseObserver'}`} alt='img-page' style={{ objectFit: 'cover', height: '39.3rem' }} /></Col>
          </Row>

          <Row className='mx-5'>
            <Col id="imagenInicio" md={6}>
              <Image fluid src={movilidad} alt='img-page' ref={imgcard4} className={`${effectImgScroll4 ? 'animate__animated animate__fadeInLeft' : 'reverseObserver'}`} style={{ objectFit: 'cover', height: '39.3rem' }} /></Col>
            <Col className="d-flex align-items-center g-0">
              <Card className="p-1" style={{ border: 'none' }}>
                <Card.Body ref={textcard4} className={`${effectScroll4 ? 'animate__animated animate__fadeInRight' : 'reverseObserver'}`}>
                  <Card.Title style={{ fontSize: '25px', border: 'none' }}>
                    <Image height={70} className='m-3 hvr-float' src={basket} alt='basket' />
                    Movilidad y Transportes
                  </Card.Title>
                  <Card.Text className='pt-1' style={{ fontSize: '18px', textAlign: 'justify' }}>
                  Optimizamos tus estrategias de venta mediante la implementación de analítica descriptiva y predictiva del comportamiento del consumidor en tu negocio. 
                  </Card.Text>
                  <Card.Link as={NavLink} to="/Productos#movilidad">Ver más...</Card.Link>
                </Card.Body>
              </Card>
            </Col>
          </Row>

          <Row className='mx-5 mb-5'>
            <Col className="d-flex align-items-center g-0" md={6}>
              <Card className="p-1" style={{ border: 'none' }}>
                <Card.Body ref={textcard5} className={`${effectScroll5 ? 'animate__animated animate__fadeInLeft' : 'reverseObserver'}`}>
                  <Card.Title style={{ fontSize: '25px' }}>
                    <Image height={70} className='m-3 hvr-pulse' src={health} alt='health' />
                    Banca
                  </Card.Title>
                  <Card.Text style={{ fontSize: '18px', textAlign: 'justify' }}>
                  Asistimos en la toma de decisiones para la creación de una visión estratégica de control y vigilancia, fomentando la inclusión financiera y garantizando la seguridad de tus inversiones.
                  </Card.Text>
                  <Card.Link as={NavLink} to="/Productos#banca">Ver más...</Card.Link>
                </Card.Body>
              </Card>
            </Col>
            <Col id="imagenInicio" md={6}>
              <Image fluid src={banca} ref={imgcard5} className={`${effectImgScroll5 ? 'animate__animated animate__fadeInRight' : 'reverseObserver'}`} alt='img-page' style={{ objectFit: 'cover', height: '39.3rem' }} /></Col>
          </Row>
        </section>
      </Container>
    </>
  );
}
export default Inicio;
