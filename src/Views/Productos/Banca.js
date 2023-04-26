import { useTranslation } from "react-i18next";

//Imágenes
import banca1 from "../../images/banca1.png";

//Css
import { Col, Container, Row, Image } from "react-bootstrap";
import "../../css/Salud.css";

const Banca = () => {
  const [t] = useTranslation("global");

  return (
    <div>
      <Row className="image_wrapper ms-0">
        <Col sm={5} className="mx-auto">
          <div className="h-75 d-flex flex-column justify-content-center">
            <h1 className="text-white m-5">{t("General.Title5")}</h1>
            <h3 className="text-white mx-5">{t("Banking.Subtitle")}</h3>
          </div>
        </Col>
        <Col sm={6} className="text-center text-md-end p-0">
          <Image src={banca1} alt="healthImg" className="products-img" />
        </Col>
      </Row>
      <Container fluid className="mt-4">
        <Container>
          <Row>
            <Col className="d-flex justify-content-center">
              <div className="descrp bancaBackgr">
                <div className="descrp filter"></div>
                <p className="descrpText">{t("Banking.Image")}</p>
              </div>
            </Col>
            <Col className="d-flex">
              <Row className="m-auto">
                <h3 className="experts-text">
                  {t("Banking.ImageSub")}
                </h3>
                <ul>
                  <li>{t("Banking.Advantage1")}</li>
                  <li>{t("Banking.Advantage2")}</li>
                  <li>{t("Banking.Advantage3")}</li>
                  <li>{t("Banking.Advantage4")}</li>
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
              <h3 className="text-start">{t("Banking.Title1")}</h3>
            </Col>
            <Col>
              <p>{t("Banking.SubTitle1")}</p>
            </Col>
          </Row>
          <hr style={{ borderTop: "2px solid #B86F8C" }} />
          <Row>
            <Col lg={4}>
              <h3 className="text-start">{t("Banking.Title2")}</h3>
            </Col>
            <Col>
              <p>{t("Banking.SubTitle2")}</p>
            </Col>
          </Row>
          <hr style={{ borderTop: "2px solid #B86F8C" }} />
          <Row>
            <Col lg={4}>
              <h3 className="text-start">{t("Banking.Title3")}</h3>
            </Col>
            <Col>
              <p>{t("Banking.SubTitle3")}</p>
            </Col>
          </Row>
          <hr style={{ borderTop: "2px solid #B86F8C" }} />
          <Row>
            <Col lg={4}>
              <h3 className="text-start">{t("Banking.Title4")}</h3>
            </Col>
            <Col>
              <p>{t("Banking.SubTitle4")}</p>
            </Col>
          </Row>
          <hr style={{ borderTop: "2px solid #B86F8C" }} />
          <Row>
            <Col lg={4}>
              <h3 className="text-start">{t("Banking.Title5")}</h3>
            </Col>
            <Col>
              <p>{t("Banking.SubTitle5")}</p>
            </Col>
          </Row>
        </Container>
      </Container>
    </div>
  );
};

export default Banca;
