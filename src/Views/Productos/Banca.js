import { useTranslation } from "react-i18next";

//Imágenes
import banca1 from "../../images/banca1.png";

//Css
import { Col, Container, Row, Image } from "react-bootstrap";
import "../../css/Salud.css";
import "../../css/Inicio.css";

import OnScrollLeft from "../Animation/OnScrollLeft";
import OnScrollRight from "../Animation/OnScrollRight";
import OnScrollItems from "../Animation/OnScrollItems";

const Banca = () => {
  const [t] = useTranslation("global");

  return (
    <div className="hideX">
      <Row className="image_wrapper ms-0">
        <Col sm={5} className="mx-auto">
          <div className="h-75 d-flex flex-column justify-content-center">
            <OnScrollItems>
              <h1 className="text-white m-5">{t("General.Title5")}</h1>
              <h3 className="text-white mx-5">{t("Banking.Subtitle")}</h3>
            </OnScrollItems>
          </div>
        </Col>
        <Col sm={6} className="text-center text-md-end p-0">
          <OnScrollRight>
            <Image src={banca1} alt="healthImg" className="products-img" />
          </OnScrollRight>
        </Col>
      </Row>
      <Container fluid className="mt-4">
        <Container>
          <Row>
            <Col className="d-flex justify-content-center">
              <OnScrollLeft>
                <div className="descrp bancaBackgr">
                  <div className="descrp filter"></div>
                  <p className="descrpText">{t("Banking.Image")}</p>
                </div>
              </OnScrollLeft>
            </Col>
            <Col className="d-flex">
              <Row className="m-auto">
                <OnScrollRight>
                  <h3 className="experts-text">{t("Banking.ImageSub")}</h3>
                  <ul>
                    <li>{t("Banking.Advantage1")}</li>
                    <li>{t("Banking.Advantage2")}</li>
                    <li>{t("Banking.Advantage3")}</li>
                    <li>{t("Banking.Advantage4")}</li>
                  </ul>
                </OnScrollRight>
              </Row>
            </Col>
          </Row>
        </Container>
        <Row className="mt-4 mb-4">
          <OnScrollItems>
            <h1 style={{ textAlign: "center", color: "#6BBBAE" }}>
              {t("General.Title6")}
            </h1>
          </OnScrollItems>
        </Row>
        <Container>
          <Row>
            <Col lg={4}>
              <OnScrollLeft>
                <h3 className="text-start">{t("Banking.Title1")}</h3>
              </OnScrollLeft>
            </Col>
            <Col>
              <OnScrollRight>
                <p>{t("Banking.SubTitle1")}</p>
              </OnScrollRight>
            </Col>
          </Row>
          <hr style={{ borderTop: "2px solid #B86F8C" }} />
          <Row>
            <Col lg={4}>
              <OnScrollLeft>
                <h3 className="text-start">{t("Banking.Title2")}</h3>
              </OnScrollLeft>
            </Col>
            <Col>
              <OnScrollRight>
                <p>{t("Banking.SubTitle2")}</p>
              </OnScrollRight>
            </Col>
          </Row>
          <hr style={{ borderTop: "2px solid #B86F8C" }} />
          <Row>
            <Col lg={4}>
              <OnScrollLeft>
                <h3 className="text-start">{t("Banking.Title3")}</h3>
              </OnScrollLeft>
            </Col>
            <Col>
              <OnScrollRight>
                <p>{t("Banking.SubTitle3")}</p>
              </OnScrollRight>
            </Col>
          </Row>
          <hr style={{ borderTop: "2px solid #B86F8C" }} />
          <Row>
            <Col lg={4}>
              <OnScrollLeft>
                <h3 className="text-start">{t("Banking.Title4")}</h3>
              </OnScrollLeft>
            </Col>
            <Col>
              <OnScrollRight>
                <p>{t("Banking.SubTitle4")}</p>
              </OnScrollRight>
            </Col>
          </Row>
          <hr style={{ borderTop: "2px solid #B86F8C" }} />
          <Row>
            <Col lg={4}>
              <OnScrollLeft>
                <h3 className="text-start">{t("Banking.Title5")}</h3>
              </OnScrollLeft>
            </Col>
            <Col>
              <OnScrollRight>
                <p>{t("Banking.SubTitle5")}</p>
              </OnScrollRight>
            </Col>
          </Row>
        </Container>
      </Container>
    </div>
  );
};

export default Banca;
