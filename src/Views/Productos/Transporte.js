import { useTranslation } from "react-i18next";

//Imágenes
import banca1 from "../../images/banca1.png";
import healthBackgr from "../../images/Productos/healthBackgr.png";

//Css
import { Col, Container, Row, Image } from "react-bootstrap";
import "../../css/Salud.css";

const Transporte = () => {
  const [t] = useTranslation("global");

  return (
    <div>
      <Row className="image_wrapper">
        <Image
          id="imgBackgr"
          src={healthBackgr}
          alt="healthBackgr"
          height={500}
        />
        <Row className="overlay" style={{ padding: "0px" }}>
          <Col className="m-auto">
            <div className="m-auto header">
              <h1 className="text-white mb-4">{t("General.Title4")}</h1>
              <h3 className="text-white">{t("Mobility.Subtitle")}</h3>
            </div>
          </Col>
          <Col className="p-0 text-end d-none d-sm-block">
            <Image src={banca1} alt="healthImg" height={500} />
          </Col>
        </Row>
      </Row>
      <Container fluid className="mt-4">
        <Container>
          <Row>
            <Col className="d-flex justify-content-center">
              <div className="descrp bancaBackgr">
                <div className="descrp filter"></div>
                <p className="descrpText">{t("Mobility.Image")}</p>
              </div>
            </Col>
            <Col className="d-flex">
              <Row className="m-auto">
                <h3
                  style={{
                    fontSize: "x-large",
                    marginBottom: "1em",
                    fontWeight: "bold",
                    textAlign: "justify",
                  }}
                >
                  {t("Mobility.ImageSub")}
                </h3>
                <ul>
                  <li>{t("Mobility.Advantage1")}</li>
                  <li>{t("Mobility.Advantage2")}</li>
                  <li>{t("Mobility.Advantage3")}</li>
                  <li>{t("Mobility.Advantage4")}</li>
                </ul>
              </Row>
            </Col>
          </Row>
        </Container>
        <Row className="mt-4 mb-4">
          <h1 style={{ textAlign: "center", color: "#6BBBAE" }}>
            {t("General.Title6")}
          </h1>
        </Row>
        <Container>
          <Row>
            <Col lg={4}>
              <h3 className="text-start">{t("Mobility.Title1")}</h3>
            </Col>
            <Col>
              <p>
              {t("Mobility.SubTitle1")}
              </p>
            </Col>
          </Row>
          <hr style={{ borderTop: "2px solid #B86F8C" }} />
          <Row>
            <Col lg={4}>
              <h3 className="text-start">{t("Mobility.Title2")}</h3>
            </Col>
            <Col>
              <p>
              {t("Mobility.SubTitle2")}
              </p>
            </Col>
          </Row>
          <hr style={{ borderTop: "2px solid #B86F8C" }} />
          <Row>
            <Col lg={4}>
              <h3 className="text-start">
              {t("Mobility.Title3")}
              </h3>
            </Col>
            <Col>
              <p>
              {t("Mobility.SubTitle3")}
              </p>
            </Col>
          </Row>
          <hr style={{ borderTop: "2px solid #B86F8C" }} />
          <Row>
            <Col lg={4}>
              <h3 className="text-start">{t("Mobility.Title4")}</h3>
            </Col>
            <Col>
              <p>
              {t("Mobility.SubTitle4")}
              </p>
            </Col>
          </Row>
          <hr style={{ borderTop: "2px solid #B86F8C" }} />
          <Row>
            <Col lg={4}>
              <h3 className="text-start">{t("Mobility.Title5")}</h3>
            </Col>
            <Col>
              <p>
              {t("Mobility.SubTitle5")}
              </p>
            </Col>
          </Row>
        </Container>
      </Container>
    </div>
  );
};

export default Transporte;
