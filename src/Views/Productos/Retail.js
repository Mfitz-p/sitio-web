import { useTranslation } from "react-i18next";

//Imágenes
import untilted from "../../images/Untitled.png";
import CarruselImgs from "../../Components/CarruselImgs";
import businessInt1 from "../../images/Productos/imgRetail2.webp";
import businessInt2 from "../../images/Productos/imgRetail3.webp";
import businessInt3 from "../../images/Productos/imgRetail4.webp";
import businessInt4 from "../../images/Productos/imgRetail5.webp";

//Css
import { Col, Container, Row, Image } from "react-bootstrap";
import "../../css/Salud.css";
import "../../css/Inicio.css";

import OnScrollLeft from "../Animation/OnScrollLeft";
import OnScrollRight from "../Animation/OnScrollRight";
import OnScrollItems from "../Animation/OnScrollItems";

const Retail = () => {
  const [t] = useTranslation("global");
  const imgs3 = [
    {
      id: 9,
      src: businessInt1,
      alt: "businessInt1",
    },
    {
      id: 10,
      src: businessInt2,
      alt: "businessInt2",
    },
    {
      id: 11,
      src: businessInt3,
      alt: "businessInt3",
    },
    {
      id: 12,
      src: businessInt4,
      alt: "businessInt4",
    },
  ];

  return (
    <div className="hideX">
      <Row className="image_wrapper ms-0">
        <Col sm={5} className="mx-auto">
          <div className="h-75 d-flex flex-column justify-content-center">
            <OnScrollItems>
              <h1 className="text-white m-5">{t("General.Title2")}</h1>
              <h3 className="text-white mx-5">{t("Retail.Subtitle")}</h3>
            </OnScrollItems>
          </div>
        </Col>
        <Col sm={6} className="text-center text-md-end p-0">
          <OnScrollRight>
            <Image src={untilted} alt="healthImg" className="products-img" />
          </OnScrollRight>
        </Col>
      </Row>
      <Container fluid className="mt-4">
        <Container>
          <Row>
            <Col className="d-flex justify-content-center">
              <OnScrollLeft>
                <div className="descrp retailBackgr">
                  <div className="descrp filter"></div>
                  <p className="descrpText">{t("Retail.Image")}</p>
                </div>
              </OnScrollLeft>
            </Col>
            <Col className="d-flex">
              <Row className="m-auto">
                <OnScrollRight>
                  <h3 className="experts-text">{t("Retail.ImageSub")}</h3>
                  <ul>
                    <li>{t("Retail.Advantage1")}</li>
                    <li>{t("Retail.Advantage2")}</li>
                    <li>{t("Retail.Advantage3")}</li>
                    <li>{t("Retail.Advantage4")}</li>
                    <li>{t("Retail.Advantage5")}</li>
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
                <h3 className="text-start">{t("Retail.Title1")}</h3>
              </OnScrollLeft>
            </Col>
            <Col>
              <OnScrollRight>
                <p>{t("Retail.SubTitle1")}</p>
              </OnScrollRight>
            </Col>
          </Row>
          <hr style={{ borderTop: "2px solid #B86F8C" }} />
          <Row>
            <Col lg={4}>
              <OnScrollLeft>
                <h3 className="text-start">{t("Retail.Title2")}</h3>
              </OnScrollLeft>
            </Col>
            <Col>
              <OnScrollRight>
                <p>{t("Retail.SubTitle2")}</p>
              </OnScrollRight>
            </Col>
          </Row>
          <hr style={{ borderTop: "2px solid #B86F8C" }} />
          <Row>
            <Col lg={4}>
              <OnScrollLeft>
                <h3 className="text-start">{t("Retail.Title3")}</h3>
              </OnScrollLeft>
            </Col>
            <Col>
              <OnScrollRight>
                <p>{t("Retail.SubTitle3")}</p>
              </OnScrollRight>
            </Col>
          </Row>
          <hr style={{ borderTop: "2px solid #B86F8C" }} />
          <Row>
            <Col lg={4}>
              <OnScrollLeft>
                <h3 className="text-start">{t("Retail.Title4")} </h3>
              </OnScrollLeft>
            </Col>
            <Col>
              <OnScrollRight>
                <p>{t("Retail.SubTitle4")}</p>
              </OnScrollRight>
            </Col>
          </Row>
        </Container>
        <Container fluid style={{ backgroundColor: "#6BBBAE" }}>
          <Row>
            <Col lg={7}>
              <Row className="m-auto mt-5 mb-5">
                <OnScrollItems>
                  <CarruselImgs imgs={imgs3} />
                </OnScrollItems>
              </Row>
            </Col>
            <Col className="d-flex m-auto">
              <Row style={{ color: "#FFFF" }}>
                <OnScrollRight>
                  <h1>{t("General.Title7")}</h1>
                  <p>{t("Retail.Solution1")}</p>
                  <p>{t("Retail.Solution2")}</p>
                </OnScrollRight>
              </Row>
            </Col>
          </Row>
        </Container>
      </Container>
    </div>
  );
};

export default Retail;
