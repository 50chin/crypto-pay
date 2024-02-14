import React from 'react';
import { Hero } from '../Hero/Hero';
import { SlidesBox } from '../Slides/SlidesBox';
import { Card } from '../Card/Card';
import { CryptoPay } from '../CryptoPay/CryptoPay';
import { CardApi } from '../CardApi/CardApi';
import { Dev } from '../Dev/Dev';

export const Main = () => {
  return (
    <>
      <Hero />
      <SlidesBox />
      <Card />
      <CryptoPay />
      <CardApi />
      <Dev />
    </>
  );
};
