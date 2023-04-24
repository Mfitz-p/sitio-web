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
import { Col, Container, Row, Image } from 'react-bootstrap';
import "../../css/Salud.css"
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
        <div>
            <Row className='image_wrapper'>
                <Image
                    id="imgBackgr" 
                    src={healthBackgr}
                    alt="healthBackgr"   
                    height={500}           
                />
                <Row className='overlay' style={{padding: '0px'}}>
                    <Col className='m-auto'>
                        <div className='m-auto header'>
                            <OnScrollLeft>
                                <h1 className='text-white mb-4'>Salud</h1>
                                <h3 className='text-white'>Impulsando la atención médica con Inteligencia Artificial y analítica predictiva.</h3>
                            </OnScrollLeft>
                        </div>
                    </Col>
                    <Col className='p-0 text-end d-none d-sm-block'>
                        <OnScrollRight>
                            <Image 
                                src={healthImg}
                                alt="healthImg"
                                height={500}
                            />
                        </OnScrollRight>
                    </Col>
                </Row>
            </Row>
            <Container fluid className='mt-4'>
                <Container>
                    <Row>
                        <Col className='d-flex justify-content-center'>
                            <OnScrollLeft>
                            <div className='descrp doctorBackgr'>
                                <div className='descrp filter'></div>
                                <p className='descrpText'>Asistencia en procedimientos clínicos y tareas rutinarias en los sistemas de salud.</p>
                            </div>
                            </OnScrollLeft>
                        </Col>
                        <Col className='d-flex'>
                            <Row className='m-auto'>
                                <OnScrollRight>
                                    <h3 style={{fontSize: 'x-large', marginBottom: '1em', fontWeight: 'bold', textAlign: 'justify'}}>En Kaminiottech contamos con expertos líderes en el área de desarrollo de sistemas inteligentes para la asistencia en la práctica clínica
                                    y de administración de diferentes instituciones encargadas de brindar servicios de salud públicas y privadas.</h3>
                                </OnScrollRight>
                                <ul>
                                    <OnScrollRight>
                                        <li>{t("Salud.Advantage1")}</li>
                                        <li>{t("Salud.Advantage2")}</li>
                                        <li>{t("Salud.Advantage3")}</li>
                                        <li>{t("Salud.Advantage4")}</li>
                                        <li>{t("Salud.Advantage5")}</li>
                                    </OnScrollRight>
                                </ul>
                            </Row>
                        </Col>
                    </Row>
                </Container>
                <Row className='mt-4 mb-4'>
                    <OnScrollItems>
                        <h1 style={{textAlign: 'center', color: '#6BBBAE'}}>Productos y Servicios</h1>
                    </OnScrollItems>
                </Row>
                <Container>
                    <Row>
                        <Col lg={4}>
                            <OnScrollLeft>
                                <h3 className='text-start'>Sistemas CADx</h3>
                            </OnScrollLeft>
                        </Col>
                        <Col>
                            <OnScrollRight>
                                <p>Implementación de sistemas de diagnóstico y cirugía asistidos por computadora (CAD/CAS) basados en visión por computadora, procesamiento de señales (ECG, EEG, RF, etc) , aprendizaje máquina y realidad aumentada para optimizar la precisión en los procedimientos de diagnóstico y quirúrgicos.</p>
                            </OnScrollRight>
                        </Col>
                    </Row>
                    <hr style={{borderTop: '2px solid #B86F8C'}}/>
                    <Row>
                        <Col lg={4}>
                            <OnScrollLeft><h3 className='text-start'>Observatorios de Salud</h3></OnScrollLeft>
                        </Col>
                        <Col>
                            <OnScrollRight><p>Monitoreo y supervisión de parámetros e índices descriptivos de la evolución epidémica de diferentes patologías, mediante la integración de sistemas de gestión y procesamiento de grandes cantidades de datos y de información sistematizada y periódicamente actualizada.</p></OnScrollRight>
                        </Col>
                    </Row>
                    <hr style={{borderTop: '2px solid #B86F8C'}}/>
                    <Row>
                        <Col lg={4}>
                            <OnScrollLeft><h3 className='text-start'>Pronóstico del tratamiento clínico</h3></OnScrollLeft>
                        </Col>
                        <Col>
                            <OnScrollRight>
                                <p>Desarrollo de sistemas de pronóstico de la efectividad del tratamiento clínico mediante métodos de analítica predictiva para la identificación de patrones de respuesta a diversos tratamientos para asistir a los médicos en la toma de decisiones del tratamiento informadas y personalizadas.</p>
                            </OnScrollRight>
                        </Col>
                    </Row>
                    <hr style={{borderTop: '2px solid #B86F8C'}}/>
                    <Row>
                        <Col lg={4}>
                            <OnScrollLeft><h3 className='text-start'>Sistemas de gestión </h3></OnScrollLeft>
                        </Col>
                        <Col>
                            <OnScrollRight>
                                <p>HIS (Hospital Information System) para la asistencia en la administración de los recursos físicos, humanos, financieros y administrativos en los diferentes sistemas de salud, con el fin de agilizar la toma de decisiones en las actividades operativas que forman parte de la rutina en los servicios hospitalarios y clínicos mejorando el acceso a la información.</p>
                            </OnScrollRight>
                        </Col>
                    </Row>
                    <hr style={{borderTop: '2px solid #B86F8C'}}/>
                    <Row>
                        <Col lg={4}>
                            <OnScrollLeft><h3 className='text-start'>Marcadores de diagnóstico</h3></OnScrollLeft>
                        </Col>
                        <Col>
                            <OnScrollRight>
                                <p>Obtención y selección de marcadores de diagnóstico (clínicos, demográficos, genéticos, morfológicos y socioculturales) a través del procesamiento de grandes bases de datos y la implementación de métodos de estadística descriptiva avanzada.</p>
                            </OnScrollRight>
                        </Col>
                    </Row>
                </Container>
                <Container fluid style={{backgroundColor: "#6BBBAE"}}>
                    <Row>
                        <Col lg={7}>
                            <Row className='m-auto mt-5 mb-5'>
                                <OnScrollItems>
                                    <Image
                                        fluid
                                        src={machineLearning}
                                        alt="machineLearning"
                                        id='machineLearningImg'
                                    />
                                </OnScrollItems>
                            </Row>
                        </Col>
                        <Col className='d-flex m-auto'>
                            <Row style={{color: '#FFFF'}}>
                                <OnScrollRight>
                                    <h1>Nuestras Soluciones</h1>
                                    <p>BIRADS-AI: Herramienta para la asistencia en el tamizaje de cáncer de mama basada en métodos de Inteligencia Artificialy  Visión por Computadora.</p>
                                    <p>SIGA-Care: Sistema de gestión hospitalaria (HIS) para agilizar y controlar los procesos administrativos y las tareas rutinarias necesarias para la toma de decisiones en las actividades operativas y la reducción de costos.</p>
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
