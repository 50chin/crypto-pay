import React from "react";
import s from "./Slide.module.scss";
import slide1Img from "../../assets/img/slides/slide-1.webp";
import slide2Img from "../../assets/img/slides/slide-2.webp";
import slide3Img from "../../assets/img/slides/slide-3.webp";
import { Button } from "../../ui/Button/Button";

export const Slide = ({ img, children }) => {
  return (
    <div className={s.slide}>
      <div className={s.slide__img}>
        <img
          src={
            img === "slide1Img"
              ? slide1Img
              : img === "slide2Img"
              ? slide2Img
              : img === "slide3Img"
              ? slide3Img
              : ""
          }
          alt="slide"
        />
      </div>
      <div className={s.slide__text}>
        <h2 className={s.slide__text_title}></h2>
        <p className={s.slide__text_subtitle}>{children}</p>
        <Button size="large" variant="fill" color="white">
          Open API Docs
        </Button>
      </div>
    </div>
  );
};
