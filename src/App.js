import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom"
import Inicio from './Views/Inicio';
import Nosotros from './Views/Nosotros';
import Productos from './Views/Productos/Productos';
import Pagina404 from './Views/Pagina404';
import Contacto from './Views/Contacto'; 
import { Container } from 'react-bootstrap/';

function App() {
  return (
  <BrowserRouter>
    <Container fluid>
      <Routes>
        <Route path='/' element={<Inicio/>}/> 
        <Route path='/Contacto' element={<Contacto/>}/> 
        <Route path='/Nosotros' element={<Nosotros/>}/> 
        <Route path='/Productos' element={<Productos/>}/> 
        <Route path='/Inicio' element={<Navigate to='/'/>}/> 
        <Route path='*' element={<Pagina404/>}/> 
      </Routes>
    </Container>
  </BrowserRouter>
  );
}


export default App;


