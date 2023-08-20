import React, { useEffect } from 'react';
import styles from './app.module.css';
import Header from '../header/header';
import Main from '../main/main';
import { getData } from '../../services/slice';
import { useDispatch, useSelector } from 'react-redux';
import { createSelector } from '@reduxjs/toolkit';

const App: React.FC = () => {

  const dispatch = useDispatch<AppDispatch>();
  const toys = useSelector((store) => store.data.toys);

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