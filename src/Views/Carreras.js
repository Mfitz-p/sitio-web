import { Col, Container, Row, Image, Card } from "react-bootstrap";
import HiringIcon from "../images/Carrera/handshake_men_01.webp";
import { useTranslation } from "react-i18next";
import "../App.css";

function Carreras() {
  const [t] = useTranslation("global");
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
              <h1>{t("Carrers.Title1")}</h1>
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
            <h2>{t("Carrers.Profile")}</h2>
            <br />
            <Row>
              <Col>
                <Card className="cardVacante ">
                  <Card.Title>{t("Carrers.Rol1")}</Card.Title>
                  <Card.Text>{t("Carrers.RolDescription1")}</Card.Text>
                </Card>
              </Col>
              <Col>
                <Card className="cardVacante">
                  <Card.Title>{t("Carrers.Rol2")}</Card.Title>
                  <Card.Text>{t("Carrers.RolDescription2")}</Card.Text>
                </Card>
              </Col>
              <Col>
                <Card className="cardVacante">
                  <Card.Title>{t("Carrers.Rol3")}</Card.Title>
                  <Card.Text>{t("Carrers.RolDescription3")}</Card.Text>
                </Card>
              </Col>
              <Col>
                <Card className="cardVacante">
                  <Card.Title>{t("Carrers.Rol4")}</Card.Title>
                  <Card.Text>{t("Carrers.RolDescription4")}</Card.Text>
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
        <h4>{t("Carrers.Why")}</h4>
        <p>{t("Carrers.WhyDescription")}</p>
        <button></button>
      </section>
    </Container>
  );
}

export default Carreras;
