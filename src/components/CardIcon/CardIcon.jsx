import React from 'react';
import './CardIcon.css';
import s from './CardIcon.module.scss';
import imgETH from '../../assets/img/Card/CardTop/Icon/ETH.svg';
import imgUSDT from '../../assets/img/Card/CardTop/Icon/USDT.svg';
import imgTON from '../../assets/img/Card/CardTop/Icon/TON.svg';
import imgBTC from '../../assets/img/Card/CardTop/Icon/BTC.svg';
import imgTRX from '../../assets/img/Card/CardTop/Icon/TRX.svg';
import imgLTC from '../../assets/img/Card/CardTop/Icon/LTC.svg';
import imgUSDC from '../../assets/img/Card/CardTop/Icon/USDC.svg';
import imgBNB from '../../assets/img/Card/CardTop/Icon/BNB.svg';

const iconsObj = [
  { icon: imgETH, text: 'ETH' },
  { icon: imgUSDT, text: 'USDT' },
  { icon: imgTON, text: 'TON' },
  { icon: imgBTC, text: 'BTC' },
  { icon: imgTRX, text: 'TRX' },
  { icon: imgLTC, text: 'LTC' },
  { icon: imgUSDC, text: 'USDC' },
  { icon: imgBNB, text: 'BNB' },
];

export const CardIcon = () => {
  const listIcon = iconsObj.map((el, i) => (
    <li key={el.text}>
      <img id={`icon-${i}`} className={s.cardIcon__icons} src={el.icon} />
      <p id={`text-${i}`} className={s.cardIcon__text}>
        {el.text}
      </p>
    </li>
  ));
  return (
    <div className={s.cardIcon}>
      <ul className={s.cardIcon__wrapper}>{listIcon}</ul>
    </div>
  );
};
