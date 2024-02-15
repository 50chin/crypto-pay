import React from "react";
import s from "./ApiIcon.module.scss";
import imgJS from "../../assets/img/ApiIcon/JS.svg";
import imgNET from "../../assets/img/ApiIcon/NET.svg";
import imgPHP from "../../assets/img/ApiIcon/php.svg";
import imgPython from "../../assets/img/ApiIcon/Python.svg";
import imgGO from "../../assets/img/ApiIcon/go.svg";

const iconsObj = [
  { icon: imgJS, text: "crypto-pay-api" },
  { icon: imgNET, text: "CryptoPay" },
  { icon: imgPHP, text: "crypto-pay-api" },
  { icon: imgPython, text: "aiocryptopay" },
  { icon: imgGO, text: ["cryptobot-sdk-gol", <br />, "ang"] },
];

export const ApiIcon = () => {
  const listIcon = iconsObj.map((el) => (
    <li key={el.text}>
      <img className={s.apiIcon__icons} src={el.icon} />
      <p className={s.apiIcon__text}>{el.text}</p>
    </li>
  ));

  return (
    <div className={s.apiIcon}>
      <ul className={s.apiIcon__wrapper}>{listIcon}</ul>
    </div>
  );
};
