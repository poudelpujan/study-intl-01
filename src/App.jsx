import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.scss";

import Footer from "./components/Footer/Footer";
import AppRoutes from "./Routes/AppRoutes";
import Header from "./components/Header/Header";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="is__app__contents">
        <AppRoutes />
      </div>
      <Footer title="IStudy International Educational Consultancy" />
    </div>
  );
}

export default App;
