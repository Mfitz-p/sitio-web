import { useTranslation } from "react-i18next";

//Imágenes
import healthBackgr from "../../images/Productos/healthBackgr.png";
import healthImg from "../../images/Productos/healthImg.png";
import machineLearning1 from "../../images/Productos/imgSalud1.webp";
import machineLearning2 from "../../images/Productos/imgSalud2.webp";
import machineLearning3 from "../../images/Productos/machineLearning3.webp";
import machineLearning4 from "../../images/Productos/machineLearning4.webp";
import machineLearning5 from "../../images/Productos/imgSalud3.webp";
import CarruselImgs from "../../Components/CarruselImgs";

//Css
import { Col, Container, Row, Image } from "react-bootstrap";
import "../../css/Salud.css";

const Salud = () => {
  const [t] = useTranslation("global");
  const imgs2 = [
    {
      id: 5,
      src: machineLearning1,
      alt: "machineLearning1",
    },
    {
      id: 6,
      src: machineLearning2,
      alt: "machineLearning2",
    },
    {
      id: 7,
      src: machineLearning3,
      alt: "machineLearning3",
    },
    {
      id: 8,
      src: machineLearning4,
      alt: "machineLearning4",
    },
    {
      id: 9,
      src: machineLearning5,
      alt: "machineLearning5",
    },
  ];
  return (
    <div>
      <Row className="image_wrapper">
        <Image
          id="imgBackgr"
          src={healthBackgr}
          alt="healthBackgr"
        />
        <Row className="overlay" style={{ padding: "0px" }}>
        <Col sm={5} className="mx-auto">
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <div className="m-auto">
              <h1 className="text-white mb-4">{t("General.Title3")}</h1>
              <h3 className="text-white">{t("Health.Subtitle")}</h3>
            </div>
          </Col>
          <Col sm={6} className="text-end ">
            <Image src={healthImg} alt="healthImg" style={{ height: "100%" }} />
          </Col>
        </Row>
      </Row>
      <Container fluid className="mt-4">
        <Container>
          <Row>
            <Col className="d-flex justify-content-center">
              <div className="descrp doctorBackgr">
                <div className="descrp filter"></div>
                <p className="descrpText">{t("Health.Image")}</p>
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
                  {t("Health.ImageSub")}
                </h3>
                <ul>
                  <li>{t("Health.Advantage1")}</li>
                  <li>{t("Health.Advantage2")}</li>
                  <li>{t("Health.Advantage3")}</li>
                  <li>{t("Health.Advantage4")}</li>
                  <li>{t("Health.Advantage5")}</li>
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
              <h3 className="text-start">{t("Health.Title1")}</h3>
            </Col>
            <Col>
              <p>{t("Health.SubTitle1")}</p>
            </Col>
          </Row>
          <hr style={{ borderTop: "2px solid #B86F8C" }} />
          <Row>
            <Col lg={4}>
              <h3 className="text-start">{t("Health.Title2")}</h3>
            </Col>
            <Col>
              <p>{t("Health.SubTitle2")}</p>
            </Col>
          </Row>
          <hr style={{ borderTop: "2px solid #B86F8C" }} />
          <Row>
            <Col lg={4}>
              <h3 className="text-start">{t("Health.Title3")}</h3>
            </Col>
            <Col>
              <p>{t("Health.SubTitle3")}</p>
            </Col>
          </Row>
          <hr style={{ borderTop: "2px solid #B86F8C" }} />
          <Row>
            <Col lg={4}>
              <h3 className="text-start">{t("Health.Title4")}</h3>
            </Col>
            <Col>
              <p>{t("Health.SubTitle4")}</p>
            </Col>
          </Row>
          <hr style={{ borderTop: "2px solid #B86F8C" }} />
          <Row>
            <Col lg={4}>
              <h3 className="text-start">{t("Health.Title5")}</h3>
            </Col>
            <Col>
              <p>{t("Health.SubTitle5")}</p>
            </Col>
          </Row>
        </Container>
        <Container fluid style={{ backgroundColor: "#6BBBAE" }}>
          <Row>
            <Col lg={7}>
              <Row className="m-auto mt-5 mb-5">
                <CarruselImgs imgs={imgs2} />
              </Row>
            </Col>
            <Col className="d-flex m-auto">
              <Row style={{ color: "#FFFF" }}>
                <h1>{t("General.Title7")}</h1>
                <p>{t("Health.Solution1")}</p>
                <p>{t("Health.Solution2")}</p>
              </Row>
            </Col>
          </Row>
        </Container>
      </Container>
    </div>
  );
};

export default Salud;
