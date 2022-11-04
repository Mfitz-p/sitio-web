import { Container, Image, Card, Col, Row } from 'react-bootstrap';
import { Link } from 'react-scroll';
import CarruselImgs from '../../Components/CarruselImgs';


/* Imagenes de Productos */
import imgVisionComputadora from '../../images/img-VisionComputadora.png';
import imgBigData from '../../images/img-BigData.png';

// IMGS DE CARRUSEL SIGA 
import aforosSIGA from '../../images/aforosSIGA.png';
import hallazgozSIGA from '../../images/hallazgozSIGA.png';
import mapaSIGA from '../../images/mapaSIGA.png';
import ingresoSIGA from '../../images/ingresoSIGA.png';

import machineLearning1 from '../../images/machineLearning1.PNG';
import machineLearning2 from '../../images/machineLearning2.PNG';
import machineLearning3 from '../../images/machineLearning3.jpg';
import machineLearning4 from '../../images/machineLearning4.jpg';

import businessInt1 from '../../images/businessInt1.png';
import businessInt2 from '../../images/businessInt2.png';
import businessInt3 from '../../images/businessInt3.png';
import businessInt4 from '../../images/businessInt4.png';

/* Iconos de productos en svg */
import computerSvg from '../../icons/computer.svg';
import modelosML from '../../icons/modelosML.svg';
import businessInt from '../../icons/businessInt.svg';
import visionCompu from '../../icons/visionCompu.svg';
import vBigData from '../../icons/vBigData.svg';

