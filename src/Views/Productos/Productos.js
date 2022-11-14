import { Container, Image, Card, Col, Row } from 'react-bootstrap';
import { Link } from 'react-scroll';
import CarruselImgs from '../../Components/CarruselImgs';

// IMGS DE CARRUSEL SIGA 
import aforosSIGA from '../../images/aforosSIGA.png';
import hallazgozSIGA from '../../images/hallazgozSIGA.png';
import mapaSIGA from '../../images/mapaSIGA.png';
import ingresoSIGA from '../../images/ingresoSIGA.png';

import machineLearning1 from '../../images/machineLearning11.png';
import machineLearning2 from '../../images/machineLearning21.png';
import machineLearning3 from '../../images/machineLearning3.png';
import machineLearning4 from '../../images/machineLearning4.jpg';

import businessInt1 from '../../images/businessInt1.png';
import businessInt2 from '../../images/businessInt2.png';
import businessInt3 from '../../images/businessInt3.png';
import businessInt4 from '../../images/businessInt4.png';

import vCompu1 from '../../images/vCompu1.jpg';
import vCompu2 from '../../images/vCompu2.jpg';
import vCompu3 from '../../images/vCompu3.jpg';
import vCompu4 from '../../images/vCompu4.jpg';
import vCompu5 from '../../images/vCompu5.jpg';

/* Iconos de productos en svg */
import computerSvg from '../../icons/computer.svg';
import modelosML from '../../icons/modelosML.svg';
import businessInt from '../../icons/businessInt.svg';
import visionCompu from '../../icons/visionCompu.svg';
import vBigData from '../../icons/vBigData.svg';

import { useInView } from 'react-intersection-observer';
import "../../App.css";

// Arreglos de objetos donde se obtienen las imagenes para los carrusel
const imgs = [
  {
    id: 1,
    src: aforosSIGA,
    alt: "aforos"
  },
  {
    id: 2,
    src: hallazgozSIGA,
    alt: "hallazgoz"
  },
  {
    id: 3,
    src: mapaSIGA,
    alt: "mapa"
  },
  {
    id: 4,
    src: ingresoSIGA,
    alt: "ingresos"
  }
  
]
 const imgs2 =[
  {
    id: 5,
    src: machineLearning1,
    alt: "machineLearning1"
  },
  {
    id: 6,
    src: machineLearning2,
    alt: "machineLearning2"
  },
  {
    id: 7,
    src: machineLearning3,
    alt: "machineLearning3"
  },
  {
    id: 8,
    src: machineLearning4,
    alt: "machineLearning4"
  }
 ]
 const imgs3 = [
  {
    id: 9,
    src: businessInt1,
    alt: "businessInt1"
  },
  {
    id: 10,
    src: businessInt2,
    alt: "businessInt2"
  },
  {
    id:11,
    src: businessInt3,
    alt: "businessInt3"
  },
  {
    id: 12,
    src: businessInt4,
    alt: "businessInt4"
  }
 ]

 const imgs4 = [
  {
    id: 9,
    src: vCompu1,
    alt: "vCompu1"
  },
  {
    id: 10,
    src: vCompu2,
    alt: "vCompu2"
  },
  {
    id:11,
    src: vCompu3,
    alt: "vCompu3"
  },
  {
    id: 12,
    src: vCompu4,
    alt: "vCompu4"
  },
  {
    id: 12,
    src: vCompu5,
    alt: "vCompu5"
  }
 ]

