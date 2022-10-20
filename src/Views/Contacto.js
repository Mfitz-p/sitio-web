/**
 * Página de formulario 
 */
import { Form, Button, Col, Row, Container } from 'react-bootstrap/'
import { useState } from 'react';
import "../App.css";

function Contacto() {

    const [datosForm, setDatosForm] = useState({
        Nombre: '',
        Apellido: '',
        Correo: '',
        Telefono: '',
        Mensaje: ''
    })
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(datosForm);
    };

    const handleChange = (e) => {
        setDatosForm({
            ...datosForm,
            [e.target.name] : e.target.value 
        })
    }

    return (
       <>
            <Container fluid className='graficos'>
                <div className="m-4">
                    <div style={{ fontSize: "clamp(36px, 4vw, 48px)", color: "#6BBBAE" }}> Para dudas o preguntas </div>
                    <h1>Contáctanos</h1>
                    <p>Por favor, usa el formulario o llámanos al 55 5335 1691</p>
                </div>
                <Form className="m-4" onSubmit={handleSubmit} action="https://formspree.io/f/xknevvvg" method="POST">
                    <Row > 
                        <Form.Group className="mb-3" as={Col} md="3" >
                            <Form.Label>Nombre</Form.Label>
                            <Form.Control type="text" value={datosForm.Nombre} onChange={handleChange} name='Nombre' required/>
                        </Form.Group>
                        <Form.Group className="mb-3" as={Col} md="3" >
                            <Form.Label>Apellido</Form.Label>
                            <Form.Control type="text" value={datosForm.Apellido} onChange={handleChange} name='Apellido' required/>
                        </Form.Group>
                        <Col className="md-6"></Col>
                    </Row>
                    <Row className="mb-4">
                        <Form.Group  as={Col} md="3" >
                            <Form.Label>Correo </Form.Label>
                            <Form.Control type="email" value={datosForm.Correo} onChange={handleChange} name='Correo' required/>
                        </Form.Group>
                        <Form.Group  as={Col} md="3" >
                            <Form.Label>Teléfono</Form.Label>
                            <Form.Control type="number" value={datosForm.Telefono} onChange={handleChange} name='Telefono' required/>
                        </Form.Group>
                       <Col className="md-6"></Col>
                    </Row>    
                    <Form.Group className="mb-3" >
                        <Form.Label>Mensaje</Form.Label>
                        <Form.Control
                            type="text"
                            id="inputTextArea"
                            style={{ height: '100px', width: '50%' }}
                            value={datosForm.Mensaje} 
                            onChange={handleChange} 
                            name='Mensaje'
                            required
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