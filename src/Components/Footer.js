/**
 * Footer de todas las vistas de la página con un botón de contacto que dirige a la vista de Contacto.js.
 * El logo de la página no reacciona adecuadamente al breakpoint de los componentes en el diseño responsivo.
 */
import { Container, Row, Col, Button, Image } from 'react-bootstrap/';
import logo from '../images/logo.png';

function Footer() {
    return (
        <Container fluid className="bg-dark text-baseline text-white" style={{position: "fixed", bottom: 0, width:"100%"}}>
            <Row>
                <Col md={3} >
                    <div className="d-flex aligns-items-center justify-content-center"><Image fluid src={logo} alt='logo' style={{ width: "100px", position: "relative", top: "30px" }} /></div>
                </Col>
                <Col md={3} style={{ fontSize: "30px", padding: "20px" }}>Oficinas
                    <div style={{ fontSize: "10px" }}><i class="bi bi-geo-alt"></i> Berlín 43, piso 2, Coyoacán, CDMX</div>
                </Col>
                <Col md={3} style={{ fontSize: "30px", padding: "20px" }}>Información
                    <div style={{ fontSize: "10px" }}><i class="bi bi-telephone"></i> 55 9039 1301</div>
                </Col>
                <Col md={3} > </Col>
            </Row>
            <Row>
                <Col md={3}></Col>
                <Col md={3} style={{ fontSize: "30px" }}>Horario
                    <div style={{ fontSize: "10px" }}><i class="bi bi-clock"></i>  Lunes-Viernes 09:00 - 19:00 </div>
                </Col>
                <Col md={3} style={{ fontSize: "30px" }}>
                    <div style={{ fontSize: "15px" }}><i class="bi bi-envelope-paper"></i> contacto@kaminoit.tech</div>
                </Col>
                <Col md={3} ><Button variant="success" >Contáctanos</Button></Col>
            </Row>
            <Row>
                <Col> © • Todos los derechos reservados • 2022</Col>
            </Row>
        </Container>
  )
}

export default Footer