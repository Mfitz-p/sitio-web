import { useTranslation } from "react-i18next";

//Imágenes
import healthImg from "../../images/Productos/healthImg.png";
import machineLearning1 from "../../images/Productos/imgSalud1.webp";
import machineLearning2 from "../../images/Productos/imgSalud2.webp";
import machineLearning3 from "../../images/Productos/machineLearning3.webp";
import machineLearning4 from "../../images/Productos/machineLearning4.webp";
import machineLearning5 from "../../images/Productos/imgSalud3.webp";
import CarruselImgs from "../../Components/CarruselImgs";

//Css
import { Col, Container, Row, Image } from 'react-bootstrap';
import "../../css/Salud.css"
import "../../css/Inicio.css"

import OnScrollLeft from '../Animation/OnScrollLeft';
import OnScrollRight from '../Animation/OnScrollRight';
import OnScrollItems from '../Animation/OnScrollItems';

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
    return(
        <div className="hideX">
            <Row className='image_wrapper ms-0'>
                <Col md={5} className='mx-auto'>
                    <div className='h-75 d-flex flex-column justify-content-center'>
                        <OnScrollItems>
                            <h1 className="text-white m-5">{t("General.Title3")}</h1>
                            <h3 className="text-white mx-5">{t("Health.Subtitle")}</h3>
                        </OnScrollItems>
                    </div>
                </Col>
                <Col md={6} className='text-center text-md-end p-0'>
                    <OnScrollRight>
                        <Image 
                            src={healthImg}
                            alt="healthImg"
                            className="products-img"
                        />
                    </OnScrollRight>
                </Col>
            </Row>
            <Container fluid className='mt-4'>
                <Container>
                    <Row>
                        <Col className='d-flex justify-content-center'>
                            <OnScrollLeft>
                            <div className='descrp doctorBackgr'>
                                <div className='descrp filter'></div>
                                <p className='descrpText'>{t("Health.Image")}</p>
                            </div>
                            </OnScrollLeft>
                        </Col>
                        <Col className='d-flex'>
                            <Row className='m-auto'>
                                <OnScrollRight>
                                    <h3 className="experts-text">{t("Health.ImageSub")}</h3>
                                    <ul>
                                        <li>{t("Health.Advantage1")}</li>
                                        <li>{t("Health.Advantage2")}</li>
                                        <li>{t("Health.Advantage3")}</li>
                                        <li>{t("Health.Advantage4")}</li>
                                        <li>{t("Health.Advantage5")}</li>
                                    </ul>
                                </OnScrollRight>
                            </Row>
                        </Col>
                    </Row>
                </Container>
                <Row className='mt-4 mb-4'>
                    <OnScrollItems>
                        <h1 style={{textAlign: 'center', color: '#6BBBAE'}}>{t("General.Title6")}</h1>
                    </OnScrollItems>
                </Row>
                <Container>
                    <Row>
                        <Col lg={4}>
                            <OnScrollLeft>
                                <h3 className='text-start'>{t("Health.Title1")}</h3>
                            </OnScrollLeft>
                        </Col>
                        <Col>
                            <OnScrollRight>
                                <p>{t("Health.SubTitle1")}</p>
                            </OnScrollRight>
                        </Col>
                    </Row>
                    <hr style={{borderTop: '2px solid #B86F8C'}}/>
                    <Row>
                        <Col lg={4}>
                            <OnScrollLeft>
                                <h3 className='text-start'>{t("Health.Title2")}</h3>
                            </OnScrollLeft>
                        </Col>
                        <Col>
                            <OnScrollRight>
                                <p>{t("Health.SubTitle2")}</p>
                            </OnScrollRight>
                        </Col>
                    </Row>
                    <hr style={{borderTop: '2px solid #B86F8C'}}/>
                    <Row>
                        <Col lg={4}>
                            <OnScrollLeft>
                                <h3 className='text-start'>{t("Health.Title3")}</h3>
                            </OnScrollLeft>
                        </Col>
                        <Col>
                            <OnScrollRight>
                                <p>{t("Health.SubTitle3")}</p>
                            </OnScrollRight>
                        </Col>
                    </Row>
                    <hr style={{borderTop: '2px solid #B86F8C'}}/>
                    <Row>
                        <Col lg={4}>
                            <OnScrollLeft>
                                <h3 className='text-start'>{t("Health.Title4")}</h3>
                            </OnScrollLeft>
                        </Col>
                        <Col>
                            <OnScrollRight>
                                <p>{t("Health.SubTitle4")}</p>
                            </OnScrollRight>
                        </Col>
                    </Row>
                    <hr style={{borderTop: '2px solid #B86F8C'}}/>
                    <Row>
                        <Col lg={4}>
                            <OnScrollLeft>
                                <h3 className='text-start'>{t("Health.Title5")}</h3>
                            </OnScrollLeft>
                        </Col>
                        <Col>
                            <OnScrollRight>
                                {t("Health.SubTitle5")}
                            </OnScrollRight>
                        </Col>
                    </Row>
                </Container>
                <Container fluid style={{backgroundColor: "#6BBBAE"}}>
                    <Row>
                        <Col lg={7}>
                            <Row className='m-auto mt-5 mb-5'>
                                <OnScrollItems>
                                    <CarruselImgs imgs={imgs2} />
                                </OnScrollItems>
                            </Row>
                        </Col>
                        <Col className='d-flex m-auto'>
                            <Row style={{color: '#FFFF'}}>
                                <OnScrollRight>
                                    <h1>{t("General.Title7")}</h1>
                                    <p>{t("Health.Solution1")}</p>
                                    <p>{t("Health.Solution2")}</p>
                                </OnScrollRight>
                            </Row>
                        </Col>
                    </Row>
                </Container>
            </Container>
        </div>
    )
}

export default Salud;
