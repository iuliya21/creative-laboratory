import React, { useEffect, useState } from "react";
import styles from "./app.module.css";
import Header from "../header/header";
import Main from "../main/main";
import { getData } from "../../services/sliceGetData";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../services/store";
import { Routes, Route } from "react-router-dom";
import Author from "../../pages/author/author";
import Delivery from "../../pages/delivery/delivery";
import Reviews from "../../pages/reviews/reviews";
import Footer from "../footer/footer";
import ToyDetails from "../toy-details/toy-details";

const App: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(getData());
  }, [dispatch]);

  return (
    <div className={styles.app}>
      <div>
        <Header />
        <Routes>
          <Route path="/" element={<Main />}>
            <Route path="toy/:_id" element={<ToyDetails />} />
          </Route>
          <Route path="/author" element={<Author />} />
          <Route path="/delivery" element={<Delivery />} />
          <Route path="/reviews" element={<Reviews />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
};

export default App;
