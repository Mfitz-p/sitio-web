import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import Image from 'react-bootstrap/Image';
import page from '../images/frontpage.jpg';

const Inicio = () => {
  return (
    <Container fluid>
        <Row>
        <Card className="bg-dark text-white">
        <Row>
        {/* <Card.Img src="frontpage.jpg" alt="image-page" /> */}
        <Image fluid src={page} alt='img-page' style={{ width: "", height:'18rem', position: "relative" }} />
        </Row>
        <Card.ImgOverlay>
          <Col>
            <Card.Title className='' style={{fontFamily: "", fontSize: "2rem", textAlign: "center"}}>
                Soluciones tecnológicas en inteligencia de negocios y el
                manejo de datos.
            </Card.Title>
          </Col>
        </Card.ImgOverlay>
        </Card>
        </Row>
{/* Comienzan las cards de servicios */}
    <Row>
    <Col> 
    <Card className='m-3' style={{ width:'35rem', height:'15rem' }}>
    <Card.Body>
        <Card.Title className="mb-2 mt-5"  style={{fontFamily: "", fontSize: "2rem", textAlign: "justify"}}>
          ¿Qué hacemos por ti?
        </Card.Title>
        <Card.Text style={{fontFamily: '', fontSize: '20px'}}>
        Te ofrecemos nuestros siguientes servicios.
        </Card.Text>
    </Card.Body>
    </Card>
    </Col>

    <Col>
    <Card className='m-3' style={{ width:'35rem', height:'15rem' }}>
      <Card.Body>
        <Card.Title className="mb-2 mt-5" style={{fontFamily: '', fontSize: '25px'}}>
        <i className="bi bi-heart-pulse m-3" style={{fontSize: '45px', color: '#6BBBAE'}}></i>
          Salud
        </Card.Title>
        <Card.Text style={{fontFamily: 'Lora', fontSize: '18px', textAlign: 'justify'}}>
            Desarrollo de sistemas de diagnóstico asistido por
            computadora y observatorios de salud, a partir de
            herramientas de visión por computadora e inteligencia
            artificial (IA).
        </Card.Text>
      </Card.Body>
    </Card>
    </Col>
    
    <Col>
    <Card className='m-3' style={{ width:'35rem', height:'15rem' }}>
      <Card.Body>
        <Card.Title className="mb-2 mt-5" style={{fontFamily: '', fontSize: '25px'}}>
        <i className="bi bi-graph-up-arrow m-3" style={{fontSize: '45px', color: '#6BBBAE'}}></i>
          Retail & B2B
        </Card.Title>
        <Card.Text style={{fontFamily: 'Lora', fontSize: '18px', textAlign: 'justify'}}>
            Desarrollo de sistemas de gestión de datos e
            información para la optimización de estrategias de venta,
            seguimiento de insumos clave y monitoreo del
            comportamiento del consumidor.
        </Card.Text>
      </Card.Body>
    </Card>
    </Col>

    <Col>
    <Card className='m-3' style={{ width:'35rem', height:'15rem' }}>
      <Card.Body>
        <Card.Title className="mb-2 mt-5" style={{fontFamily: '', fontSize: '25px'}}>
        <i className="bi bi-building m-3" aria-hidden="true" style={{fontSize: '45px', color: '#6BBBAE'}}></i>
          Infraestructura
        </Card.Title>
        <Card.Text style={{fontFamily: 'Lora', fontSize: '18px', textAlign: 'justify'}}>
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
  )
}
export default Inicio;
