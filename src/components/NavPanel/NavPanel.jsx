import React from "react";
import s from "./NavPanel.module.scss";
import iconDesktop from "../../assets/img/icon/desktop.svg";
import iconMobile from "../../assets/img/icon/mobile.svg";
import iconSun from "../../assets/img/icon/sun.svg";
import { Button } from "../../ui/Button/Button";
// создал массив с текстами
const objText = [
  { text: "Use cases" },
  { text: "Features" },
  { text: "How to start" },
];

export const NavPanel = ({ color, icon, colorBtn, variant }) => {
  // мэп текста для ссылок
  const listNav = objText.map((el) => (
    <li key={el.text}>
      <a
        href="#"
        style={{
          color: color === "black" ? "rgb(13, 13, 18)" : "rgb(255, 255, 255)",
        }}
      >
        {el.text}
      </a>
    </li>
  ));
  return (
    <>
      <div className={s.navPanel}>
        <img src={iconDesktop} alt="" />
        <nav>
          <ul className={s.navPanel__center}>{listNav}</ul>
        </nav>
        <div className={s.navPanel__right}>
          <button className={s.navPanel__right_sun}>
            {" "}
            {icon === "sun" && <img src={iconSun} alt="" />}
          </button>
          <Button
            size="large"
            variant={variant === "semiFill" ? "semiFill" : "empty"}
            color={colorBtn === "blue" ? "blue" : "white"}
          >
            Get started
          </Button>
        </div>
      </div>
    </>
  );
};
