import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import Inicio from './Views/Inicio';
import Nosotros from './Views/Nosotros';
import Productos from './Views/Productos/Productos';
import Pagina404 from './Views/Pagina404';
import Contacto from './Views/Contacto'; 
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";

import 'animate.css';
function App() {
  return (
  <BrowserRouter> 
      <Navbar/>
      <Routes>
        <Route path='/' element={<Inicio/>}/> 
        <Route path='/Inicio' element={<Navigate to='/'/>}/> 
        <Route path='/Nosotros' element={<Nosotros/>}/> 
        <Route path='/Productos' element={<Productos/>}/> 
        <Route path='/Contacto' element={<Contacto/>}/> 
        <Route path='*' element={<Pagina404/>}/> 
      </Routes>
      <Footer/>
  </BrowserRouter>
  );
}


export default App;


