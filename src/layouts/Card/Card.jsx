import React from 'react';
import s from './Card.module.scss';
import { Container } from '../Container';
import { CardIcon } from '../../components/CardIcon/CardIcon';
import imgTree from '../../assets/img/Card/tree.svg';
import imgUSDT from '../../assets/img/Card/CardTop/Icon/USDT.svg';
import imgTON from '../../assets/img/Card/CardTop/Icon/TON.svg';
import imgBTC from '../../assets/img/Card/CardTop/Icon/BTC.svg';
import imgDol from '../../assets/img/Card/DOL.svg';
import imgBtn from '../../assets/img/Card/Btn.svg';
import imgMsg1 from '../../assets/img/Card/CardMsg/Msg1.svg';
import imgMsg2 from '../../assets/img/Card/CardMsg/Msg2.svg';
import imgMsg3 from '../../assets/img/Card/CardMsg/Msg3.svg';
import imgBotPhone from '../../assets/img/Card/Bottom/phone.svg';
import imgBotMsg from '../../assets/img/Card/Bottom/msg.svg';
import imgBot1 from '../../assets/img/Card/Bottom/1.svg';

export const Card = () => {
  return (
    <section className={s.cards}>
      <Container>
        <div className={s.cards__wrapper}>
          <div className={s.cards__card + ' ' + s.top}>
            <h3 className={s.cards__title}>
              Accept a wide range of cryptocurrencies
            </h3>
            <p className={s.cards__subtitle}>
              Bill any supported cryptocurrencies with asset parameter in{' '}
              <span>GetInvoice</span> method
            </p>
            <div className={s.cards__icons}>
              <CardIcon></CardIcon>
            </div>
          </div>
          <div className={s.cards__card + ' ' + s.left}>
            <button className={s.cards__button}>
              <img src={imgTree} alt="" />
              Create App
            </button>
            <h3 className={s.cards__title}>One click to start</h3>
            <p className={s.cards__subtitle}>
              Open <span>@CryptoBot</span>, go to <span>Crypto Pay</span> <br />
              and tap Create App to get API Token
            </p>
          </div>
          <div className={s.cards__card + ' ' + s.left2}>
            <div className={s.cards__icons}>
              <img src={imgUSDT} alt="" />
              <img src={imgBTC} alt="" />
              <img src={imgBtn} alt="" />
              <img src={imgDol} alt="" />
            </div>
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
          <div className={s.cards__card + ' ' + s.right}>
            <img src={imgMsg1} alt="" className={s.right__img} />
            <h4 className={s.cards__title}>Payment statistics</h4>
            <p className={s.cards__subtitle}>
              Open <span>@CryptoBot</span>, go to <span>Crypto Pay</span> and{' '}
              <span>My Apps</span>,
              <br />
              App Name to get Statistics
            </p>
          </div>
          <div className={s.cards__card + ' ' + s.bot}>
            <div className={s.bot__left}>
              <img src={imgBotPhone} alt="" />
              <h3 className={s.cards__title}>Send coins to users</h3>
              <p className={s.cards__subtitle}>
                Automate payouts to users with <span>transfer</span> API method
              </p>
            </div>
          </div>
          <div className={s.cards__card + ' ' + s.bot2}>
            <div className={s.bot__right}>
              <img src={imgBotMsg} alt="" />
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
