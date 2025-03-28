/**
 * Vista de página Habilidades. 
 */
 import { Container, Row, Col, Image } from 'react-bootstrap/';
 
 //Logos
 import logoLinkedin from '../logos/logoLinkedin.png';
 import logoInstagram from '../logos/logoInstagram.png';
 import logoX from '../logos/logoX.svg';
 import { useTranslation } from 'react-i18next';
 
 function Habilidades() {
   const [t] = useTranslation("global")
   return (
     <>
       <Container fluid className='p-4 animate__animated animate__fadeInDown' >
         <div className='d-flex justify-content-center mb-4'>
          <h3 className='text-dark'>{t("Us.Title")}</h3>
         </div>
         <p className='d-flex justify-content-center text-dark' style={{ fontSize: "20px" }}>{t("Us.Section")}</p>
       </Container>
       <Container fluid >
         
         
         <hr />
         <Row>
         <h2 className='p-4 d-flex justify-content-center' style={{fontSize: '45px'}}>{t("Us.Aliances")}</h2>
           <Col sm className="p-4 d-flex justify-content-center">
           <div className="d-flex justify-content-center">
           <a
            href="https://www.linkedin.com/in/martha-fitz-189a83211/"
            target="_blank"
            rel="noopener noreferrer"
           >
              <Image
                loading="lazy"
                height={100}
                width={89}
                className="m-3 hvr-grow"
                src={logoLinkedin}
                alt="logoLinkedin"
              />
            </a>
           </div>
           </Col>
           <Col sm className="p-4 d-flex justify-content-center">
           <div className="d-flex justify-content-center ">
           <a
              href="https://www.instagram.com/martha_fitz?igsh=ZmU2Z3A2bjF5NzBh&utm_source=qr"
              target="_blank"
              rel="noopener noreferrer"
            >
            <Image 
              loading="lazy" 
              height={100} 
              width={99} 
              className='m-3 hvr-grow' 
              src={logoInstagram} 
              alt='logoInstagram' 
            />
              
            </a>
           </div>
           </Col>
           <Col sm className="p-4 d-flex justify-content-center">
           <div className="d-flex justify-content-center ">
            <a
                href="https://x.com/martha_fitz?s=21&t=Kb_4On8zwlb43uNE8SbWDA"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image 
                  loading="lazy" 
                  height={90} 
                  width={216} 
                  className='m-3 hvr-grow' 
                  src={logoX} 
                  alt='logoX' 
                />
              </a>
           </div>
           </Col>
         </Row>
       </Container>
     </>
   )
 }
 export default Habilidades;
 
 
