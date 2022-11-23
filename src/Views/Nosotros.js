/**
 * Vista de página Nosotros. 
 */
 import { Container, Row, Col, Image, Card } from 'react-bootstrap/';
 import nombre from '../images/nombre2.png';
 
 //Logos
 import logoUNAM from '../logos/logoUNAM.png';
 import logoHuawei from '../logos/logoHuawei.png';
 import logoSCT from '../logos/logoSCT.png';
 import logoNuevoLeon from '../logos/logoNuevoLeon.png';
 import logoAguas from '../logos/logoAguas.png';
 import { useTranslation } from 'react-i18next';
 import "../css/Nosotros.css"

 
 function Nosotros() {
   const [t] = useTranslation("global")
   return (
     <>
       <Container fluid className='bg-dark p-4 animate__animated animate__fadeInDown' >
         <div className='d-flex justify-content-center mb-4'>
          <Image loading="lazy"fluid src={nombre} alt='logo' style={{ width: "400px", height: "58.2px" }} />
         </div>
         <p className='d-flex justify-content-center text-white' style={{ fontSize: "20px" }}>{t("Us.Section")}</p>
       </Container>
       <Container fluid >
         <Row >
           <Col lg={{ span: 4, offset: 1 }} className='change-Size'>
             <div className='mision mx-auto animate__animated animate__fadeInLeft mt-5 p-3'>
               <h1 className='tituloMision m-4 text-white'>{t("Us.Mission")}</h1>
               <h5 className='textMision m-2 text-white'>{t("Us.MissionDescription")}</h5>
             </div>
           </Col>
           <Col lg={{ span: 4, offset: 2 }} className='change-Size'>
             <div className='vision mx-auto animate__animated animate__fadeInRight mt-5 p-3' >
               <h1 className='tituloVision m-4 text-white'>{t("Us.Vision")}</h1>
               <h5 className='textVision m-2 text-white'>{t("Us.VisionDescription")}</h5>
             </div>
           </Col>
         </Row>
         <Row>
           <Col className='g-0'>
             <div className='nuestroEquipo mt-5 p-4 text-white'>
               <h1 className='tituloNuestroEquipo '>{t("Us.Team")}</h1>
               <h5 className='textNuestroEquipo p-2'>{t("Us.TeamDescription")}</h5>
             </div>
           </Col>
         </Row>
         {/* Comienza código de los perfiles destacados */}
         <Row>
           {/* <h2 className='p-4 d-flex justify-content-center' style={{fontSize: '45px'}}>Funciones Destacadas</h2> */}
           <Col className="p-4 d-flex justify-content-center " lg={6} md={12}>
             <Card style={{ width: '35rem', border: 'none' }}>
               <Card.Body className='animate__animated animate__fadeInLeft'>
                 <Card.Title className="d-flex justify-content-center " style={{ fontSize: '30px', color: 'rgba(107, 187, 174, 1)'}}>{t("Us.CEO")}</Card.Title>
                 <Card.Text style={{textAlign: "justify"}}>
                 {t("Us.CEODescription")}
                 </Card.Text>
               </Card.Body>
             </Card>
           </Col>
           <Col  className="p-4 d-flex justify-content-center " lg={6} md={12}>
             <Card style={{ width: '35rem', border: 'none' }}>
               <Card.Body className='animate__animated animate__fadeInRight'>
                 <Card.Title className="d-flex justify-content-center " style={{ fontSize: '30px', color: 'rgba(107, 187, 174, 1)'}}>{t("Us.CTO")}</Card.Title>
                 <Card.Text style={{textAlign: "justify"}}>
                 {t("Us.CTODescription")}
                 </Card.Text>
               </Card.Body>
             </Card>
           </Col>
           <Col className="p-4 d-flex justify-content-center " lg={6} md={12}>
             <Card style={{ width: '35rem', border: 'none' }}>
               <Card.Body className='animate__animated animate__fadeInLeft'>
                 <Card.Title className="d-flex justify-content-center " style={{ fontSize: '30px', color: 'rgba(107, 187, 174, 1)'}}>{t("Us.Scientist")}</Card.Title>
                 <Card.Text style={{textAlign: "justify"}}>
                 {t("Us.ScientistDescription1")}
                 </Card.Text>
               </Card.Body>
             </Card>
           </Col>
           <Col className="p-4 d-flex justify-content-center " lg={6} md={12}>
             <Card style={{ width: '35rem', border: 'none' }}>
               <Card.Body className='animate__animated animate__fadeInRight'>
                 <Card.Title className="d-flex justify-content-center " style={{ fontSize: '30px', color: 'rgba(107, 187, 174, 1)'}}>{t("Us.Scientist")}</Card.Title>
                 <Card.Text style={{textAlign: "justify"}}>
                 {t("Us.ScientistDescription2")}
                 </Card.Text>
               </Card.Body>
             </Card>
           </Col>
         </Row>
         <hr />
         <Row>
         <h2 className='p-4 d-flex justify-content-center' style={{fontSize: '45px'}}>{t("Us.Aliances")}</h2>
           <Col sm className="p-4 d-flex justify-content-center">
           <div className="d-flex justify-content-center">
            <Image loading="lazy"height={100} width={89} className='m-3 hvr-grow ' src={logoUNAM} alt='logoUNAM' />
           </div>
           </Col>
           <Col sm className="p-4 d-flex justify-content-center">
           <div className="d-flex justify-content-center ">
            <Image loading="lazy"height={100} width={99}className='m-3 hvr-grow' src={logoHuawei} alt='logoHuawei' />
           </div>
           </Col>
           <Col sm className="p-4 d-flex justify-content-center">
           <div className="d-flex justify-content-center ">
          <Image loading="lazy"height={90} width={216} className='m-3 hvr-grow' src={logoSCT} alt='logoSCT' />
           </div>
           </Col>
           <Col sm className="p-4 d-flex justify-content-center">
           <div className="d-flex justify-content-center ">
           <Image loading="lazy" height={110} width={133} className='m-3 hvr-grow' src={logoAguas} alt='logoAguas' />
           </div>
           </Col>
           <Col sm className="p-4 d-flex justify-content-center">
           <div className="d-flex justify-content-center ">
          <Image loading="lazy"height={100} width={78} className='m-3 hvr-grow' src={logoNuevoLeon} alt='logoNuevoLeon'/>
           </div>
           </Col>
         </Row>
       </Container>
     </>
   )
 }
 export default Nosotros;
 
 
