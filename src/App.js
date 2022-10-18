import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import Inicio from './Views/Inicio';
import Nosotros from './Views/Nosotros';
import Productos from './Views/Productos/Productos';
import Pagina404 from './Views/Pagina404';
import Contacto from './Views/Contacto'; 
import { Container, Navbar} from 'react-bootstrap/';
import Footer from './Components/Footer';

// import Footer from './Components/Footer';
// import Navbar from './Components/Navbar';

function App() {
  return (
    <>
  <BrowserRouter>
  <Navbar/>
    <Container fluid>
      <Routes>
        <Route path='/Inicio' element={<Inicio/>}/> 
        <Route path='/Contacto' element={<Contacto/>}/> 
        <Route path='/Nosotros' element={<Nosotros/>}/> 
        <Route path='/Productos' element={<Productos/>}/> 
        <Route path='/Inicio' element={<Navigate to='/'/>}/> 
        <Route path='*' element={<Pagina404/>}/> 
      </Routes>
      <Footer />
    </Container>
  </BrowserRouter>
  </>
  );
}


export default App;


