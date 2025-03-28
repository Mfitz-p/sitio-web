import { Route, Routes, Navigate } from "react-router-dom";
import Inicio from "./Views/Inicio";
import Habilidades from "./Views/Habilidades";
import Pagina404 from "./Views/Pagina404";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
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
