import { Col, Container, Row, Image, Card } from "react-bootstrap";
import HiringIcon from "../images/Carrera/handshake_men_01.webp";
import "../App.css";

function Carreras() {
  return (
    <Container>
      <section
        id="EncabezadoCarrera"
        style={{
          height: "89vh",
          textAlign: "right",
          display: "flex",
          alignItem: "center",
          justifyContent: "center",
        }}
      >
        <Row>
          <Col
            md={6}
            style={{
              textAlign: "right",
              display: "flex",
              margin: "auto",
              alignItem: "center",
              justifyContent: "center",
            }}
          >
            <Image
              src={HiringIcon}
              alt="Hiring icon by studio4rt on Freepik"
              width={"100%"}
            />
          </Col>
          <Col
            md={6}
            style={{
              textAlign: "right",
              display: "flex",
              width: "50%",
              height: "10px",
              margin: "auto",
              alignItem: "center",
              justifyContent: "center",
            }}
          >
            <div>
              <h1>Encuentra tu camino profesional en Kaminoittech</h1>
            </div>
          </Col>
        </Row>
      </section>
      <section
        id="PerfilesCarreras"
        style={{
          height: "100vh",
          textAlign: "center",
          display: "flex",
          alignItem: "center",
          justifyContent: "center",
        }}
      >
        <Row
          style={{
            textAlign: "center",
            display: "flex",
            margin: "auto",
            alignItem: "center",
            justifyContent: "center",
          }}
        >
          <Col>
            <h2> Perfiles que andamos buscando</h2>
            <br />
            <Row>
              <Col>
                <Card className="cardVacante ">
                  <Card.Title>Tipo de rol/vacante</Card.Title>
                  <Card.Text>
                    {" "}
                    Lorem ipsum dolor sit amet, sed do eiusmod tempor incididunt
                    ut labore et dolore magna aliqua.
                  </Card.Text>
                </Card>
              </Col>
              <Col>
                <Card className="cardVacante">
                  <Card.Title>Tipo de rol/vacante</Card.Title>
                  <Card.Text>
                    {" "}
                    Lorem ipsum dolor sit amet, sed do eiusmod tempor incididunt
                    ut labore et dolore magna aliqua.
                  </Card.Text>
                </Card>
              </Col>
              <Col>
                <Card className="cardVacante">
                  <Card.Title>Tipo de rol/vacante</Card.Title>
                  <Card.Text>
                    {" "}
                    Lorem ipsum dolor sit amet, sed do eiusmod tempor incididunt
                    ut labore et dolore magna aliqua.
                  </Card.Text>
                </Card>
              </Col>
              <Col>
                <Card className="cardVacante">
                  <Card.Title>Tipo de rol/vacante</Card.Title>
                  <Card.Text>
                    {" "}
                    Lorem ipsum dolor sit amet, sed do eiusmod tempor incididunt
                    ut labore et dolore magna aliqua.
                  </Card.Text>
                </Card>
              </Col>
            </Row>
          </Col>
        </Row>
      </section>
      <section
        id="Razon"
        style={{
          height: "100vh",
          textAlign: "center",
          display: "flex",
          alignItem: "center",
          justifyContent: "center",
        }}
      >
        <h4>Porque trabajar con nosotres</h4>
        <p>
          Lorem ipsum dolor sit amet, sed do eiusmod tempor incididunt ut labore
          et dolore magna aliqua.
        </p>
        <button></button>
      </section>
    </Container>
  );
}

export default Carreras;
