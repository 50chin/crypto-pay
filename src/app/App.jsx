import React from "react";
import "./styles/global.css";
import "./styles/_fonts.module.scss";
import { Header } from "../layouts/Header/Header";
import { Main } from "../layouts/Main/Main";

function App() {
  return (
    <>
      <Header />
      <Main />
    </>
  );
}

export default App;
