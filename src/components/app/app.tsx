import React from 'react';
import styles from './app.module.css';
import Header from '../header/header';
import Description from '../description/description';

const App: React.FC = () => {
  return (
    <div>
      <Header />
      <Description />
    </div>
  );
}

export default App;
