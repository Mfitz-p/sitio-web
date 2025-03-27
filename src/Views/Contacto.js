/**
 * Página de formulario
 */
import { Form, Button, Col, Row, Container, OverlayTrigger, Tooltip } from "react-bootstrap/";
import { useState } from "react";
import "../App.css";
//@formspree/react es una libreria para mandar formularios sin necesidad de un bbackend
import { useForm, ValidationError } from "@formspree/react";
import { useTranslation } from "react-i18next";

import "../css/Contacto.css"
function Contacto() {
  
  const [t] = useTranslation("global");
  // Se le asigna al hook el id del formulario, este sale desde la pagina de formspree.io
  const [state, handleSubmit] = useForm("xknevvvg");

  // State hook que almacena los inputs del formulario a través de la función de handleChange
  const [datosForm, setDatosForm] = useState({
    Nombre: "",
    Apellido: "",
    Correo: "",
    Telefono: "",
    Mensaje: "",
  });

  // Función que permite interactuar con el nombre y valor de los datos contenidos en el objeto del hook de datosForm.
  const handleChange = (e) => {
    setDatosForm({
      ...datosForm,
      [e.target.name]: e.target.value,
    });
  };

  // State Hook que manda un mensaje en caso de que no se cumplan los requisitos para el llenado del input Teléfono
  // a través de la función handleValidatePhone que es contenida en el JSX del Form.Control deL Teléfono.
  const [mensajeError, setMensajeError] = useState()

  // Función recibe la información contenido en el input de teléfono y testea una expresión regular 
  // que devuelve un mensaje de error en caso de no cumplir con sus requisitos. 
  // Adicionalmente se ejecuta un renderizado condicional con esta función en el JSX para negar el submit en el botón
  // al momento de enviar la información en caso de que no se cumplan los requisitos.
  const handleValidatePhone = (e) => {
    setDatosForm({
      ...datosForm,
      [e.target.name]: e.target.value,
    });
    const regex = /^\d{7,9}$/;
    if (regex.test(e.target.value)) {
      setMensajeError(() => '')
    } else { setMensajeError(() => t("Contact.Alert")) }
  }

  return (
    <>
      <Container fluid className="graficos p-0 ">
        <div className="m-4 ">
          <div className='animate__animated animate__fadeInUp' style={{ fontSize: "clamp(36px, 4vw, 48px)", color: "#061357" }}>
            {t("Contact.Questions")}
          </div>
          <h1>{t("General.Contact")}</h1>
          <p>{t("Contact.Please")}</p>
        </div>
        <Form className="m-4 my-5 animate__animated animate__fadeIn" onSubmit={handleSubmit}>
          <Row>
            <Form.Group className="mb-3" as={Col} md="3">
              <Form.Label>{t("Contact.Name")}</Form.Label>
              <Form.Control
                type="text"
                value={datosForm.Nombre}
                onChange={handleChange}
                name="Nombre"
                required
              />
            </Form.Group>
            <Form.Group className="mb-3" as={Col} md="3">
              <Form.Label>{t("Contact.Last")}</Form.Label>
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
          <Row>
            <Form.Group className="mb-3" as={Col} md="3">
              <Form.Label>{t("Contact.Email")}</Form.Label>
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
              <Form.Label>{t("Contact.Phone")}</Form.Label>
              <Form.Control
                id="Telefono"
                value={datosForm.Telefono}
                onChange={handleValidatePhone}
                name="Telefono"
                required
              />
              <p style={{ color: 'red', fontSize: '.9em' }}>{mensajeError}</p>
              <ValidationError
                prefix="Telefono"
                field="Telefono"
                errors={state.errors}
              />
            </Form.Group>
            <Col className="md-6"></Col>
          </Row>
          <Form.Group className="mb-3">
            <Form.Label>{t("Contact.Message")}</Form.Label>
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

          {mensajeError === '' ?
            <Button variant="dark" type="submit" disabled={state.submitting}>
              {t("Contact.Send")}
            </Button> :
            <OverlayTrigger overlay={<Tooltip id="tooltip-disabled">{t("Contact.Part")}</Tooltip>}>
              <span className="d-inline-block">
                <Button variant="dark" type="submit" disabled style={{ pointerEvents: 'none' }}>
                {t("Contact.Send")}
                </Button>
              </span>
            </OverlayTrigger>
          }
        </Form>
      </Container>
      {state.succeeded ? <p>{t("Contact.Thanks")}</p> : ""}
    </>
  );
}

export default Contacto;
