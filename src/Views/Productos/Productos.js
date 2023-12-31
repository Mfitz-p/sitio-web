import { Container, Image, Card, Col, Row } from "react-bootstrap";
import { Link } from "react-scroll";
import CarruselImgs from "../../Components/CarruselImgs";
import { useTranslation } from "react-i18next";

// IMGS DE CARRUSEL SIGA
import aforosSIGA from "../../images/imgSIGA.webp";
import hallazgozSIGA from "../../images/hallazgozSIGA.webp";
import mapaSIGA from "../../images/imgSIGA2.webp";
import ingresoSIGA from "../../images/imgSIGA3.webp";
import imgSIGA4 from "../../images/imgSIGA4.webp";

import machineLearning1 from "../../images/Productos/imgSalud1.webp";
import machineLearning2 from "../../images/Productos/imgSalud2.webp";
import machineLearning3 from "../../images/Productos/machineLearning3.webp";
import machineLearning4 from "../../images/Productos/machineLearning4.webp";
import machineLearning5 from "../../images/Productos/imgSalud3.webp";

import businessInt1 from "../../images/Productos/imgRetail2.webp";
import businessInt2 from "../../images/Productos/imgRetail3.webp";
import businessInt3 from "../../images/Productos/imgRetail4.webp";
import businessInt4 from "../../images/Productos/imgRetail5.webp";

/* Iconos de productos en svg */
import health from "../../icons/health.svg";
import city from "../../icons/city.svg";
import basket from "../../icons/basket.svg";
import car from "../../icons/car.svg";
import money from "../../icons/money.svg";

import { useInView } from "react-intersection-observer";
import "../../App.css";
import "../../css/Productos.css"

