import Carousel from 'react-bootstrap/Carousel';
//Este componente contiene el carrusel de imagenes de la vista productos, por props recibe las imagenes de un arreglo de objetos declarado en productos y renderiza esas imagenes con ayuda de .map() que itera sobre el dicho arreglo, las imagenes salen mostradas en Carrusel.Item que va obteniendo del los objetos su id, src, alt. 

const CarruselImgs = ({imgs}) => {
  return (
    <>
    <Carousel variant='dark' className='box'>
      {
        imgs.map(
          (img) => {
            return (
              <Carousel.Item key={img.id}>
                <img
                  className="d-block w-100"
                  src={img.src}
                  alt={img.alt}
               />
              </Carousel.Item>
             )
          }
        )
      }
    </Carousel>
    </>
  )
} 
export default CarruselImgs;
