import { Col, Container, Row, Card, Image, Button, Nav } from 'react-bootstrap';
import page from '../images/frontpage.jpg';
import { Link } from 'react-scroll';
import { NavLink } from  'react-router-dom';

const Inicio = () => {
  return (
    <>
      <Container fluid>
          <section id='portada-principal'>
        <Row>
          <Card className="bg-dark text-white" style={{ borderRadius: "0" }}>
              <Image fluid src={page} alt='img-page' style={{ objectFit: 'cover', height: '39.3rem' }} />
            <Card.ImgOverlay className='d-flex align-items-center m-4 animate__animated animate__fadeInUp'>
              <Col>
                <Card.Title style={{ fontSize: "2rem" }}>
                  Soluciones tecnológicas en inteligencia de negocios y el
                  manejo de datos.
                </Card.Title>

                {/* Se agrego el boton contactanos para que aparezca al inicio de la pagina para menjor interaccion con el usuario */}
                <Col xs={12} md={2} >
                    <Nav.Link as={NavLink} to="/Contacto">
                        <Button className='mx-auto hvr-pulse' variant="success">Contáctanos</Button>
                    </Nav.Link>
                </Col>
                {/* Se agrego el icono de flecha que despliega hacia abajo para cambiar a la siguientes secciones */}
                  <Link className='d-flex  justify-content-center text-white' to='cards-servicios' 
                        smooth={true} 
                        duration={0}> 
                        <i className="bi bi-arrow-down-circle hvr-hang change-Color" style={{ fontSize: '45px' }}></i>
                  </Link>
              </Col>
            </Card.ImgOverlay>
          </Card>
        </Row>
        </section>
        </Container>
        <Container>
        <section id='cards-servicios'>
          <Row>
            <Col>
              <Card className="p-5" style={{ border: 'none' }}>
                <Card.Body className='animate__animated animate__pulse'>
                  <Card.Title className='subrayado d-flex  justify-content-center' style={{ fontSize: "3rem", textAlign: "justify" }}>
                    ¿Qué hacemos por ti?
                  </Card.Title>
                  <Card.Text style={{ fontSize: '20px', textAlign: "justify" }}>
                       Ofrecemos soluciones tecnológicas enfocadas en el
                      manejo de datos para optimizar el proceso de la toma de
                      decisiones mediante la obtención de información,
                      identificación de problemas y detección de tendencias para
                      encontrar nuevas oportunidades en el modelo de negocio de
                      sus clientes.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            </Row>

            <Row style={{ background: '#6BBBAE' }}>
              <div className='d-flex  justify-content-center' style={{ fontSize: "3rem", textAlign: "justify"}}>Servicios</div>
            </Row>

        {/* Comienzan las cards de servicios */}
            <Row>
            <Col>
              <Card className="p-5 m-0" style={{ border: 'none' }}>
                <Card.Body className='animate__animated animate__fadeInUp'>
                  <Card.Title className="mb-2" style={{ fontSize: '25px' }}>
                    <i className="bi bi-building m-3 hvr-grow" aria-hidden="true" style={{ fontSize: '45px', color: '#6BBBAE' }}></i>
                    Infraestructura
                  </Card.Title>
                  <Card.Text style={{ fontSize: '18px', textAlign: 'justify' }}>
                    Implementación de modelos de IA y
                    percepción remota para estandarizar los procesos de
                    adquisición de datos y métricas cuantitativas aplicables a la
                    supervisión, monitoreo y diagnóstico de activos de
                    infraestructura pública y privada.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>

          </Row>
          <Row>
            <Col>
              <Card className="p-5" style={{ border: 'none' }}>
                <Card.Body className='animate__animated animate__fadeInUp'>
                  <Card.Title style={{ fontSize: '25px', border: 'none' }}>
                    <i className="bi bi-graph-up-arrow m-3 hvr-float" style={{ fontSize: '45px', color: '#6BBBAE' }}></i>
                    Retail & B2B
                  </Card.Title>
                  <Card.Text className='pt-1' style={{ fontSize: '18px', textAlign: 'justify' }}>
                    Desarrollo de sistemas de gestión de datos e
                    información para la optimización de estrategias de venta,
                    seguimiento de insumos clave y monitoreo del
                    comportamiento del consumidor a partir del uso de
                    herramientas de análisis de canastos y prospectiva de
                    negocios.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            </Row>

            <Row>
            <Col>
              <Card className=" p-5" style={{ border: 'none' }}>
                <Card.Body className='animate__animated animate__fadeInUp'>
                  <Card.Title style={{ fontSize: '25px' }}>
                    <i className="bi bi-heart-pulse m-3 hvr-pulse" style={{ fontSize: '45px', color: '#6BBBAE' }}></i>
                    Salud
                  </Card.Title>
                  <Card.Text style={{ fontSize: '18px', textAlign: 'justify' }}>
                    Desarrollo de sistemas de diagnóstico asistido por
                    computadora y observatorios de salud, a partir de
                    herramientas de visión por computadora e inteligencia
                    artificial (IA) para disminuir la variabilidad intraoperador al
                    procesar grandes cantidades de datos, sistematizar tareas
                    rutinarias y reducir costos en los sistemas hospitalarios y de
                    proveedores de servicios.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            {/* <Link to='portada-principal' smooth={true} duration={0}> <i className="bi bi-caret-up hvr-bob " style={{ fontSize: '45px' }}></i></Link> */}
          </Row>
        </section>
      </Container>
    </>
  );
}
export default Inicio;
