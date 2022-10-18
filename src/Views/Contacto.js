/**
 * Página de formulario 
 */
import { Form, Button, Col, Row, Container } from 'react-bootstrap/'
import Navbar from '../Components/Navbar';

import "../App.css";
function Contacto() {
    return (
       <>
        
            <Container className="graficos">
                <div className="m-4" style={{ fontFamily: "Lora" }}>
                    <h1 >Contáctanos</h1>
                    <div style={{ fontSize: "64px", color: "#6BBBAE" }}> Para dudas o preguntas </div>
                    <p >Por favor, usa el formulario o llámanos al 55 5335 1691</p>
                </div>
                <Form className="m-5" style={{ fontFamily: "Lora" }}>
                    <Row   >
                        <Form.Group className="mb-3" as={Col} md="2" controlId="formName">
                            <Form.Label>Nombre</Form.Label>
                            <Form.Control type="text" placeholder="" />
                        </Form.Group>
                        <Form.Group className="mb-3" as={Col} md="2" controlId="formLastName">
                            <Form.Label>Apellido</Form.Label>
                            <Form.Control type="text" placeholder="" />
                        </Form.Group>
                    </Row>
                    <Row className="mb-5">
                        <Form.Group className="mb-3" as={Col} md="2" controlId="formEmail">
                            <Form.Label>Correo Electrónico</Form.Label>
                            <Form.Control type="email" placeholder="" />
                        </Form.Group>
                        <Form.Group className="mb-3" as={Col} md="2" controlId="formPhone">
                            <Form.Label>Teléfono</Form.Label>
                            <Form.Control type="number" placeholder="" />
                        </Form.Group>
                    </Row>

                    <Form.Group className="mb-3" controlId="inputTextArea">
                        <Form.Label>Mensaje</Form.Label>
                        <Form.Control
                            type="text"
                            id="inputTextArea"
                            style={{ height: '100px', width: '50%' }}
                            />
                    </Form.Group>
                    <Button variant="success" type="submit">
                        Enviar
                    </Button>
                </Form>
            </Container>
        </>
    )
}

export default Contacto