/**
 * Página de error 404
 */
import {  Container } from 'react-bootstrap/'
import "../App.css";
function Pagina404() {
  return (
    <Container fluid>
          <div className='fondo' >
              <h1 style={{ fontSize: "clamp(130px, 13vw, 480px)"}}>404 
              <span className='tache' >❌</span>
              <span className='lupa' >🔎</span>
              </h1>
              <div style={{ fontSize: "clamp(60px, 8vw, 480px)" }}>Página no encontrada</div>
              <p style={{ fontSize: "35px", margin:"1%" }}>La página que solicitaste no pudo ser encontrada</p>
          </div>
    </Container>
  )
}

export default Pagina404