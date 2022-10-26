
import { Container, Image, Card, Col, Row } from 'react-bootstrap';
import imgSistemasGestion from '../../images/imgDSG.png';
import imgModelosML from '../../images/imgModelosML.png';
import imgBusinessInte from '../../images/imgBusinessInte.png';
import imgVisionComputadora from '../../images/img-VisionComputadora.png';
import imgBigData from '../../images/img-BigData.png';
//import { Link } from 'react-scroll'
import "../../App.css";
const Productos = () => {
  return (
    <>
      <Container>
        <Row className='p-5'>
          <Col>
              <h2 className='animate__animated animate__fadeInUp' style={{ fontWeight: 'bold' }}>Nuestro modelo de negocios nos permite facilitarte los siguientes productos</h2>
              <hr/>
          </Col>
        </Row>
        {/* Inician las cards de productos con su respectiva imagen */} 
      <Row  className='align-items-center'> 
            <Col >
              <Card className="p-5" style={{ border:'none' }}>
                <Card.Body className='animate__animated animate__zoomIn'>
                  <Card.Title  style={{ fontSize: '25px', border:'none' }}>
                    <i class="bi bi-clipboard2-check m-3" style={{ color: '#6BBBAE' }}></i>
                    Desarrollo de sistemas de gestión
                  </Card.Title>
                  <Card.Text style={{ fontSize: '18px', textAlign: 'justify' }}>
                    <p className='mb-0'>▸ Solución conceptual del problema</p>
                    <p className='mb-0'>▸ Elaboración y creación de módulos</p>
                    <p className='mb-0'>▸ Implementación y seguimiento del sistema</p>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col >
              <Card className="p-5" style={{  border:'none'}}>
                <Card.Body >
                    <Image className='shadow p-3 mb-5 bg-body rounded' fluid src={imgSistemasGestion} alt='imgSistemasGestion' />
                </Card.Body>
              </Card>
            </Col>
          </Row>

          <Row className='align-items-center' style={{ borderTop: 'solid #6BBBAE 1px'}}>
          <Col>
              <Card className="p-5" style={{  border:'none'}}>
                <Card.Body>
                    <Image className='box' fluid src={imgModelosML} alt='imgModelosML' />
                </Card.Body>
              </Card>
            </Col>
            <Col >
              <Card className="p-5" style={{  border:'none' }}>
                <Card.Body className='animate__animated animate__zoomIn'>
                  <Card.Title  style={{ fontSize: '25px', border:'none' }}>
                    <i class="bi bi-cpu m-3" style={{ color: '#6BBBAE' }}></i>
                    Modelos de Machine Learning
                  </Card.Title>
                  <Card.Text style={{ fontSize: '18px', textAlign: 'justify' }}>
                    <p className='mb-0'>▸ Redes Neuronales</p>
                    <p className='mb-0'>▸ Agrupación y clasificación</p>
                    <p className='mb-0'>▸ Análisis y predicción del comportamiento</p>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>

          <Row className='align-items-center' style={{  borderTop: 'solid #6BBBAE 1px'}}>
            <Col>
              <Card className="p-5" style={{  border:'none' }}>
                <Card.Body className='animate__animated animate__zoomIn'>
                  <Card.Title  style={{ fontSize: '25px', border:'none' }}>
                    <i class="bi bi-bounding-box m-3" style={{ color: '#6BBBAE'}}></i>
                    Business Intelligence
                  </Card.Title>
                  <Card.Text style={{ fontSize: '18px', textAlign: 'justify' }}>
                    <p className='mb-0'>▸ Construcción, mantenimiento y operación de páginas web</p>
                    <p className='mb-0'>▸ Desarrollo de tableros analíticos y de visualización</p>
                    <p className='mb-0'>▸ Optimización SEO</p>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card className="p-5" style={{  border:'none' }}>
                <Card.Body>
                    <Image className='box' fluid src={imgBusinessInte} alt='imgBusinessInte'/>
                </Card.Body>
              </Card>
            </Col>
          </Row>

          <Row className='align-items-center' style={{  borderTop: 'solid #6BBBAE 1px'}}>
          <Col>
              <Card className="p-5" style={{  border:'none' }}>
                <Card.Body>
                    <Image className='box' fluid src={imgVisionComputadora} alt='imgVisionComputadora'/>
                </Card.Body>
              </Card>
            </Col>
            <Col >
              <Card className="p-5" style={{  border:'none' }}>
                <Card.Body className='animate__animated animate__zoomIn'>
                  <Card.Title  style={{ fontSize: '25px', border:'none' }}>
                    <i class="bi bi-intersect m-3" style={{ color: '#6BBBAE' }}></i>
                    Percepción remota y visión de computadora
                  </Card.Title>
                  <Card.Text style={{ fontSize: '18px', textAlign: 'justify' }}>
                    <p className='mb-0'>▸ Base de datos de imágenes</p>
                    <p className='mb-0'>▸ Reconocimiento de objetos  en imágenes y videos</p>
                    <p className='mb-0'>▸ Análisis de diferentes canales del espectro electromagnético</p>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>

          <Row className='align-items-center' style={{  borderTop: 'solid #6BBBAE 1px'}}>
            <Col>
              <Card className="p-5" style={{  border:'none' }}>
                <Card.Body className='animate__animated animate__zoomIn'>
                  <Card.Title  style={{ fontSize: '25px', border:'none' }}>
                    <i class="bi bi-bounding-box m-3" style={{ color: '#6BBBAE' }}></i>
                    Análisis y visualización de Big Data
                  </Card.Title>
                  <Card.Text style={{ fontSize: '18px', textAlign: 'justify' }}>
                    <p className='mb-0'>▸ Soluciones analíticas basadas en grafos</p>
                    <p className='mb-0'>▸ Analítica predictiva</p>
                    <p className='mb-0'>▸ Ingeniería de datos</p>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card className="p-5" style={{  border:'none' }}>
                <Card.Body>
                    <Image className='box' fluid src={imgBigData} alt='imgBigData'/>
                </Card.Body>
              </Card>
            </Col>
          </Row>

      </Container>
    </>
  );
}
export default Productos;
