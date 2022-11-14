/**
 * Vista de página Nosotros. 
 */
import { Container, Row, Col, Image, Card } from 'react-bootstrap/';
import nombre from '../images/nombre2.png';
/* import imgMision from '../images/mision.jpg'; */
/* import imgVision from '../images/vision.jpg'; */
/* import imgNuestroEquipo from '../images/nuestroEquipo.jpg'; */

//Logos
import logoUNAM from '../logos/logoUNAM.png';
import logoHuawei from '../logos/logoHuawei.png';
import logoSCT from '../logos/logoSCT.png';
import logoChihuahua from '../logos/logoChihuahua.png';
import logoNuevoLeon from '../logos/logoNuevoLeon.png';


function Nosotros() {
  return (
    <>
      <Container fluid className='bg-dark p-4 animate__animated animate__fadeInDown' >
        <div className='d-flex justify-content-center mb-4'>
          <Image fluid src={nombre} alt='logo' style={{ width: "400px" }} />
        </div>
        <p className='d-flex justify-content-center text-white' style={{ fontSize: "20px" }}>Somos una empresa dedicada a proveer servicios de consultoría y el desarrollo de soluciones basadas en tecnologías de la información aplicadas en el manejo de datos y la inteligencia de negocios para maximizar el valor agregado de nuestros clientes.</p>
      </Container>
      <Container fluid >
        <Row >
          <Col lg={{ span: 4, offset: 1 }} className='change-Size'>
            <div className='mision mx-auto animate__animated animate__fadeInLeft mt-5 p-3'>
              <h1 className='tituloMision m-4 text-white'>Misión </h1>
              <h5 className='textMision m-2 text-white'> Dotar a nuestros clientes soluciones basadas en el manejo de datos y analítica
                predictiva para eficientar los procesos de toma decisiones en los negocios. </h5>
            </div>
          </Col>
          <Col lg={{ span: 4, offset: 2 }} className='change-Size'>
            <div className='vision mx-auto animate__animated animate__fadeInRight mt-5 p-3' >
              <h1 className='tituloVision m-4 text-white'>Visión </h1>
              <h5 className='textVision m-2 text-white'> Ser la empresa referente de México en consultoría en ciencia de datos e
                inteligencia de negocios para competir con en el mercado latino americano y
                contar con presencia en EUA.</h5>
            </div>
          </Col>
        </Row>
        <Row>
          <Col className='g-0'>
            <div className='nuestroEquipo mt-5 p-4 text-white'>
              <h1 className='tituloNuestroEquipo m-4'>Nuestro Equipo </h1>
              <h4 className='textNuestroEquipo m-2'>En Kaminoittech contamos con un equipo interdisciplinario de expertos en ciencia de datos, analítica predictiva y de desarrollo de aplicaciones, que, junto con nuestro equipo técnico, socios comerciales y nuestras alianzas estratégicas nos permiten crear soluciones innovadoras y flexibles para cada proyecto.</h4>
            </div>
          </Col>
        </Row>
        <Row>
          <h2 className='p-4 d-flex justify-content-center'>Funciones destacadas</h2>
          <Col className="p-4 d-flex justify-content-center " sm>
            <Card style={{ width: '18rem', border: 'none' }}>
              <Card.Body>
                <Card.Title className="d-flex justify-content-center ">Perfil 1</Card.Title>
                <Card.Text>
                  Lorem ipsum dolor sit amet, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col sm className="p-4 d-flex justify-content-center ">
            <Card style={{ width: '18rem', border: 'none' }}>
              <Card.Body>
                <Card.Title className="d-flex justify-content-center ">Perfil 2</Card.Title>
                <Card.Text>
                  Lorem ipsum dolor sit amet, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col className="p-4 d-flex justify-content-center " sm>
            <Card style={{ width: '18rem', border: 'none' }}>
              <Card.Body>
                <Card.Title className="d-flex justify-content-center ">Perfil 3</Card.Title>
                <Card.Text>
                  Lorem ipsum dolor sit amet, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col sm className="p-4 d-flex justify-content-center ">
            <Card style={{ width: '18rem', border: 'none' }}>
              <Card.Body>
                <Card.Title className="d-flex justify-content-center ">Perfil 4</Card.Title>
                <Card.Text>
                  Lorem ipsum dolor sit amet, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <hr />
        <Row>
        <h2 className='p-4 d-flex justify-content-center'>Nuestras alianzas</h2>
          <Col sm className="p-4 d-flex justify-content-center">
          <div className="d-flex justify-content-center ">
            <Image height={100} className='m-3 hvr-grow' src={logoUNAM} alt='logoUNAM' />
          </div>
          </Col>
          <Col sm className="p-4 d-flex justify-content-center">
          <div className="d-flex justify-content-center ">
            <Image height={100} className='m-3 hvr-grow' src={logoHuawei} alt='logoHuawei' />
          </div>
          </Col>
          <Col sm className="p-4 d-flex justify-content-center">
          <div className="d-flex justify-content-center ">
          <Image height={90} className='m-3 hvr-grow' src={logoSCT} alt='logoSCT' />
          </div>
          </Col>
          <Col sm className="p-4 d-flex justify-content-center">
          <div className="d-flex justify-content-center ">
          <Image height={100} className='m-3 hvr-grow' src={logoChihuahua} alt='logoChihuahua' />
          </div>
          </Col>
          <Col sm className="p-4 d-flex justify-content-center">
          <div className="d-flex justify-content-center ">
          <Image height={100} className='m-3 hvr-grow' src={logoNuevoLeon} alt='logoNuevoLeon' />
          </div>
          </Col>
        </Row>
      </Container>
    </>
  )
}
export default Nosotros;

