import React from "react";
import "./styles/global.css";
import "./styles/_fonts.module.scss";
import { Header } from "../layouts/Header/Header";
import { Main } from "../layouts/Main/Main";
import { Footer } from "../layouts/Footer/Footer";

function App() {
  return (
    <>
      <Header />
      <Main />
      <Footer />
    </>
  );
}

export default App;
