/**
 * Vista de página Nosotros. 
 */
import { Container, Card, Row, Col, Image } from 'react-bootstrap/';
import imgMision from '../images/imgMision.png';
import imgVision from '../images/imgVision.png';

function Nosotros() {
  return (
    <>
      <Container fluid className='bg-dark p-4 animate__animated animate__fadeInDown' >
        <div className='d-flex justify-content-center mb-4' style={{ fontSize: "clamp(43px, 4vw, 4px)", color: "#6BBBAE" }}>KAMINOITTECH</div>
        <p className='d-flex justify-content-center text-white' style={{ fontSize: "20px" }}>Nos enfocamos en crear soluciones en tecnologías
          de la información aplicadas a la consultoría y a la inteligencia de negocios.</p>
        <p className='d-flex justify-content-center text-white' style={{ fontSize: "20px" }}>Realizamos vínculos a través de proyectos colaborativos con la academia para un mayor desarrollo científico en el país.</p>
      </Container>
      <Container fluid >
        <Row>
          <Col md={{ span: 4, offset: 1 }}>
            <Card className="mx-auto animate__animated animate__fadeInLeft" style={{ marginTop: '4rem', border: 'none' }}>
              <Card.Body className='change-Size'>
                <Card.Title className='mb-0 pb-4' style={{ fontSize: "32px" }}>Misión</Card.Title>
                <Card.Text style={{ borderTop: "solid #6BBBAE 3px", textAlign: "justify" }}>
                  Construir soluciones para la automatización de procesos
                  que generen valor y una mejor experiencia para nuestros
                  clientes.
                </Card.Text>
              </Card.Body> 
            </Card>
            <Row>
              <Col style={{ display: 'flex', justifyContent: 'flex-end' }}  >
                <Image className='' src={imgMision} alt='imgMision' style={{ height: '19rem' }} />
              </Col>
            </Row>
          </Col>
          <Col md={{ span: 4, offset: 2 }}>
            <Card className="mx-auto animate__animated animate__fadeInRight" style={{ marginTop: '4rem', border: 'none' }}>
              <Card.Body className='change-Size'>
                <Card.Title className='mb-0 pb-3' style={{ fontSize: "32px" }} >Visión</Card.Title>
                <Card.Text style={{ borderTop: "solid #6BBBAE 3px", textAlign: "justify" }} >
                  Buscamos dotar a nuestros socios un panorama más
                  amplio sobre las ventajas del uso de las tecnologías de la
                  información en proyectos de infraestructura.
                </Card.Text>
              </Card.Body>
            </Card>
            <Row>
              <Col style={{ display: 'flex', justifyContent: 'flex-end' }}  >
                <Image src={imgVision} alt='imgVision' style={{ height: '18rem' }} />
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </>
  )
}
export default Nosotros

