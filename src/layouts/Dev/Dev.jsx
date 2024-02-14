import React from 'react';
import s from './Dev.module.scss';
import { Container } from '../../layouts/Container';
import { ApiIcon } from '../../components/ApiIcon/ApiIcon';
import { Button } from '../../ui/Button/Button';

export const Dev = () => {
  return (
    <div className={s.dev}>
      <Container>
        <h2 className={s.dev__title}>Join dev community</h2>
        <p className={s.dev__subtitle}>
          Connect with bot developers and explore the possibilities <br />
          our crypto payments service unlocks.
        </p>
        <ApiIcon />
        <Button size="large" variant="fill" color="white">
          Open Devs chat
        </Button>
      </Container>
    </div>
  );
};
