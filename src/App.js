import React, {lazy} from 'react'
import { Route, Routes, Navigate } from "react-router-dom";
import Inicio from "./Views/Inicio";
import Pagina404 from "./Views/Pagina404";
import Contacto from "./Views/Contacto";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Carreras from "./Views/Carreras";
import "animate.css";
const Nosotros = lazy(()=> import("./Views/Nosotros") )
const Productos = lazy(()=> import("./Views/Productos/Productos") )

function App() {
  return (
      <div id="app" className="app">
        <div id="body-wrapper">
        <Navbar />
          <Routes>
            <Route path="/" element={<Inicio />} />
            <Route path="/Inicio" element={<Navigate to="/" />} />
            <Route path="/Nosotros" element={<Nosotros />} />
            <Route path="/Productos" element={<Productos />}/>
            <Route path="/Contacto" element={<Contacto />}/>
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
