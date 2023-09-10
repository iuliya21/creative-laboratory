import React, { useState, useEffect, Children, cloneElement, ReactElement } from 'react';
import styles from './carousel.module.css';


type CarouselProps = {
  children: ReactElement[];
};

const CARD_WIDTH = 270;

const Carousel: React.FC<CarouselProps> = ({ children }) => {

  const [pages, setPages] = useState<ReactElement[]>(children);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    setPages(
      Children.map(children, (child) => {
        return cloneElement(child, {
          style: {
            height: '100%',
            minWidth: `${CARD_WIDTH}px`,
            maxWidth: `${CARD_WIDTH}px`,
          }
        })
      })
    );
    // const interval = setInterval(() => {
    //   handleClickRight();
    // }, 2500)

    // return () => {
    //   clearInterval(interval);
    // }
  }, []);

  return (
    <div className={styles.mainContainer}>
      <div className={styles.window}>
        <div className={styles.items} style={{
          transform: `translateX(${offset}px)`
        }}>
          {pages}
        </div>
      </div>
    </div>
  )
}

export default Carousel;