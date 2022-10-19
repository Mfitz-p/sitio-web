import React from 'react';
import { Container, Image } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import imgSistemasGestion from '../../images/imgDSG.png';
import imgModelosML from '../../images/imgModelosML.png';
import imgBusinessInte from '../../images/imgBusinessInte.png';
import imgVisionComputadora from '../../images/img-VisionComputadora.png';
import imgBigData from '../../images/img-BigData.png';

const Productos = () => {
  return (
    <>
      <Container>
        <Row className='p-5'>
          <Col>
              <h3>Nuestro modelo de negocios nos permite facilitarte los siguientes productos.</h3>
          </Col>
        </Row>
        {/* Inician las cards de productos con su respectiva imagen */}
      <Row className='align-items-center'>
            <Col style={{  borderRight: 'solid #6BBBAE 1px' }}>
              <Card className="p-5" style={{  border:'none' }}>
                <Card.Body>
                  <Card.Title  style={{ fontSize: '25px', border:'none' }}>
                    <i class="bi bi-clipboard2-check m-3" style={{ color: '#6BBBAE' }}></i>
                    Desarrollo de sistemas de gestión
                  </Card.Title>
                  <Card.Text style={{ fontSize: '18px', textAlign: 'justify' }}>
                    <p>▸ Solución conceptual del problema</p>
                    <p>▸ Elaboración y creación de módulos</p>
                    <p>▸ Implementación y seguimiento del sistema</p>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card className="p-5" style={{  border:'none' }}>
                <Card.Body>
                    <Image fluid src={imgSistemasGestion} alt='imgSistemasGestion' style={{ width: "400px" }} />
                </Card.Body>
              </Card>
            </Col>
          </Row>

          
          <Row className='align-items-center' style={{  borderTop: 'solid #6BBBAE 1px'}}>
          <Col style={{  borderRight: 'solid #6BBBAE 1px' }}>
              <Card className="p-5" style={{  border:'none' }}>
                <Card.Body>
                    <Image fluid src={imgModelosML} alt='imgModelosML' style={{ width: "400px" }} />
                </Card.Body>
              </Card>
            </Col>
            <Col >
              <Card className="p-5" style={{  border:'none' }}>
                <Card.Body>
                  <Card.Title  style={{ fontSize: '25px', border:'none' }}>
                    <i class="bi bi-cpu m-3" style={{ color: '#6BBBAE' }}></i>
                    Modelos de Machine Learning
                  </Card.Title>
                  <Card.Text style={{ fontSize: '18px', textAlign: 'justify' }}>
                    <p>▸ Redes Neuronales</p>
                    <p>▸ Agrupación y clasificación</p>
                    <p>▸ Análisis y predicción del comportamiento</p>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>

          <Row className='align-items-center' style={{  borderTop: 'solid #6BBBAE 1px'}}>
            <Col style={{  borderRight: 'solid #6BBBAE 1px' }}>
              <Card className="p-5" style={{  border:'none' }}>
                {/* className='m-3' style={{ width:'35rem', height:'15rem' }} */}
                <Card.Body>
                  <Card.Title  style={{ fontSize: '25px', border:'none' }}>
                    <i class="bi bi-bounding-box m-3" style={{ color: '#6BBBAE' }}></i>
                    Business Intelligence
                  </Card.Title>
                  <Card.Text style={{ fontSize: '18px', textAlign: 'justify' }}>
                    <p>▸ Construcción, mantenimiento y operación de páginas web</p>
                    <p>▸ Desarrollo de tableros analíticos y de visualización</p>
                    <p>▸ Optimización SEO</p>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card className="p-5" style={{  border:'none' }}>
                {/* className='m-3' style={{ width:'35rem', height:'15rem' }} */}
                <Card.Body>
                    <Image fluid src={imgBusinessInte} alt='imgBusinessInte' style={{ width: "400px" }} />
                </Card.Body>
              </Card>
            </Col>
          </Row>

          <Row className='align-items-center' style={{  borderTop: 'solid #6BBBAE 1px'}}>
          <Col style={{  borderRight: 'solid #6BBBAE 1px' }}>
              <Card className="p-5" style={{  border:'none' }}>
                <Card.Body>
                    <Image fluid src={imgVisionComputadora} alt='imgVisionComputadora' style={{ width: "400px" }} />
                </Card.Body>
              </Card>
            </Col>
            <Col >
              <Card className="p-5" style={{  border:'none' }}>
                <Card.Body>
                  <Card.Title  style={{ fontSize: '25px', border:'none' }}>
                    <i class="bi bi-intersect m-3" style={{ color: '#6BBBAE' }}></i>
                    Percepción remota y visión de computadora
                  </Card.Title>
                  <Card.Text style={{ fontSize: '18px', textAlign: 'justify' }}>
                    <p>▸ Base de datos de imágenes</p>
                    <p>▸ Reconocimiento de objetos  en imágenes y videos</p>
                    <p>▸ Análisis de diferentes canales del espectro electromagnético</p>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>

          <Row className='align-items-center' style={{  borderTop: 'solid #6BBBAE 1px'}}>
            <Col style={{  borderRight: 'solid #6BBBAE 1px' }}>
              <Card className="p-5" style={{  border:'none' }}>
                <Card.Body>
                  <Card.Title  style={{ fontSize: '25px', border:'none' }}>
                    <i class="bi bi-bounding-box m-3" style={{ color: '#6BBBAE' }}></i>
                    Análisis y visualización de Big Data
                  </Card.Title>
                  <Card.Text style={{ fontSize: '18px', textAlign: 'justify' }}>
                    <p>▸ Soluciones analíticas basadas en grafos</p>
                    <p>▸ Analítica predictiva</p>
                    <p>▸ Ingeniería de datos</p>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card className="p-5" style={{  border:'none' }}>
                <Card.Body>
                    <Image fluid src={imgBigData} alt='imgBigData' style={{ width: "400px" }} />
                </Card.Body>
              </Card>
            </Col>
          </Row>
      </Container>
    </>
  );
}
export default Productos;
