import { Col, Container, Row, Card, Image } from 'react-bootstrap';
import page from '../images/frontpage.jpg';

const Inicio = () => {
  return (
    <>
      <Container fluid className="p-0">
        
        <Card className="bg-dark text-white" style={{ borderRadius: "0" }} >
            <Image src={page} alt='img-page' style={{ objectFit: 'cover', height: '22rem' }} className='p-0' />
          <Card.ImgOverlay className='d-flex align-items-center p-5'>
            <Col className="p-0" >
              <Card.Title style={{ fontSize: "2rem" }}>
                Soluciones tecnológicas en inteligencia de negocios y el
                manejo de datos.
              </Card.Title>
            </Col>
          </Card.ImgOverlay>
        </Card>
        
        {/* Comienzan las cards de servicios */}
        <Row>
          <Col style={{ borderRight: 'solid #6BBBAE 1px', borderBottom: 'solid #6BBBAE 1px' }} className="p-0">
            <Card className="p-5" style={{  border:'none' }}>
              <Card.Body>
                <Card.Title  style={{ fontSize: "2rem", textAlign: "justify" }}>
                  ¿Qué hacemos por ti?
                </Card.Title>
                <Card.Text style={{ fontSize: '20px' }}>
                  Te ofrecemos nuestros siguientes servicios.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col style={{  borderBottom: 'solid #6BBBAE 1px' }} className="p-0">
            <Card className="p-5" style={{  border:'none' }}>
              <Card.Body>
                <Card.Title  style={{ fontSize: '25px' }}>
                  <i className="bi bi-heart-pulse m-3" style={{ fontSize: '45px', color: '#6BBBAE' }}></i>
                  Salud
                </Card.Title>
                <Card.Text style={{ fontSize: '18px', textAlign: 'justify' }}>
                  Desarrollo de sistemas de diagnóstico asistido por
                  computadora y observatorios de salud, a partir de
                  herramientas de visión por computadora e inteligencia
                  artificial (IA).
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
          <Row>
            <Col style={{  borderRight: 'solid #6BBBAE 1px' }} className="p-0">
              <Card className="p-5" style={{  border:'none' }}>
                <Card.Body>
                  <Card.Title  style={{ fontSize: '25px', border:'none' }}>
                    <i className="bi bi-graph-up-arrow m-3" style={{ fontSize: '45px', color: '#6BBBAE' }}></i>
                    Retail & B2B
                  </Card.Title>
                  <Card.Text className='pt-1' style={{ fontSize: '18px', textAlign: 'justify' }}>
                    Desarrollo de sistemas de gestión de datos e
                    información para la optimización de estrategias de venta,
                    seguimiento de insumos clave y monitoreo del
                    comportamiento del consumidor.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>

            <Col className="p-0">
              <Card className="p-5" style={{  border:'none' }}>
                <Card.Body>
                  <Card.Title className="mb-2" style={{ fontSize: '25px' }}>
                    <i className="bi bi-building m-3" aria-hidden="true" style={{ fontSize: '45px', color: '#6BBBAE' }}></i>
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
      </Container>
    </>
  );
}
export default Inicio;
