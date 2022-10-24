/**
 * Página de formulario
 */
import { Form, Button, Col, Row, Container } from "react-bootstrap/";
import { useState } from "react";
import "../App.css";
//@formspree/react es una libreria para mandar formularios sin necesidad de un bbackend
import { useForm, ValidationError } from "@formspree/react";

function Contacto() {
  const [datosForm, setDatosForm] = useState({
    Nombre: "",
    Apellido: "",
    Correo: "",
    Telefono: "",
    Mensaje: "",
  });

  // Se le asigna al hook el id del formulario, este sale desde la pagina de formspree.io
  const [state, handleSubmit] = useForm("xknevvvg");

  const handleChange = (e) => {
    setDatosForm({
      ...datosForm,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <>
      <Container fluid className="graficos p-0 ">
        <div className="m-4 ">
          <div className='animate__animated animate__fadeInUp'style={{ fontSize: "clamp(36px, 4vw, 48px)", color: "#6BBBAE" }}>
            {" "}
            Para dudas o preguntas{" "}
          </div>
          <h1>Contáctanos</h1>
          <p>Por favor, usa el formulario o llámanos al 55 5335 1691</p>
        </div>
        <Form className="m-4 animate__animated animate__fadeIn" onSubmit={handleSubmit}>
          <Row>
            <Form.Group className="mb-3" as={Col} md="3">
              <Form.Label>Nombre</Form.Label>
              <Form.Control
                type="text"
                value={datosForm.Nombre}
                onChange={handleChange}
                name="Nombre"
                required
              />
            </Form.Group>
            <Form.Group className="mb-3" as={Col} md="3">
              <Form.Label>Apellido</Form.Label>
              <Form.Control
                type="text"
                value={datosForm.Apellido}
                onChange={handleChange}
                name="Apellido"
                required
              />
            </Form.Group>
            <Col className="md-6"></Col>
          </Row>
          <Row className="mb-4">
            <Form.Group as={Col} md="3">
              <Form.Label>Correo </Form.Label>
              <Form.Control
                type="email"
                value={datosForm.Correo}
                onChange={handleChange}
                name="Correo"
                id="Correo"
                required
              />
              <ValidationError
              prefix="Correo"
              field="Correo"
              errors={state.errors}
            />
            </Form.Group>
            <Form.Group as={Col} md="3">
              <Form.Label>Teléfono</Form.Label>
              <Form.Control
                id="Telefono"
                type="tel"
                value={datosForm.Telefono}
                onChange={handleChange}
                name="Telefono"
                required
              />
               <ValidationError
              prefix="Telefono"
              field="Telefono"
              errors={state.errors}
            />
            </Form.Group>
            <Col className="md-6"></Col>
          </Row>
          <Form.Group className="mb-3">
            <Form.Label>Mensaje</Form.Label>
            <Form.Control
              type="text"
              id="Mensaje"
              className="inputSpace" 
              value={datosForm.Mensaje}
              onChange={handleChange}
              name="Mensaje"
              required
            />
            <ValidationError
              prefix="Mensaje"
              field="Mensaje"
              errors={state.errors}
            />
          </Form.Group>
          <Button variant="success" type="submit" disabled={state.submitting}>
            Enviar
          </Button>
        </Form>
      </Container>
      {state.succeeded ? <p>Gracias por contactarse con nosotros</p>: ""}
    </>
  );
}

export default Contacto;
