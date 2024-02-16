import React, { useState } from 'react';
import s from './Slide.module.scss';
import slide1Img from '../../assets/img/slides/slide-1.webp';
import slide2Img from '../../assets/img/slides/slide-2.webp';
import slide3Img from '../../assets/img/slides/slide-3.webp';
import navImg from '../../assets/img/nav/nav.svg';
import { Button } from '../../ui/Button/Button';

const positions = {
  1: 0,
  2: 684,
  3: 1370,
};

export const Slide = () => {
  const [state, setState] = useState(0);
  const [count, setCount] = useState(1);

  const handleClick = (newPosition) => {
    setState(positions[newPosition]);
    setCount(newPosition);
  };

  return (
    <>
      <div className={s.slide}>
        <div
          className={s.slide__wrapper}
          style={{ transform: `translateY(-${state}px)` }}
        >
          <div className={s.slide__card}>
            <div className={s.slide__img}>
              <img src={slide1Img} alt="" />
            </div>
            <div className={s.slide__text}>
              <h2 className={s.slide__title}>
                <span>
                  Instant <br />
                  Auto Sales:
                </span>
                <br />
                Boost conversion
              </h2>
              <p className={s.slide__subtitle}>
                Immediately deliver digital products
                <br />
                and services to your users.
              </p>
              <Button size="large" variant="fill" color="white">
                Open API Docs
              </Button>
            </div>
          </div>
          <div className={s.slide__card}>
            <div className={s.slide__img}>
              <img src={slide2Img} alt="" />
            </div>
            <div className={s.slide__text}>
              <h2 className={s.slide__title}>
                <span>
                  Channels <br />
                  integration:
                </span>
                <br />
                Seamless access
              </h2>
              <p className={s.slide__subtitle}>
                Automatically unlock exclusive content
                <br />
                to your users.
              </p>
              <Button size="large" variant="fill" color="white">
                Open API Docs
              </Button>
            </div>
          </div>
          <div className={s.slide__card}>
            <div className={s.slide__img}>
              <img src={slide3Img} alt="" />
            </div>
            <div className={s.slide__text}>
              <h2 className={s.slide__title}>
                <span>
                  Endless
                  <br />
                  customization:
                </span>
                <br />
                with Webhooks
              </h2>
              <p className={s.slide__subtitle}>
                Receive successful payment notifications in
                <br />
                real-time. Integrate to any scenario of your service.
              </p>
              <Button size="large" variant="fill" color="white">
                Open API Docs
              </Button>
            </div>
          </div>
        </div>
        <div className={s.slide__navigation}>
          <p className={s.slide__navigation_text}>0{count}</p>
          <button
            className={s.slide__navigation_btn}
            onClick={() => handleClick(1)}
            style={{
              background:
                count === 1 ? 'rgb(65, 164, 223)' : 'rgba(255, 255, 255, 0.24)',
            }}
          >
            <img src={navImg} alt="" />
          </button>
          <button
            className={s.slide__navigation_btn}
            onClick={() => handleClick(2)}
            style={{
              background:
                count === 2 ? 'rgb(65, 164, 223)' : 'rgba(255, 255, 255, 0.24)',
            }}
          >
            <img src={navImg} alt="" />
          </button>
          <button
            className={s.slide__navigation_btn}
            onClick={() => handleClick(3)}
            style={{
              background:
                count === 3 ? 'rgb(65, 164, 223)' : 'rgba(255, 255, 255, 0.24)',
            }}
          >
            <img src={navImg} alt="" />
          </button>
          <p className={s.slide__navigation_text}>03</p>
        </div>
      </div>
    </>
  );
};
