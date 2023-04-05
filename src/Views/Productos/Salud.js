import { useTranslation } from 'react-i18next';

//Imagen
import medicaIA from '../../images/Inicio/medicaIA.webp'

//Css
import { Col, Container, Row, Image } from 'react-bootstrap';
import "../../css/Salud.css"

const Salud = () => {
    const [t] = useTranslation("global")

    return(
        <div>
            <Container>
               <Row className='mt-3 mb-3'>
                    <Col lg={9} className="d-flex align-items-center"><h2>{t("Salud.Title")}</h2></Col>
                    <Col lg={3} className="d-flex justify-content-center">
                        <Image 
                            src={medicaIA}
                            alt="health"
                            height={200}
                        />
                    </Col>
                </Row> 
                <Row>
                   <Col lg={2}><p className="subtitles">{t("Us.Team")}</p></Col> 
                   <Col>{t("Salud.Team")}</Col> 
                </Row>
                <Row>
                    <Col lg={2}><p className="subtitles">{t("Salud.Service")}</p></Col> 
                    <Col>
                        <ul>
                            <li>{t("Salud.Service1")}</li>
                            <li>{t("Salud.Service2")}</li>
                            <li>{t("Salud.Service3")}</li>
                            <li>{t("Salud.Service4")}</li>
                        </ul>
                    </Col> 
                </Row>
                <Row>
                    <Col lg={2}><p className="subtitles">{t("Salud.Advantage")}</p></Col>
                    <Col>
                        <ul>
                            <li>{t("Salud.Advantage1")}</li>
                            <li>{t("Salud.Advantage2")}</li>
                            <li>{t("Salud.Advantage3")}</li>
                            <li>{t("Salud.Advantage4")}</li>
                            <li>{t("Salud.Advantage5")}</li>
                        </ul>
                    </Col>
                </Row>
            </Container> 
        </div>
    )
}

export default Salud;