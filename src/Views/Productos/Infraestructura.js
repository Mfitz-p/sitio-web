import { useTranslation } from "react-i18next";

//Imágenes
import infraimg from "../../images/Infraestructura.png";
import aforosSIGA from "../../images/imgSIGA.webp";
import hallazgozSIGA from "../../images/hallazgozSIGA.webp";
import mapaSIGA from "../../images/imgSIGA2.webp";
import ingresoSIGA from "../../images/imgSIGA3.webp";
import imgSIGA4 from "../../images/imgSIGA4.webp";
import CarruselImgs from "../../Components/CarruselImgs";

//Css
import { Col, Container, Row, Image } from "react-bootstrap";
import "../../css/Salud.css";

const Infraestructura = () => {
  const [t] = useTranslation("global");
  const imgs = [
    {
      id: 1,
      src: aforosSIGA,
      alt: "aforos",
    },
    {
      id: 2,
      src: hallazgozSIGA,
      alt: "hallazgoz",
    },
    {
      id: 3,
      src: mapaSIGA,
      alt: "mapa",
    },
    {
      id: 4,
      src: ingresoSIGA,
      alt: "ingresos",
    },
    {
      id: 5,
      src: imgSIGA4,
      alt: "imgSIGA4",
    },
  ];
  return (
    <div>
      <Row className="image_wrapper ms-0">
        <Col md={5} className="mx-auto">
          <div className="h-75 d-flex flex-column justify-content-center">
            <h1 className="text-white m-5">{t("General.Title1")}</h1>
            <h3 className="text-white mx-5">{t("Infrastructure.Subtitle")}</h3>
          </div>
        </Col>
        <Col md={6} className="text-center text-md-end p-0">
          <Image src={infraimg} alt="healthImg" className="products-img" />
        </Col>
      </Row>
      <Container fluid className="mt-4">
        <Container>
          <Row>
            <Col className="d-flex justify-content-center">
              <div className="descrp infraBackgr">
                <div className="descrp filter"></div>
                <p className="descrpText">{t("Infrastructure.Image")}</p>
              </div>
            </Col>
            <Col className="d-flex">
              <Row className="m-auto">
                <h3 className="experts-text">
                  {t("Infrastructure.ImageSub")}
                </h3>
                <ul>
                  <li>{t("Infrastructure.Advantage1")}</li>
                  <li>{t("Infrastructure.Advantage2")}</li>
                  <li>{t("Infrastructure.Advantage3")}</li>
                  <li>{t("Infrastructure.Advantage4")}</li>
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
              <h3 className="text-start">{t("Infrastructure.Title1")}</h3>
            </Col>
            <Col>
              <p>{t("Infrastructure.SubTitle1")}</p>
            </Col>
          </Row>
          <hr style={{ borderTop: "2px solid #B86F8C" }} />
          <Row>
            <Col lg={4}>
              <h3 className="text-start">{t("Infrastructure.Title2")}</h3>
            </Col>
            <Col>
              <p>{t("Infrastructure.SubTitle2")}</p>
            </Col>
          </Row>
          <hr style={{ borderTop: "2px solid #B86F8C" }} />
          <Row>
            <Col lg={4}>
              <h3 className="text-start">{t("Infrastructure.Title3")}</h3>
            </Col>
            <Col>
              <p>{t("Infrastructure.SubTitle3")}</p>
            </Col>
          </Row>
          <hr style={{ borderTop: "2px solid #B86F8C" }} />
          <Row>
            <Col lg={4}>
              <h3 className="text-start">{t("Infrastructure.Title4")}</h3>
            </Col>
            <Col>
              <p>{t("Infrastructure.SubTitle4")}</p>
            </Col>
          </Row>

        </Container>
        <Container fluid style={{ backgroundColor: "#6BBBAE" }}>
          <Row>
            <Col lg={7}>
              <Row className="m-auto mt-5 mb-5">
                <CarruselImgs imgs={imgs} />
              </Row>
            </Col>
            <Col className="d-flex m-auto">
              <Row style={{ color: "#FFFF" }}>
                <h1>{t("General.Title7")}</h1>
                <p>{t("Infrastructure.Solution1")}</p>
              </Row>
            </Col>
          </Row>
        </Container>
      </Container>
    </div>
  );
};

export default Infraestructura;