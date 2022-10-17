/**
 * Vista de página Nosotros. 
 */
import { Container, Card } from 'react-bootstrap/';
import Navbar from '../Components/Navbar';

function Nosotros() {
  return (
    <>
    <Navbar />
      <Container fluid className='bg-dark p-3'>
        <div className='d-flex justify-content-center mb-4' style={{ fontFamily: "Lora", fontSize: "64px", color: "#6BBBAE" }}>KAMINOITTECH</div>
        <p className='d-flex justify-content-center text-white' style={{ fontFamily: "Lora", fontSize: "20px" }}>Nos enfocamos en crear soluciones en tecnologías
          de la información aplicadas a la consultoría y a la inteligencia de negocios.</p>
        <p className='d-flex justify-content-center text-white' style={{ fontFamily: "Lora", fontSize: "20px" }}>Realizamos vínculos a través de proyectos colaborativos con la academia para un mayor desarrollo científico en el país.</p>
      </Container>
      <Container fluid className='d-flex aligns-items-center justify-content-evenly'>
        <Card style={{ width: '20rem', border: 'none', marginTop: '2rem' }}>
          <Card.Body>
            <Card.Title style={{ fontFamily: "Lora", fontSize: "32px" }}>Misión</Card.Title>
            <Card.Text style={{ borderTop: "solid #6BBBAE 3px", fontFamily: "Lora", fontSize: "15px", textAlign: "justify" }}>
              Construir soluciones para la automatización de procesos
              que generen valor y una mejor experiencia para nuestros
              clientes.
            </Card.Text>
          </Card.Body>
        </Card>
        <Card style={{ width: '20rem', border: 'none', marginTop: '2rem' }}>
          <Card.Body>
            <Card.Title style={{ fontFamily: "Lora", fontSize: "32px" }} >Vision</Card.Title>
            <Card.Text style={{ borderTop: "solid #6BBBAE 3px", fontFamily: "Lora", fontSize: "15px", textAlign: "justify" }}>
              Buscamos dotar a nuestros socios un panorama más
              amplio sobre las ventajas del uso de las tecnologías de la
              información en proyectos de infraestructura.
            </Card.Text>
          </Card.Body>
        </Card>
      </Container>
    </>
  )
}

export default Nosotros

