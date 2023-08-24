import React, { useEffect } from 'react';
import styles from './app.module.css';
import Header from '../header/header';
import Main from '../main/main';
import { getData } from '../../services/slice';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../services/store';

type Toy = {
  category: string;
  img: string;
  name: string;
  price: number;
  description: string;
  id: string;
}

const App: React.FC = () => {
  
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(getData());
  }, [dispatch]);

  return (
    <div>
      <Header />
      <Main />
    </div>
  );
}

export default App;