const Productos = () => {
 /**
  * Uso de la librería react-intersection-observer con npm i react-intersection-observer.
  * La librería usa un hook personalizado que desestructura un objeto con diferentes propiedades que simplifican y acortan significativamente el código.
  * La propiedad ref dentro del objeto, sustituye el uso del hook useRef y la propiedad inView sustituye el uso de useState con useEffect; 
  * ambas propiedades pueden ser renombradas dependiendo de la cantidad de elementos que deseen emplearse. 
  * Es necesario que haya un objeto por cada elemento a observar con su respectivo ref e inView para que puedan renderizarse adecuadamente.
    * Adicionalmente se le pueden agregar distintas opciones dependiendo de lo que se requiera, dentro del hook useInview.
    * threshold indica el porcentaje en pixeles que se desea para que los efectos empiecen a ejecutarse y va desde 0 (ejecutar en cuanto aparecen) a 1 
    * (ejecutar una vez que el elemento se muestre al 100%).
    * triggerOnce es una propiedad que recibe valores booleanos para determinar si los efectos se ejecutarán solo una vez o de manera indefinida.
  * Dentro de los elementos JSX debe existir un llamado a useRef ej. <h1 ref={ref}></h1> y un renderizado condicional en los elementos que se deseen modificar ,
  * el valor de inView el cuál resultará true una vez que se detecte la aparición del elemento a modificar en pantalla. Ej.  <p> {inView ? 'Elemento Presente' : 'Vacío'}</p>
 */

  const { ref: effectRef, inView:effectScroll} = useInView({
    threshold: 0,
    
  });

  // const { ref: effectRef2, inView:effectScroll2} = useInView({
  //   threshold: 0,
    
  // });
  // const { ref: effectRef3, inView:effectScroll3} = useInView({
  //   threshold: 0,
   
  // });
  const { ref: effectRef4, inView:effectScroll4} = useInView({
    threshold: 0,
   
  });
  const { ref: effectRef5, inView:effectScroll5} = useInView({
    threshold: 0,
    
  });
  const { ref: effectRef6, inView:effectScroll6} = useInView({
    threshold: 0,
   
  });
  const { ref: effectRef7, inView:effectScroll7} = useInView({
    threshold: 0,
   
  });
  const { ref: effectRef8, inView:effectScroll8} = useInView({
    threshold: 0,
    
  });
  const { ref: effectRef9, inView:effectScroll9} = useInView({
    threshold: 0,
  
  });
  const { ref: effectRef10, inView:effectScroll10} = useInView({
    threshold: 0,
    
  });
  const { ref: btn, inView: up } = useInView({
    threshold: 1,
    triggerOnce: true,
    delay: 3000
  });

  return (
    <>
      <Container fluid>
      
        <Row className='p-5'> 
          <Col>
            <h2 className='animate__animated animate__fadeInUp' style={{ fontWeight: 'bold' }}>Nuestro modelo de negocios nos permite facilitarte los siguientes productos</h2>
            <hr />
          </Col>
          {/* Ícono de flecha que despliega hacia abajo para cambiar a la siguientes secciones */}
          <Link className=' d-flex justify-content-end text-black' to='card-modelosML'
                  smooth={true}
                  duration={0}>
                  <i className="bi bi-arrow-down-circle hvr-hang " style={{ fontSize: '45px' }}></i>
          </Link>
        </Row>
        {/* Inician las cards de productos con su respectiva imagen */}
        <section id='infraestructura' className='container-product'>
        <Row className='align-items-center container-product' >
          <Col sm={12} md={6} ref={effectRef} className={`${effectScroll ? 'animate__animated animate__fadeInLeft': 'reverseObserver'}`}>
            <Card style={{ border: 'none' }}>
              <Card.Body className='animate__animated animate__fadeInLeft'>
                <Card.Title style={{ fontSize: '28px', border: 'none' }}>
                <Image height={70} className='m-3 hvr-float' src={computerSvg} alt='computerSvg'/>
                Infraestructura
                </Card.Title>
                <Card.Text style={{ fontSize: '21px', textAlign: 'justify' }}>
                  <ul>
                  <li className='mb-0'> Sistema de gestión (Centralización, monitoreo y visualización de la información).</li>
                  <li className='mb-0'> Visión computacional (Detección de incidencias). </li>
                  <li className='mb-0'> Seguimiento de obra (Percepción remota) </li>
                  <li className='mb-0'> Metodología BIM </li>
                  </ul>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col sm={12} md={6}>
            <Card style={{ border: 'none' }}>
              {/* Comienza carrucel de imagenes */}
              <CarruselImgs imgs={imgs} />
            </Card>
          </Col>
        </Row>
      </section>

      <section id='retail' className='container-product'>
        <Row className='align-items-center container-product' style={{  backgroundColor: 'rgb(33,37,41)' }}>
          <Col sm={12} md={6}>
            <Card style={{ border: 'none', backgroundColor: 'transparent'  }}>
              {/* Comienza carrusel de imagenes */}
              <CarruselImgs imgs={imgs2} />
            </Card>
          </Col>
          <Col sm={12} md={6}>
            <Card style={{ border: 'none', backgroundColor: 'transparent' }}>
              <Card.Body ref={effectRef4} className={`${effectScroll4 ? 'animate__animated animate__fadeInRight': 'reverseObserver'}`}>
                <Card.Title style={{ fontSize: '28px', border: 'none', color: 'white' }}>
                <Image height={70} className='m-3 hvr-float' src={modelosML} alt='modelosML'/>
                Retail & B2B
                </Card.Title>
                <Card.Text style={{ fontSize: '21px', textAlign: 'justify', color: 'white' }}>
                  <ul>
                  <li className='mb-0'>Predicción de comportamientos de consumidor</li>
                  <li className='mb-0'>Simuladores de precios</li>
                  <li className='mb-0'>Optimización de promociones</li>
                  <li className='mb-0'>Análisis de canastos</li>
                  <li className='mb-0'>Sistemas de recomendación</li>
                  </ul>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </section>
        {/* Ícono de flecha que despliega hacia abajo para cambiar a la siguientes secciones */}
        <Link className=' d-flex justify-content-end text-black' to='card-visionComp'
                  smooth={true}
                  duration={0}>
                  <i className="bi bi-arrow-down-circle hvr-hang " style={{ fontSize: '45px' }}></i>
        </Link>
      <section id='salud' className='container-product'>
        <Row className='align-items-center container-product' >
          <Col sm={12} md={6}>
            <Card style={{ border: 'none' }}>
              <Card.Body ref={effectRef5} className={`${effectScroll5 ? 'animate__animated animate__fadeInLeft': 'reverseObserver'}`}>
                <Card.Title style={{ fontSize: '28px', border: 'none' }}>
                <Image height={70} className='m-3 hvr-float' src={businessInt} alt='businessInt'/>
                Salud
                </Card.Title>
                <Card.Text style={{ fontSize: '21px', textAlign: 'justify' }}>
                  <ul>
                  <li className='mb-0'>Sistemas de diagnóstico y cirugía asistidos por computadora (CAD/CAS).</li>
                  <li className='mb-0'>Observatorios de salud.</li>
                  <li className='mb-0'>Pronóstico de la efectividad del tratamiento clínico.</li> 
                  <li className='mb-0'>Obtención de biomarcadores de diagnóstico.</li> 
                  </ul>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col sm={12} md={6}>
            <Card style={{ border: 'none' }}>
            <CarruselImgs imgs={imgs3} />
            </Card>
          </Col>
        </Row>
      </section>

      {/* Este div contiene la flecha que aparece a mitad de las secciones y te regresa a la primera seccion de productos donde esta el titulo */}
      <div ref={btn} className='d-flex justify-content-end sticky-sm-top' style={{ fontSize: '45px', top: '50%', opacity: '.5', cursor: 'pointer' }}> 
        <Link to='card-desarrollo' smooth={true} duration={0}> 
          <i className={`${up ? 'bi bi-arrow-up-circle animate__animated animate__fadeInUp' : null} `} ></i>
        </Link>
      </div>

        <section id='movilidad' className='container-product'>
        <Row className='align-items-center container-product' style={{  backgroundColor: 'rgb(33,37,41)'  }}>
          <Col sm={12} md={6}>
            <Card style={{ border: 'none', backgroundColor: 'transparent'  }}>
            <CarruselImgs imgs={imgs4} />
            </Card>
          </Col>
          <Col sm={12} md={6}>
            <Card style={{ border: 'none', backgroundColor: 'transparent'  }}>
              <Card.Body ref={effectRef8} className={`${effectScroll8 ? 'animate__animated animate__fadeInRight': 'reverseObserver'}`}>
                <Card.Title style={{ fontSize: '28px', border: 'none', color: 'white' }}>
                <Image height={70} className='m-3 hvr-float' src={visionCompu} alt='visionCompu'/>
                   Movilidad y Transportes 
                </Card.Title>
                <Card.Text style={{ fontSize: '21px', textAlign: 'justify', color: 'white' }}>
                  <ul>
                  <li className='mb-0'>Optimización de la eficiencia del uso de combustible</li>
                  <li className='mb-0'>Generación de matrices Origen-Destino</li>
                  <li className='mb-0'>Análisis y visualización de datos geoespaciales</li>
                  <li className='mb-0'>Predicción de patrones de movilidad e incidencias de tráfico</li>
                  </ul>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        </section>

        <section id='banca' className='container-product'>
        <Row className='align-items-center container-product' >
          <Col sm={12} md={6} ref={effectRef6} className={`${effectScroll6 ? 'animate__animated animate__fadeInLeft': 'reverseObserver'}`}>
            <Card style={{ border: 'none' }}>
              <Card.Body className='animate__animated animate__fadeInLeft'>
                <Card.Title style={{ fontSize: '28px', border: 'none' }}>
                <Image height={70} className='m-3 hvr-float' src={computerSvg} alt='computerSvg'/>
                Banca
                </Card.Title>
                <Card.Text style={{ fontSize: '21px', textAlign: 'justify' }}>
                  <ul>
                    <li className='mb-0'>Detección de fraudes</li>
                    <li className='mb-0'>Cálculo de riesgo </li>
                    <li className='mb-0'>Predicción del valor de usuario por tiempo de vida</li>
                    <li className='mb-0'>Herramientas para la elegibilidad e inclusión financiera</li>
                  </ul>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col sm={12} md={6}>
            <Card style={{ border: 'none' }}>
              {/* Comienza carrucel de imagenes */}
              <CarruselImgs imgs={imgs} />
            </Card>
          </Col>
        </Row>
      </section>
      </Container>
    </>
  );
}
export default Productos;
