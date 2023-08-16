import React, { useState, useEffect, Children, cloneElement, ReactElement } from 'react';
import styles from './carousel.module.css';
import { TbSquareRoundedChevronRightFilled, TbSquareRoundedChevronLeftFilled } from 'react-icons/tb';

type CarouselProps = {
  children: ReactElement[];
};

const CARD_WIDTH = 270;

const Carousel: React.FC<CarouselProps> = ({ children }) => {

  const [pages, setPages] = useState<ReactElement[]>(children);
  const [offset, setOffset] = useState(0);
  const [leftDisable, setLeftDisable] = useState('block');
  const [rightDisable, setRightDisable] = useState('none');

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
    )
  }, []);

  console.log(offset);

  const handleClickLeft = () => {
    setOffset((currentOffset) => {
      const newOffset = currentOffset + CARD_WIDTH;
      return Math.min(newOffset, 0);
    })
  }

  const handleClickRight = () => {
    setOffset((currentOffset) => {
      const newOffset = currentOffset - CARD_WIDTH;
      const maxOffset = -(CARD_WIDTH * (pages.length - 1));
      return Math.max(newOffset, maxOffset);
    })
  }

  return (
    <div className={styles.mainContainer}>
      <TbSquareRoundedChevronLeftFilled className={styles.arrow} size={35} onClick={handleClickLeft} style={{
        display: `${leftDisable}`
      }}/>
      <div className={styles.window}>
        <div className={styles.items} style={{
          transform: `translateX(${offset}px)`
        }}>
          {pages}
        </div>
      </div>
      <TbSquareRoundedChevronRightFilled className={styles.arrow} size={35} onClick={handleClickRight} />
    </div>
  )
}

export default Carousel;