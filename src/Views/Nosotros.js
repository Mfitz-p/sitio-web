import { Container, Row, Col} from 'react-bootstrap/';

function Nosotros() {
  return (
    <>
    <Container fluid >
        <div className='d-flex justify-content-md-center'style={{fontFamily:"Lora", fontSize: "64px", color: "#6BBBAE"}}>Kaminoittech</div>
        <p>Nos enfocamos en crear soluciones en tecnologías
        de la información aplicadas a la consultoría y a la inteligencia de negocios.
    
        Realizamos vínculos a través de proyectos
        colaborativos con la academia para un mayor
        desarrollo científico en el país.
        </p>
    </Container>
   <Container fluid >
    <Row className='d-flex aligns-items-center justify-content-center'>
        <Col md={5}>Misión 
            <div style={{borderTop:"solid #6BBBAE 3px"}}>Construir soluciones para la automatización de procesos
            que generen valor y una mejor experiencia para nuestros
            clientes.</div>
        </Col>
        <Col md={5}>Vision 
            <div style={{borderTop:"solid #6BBBAE 3px"}}>Buscamos dotar a nuestros socios un panorama más
            amplio sobre las ventajas del uso de las tecnologías de la
            información en proyectos de infraestructura.
            </div>
        </Col>
    </Row>
   </Container>
    </>
  )
}

export default Nosotros