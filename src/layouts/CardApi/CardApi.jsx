import React from 'react';
import s from './CardApi.module.scss';
import { Container } from '../Container';
import { Button } from '../../ui/Button/Button';

export const CardApi = () => {
  return (
    <>
      <div className={s.cardApi}>
        <Container>
          <div className={s.cardApi__text}>
            <h3 className={s.cardApi__title}>Crypto Pay API</h3>
            <p className={s.cardApi__subtitle}>
              Explore available methods and type <br />
              sand integrate them in any programming <br />
              language.
            </p>
            <Button size="large" variant="empty" color="white">
              Open API Docs
            </Button>
          </div>
        </Container>
      </div>
    </>
  );
};
