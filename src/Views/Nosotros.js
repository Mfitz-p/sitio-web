/**
 * Vista de página Nosotros. 
 */
import { Container, Row, Col, Image, Card } from 'react-bootstrap/';
import nombre from '../images/nombre2.png';

//Logos
import logoUNAM from '../logos/logoUNAM.png';
import logoHuawei from '../logos/logoHuawei.png';
import logoSCT from '../logos/logoSCT.png';
import logoChihuahua from '../logos/logoChihuahua.png';
import logoNuevoLeon from '../logos/logoNuevoLeon.png';


function Nosotros() {
  return (
    <>
      <Container fluid className='bg-dark p-4 animate__animated animate__fadeInDown' >
        <div className='d-flex justify-content-center mb-4'>
         <Image loading="lazy"fluid src={nombre} alt='logo' style={{ width: "400px" }} />
        </div>
        <p className='d-flex justify-content-center text-white' style={{ fontSize: "20px" }}>En la última década diferentes sectores empresariales han comenzado su transformación digital incorporando múltiples soluciones tecnológicas con los objetivos de: maximizar el valor agregado de su información y eficientar el uso de recursos. Debido a esto, Kaminoittech se posiciona en el mercado como una empresa dedicada a proveer servicios de consultoría en analítica avanza e inteligencia artificial para maximizar el valor agregado de los datos, dotando de soluciones innovadoras y flexibles para cada proyecto.</p>
      </Container>
      <Container fluid >
        <Row >
          <Col lg={{ span: 4, offset: 1 }} className='change-Size'>
            <div className='mision mx-auto animate__animated animate__fadeInLeft mt-5 p-3'>
              <h1 className='tituloMision m-4 text-white'>Misión </h1>
              <h5 className='textMision m-2 text-white'> Dotar a nuestros clientes soluciones basadas en el manejo de datos y analítica
                predictiva para eficientar los procesos de toma decisiones en los negocios. </h5>
            </div>
          </Col>
          <Col lg={{ span: 4, offset: 2 }} className='change-Size'>
            <div className='vision mx-auto animate__animated animate__fadeInRight mt-5 p-3' >
              <h1 className='tituloVision m-4 text-white'>Visión </h1>
              <h5 className='textVision m-2 text-white'> Ser la empresa referente de México en consultoría en ciencia de datos e
                inteligencia de negocios para competir con en el mercado latino americano y
                contar con presencia en EUA.</h5>
            </div>
          </Col>
        </Row>
        <Row>
          <Col className='g-0'>
            <div className='nuestroEquipo mt-5 p-4 text-white'>
              <h1 className='tituloNuestroEquipo '>Nuestro Equipo </h1>
              <h5 className='textNuestroEquipo p-2'>En Kaminoittech contamos con un equipo interdisciplinario de expertos en ciencia de datos, analítica predictiva y de desarrollo de aplicaciones, que, junto con nuestro equipo técnico, socios comerciales y nuestras alianzas estratégicas nos permiten crear soluciones innovadoras y flexibles para cada proyecto.</h5>
            </div>
          </Col>
        </Row>
        {/* Comienza código de los perfiles destacados */}
        <Row>
          {/* <h2 className='p-4 d-flex justify-content-center' style={{fontSize: '45px'}}>Funciones Destacadas</h2> */}
          <Col className="p-4 d-flex justify-content-center " lg={6} md={12}>
            <Card style={{ width: '35rem', border: 'none' }}>
              <Card.Body className='animate__animated animate__fadeInLeft'>
                <Card.Title className="d-flex justify-content-center " style={{ fontSize: '30px', color: 'rgba(107, 187, 174, 1)'}}>Cofundador & CEO</Card.Title>
                <Card.Text style={{textAlign: "justify"}}>
                Ingeniero en Telecomunicaciones con especialidad en Procesamiento de Señales. Egresado de la Facultad de Ingeniería de la UNAM; cuenta con una Maestría en Ingeniería de Negocios por Duke University, en Estados Unidos.
                Fungió como Director General Adjunto de infraestructura del Gabinete de Infraestructura y Turismo en la oficina de la Presidencia de la República y asesor de Planeación, Política de Precios y Análisis Financiero de la Dirección Corporativa de Fianzas en PEMEX. En la Secretaría de Comunicaciones y Transportes se desempeñó como Coordinador de Asesores del Subsecretario de Infraestructura y posteriormente fue designado por el Secretario de Comunicaciones como Coordinador General de Centros SCT. Se ha desempeñado como consultor en la empresa McKinsey and Company y actualmente es Director General y fundador de Moen Consultores.

                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col  className="p-4 d-flex justify-content-center " lg={6} md={12}>
            <Card style={{ width: '35rem', border: 'none' }}>
              <Card.Body className='animate__animated animate__fadeInRight'>
                <Card.Title className="d-flex justify-content-center " style={{ fontSize: '30px', color: 'rgba(107, 187, 174, 1)'}}>Cofundador & CTO</Card.Title>
                <Card.Text style={{textAlign: "justify"}}>
                Co-fundadora y directora de Tecnología y Ciencia de Datos en Kaminoittech. En Tycho Solutions fue gerente de proyecto en el área de Ciencia de Datos. Trabajó como investigadora postdoctoral en el High Altitude Water Cherenkov Observatory (HAWC) implementando algoritmos de Aprendizaje por Computadora. Es miembro del SNI nivel 1, ha publicado alrededor de 15 artículos en revistas internacionales arbitradas, dirigido tesis y dictado cursos en la UNAM. Maestra en Ciencia de Datos (ITAM), Doctora y Maestra en Ciencias de la Tierra (Instituto de Geofísica, UNAM), Ingeniera Geofísica (UNAM).
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col className="p-4 d-flex justify-content-center " lg={6} md={12}>
            <Card style={{ width: '35rem', border: 'none' }}>
              <Card.Body className='animate__animated animate__fadeInLeft'>
                <Card.Title className="d-flex justify-content-center " style={{ fontSize: '30px', color: 'rgba(107, 187, 174, 1)'}}>Científico de datos</Card.Title>
                <Card.Text style={{textAlign: "justify"}}>
                Dr. en Ingeniería líder del área de investigación y desarrollo de sistemas CAD/CAS. Su área es la responsable de la creación del sistema de diagnóstico de cáncer de mama mediante la implementación de inteligencia artificial y aprendizaje máquina. Ha sido Investigador Postdoctoral del LaPI-UNAM y profesor de asignatura de la UNAM en las licenciaturas de Matemáticas Aplicadas y Computación, Ciencia de Datos, Ingeniería Electrónica y la Maestría de Ciencias de la Computación. Desde 2016 ha participado en el desarrollo y coordinación de diferentes proyectos PAPIIT y para la industria privada.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col className="p-4 d-flex justify-content-center " lg={6} md={12}>
            <Card style={{ width: '35rem', border: 'none' }}>
              <Card.Body className='animate__animated animate__fadeInRight'>
                <Card.Title className="d-flex justify-content-center " style={{ fontSize: '30px', color: 'rgba(107, 187, 174, 1)'}}>Científico de datos</Card.Title>
                <Card.Text style={{textAlign: "justify"}}>
                Dr. En Ingeniería encargado del equipo de Visión Computacional y Aprendizaje de Máquina. Profesor de asignatura en la Universidad Panamericana. Trabajó como investigador postdoctoral en la UNAM en el proyecto “Sistema inteligente para el diagnóstico médico asistido para enfermedades cardiovasculares” en colaboración con el Hospital 20 de Noviembre y la SECTEI. Obtuvo el 2° lugar en el Premio AFIRME-UNAM 2019. Ha publicado artículos en revistas y en congresos revisados por pares. Doctorado y Maestría en Procesamiento Digital de Señales (UNAM), Ingeniero Eléctrico-Electrónico (UNAM).
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <hr />
        <Row>
        <h2 className='p-4 d-flex justify-content-center' style={{fontSize: '45px'}}>Nuestras Alianzas</h2>
          <Col sm className="p-4 d-flex justify-content-center">
          <div className="d-flex justify-content-center">
           <Image loading="lazy"height={100} className='m-3 hvr-grow ' src={logoUNAM} alt='logoUNAM' />
          </div>
          </Col>
          <Col sm className="p-4 d-flex justify-content-center">
          <div className="d-flex justify-content-center ">
           <Image loading="lazy"height={100} className='m-3 hvr-grow' src={logoHuawei} alt='logoHuawei' />
          </div>
          </Col>
          <Col sm className="p-4 d-flex justify-content-center">
          <div className="d-flex justify-content-center ">
         <Image loading="lazy"height={90} className='m-3 hvr-grow' src={logoSCT} alt='logoSCT' />
          </div>
          </Col>
          <Col sm className="p-4 d-flex justify-content-center">
          <div className="d-flex justify-content-center ">
         <Image loading="lazy"height={100} className='m-3 hvr-grow' src={logoChihuahua} alt='logoChihuahua' />
          </div>
          </Col>
          <Col sm className="p-4 d-flex justify-content-center">
          <div className="d-flex justify-content-center ">
         <Image loading="lazy"height={100} className='m-3 hvr-grow' src={logoNuevoLeon} alt='logoNuevoLeon'/>
          </div>
          </Col>
        </Row>
      </Container>
    </>
  )
}
export default Nosotros;

