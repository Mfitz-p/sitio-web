import React from 'react';
import Carousel from 'react-bootstrap/Carousel';

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
