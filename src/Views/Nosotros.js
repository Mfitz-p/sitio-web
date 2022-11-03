/**
 * Vista de página Nosotros. 
 */
import { Container, Row, Col} from 'react-bootstrap/';
/* import imgMision from '../images/mision.jpg'; */
/* import imgVision from '../images/vision.jpg'; */
/* import imgNuestroEquipo from '../images/nuestroEquipo.jpg'; */

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
          <div className='mision mx-auto animate__animated animate__fadeInLeft mt-5 p-3'>
                <h1 className='tituloMision m-4 text-white'>Misión </h1>
                <h4 className='textMision m-2 text-white'>  Construir soluciones para la automatización de procesos
                  que generen valor y una mejor experiencia para nuestros
                  clientes. </h4>
            </div>
          </Col>
          <Col md={{ span: 4, offset: 2 }}>
            <div className='vision mx-auto animate__animated animate__fadeInRight mt-5 p-3'>
                <h1 className='tituloVision m-4 text-white'>Visión </h1>
                <h4 className='textVision m-2 text-white'> Buscamos dotar a nuestros socios un panorama más
                      amplio sobre las ventajas del uso de las tecnologías de la
                      información en proyectos de infraestructura. </h4>
            </div>
          </Col>
        </Row>
        <Row>
          <Col className='g-0'>
          <div className='nuestroEquipo mt-5 mb-5 p-4 text-white'> 
            <h1 className='tituloNuestroEquipo m-4'>Nuestro Equipo </h1>
            <h2 className='textNuestroEquipo m-2'>Lorem ipsum dolor sit amet consectetur adipiscing elit fermentum pulvinar urna, cras scelerisque tristique litora dictumst ultricies auctor per erat, gravida congue eu eget ligula lacus hendrerit cursus interdum. </h2>
          </div>
          </Col>
        </Row>
      </Container>
    </>
  )
}
export default Nosotros;

