import { Route, Routes, Navigate, useLocation } from "react-router-dom";
import { useRef, useState, useEffect } from "react";
import Inicio from "./Views/Inicio";
import Nosotros from "./Views/Nosotros";
import Productos from "./Views/Productos/Productos";
import Pagina404 from "./Views/Pagina404";
import Contacto from "./Views/Contacto";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import "animate.css";

function App() {
  const refApp = useRef();
  const refFooter = useRef();
  const refBodyWrapper = useRef();
  const [lugar, setLugar] = useState();

  useEffect(() => {
    let windowHeight = window.innerHeight;
    let footerHeight = refFooter.current?.offsetHeight;
    let appHeight = refApp.current?.offsetHeight;
    let bodyWrapperHeight = appHeight - footerHeight;
    console.log("body: " + bodyWrapperHeight);
    if (appHeight <= 857) {
      bodyWrapperHeight = windowHeight - footerHeight;
    }
    refBodyWrapper.current.style.height = `${bodyWrapperHeight}px`;
    console.log(
      "window: " +
        windowHeight +
        "\nfooter: " +
        footerHeight +
        "\napp: " +
        appHeight +
        "\nbody: " +
        bodyWrapperHeight
    );
  }, []);

  return (
    <div id="app" className="app" ref={refApp}>
      <div id="body-wrapper" ref={refBodyWrapper}>
        <Navbar />
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/Inicio" element={<Navigate to="/" />} />
          <Route path="/Nosotros" element={<Nosotros />} />
          <Route path="/Productos" element={<Productos />} />
          <Route path="/Contacto" element={<Contacto />} />
          <Route path="*" element={<Pagina404 />} />
        </Routes>
      </div>
      <div id="footer" ref={refFooter}>
        <Footer />
      </div>
    </div>
  );
}

export default App;
