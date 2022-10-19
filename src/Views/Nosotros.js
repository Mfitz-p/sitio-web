/**
 * Vista de página Nosotros. 
 */
import { Container, Card, Row, Col } from 'react-bootstrap/';

function Nosotros() {
  return (
    <>
      <Container fluid className='bg-dark p-3 m-0'>
        <div className='d-flex justify-content-center mb-4' style={{ fontSize: "clamp(32px, 4vw, 48px)", color: "#6BBBAE" }}>KAMINOITTECH</div>
        <p className='d-flex justify-content-center text-white' style={{ fontSize: "20px" }}>Nos enfocamos en crear soluciones en tecnologías
          de la información aplicadas a la consultoría y a la inteligencia de negocios.</p>
        <p className='d-flex justify-content-center text-white' style={{ fontSize: "20px" }}>Realizamos vínculos a través de proyectos colaborativos con la academia para un mayor desarrollo científico en el país.</p>
      </Container>
      <Container fluid >
        {/*  className="d-flex justify-content-around" */}
        <Row >
          <Col md={{ span: 4, offset: 1 }}>
            <Card className="mx-auto " style={{  marginTop: '4rem', border: 'none' }}>
              <Card.Body>
                <Card.Title className='mb-0 pb-3' style={{ fontSize: "32px" }}>Misión</Card.Title>
                <Card.Text  style={{ borderTop: "solid #6BBBAE 3px", fontSize: "20px", textAlign: "justify" }}>
                  Construir soluciones para la automatización de procesos
                  que generen valor y una mejor experiencia para nuestros
                  clientes.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={{ span: 4, offset: 2 }}>
            <Card className="mx-auto" style={{ marginTop: '4rem', border: 'none' }}>
              <Card.Body>
                <Card.Title className='mb-0 pb-3' style={{ fontSize: "32px" }} >Vision</Card.Title>
                <Card.Text style={{ borderTop: "solid #6BBBAE 3px", fontSize: "20px", textAlign: "justify" }}>
                  Buscamos dotar a nuestros socios un panorama más
                  amplio sobre las ventajas del uso de las tecnologías de la
                  información en proyectos de infraestructura.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default Nosotros

