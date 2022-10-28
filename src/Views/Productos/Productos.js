import { Container, Image, Card, Col, Row } from 'react-bootstrap';

/* Imagenes de Productos */
import imgSistemasGestion from '../../images/imgDSG.png';
import imgModelosML from '../../images/imgModelosML.png';
import imgBusinessInte from '../../images/imgBusinessInte.png';
import imgVisionComputadora from '../../images/img-VisionComputadora.png';
import imgBigData from '../../images/img-BigData.png';

/* Iconos de productos en svg */
import computerSvg from '../../icons/computer.svg';
import modelosML from '../../icons/modelosML.svg';
import businessInt from '../../icons/businessInt.svg';
import visionCompu from '../../icons/visionCompu.svg';
import vBigData from '../../icons/vBigData.svg';

import { useInView } from 'react-intersection-observer';
import "../../App.css";
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
    triggerOnce: true
  });
  const { ref: effectRef2, inView:effectScroll2} = useInView({
    threshold: 0,
    triggerOnce: true
  });
  const { ref: effectRef3, inView:effectScroll3} = useInView({
    threshold: 0,
    triggerOnce: true
  });
  const { ref: effectRef4, inView:effectScroll4} = useInView({
    threshold: 0,
    triggerOnce: true
  });
  const { ref: effectRef5, inView:effectScroll5} = useInView({
    threshold: 0,
    triggerOnce: true
  });
  const { ref: effectRef6, inView:effectScroll6} = useInView({
    threshold: 0,
    triggerOnce: true
  });
  const { ref: effectRef7, inView:effectScroll7} = useInView({
    threshold: 0,
    triggerOnce: true
  });
  const { ref: effectRef8, inView:effectScroll8} = useInView({
    threshold: 0,
    triggerOnce: true
  });
  const { ref: effectRef9, inView:effectScroll9} = useInView({
    threshold: 0,
    triggerOnce: true
  });
  const { ref: effectRef10, inView:effectScroll10} = useInView({
    threshold: 0,
    triggerOnce: true
  });

  return (
    <>
      <Container>
        <Row className='p-5'> 
          <Col>
            <h2 className='animate__animated animate__fadeInUp' style={{ fontWeight: 'bold' }}>Nuestro modelo de negocios nos permite facilitarte los siguientes productos</h2>
            <hr />
          </Col>
        </Row>
        {/* Inician las cards de productos con su respectiva imagen */}
        <Row className='align-items-center'>
          <Col ref={effectRef} className={`${effectScroll ? 'animate__animated animate__fadeInLeft': null}`}>
            <Card className="p-5" style={{ border: 'none' }}>
              <Card.Body className='animate__animated animate__zoomIn'>
                <Card.Title style={{ fontSize: '25px', border: 'none' }}>
                <Image height={50} style={{ color: '#6BBBAE'}} className='m-2' src={computerSvg} alt='computerSvg'/>
                  {/* <i className="bi bi-clipboard2-check m-3" style={{ color: '#6BBBAE' }}></i> */}
                  Desarrollo de sistemas de gestión.
                </Card.Title>
                <Card.Text style={{ fontSize: '18px', textAlign: 'justify' }}>
                  <p className='mb-0'>▸ Solución conceptual del problema</p>
                  <p className='mb-0'>▸ Elaboración y creación de módulos</p>
                  <p className='mb-0'>▸ Implementación y seguimiento del sistema</p>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col >
            <Card className="p-5" style={{ border: 'none' }}>
              <Card.Body ref={effectRef2} className={`${effectScroll2 ? 'animate__animated animate__fadeInRight': null}`}>
                <Image className='box' fluid src={imgSistemasGestion} alt='imgSistemasGestion' />
              </Card.Body>
            </Card>
          </Col>
        </Row>

        <Row className='align-items-center' style={{ borderTop: 'solid #6BBBAE 1px' }}>
          <Col >
            <Card className="p-5" style={{ border: 'none' }}>
              <Card.Body ref={effectRef3} className={`${effectScroll3 ? 'animate__animated animate__fadeInLeft': null}`}>
                <Image className='box' fluid src={imgModelosML} alt='imgModelosML' />
              </Card.Body>
            </Card>
          </Col>
          <Col >
            <Card className="p-5" style={{ border: 'none' }}>
              <Card.Body ref={effectRef4} className={`${effectScroll4 ? 'animate__animated animate__fadeInRight': null}`}>
                <Card.Title style={{ fontSize: '25px', border: 'none' }}>
                <Image height={50} style={{ color: '#6BBBAE'}} className='m-2' src={modelosML} alt='modelosML'/>
                  {/* <i className="bi bi-cpu m-3" style={{ color: '#6BBBAE' }}></i> */}
                  Modelos de Machine Learning
                </Card.Title>
                <Card.Text style={{ fontSize: '18px', textAlign: 'justify' }}>
                  <p className='mb-0'>▸ Redes Neuronales</p>
                  <p className='mb-0'>▸ Agrupación y clasificación</p>
                  <p className='mb-0'>▸ Análisis y predicción del comportamiento</p>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        <Row className='align-items-center' style={{ borderTop: 'solid #6BBBAE 1px' }}>
          <Col >
            <Card className="p-5" style={{ border: 'none' }}>
              <Card.Body ref={effectRef5} className={`${effectScroll5 ? 'animate__animated animate__fadeInLeft': null}`}>
                <Card.Title style={{ fontSize: '25px', border: 'none' }}>
                <Image height={50} style={{ color: '#6BBBAE'}} className='m-2' src={businessInt} alt='businessInt'/>
                  {/* <i className="bi bi-bounding-box m-3" style={{ color: '#6BBBAE' }}></i> */}
                  Business Intelligence
                </Card.Title>
                <Card.Text style={{ fontSize: '18px', textAlign: 'justify' }}>
                  <p className='mb-0'>▸ Construcción, mantenimiento y operación de páginas web</p>
                  <p className='mb-0'>▸ Desarrollo de tableros analíticos y de visualización</p>
                  <p className='mb-0'>▸ Optimización SEO</p>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col >
            <Card  style={{ border: 'none' }}>
              <Card.Body ref={effectRef6} className={`${effectScroll6 ? 'animate__animated animate__fadeInRight': null}`}>
                <Image className='box' fluid src={imgBusinessInte} alt='imgBusinessInte' />
              </Card.Body>
            </Card>
          </Col>
        </Row>

        <Row className='align-items-center' style={{ borderTop: 'solid #6BBBAE 1px' }}>
          <Col >
            <Card className="p-5" style={{ border: 'none' }}>
              <Card.Body ref={effectRef7} className={`${effectScroll7 ? 'animate__animated animate__fadeInLeft': null}`} >
                <Image className='box' fluid src={imgVisionComputadora} alt='imgVisionComputadora' />
              </Card.Body>
            </Card>
          </Col>
          <Col >
            <Card  className="p-5" style={{ border: 'none' }}>
              <Card.Body ref={effectRef8} className={`${effectScroll8 ? 'animate__animated animate__fadeInRight': null}`}>
                <Card.Title style={{ fontSize: '25px', border: 'none' }}>
                <Image height={50} style={{ color: '#6BBBAE'}} className='m-2' src={visionCompu} alt='visionCompu'/>
                  {/* <i className="bi bi-intersect m-3" style={{ color: '#6BBBAE' }}></i> */}
                  Percepción remota y visión de computadora
                </Card.Title>
                <Card.Text style={{ fontSize: '18px', textAlign: 'justify' }}>
                  <p className='mb-0'>▸ Base de datos de imágenes</p>
                  <p className='mb-0'>▸ Reconocimiento de objetos  en imágenes y videos</p>
                  <p className='mb-0'>▸ Análisis de diferentes canales del espectro electromagnético</p>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        <Row className='align-items-center' style={{ borderTop: 'solid #6BBBAE 1px' }}>
          <Col > 
            <Card className='p-5' style={{ border: 'none' }}>
              <Card.Body ref={effectRef9} className={`${effectScroll9 ? 'animate__animated animate__fadeInLeft': null}`}>
                <Card.Title style={{ fontSize: '25px', border: 'none' }}>
                <Image height={50} style={{ color: '#6BBBAE'}} className='m-2' src={vBigData} alt='vBigData'/>
                  {/* <i className="bi bi-bounding-box m-3" style={{ color: '#6BBBAE' }}></i> */}
                  Análisis y visualización de Big Data
                </Card.Title>
                <Card.Text style={{ fontSize: '18px', textAlign: 'justify' }}>
                  <p className='mb-0'>▸ Soluciones analíticas basadas en grafos</p>
                  <p className='mb-0'>▸ Analítica predictiva</p>
                  <p className='mb-0'>▸ Ingeniería de datos</p>
                </Card.Text>
              </Card.Body >
            </Card>
          </Col>
          <Col >
            <Card className="p-5" style={{ border: 'none' }}>
              <Card.Body ref={effectRef10} className={`${effectScroll10 ? 'animate__animated animate__fadeInRight': null}`}>
                <Image className='box' fluid src={imgBigData} alt='imgBigData' />
              </Card.Body>
            </Card>
          </Col>
        </Row>

      </Container>
    </>
  );
}
export default Productos;
