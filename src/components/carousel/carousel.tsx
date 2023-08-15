import { useEffect, useState, cloneElement } from 'react';
import styles from './carousel.module.css';

type CarouselProps = {
  children: React.ReactNode;
}

const Carousel: React.FC<CarouselProps> = ({children}) => {

  if(!children) {
    return null;
  }
  

  // useEffect(() => {
  //   const interval = setInterval(moveSlide, 3000);

  //   return () => {
  //     clearInterval(interval);
  //   };
  // }, []);
    
  return (
    <div className={styles.slider}>
      {children}
    </div>
  )
}

export default Carousel;