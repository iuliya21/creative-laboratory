import React, { useState, useEffect, Children, cloneElement, ReactElement } from 'react';
import styles from './carousel.module.css';


type CarouselProps = {
  children: ReactElement[];
};

const COUNT_CARDS = 6;

const Carousel: React.FC<CarouselProps> = ({ children }) => {

  const [pages, setPages] = useState<ReactElement[]>(children);
  const [offset, setOffset] = useState(0);
  const [cardWidth, setCardWidth] = useState(270);

  const handleResize = () => {
    if (window.innerWidth <= 530 && window.innerWidth > 400) {
      setCardWidth(225);
    } else if (window.innerWidth <= 400) {
      setCardWidth(168);
    };
  }

  // useEffect(() => {
  //   window.addEventListener('resize', handleResize);
  //   return () => {
  //     window.removeEventListener('resize', handleResize);
  //   };
  // }, []);

  const handleClickRight = () => {
    setOffset((prevState) => {
      if(prevState === - (cardWidth * COUNT_CARDS)) {
        return 0;
      }
      return prevState - cardWidth;
    })
  }

  useEffect(() => {
    setPages(
      Children.map(children, (child) => {
        return cloneElement(child, {
          style: {
            height: '100%',
            minWidth: `${cardWidth}px`,
            maxWidth: `${cardWidth}px`,
          }
        })
      })
    );
    // const interval = setInterval(() => {
    //   handleClickRight();
    // }, 2500);

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