/**
 * Página de error 404
 */
import {  Container } from 'react-bootstrap/'
import "../App.css";
function Pagina404() {
  return (
    <Container fluid>
          <div className='fondo' >
              <h1 style={{ fontSize: "clamp(77px, 13vw, 480px)", margin:"50px" }}>404 ❌</h1>
              <div style={{ fontSize: "clamp(60px, 7vw, 480px)" }}>Página no encontrada</div>
              <p style={{ fontSize: "40px", margin:"1%" }}>La página que solicitaste no pudo ser encontrada</p>
          </div>
    </Container>
  )
}

export default Pagina404