import { useInView } from 'react-intersection-observer';
import "../../App.css";

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
    alt: "aforos"
  },
  {
    id: 6,
    src: machineLearning2,
    alt: "hallazgoz"
  },
  {
    id: 7,
    src: machineLearning3,
    alt: "mapa"
  },
  {
    id: 8,
    src: machineLearning4,
    alt: "ingresos"
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
        <section id='card-desarrollo' className='container-product'>
        <Row className='align-items-center container-product' >
          <Col sm={12} md={6} ref={effectRef} className={`${effectScroll ? 'animate__animated animate__fadeInLeft': 'reverseObserver'}`}>
            <Card style={{ border: 'none' }}>
              <Card.Body className='animate__animated animate__fadeInLeft'>
                <Card.Title style={{ fontSize: '28px', border: 'none' }}>
                <Image height={70} className='m-3 hvr-float' src={computerSvg} alt='computerSvg'/>
                  {/* <i className="bi bi-clipboard2-check m-3" style={{ color: '#6BBBAE' }}></i> */}
                  Desarrollo de sistemas de gestión.
                </Card.Title>
                <Card.Text style={{ fontSize: '21px', textAlign: 'justify' }}>
                  <ul>
                  <li className='mb-0'>Solución conceptual del problema</li>
                  <li className='mb-0'>Elaboración y creación de módulos</li>
                  <li className='mb-0'>Implementación y seguimiento del sistema</li>
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

      <section id='card-modelosML' className='container-product'>
        <Row className='align-items-center container-product' style={{  backgroundColor: 'rgba(5, 44, 101, 0.8)' }}>
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
                  {/* <i className="bi bi-cpu m-3" style={{ color: '#6BBBAE' }}></i> */}
                  Modelos de Machine Learning
                </Card.Title>
                <Card.Text style={{ fontSize: '21px', textAlign: 'justify', color: 'white' }}>
                  <ul>
                  <li className='mb-0'>Redes Neuronales</li>
                  <li className='mb-0'>Agrupación y clasificación</li>
                  <li className='mb-0'>Análisis y predicción del comportamiento</li>
                  </ul>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </section>
      <section id='card-businessInt' className='container-product'>
        {/* Ícono de flecha que despliega hacia abajo para cambiar a la siguientes secciones */}
        <Link className=' d-flex justify-content-end text-black' to='card-visionComp'
                  smooth={true}
                  duration={0}>
                  <i className="bi bi-arrow-down-circle hvr-hang " style={{ fontSize: '45px' }}></i>
          </Link>
        <Row className='align-items-center container-product' >
          <Col sm={12} md={6}>
            <Card style={{ border: 'none' }}>
              <Card.Body ref={effectRef5} className={`${effectScroll5 ? 'animate__animated animate__fadeInLeft': 'reverseObserver'}`}>
                <Card.Title style={{ fontSize: '28px', border: 'none' }}>
                <Image height={70} className='m-3 hvr-float' src={businessInt} alt='businessInt'/>
                  {/* <i className="bi bi-bounding-box m-3" style={{ color: '#6BBBAE' }}></i> */}
                  Business Intelligence
                </Card.Title>
                <Card.Text style={{ fontSize: '21px', textAlign: 'justify' }}>
                  <ul>
                  <li className='mb-0'>Construcción, mantenimiento y operación de páginas web</li>
                  <li className='mb-0'>Desarrollo de tableros analíticos y de visualización</li>
                  <li className='mb-0'>Optimización SEO</li>
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
          <i className={`${up ? 'bi bi-arrow-up-circle animate__animated animate__fadeInUp' : null}  hvr-bob`} ></i>
        </Link>
      </div>

        <section id='card-visionComp' className='container-product'>
        <Row className='align-items-center container-product' style={{  backgroundColor: 'rgba(5, 44, 101, 0.8)'  }}>
          <Col sm={12} md={6}>
            <Card style={{ border: 'none', backgroundColor: 'transparent'  }}>
              <Card.Body ref={effectRef7} className={`${effectScroll7 ? 'animate__animated animate__fadeInLeft': 'reverseObserver'}`} >
                <Image className='box' fluid src={imgVisionComputadora} alt='imgVisionComputadora' />
              </Card.Body>
            </Card>
          </Col>
          <Col sm={12} md={6}>
            <Card style={{ border: 'none', backgroundColor: 'transparent'  }}>
              <Card.Body ref={effectRef8} className={`${effectScroll8 ? 'animate__animated animate__fadeInRight': 'reverseObserver'}`}>
                <Card.Title style={{ fontSize: '28px', border: 'none', color: 'white' }}>
                <Image height={70} className='m-3 hvr-float' src={visionCompu} alt='visionCompu'/>
                  {/* <i className="bi bi-intersect m-3" style={{ color: '#6BBBAE' }}></i> */}
                   Visión de computadora y percepción remota 
                </Card.Title>
                <Card.Text style={{ fontSize: '21px', textAlign: 'justify', color: 'white' }}>
                  <ul>
                  <li className='mb-0'>Base de datos de imágenes</li>
                  <li className='mb-0'>Reconocimiento de objetos  en imágenes y videos</li>
                  <li className='mb-0'>Análisis de diferentes canales del espectro electromagnético</li>
                  </ul>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        </section>

        <section id='card-bigData' className='container-product'>
        <Row className='align-items-center container-product' >
          <Col sm={12} md={6}> 
            <Card style={{ border: 'none' }}>
              <Card.Body ref={effectRef9} className={`${effectScroll9 ? 'animate__animated animate__fadeInLeft': 'reverseObserver'}`}>
                <Card.Title style={{ fontSize: '28px', border: 'none' }}>
                <Image height={70} className='m-3 hvr-float' src={vBigData} alt='vBigData'/>
                  {/* <i className="bi bi-bounding-box m-3" style={{ color: '#6BBBAE' }}></i> */}
                  Análisis y visualización de Big Data
                </Card.Title>
                <Card.Text style={{ fontSize: '21px', textAlign: 'justify' }}>
                  <ul>
                  <li className='mb-0'>Soluciones analíticas basadas en grafos</li>
                  <li className='mb-0'>Analítica predictiva</li>
                  <li className='mb-0'>Ingeniería de datos</li>
                  </ul>
                </Card.Text>
              </Card.Body >
            </Card>
          </Col>
          <Col sm={12} md={6}>
            <Card className="p-5" style={{ border: 'none' }}>
              <Card.Body ref={effectRef10} className={`${effectScroll10 ? 'animate__animated animate__fadeInRight': 'reverseObserver'}`}>
                <Image className='box' fluid src={imgBigData} alt='imgBigData' />
              </Card.Body>
            </Card>
          </Col>
        </Row>
        </section>
      </Container>
    </>
  );
}
export default Productos;
