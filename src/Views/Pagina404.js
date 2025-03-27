/**
 * Página de error 404
 */
import { Container } from 'react-bootstrap/'
import { useTranslation } from "react-i18next";
import "../App.css";
function Pagina404() {
  const [t] = useTranslation("global");
  return (
    <Container fluid style={{ marginTop: '30px'}}>
      <div className='fondo'  >
        <h1 className='text404 animate__animated animate__jackInTheBox' style={{ fontSize: "clamp(130px, 13vw, 480px)" }}>404
          <div  className=''style={{ fontSize: "clamp(50px, 6vw, 200px)" }}>{t("404.Not")}</div>
          <p style={{ fontSize: "clamp(20px, 2.4vw, 100px)" }}>{t("404.Found")}</p>
        </h1>
      </div>
    </Container>
  )
}

export default Pagina404