import React from 'react';
import { Col, Row } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import Image from 'react-bootstrap/Image';
import page from '../images/frontpage.jpg';

const Inicio = () => {
  return (
    <>
        <Card className="bg-dark text-white">
        {/* <Card.Img src="frontpage.jpg" alt="image-page" /> */}
        <Image fluid src={page} alt='img-page' style={{ width: "", height:'18rem', position: "relative" }} />
        <Card.ImgOverlay>
            <Card.Title className='mt-5'>
                Soluciones tecnológicas en inteligencia de negocios y el
                manejo de datos.
            </Card.Title>
        </Card.ImgOverlay>
        </Card>
{/* Comienzan las cards de servicios */}
    <Row className='m-2'>
    <Col> 
    <Card className='m-5' border='info' style={{ width:'35rem', height:'15rem' }}>
    <Card.Body>
        <Card.Title className="mb-2 mt-5">¿Qué hacemos por ti?</Card.Title>
        <Card.Text>
        Te ofrecemos nuestros siguientes servicios.
        </Card.Text>
    </Card.Body>
    </Card>
    </Col>

    <Col>
    <Card className='m-5' border='info' style={{ width:'35rem', height:'15rem' }}>
      <Card.Body>
        <Card.Title className="mb-2 mt-5">Salud</Card.Title>
        <Card.Text>
            Desarrollo de sistemas de diagnóstico asistido por
            computadora y observatorios de salud, a partir de
            herramientas de visión por computadora e inteligencia
            artificial (IA).
        </Card.Text>
      </Card.Body>
    </Card>
    </Col>

    {/* <hr /> */}
    
    <Col>
    <Card className='m-5' border='info' style={{ width:'35rem', height:'15rem' }}>
      <Card.Body>
        <Card.Title className="mb-2 mt-5">Retail & B2B</Card.Title>
        <Card.Text>
            Desarrollo de sistemas de gestión de datos e
            información para la optimización de estrategias de venta,
            seguimiento de insumos clave y monitoreo del
            comportamiento del consumidor.
        </Card.Text>
      </Card.Body>
    </Card>
    </Col>

    <Col>
    <Card className='m-5' border='info' style={{ width:'35rem', height:'15rem' }}>
      <Card.Body>
        <Card.Title className="mb-2 mt-5">Infraestructura</Card.Title>
        <Card.Text>
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
    </>
  )
}
export default Inicio;
