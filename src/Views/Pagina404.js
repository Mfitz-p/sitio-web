/**
 * Página de error 404
 */
import { Container } from 'react-bootstrap/'
import "../App.css";
function Pagina404() {
  return (
    <Container fluid >
      <div className='fondo ' >
        <h1 className='text404 animate__animated animate__jackInTheBox' style={{ fontSize: "clamp(130px, 13vw, 480px)" }}>404
          <div className='d-none d-md-inline ' >❌</div>
          <div className=' d-sm-inline d-md-none' style={{ textAlign: 'center' }} >🔎</div>
          <div  className=''style={{ fontSize: "clamp(50px, 6vw, 200px)" }}>Página no encontrada</div>
          <p style={{ fontSize: "clamp(20px, 2.4vw, 100px)" }}>La página que solicitaste no pudo ser encontrada</p>
        </h1>
      </div>
    </Container>
  )
}

export default Pagina404