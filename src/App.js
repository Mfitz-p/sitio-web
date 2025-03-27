import { Route, Routes, Navigate } from "react-router-dom";
import Inicio from "./Views/Inicio";
import Habilidades from "./Views/Habilidades";
import Productos from "./Views/Productos/Productos";
import Salud from "./Views/Productos/Salud"
import Retail from "./Views/Productos/Retail";
import Banca from "./Views/Productos/Banca";
import Transporte from "./Views/Productos/Transporte";
import Infraestructura from "./Views/Productos/Infraestructura";
import Pagina404 from "./Views/Pagina404";
import Contacto from "./Views/Contacto";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Carreras from "./Views/Carreras";
import "animate.css";

function App() {
  return (
      <div id="app" className="app">
        <div id="body-wrapper">
        <Navbar />
          <Routes>
            <Route path="/" element={<Inicio />} />
            <Route path="/Inicio" element={<Navigate to="/" />} />
            <Route path="/Habilidades" element={<Habilidades />} />
            <Route path="/Productos" element={<Productos />}/>
            <Route path="/Contacto" element={<Contacto />}/>
            <Route path="/Salud" element={<Salud />}/>
            <Route path="/Infraestructura" element={<Infraestructura />}/>
            <Route path="/Movilidad" element={<Transporte />}/>
            <Route path="/Retail" element={<Retail />}/>
            <Route path="/Banca" element={<Banca />}/>
            <Route path="/Carreras" element={<Carreras />}/>
            <Route path="*" element={<Pagina404 />}/>
          </Routes>
        </div>
        <div id="footer" className="footer">
          <Footer />
        </div>
      </div>
  );
}

export default App;
