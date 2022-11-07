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
        <p className='d-flex justify-content-center text-white' style={{ fontSize: "20px" }}>Somos una empresa dedicada a proveer servicios de consultoría y el desarrollo de soluciones basadas en tecnologías de la información aplicadas en el manejo de datos y la inteligencia de negocios para maximizar el valor agregado de nuestros clientes.</p>
        {/* <p className='d-flex justify-content-center text-white' style={{ fontSize: "20px" }}>Realizamos vínculos a través de proyectos colaborativos con la academia para un mayor desarrollo científico en el país.</p> */}
      </Container>
      <Container fluid >
        <Row >
          <Col lg={{ span: 4, offset: 1 }} className='change-Size'>
          <div className='mision mx-auto animate__animated animate__fadeInLeft mt-5 p-3'>
                <h1 className='tituloMision m-4 text-white'>Misión </h1>
                <h4 className='textMision m-2 text-white'> Dotar a nuestros clientes soluciones basadas en el manejo de datos y analítica
predictiva para eficientar los procesos de toma decisiones en los negocios. </h4>
            </div>
          </Col>
          <Col lg={{ span: 4, offset: 2 }} className='change-Size'>
            <div className='vision mx-auto animate__animated animate__fadeInRight mt-5 p-3' >
                <h1 className='tituloVision m-4 text-white'>Visión </h1>
                <h4 className='textVision m-2 text-white'> Ser la empresa referente de México en consultoría en ciencia de datos e
inteligencia de negocios para competir con en el mercado latino americano y
contar con presencia en EUA.</h4>
            </div>
          </Col>
        </Row>
        <Row>
          <Col className='g-0'>
          <div className='nuestroEquipo mt-5 p-4 text-white'> 
            <h1 className='tituloNuestroEquipo m-4'>Nuestro Equipo </h1>
            <h2 className='textNuestroEquipo m-2'>En Kaminoittech contamos con un equipo interdisciplinario de expertos en ciencia de datos, analítica predictiva y de desarrollo de aplicaciones, que, junto con nuestro equipo técnico, socios comerciales y nuestras alianzas estratégicas nos permiten crear soluciones innovadoras y flexibles para cada proyecto.</h2>
          </div>
          </Col>
        </Row>
      </Container>
    </>
  )
}
export default Nosotros;

