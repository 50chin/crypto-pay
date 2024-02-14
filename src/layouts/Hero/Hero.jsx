import React from "react";
import s from "./Hero.module.scss";
import { Container } from "../Container";
import { Button } from "../../ui/Button/Button";
import bots from "../../assets/img/hero/bots.svg";
import phone from "../../assets/img/hero/phone.svg";

export const Hero = () => {
  return (
    <section className={s.hero}>
      <Container>
        <div className={s.hero__wrapper}>
          <div className={s.left}>
            <h1 className={s.hero__title}>
              Crypto payments for <span>telegram bots</span>
            </h1>
            <p className={s.hero__subtitle}>
              Seamlessly accept crypto payments <br />
              in your Telegram bots and services.
            </p>
            <Button size="large" color="white" variant="fill">
              Get started
            </Button>
            <div className={s.hero__bot}>
              <img src={bots} alt="" />
              <p className={s.hero__bot_text}>Popular bots use Crypto Pay</p>
            </div>
          </div>
          <div className={s.right}>
            <img className={s.hero__img} src={phone} alt="" />
          </div>
        </div>
      </Container>
    </section>
  );
};
