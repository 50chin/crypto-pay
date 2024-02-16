import React from 'react';
import s from './SlidesBox.module.scss';
import { Container } from '../Container';
import { Slide } from '../../components/Slide/Slide';

export const SlidesBox = () => {
  return (
    <section className={s.slideBox}>
      <Container>
        <Slide />
      </Container>
    </section>
  );
};