// Arreglos de objetos donde se obtienen las imagenes para los carrusel
const imgs = [
  {
    id: 1,
    src: aforosSIGA,
    alt: "aforos",
  },
  {
    id: 2,
    src: hallazgozSIGA,
    alt: "hallazgoz",
  },
  {
    id: 3,
    src: mapaSIGA,
    alt: "mapa",
  },
  {
    id: 4,
    src: ingresoSIGA,
    alt: "ingresos",
  },
  {
    id: 5,
    src: imgSIGA4,
    alt: "imgSIGA4",
  },
];
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
const imgs3 = [
  {
    id: 9,
    src: businessInt1,
    alt: "businessInt1",
  },
  {
    id: 10,
    src: businessInt2,
    alt: "businessInt2",
  },
  {
    id: 11,
    src: businessInt3,
    alt: "businessInt3",
  },
  {
    id: 12,
    src: businessInt4,
    alt: "businessInt4",
  },
];

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
  const [t] = useTranslation("global");
  const { ref: effectRef, inView: effectScroll } = useInView({
    threshold: 0,
  });

  // const { ref: effectRef2, inView:effectScroll2} = useInView({
  //   threshold: 0,

  // });
  // const { ref: effectRef3, inView:effectScroll3} = useInView({
  //   threshold: 0,

  // });
  const { ref: effectRef4, inView: effectScroll4 } = useInView({
    threshold: 0,
  });
  const { ref: effectRef5, inView: effectScroll5 } = useInView({
    threshold: 0,
  });
  const { ref: effectRef6, inView: effectScroll6 } = useInView({
    threshold: 0,
  });
  const { ref: effectRef8, inView: effectScroll8 } = useInView({
    threshold: 0,
  });
  const { ref: btn, inView: up } = useInView({
    threshold: 1,
    triggerOnce: true,
    delay: 3000,
  });

  return (
    <>
      <Container fluid className="hideX">
        <Row className="p-5">
          <Col>
            <h2
              className="animate__animated animate__fadeInUp"
              style={{ fontWeight: "bold" }}
            >
              {t("Products.TitleGeneral")}
            </h2>
            <hr />
          </Col>
          {/* Ícono de flecha que despliega hacia abajo para cambiar a la siguientes secciones */}
          <Link
            className=" d-flex justify-content-end text-black"
            to="retail"
            smooth={true}
            duration={0}
          >
            <i
              className="bi bi-arrow-down-circle hvr-hang "
              style={{ fontSize: "45px" }}
            ></i>
          </Link>
        </Row>
        {/* Inician las cards de productos con su respectiva imagen */}

        <section className="container-product" id="infraestructura">
          <Row className="align-items-center container-product">
            <Col
              md={12}
              lg={6}
              ref={effectRef}
              className={`${
                effectScroll
                  ? "animate__animated animate__fadeInLeft"
                  : "reverseObserver"
              }`}
            >
              <Card style={{ border: "none" }}>
                <Card.Body className="animate__animated animate__fadeInLeft">
                  <Card.Title style={{ fontSize: "28px", border: "none" }}>
                    <Image
                      height={70}
                      className="m-3 hvr-float"
                      src={city}
                      alt="city"
                    />
                    {t("General.Title1")}
                  </Card.Title>
                  <Card.Text style={{ fontSize: "21px", textAlign: "justify" }}>
                    <ul>
                      <li className="mb-0">{t("Products.1Bullet1")}</li>
                      <li className="mb-0">{t("Products.1Bullet2")}</li>
                      <li className="mb-0">{t("Products.1Bullet3")}</li>
                      <li className="mb-0">{t("Products.1Bullet4")}</li>
                    </ul>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={12} lg={6}>
              <Card style={{ border: "none" }}>
                {/* Comienza carrucel de imagenes */}
                <CarruselImgs imgs={imgs} />
              </Card>
            </Col>
          </Row>
        </section>

        <section id="retail" className="container-product">
          <Row
            className="align-items-center container-product"
            style={{ backgroundColor: "rgb(33,37,41)" }}
          >
            <Col
              xs={{ order: "last", span: 12 }}
              md={{ order: "last", span: 12 }}
              lg={{ order: "first", span: 6 }}
            >
              <Card style={{ border: "none", backgroundColor: "transparent" }}>
                {/* Comienza carrusel de imagenes */}
                <CarruselImgs imgs={imgs3} />
              </Card>
            </Col>
            <Col
              xs={{ order: "first", span: 12 }}
              md={{ order: "first", span: 12 }}
              lg={{ order: "last", span: 6 }}
            >
              <Card style={{ border: "none", backgroundColor: "transparent" }}>
                <Card.Body
                  ref={effectRef4}
                  className={`${
                    effectScroll4
                      ? "animate__animated animate__fadeInRight"
                      : "reverseObserver"
                  }`}
                >
                  <Card.Title
                    style={{ fontSize: "28px", border: "none", color: "white" }}
                  >
                    <Image
                      height={70}
                      className="m-3 hvr-float"
                      src={basket}
                      alt="basket"
                    />
                    {t("General.Title2")}
                  </Card.Title>
                  <Card.Text
                    style={{
                      fontSize: "21px",
                      textAlign: "justify",
                      color: "white",
                    }}
                  >
                    <ul>
                      <li className="mb-0">{t("Products.2Bullet1")}</li>
                      <li className="mb-0">{t("Products.2Bullet2")}</li>
                      <li className="mb-0">{t("Products.2Bullet3")}</li>
                      <li className="mb-0">{t("Products.2Bullet4")}</li>
                      <li className="mb-0">{t("Products.2Bullet5")}</li>
                    </ul>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </section>
        {/* Ícono de flecha que despliega hacia abajo para cambiar a la siguientes secciones */}
        <Link
          className=" d-flex justify-content-end text-black"
          to="movilidad"
          smooth={true}
          duration={0}
        >
          <i
            className="bi bi-arrow-down-circle hvr-hang "
            style={{ fontSize: "45px" }}
          ></i>
        </Link>
        <section id="salud" className="container-product">
          <Row className="align-items-center container-product">
            <Col md={12} lg={6}>
              <Card style={{ border: "none" }}>
                <Card.Body
                  ref={effectRef5}
                  className={`${
                    effectScroll5
                      ? "animate__animated animate__fadeInLeft"
                      : "reverseObserver"
                  }`}
                >
                  <Card.Title style={{ fontSize: "28px", border: "none" }}>
                    <Image
                      height={70}
                      className="m-3 hvr-float"
                      src={health}
                      alt="health"
                    />
                    {t("General.Title3")}
                  </Card.Title>
                  <Card.Text style={{ fontSize: "21px", textAlign: "justify" }}>
                    <ul>
                      <li className="mb-0">{t("Products.3Bullet1")}</li>
                      <li className="mb-0">{t("Products.3Bullet2")}</li>
                      <li className="mb-0">{t("Products.3Bullet3")}</li>
                      <li className="mb-0">{t("Products.3Bullet4")}</li>
                    </ul>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={12} lg={6}>
              <Card style={{ border: "none" }}>
                <CarruselImgs imgs={imgs2} />
              </Card>
            </Col>
          </Row>
        </section>

        {/* Este div contiene la flecha que aparece a mitad de las secciones y te regresa a la primera seccion de productos donde esta el titulo */}
        <div
          ref={btn}
          className="d-flex justify-content-end sticky-sm-top"
          style={{
            fontSize: "45px",
            top: "50%",
            opacity: ".5",
            cursor: "pointer",
          }}
        >
          <Link to="infraestructura" smooth={true} duration={0}>
            <i
              className={`${
                up
                  ? "bi bi-arrow-up-circle animate__animated animate__fadeInUp"
                  : null
              } `}
            ></i>
          </Link>
        </div>

        <section className="container-product" id="movilidad">
          <Row
            className="align-items-center container-product"
            style={{ backgroundColor: "rgb(33,37,41)" }}
          >
            <Col
              xs={{ order: "last", span: 12 }}
              md={{ order: "last", span: 12 }}
              lg={{ order: "first", span: 6 }}
            >
              {/* <Card style={{ border: "none", backgroundColor: "transparent" }}>
                <CarruselImgs imgs={imgs4} />
              </Card> */}
            </Col>
            <Col
              xs={{ order: "first", span: 12 }}
              md={{ order: "first", span: 12 }}
              lg={{ order: "last", span: 6 }}
            >
              <Card style={{ border: "none", backgroundColor: "transparent" }}>
                <Card.Body
                  ref={effectRef8}
                  className={`${
                    effectScroll8
                      ? "animate__animated animate__fadeInRight"
                      : "reverseObserver"
                  }`}
                >
                  <Card.Title
                    style={{ fontSize: "28px", border: "none", color: "white" }}
                  >
                    <Image
                      height={70}
                      className="m-3 hvr-float"
                      src={car}
                      alt="car"
                    />
                    {t("General.Title4")}
                  </Card.Title>
                  <Card.Text
                    style={{
                      fontSize: "21px",
                      textAlign: "justify",
                      color: "white",
                    }}
                  >
                    <ul>
                      <li className="mb-0">{t("Products.4Bullet1")}</li>
                      <li className="mb-0">{t("Products.4Bullet2")}</li>
                      <li className="mb-0">{t("Products.4Bullet3")}</li>
                      <li className="mb-0">{t("Products.4Bullet4")}</li>
                    </ul>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </section>

        <section className="container-product" id="banca">
          <Row className="align-items-center container-product">
            <Col
              md={12}
              lg={6}
              ref={effectRef6}
              className={`${
                effectScroll6
                  ? "animate__animated animate__fadeInLeft"
                  : "reverseObserver"
              }`}
            >
              <Card style={{ border: "none" }}>
                <Card.Body className="animate__animated animate__fadeInLeft">
                  <Card.Title style={{ fontSize: "28px", border: "none" }}>
                    <Image
                      height={70}
                      className="m-3 hvr-float"
                      src={money}
                      alt="money"
                    />
                    {t("General.Title5")}
                  </Card.Title>
                  <Card.Text style={{ fontSize: "21px", textAlign: "justify" }}>
                    <ul>
                      <li className="mb-0">{t("Products.5Bullet1")}</li>
                      <li className="mb-0">{t("Products.5Bullet2")}</li>
                      <li className="mb-0">{t("Products.5Bullet3")}</li>
                      <li className="mb-0">{t("Products.5Bullet4")}</li>
                    </ul>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            {/*<Col md={12} lg={6}>
              <Card style={{ border: "none" }}>
                {/* Comienza carrusel de imagenes */
            /*}
                <CarruselImgs imgs={imgs} />
              </Card>
            </Col> */}
          </Row>
        </section>
      </Container>
    </>
  );
};
export default Productos;
