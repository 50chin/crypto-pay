import React from "react";
import s from "./Card.module.scss";
import { Container } from "../Container";
import { CardIcon } from "../../components/CardIcon/CardIcon";
import btnAnim from "../../assets/img/gif/btnAnim.webm";
import exchAnim from "../../assets/img/gif/exchAnim.webm";
import statsAnim from "../../assets/img/gif/statsAnim.webm";
import phoneAnim from "../../assets/img/gif/phoneAnim.webm";
import msgAnim from "../../assets/img/gif/msgAnim.webm";

export const Card = () => {
  return (
    <section className={s.cards} id="card">
      <Container>
        <div className={s.cards__wrapper}>
          <div className={s.cards__card + " " + s.top}>
            <h3 className={s.cards__title}>
              Accept a wide range of cryptocurrencies
            </h3>
            <p className={s.cards__subtitle}>
              Bill any supported cryptocurrencies with asset parameter in{" "}
              <span>GetInvoice</span> method
            </p>
            <div className={s.cards__icons}>
              <CardIcon></CardIcon>
            </div>
          </div>
          <div className={s.cards__card + " " + s.left}>
            <video
              className={s.cards__video_mini}
              playsInline
              src={btnAnim}
              type="video/mp4"
              muted
              autoPlay
              loop
            ></video>
            <h3 className={s.cards__title}>One click to start</h3>
            <p className={s.cards__subtitle}>
              Open <span>@CryptoBot</span>, go to <span>Crypto Pay</span> <br />
              and tap Create App to get API Token
            </p>
          </div>
          <div className={s.cards__card + " " + s.left2}>
            <video
              className={s.cards__video_mini}
              playsInline
              src={exchAnim}
              type="video/mp4"
              muted
              autoPlay
              loop
            ></video>
            <h3 className={s.cards__title}>
              Real-time
              <br />
              exchange rates
            </h3>
            <p className={s.cards__subtitle}>
              Request up to date currency rate with
              <br />
              the <span>getExchangeRates</span> API method
            </p>
          </div>
          <div className={s.cards__card + " " + s.right}>
            <video
              className={s.cards__video}
              playsInline
              src={statsAnim}
              type="video/mp4"
              muted
              autoPlay
              loop
            ></video>
            <h4 className={s.cards__title}>Payment statistics</h4>
            <p className={s.cards__subtitle}>
              Open <span>@CryptoBot</span>, go to <span>Crypto Pay</span> and{" "}
              <span>My Apps</span>,
              <br />
              App Name to get Statistics
            </p>
          </div>
          <div className={s.cards__card + " " + s.bot}>
            <div className={s.bot__left}>
              <video
                className={s.cards__video}
                playsInline
                src={phoneAnim}
                type="video/mp4"
                muted
                autoPlay
                loop
              ></video>
              <h3 className={s.cards__title}>Send coins to users</h3>
              <p className={s.cards__subtitle}>
                Automate payouts to users with <span>transfer</span> API method
              </p>
            </div>
          </div>
          <div className={s.cards__card + " " + s.bot2}>
            <div className={s.bot__right}>
              <video
                className={s.cards__video_mini}
                playsInline
                src={msgAnim}
                type="video/mp4"
                muted
                autoPlay
                loop
              ></video>
              <h3 className={s.cards__title}>
                Anonymous <br />
                payments
              </h3>
              <p className={s.cards__subtitle}>
                Use allow_anonymous parameter <br />
                in <span>createInvoice</span> method to give user <br />
                an option to remain private
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};
