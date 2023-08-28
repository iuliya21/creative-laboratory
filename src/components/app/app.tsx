import React, { useEffect, useState } from 'react';
import styles from './app.module.css';
import Header from '../header/header';
import Main from '../main/main';
import { getData } from '../../services/sliceGetData';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../services/store';

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