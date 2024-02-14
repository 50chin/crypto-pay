/* eslint-disable react/jsx-key */
import React from 'react';
import s from './CryptoPayCards.module.scss';
import imgFirst from '../../assets/img/cryptoPay/1.svg';
import imgSecond from '../../assets/img/cryptoPay/2.svg';
import imgThird from '../../assets/img/cryptoPay/3.svg';
import img1 from '../../assets/img/cryptoPay/img1.svg';
import img2 from '../../assets/img/cryptoPay/img2.svg';
import img3 from '../../assets/img/cryptoPay/img3.svg';

const cardObj = [
  {
    img: imgFirst,
    title: 'Authorizing your app',
    subtitle: null,
    type: 'ol',
    style: 'none',
    list: [
      ['Open', <span> @CryptoBot</span>],
      ['Go to', <span> Crypto Pay</span>],
      ['Tap', <span> Create App</span>],
      ['Get', <span> API Token </span>],
    ],
    card: img1,
  },
  {
    img: imgSecond,
    title: 'Crypto Pay API Request',
    subtitle: [
      'Requests are only served over HTTPS',
      <br />,
      'To pass parameters use',
    ],
    type: 'ul',
    style: 'reverse',
    color: 'blue',
    list: [
      'URL query string',
      'application/json',
      'application/x-www-form-urlencoded',
      'multipart/form-data',
    ],
    card: img2,
  },
  {
    img: imgThird,
    title: 'Getting updates',
    subtitle: [
      'There are two ways of receiving',
      <br />,
      'updates for your app',
    ],
    type: 'ul',
    style: 'none',
    list: [
      [<span>getInvoices</span>, ' method to get a list of created invoices.'],
      [<span>Webhooks</span>, ' to receive updates in realtime.'],
    ],
    card: img3,
  },
];

export const CryptoPayCards = () => {
  const cards = cardObj.map((el, i) => (
    <div
      key={i}
      className={s.cryptoPayCards__wrapper}
      style={
        el.style === 'reverse'
          ? { flexDirection: 'row-reverse' }
          : { flexDirection: 'row' }
      }
    >
      <div className={s.cryptoPayCards__text}>
        <img src={el.img} alt="" />
        <h3 className={s.cryptoPayCards__title}>{el.title}</h3>
        <p className={s.cryptoPayCards__subtitle}>{el.subtitle}</p>
        {el.type === 'ol' ? (
          <ol className={s.cryptoPayCards__list}>
            {el.list.map((li, i) => (
              <li key={i}>{li}</li>
            ))}
          </ol>
        ) : (
          <ul
            className={s.cryptoPayCards__list}
            style={
              el.color === 'blue'
                ? { color: 'rgb(65, 164, 223)' }
                : { color: 'black' }
            }
          >
            {el.list.map((li, i) => (
              <li key={i}>{li}</li>
            ))}
          </ul>
        )}
      </div>
      <img src={el.card} alt="" className={s.cryptoPayCards__img} />
    </div>
  ));

  return <>{cards}</>;
};
