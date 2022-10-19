/*
  Footer de todas las vistas de la página con un botón de contacto que dirige a la vista de Contacto.js.
  El logo de la página no reacciona adecuadamente al breakpoint de los componentes en el diseño responsivo.
 */
import { Col, Container, Row, Image, Button, Nav} from 'react-bootstrap/';
import { NavLink } from  'react-router-dom';
import logo from '../images/logo-navbar.png';

function Footer() {
    return (
        <>
            <Container fluid className='bg-dark text-white p-3'>
                {/* Este Row contiene todos los elementos del footer, sin los derechos reservados */}
                <Row className='align-items-center'>
                    <Col className="d-flex aligns-items-center justify-content-center">
                        <Nav.Link as={NavLink} to="/Inicio">
                            <Image fluid src={logo} alt='logo' style={{ width: "100px" }} />
                        </Nav.Link>
                        
                    </Col>
                    <Col>
                        <div>Oficinas</div>
                        <div style={{ fontSize: "10px" }}><i class="bi bi-geo-alt"></i> Berlín 43, piso 2, Coyoacán, CDMX</div>
                        <Row>
                            <Col className='mt-3'>
                                <div>Horario</div>
                                <div style={{ fontSize: "10px" }}><i class="bi bi-clock"></i>  Lunes-Viernes 09:00 - 19:00 </div>
                            </Col>
                        </Row>
                    </Col>
                    <Col>
                        <div>Información</div>
                        <div style={{ fontSize: "10px" }}><i class="bi bi-telephone"></i> 55 9039 1301</div>
                        <Row>
                            <Col className='mt-3'>
                                <div>Correo</div>
                                <div style={{ fontSize: "10px" }}><i class="bi bi-envelope-paper"></i> contacto@kaminoit.tech</div>
                            </Col>
                        </Row> 
                    </Col>
                    <Col className=''>
                    <Nav.Link as={NavLink} to="/Contacto">
                        <Button className='justify-content-center' variant="success" >Contáctanos</Button>
                    </Nav.Link>
                    </Col>
                </Row>
                {/* Row que contiene los derechos reservados */}
                <Row >
                    <p className='mb-0 mt-2'> © • Todos los derechos reservados • 2022</p>
                </Row>
            </Container>
        </>
  );
}

export default Footer


