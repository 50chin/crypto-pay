import React from "react";
import { Container } from "../Container";
import s from "./CryptoPay.module.scss";
import { CryptoPayCards } from "../../components/CryptoPayCards/CryptoPayCards";

export const CryptoPay = () => {
  return (
    <section className={s.cryptoPay} id="cryptoPay">
      <Container>
        <h2 className={s.cryptoPay__title}>
          Quick start using <span>Crypto Pay</span>
        </h2>
        <CryptoPayCards />
      </Container>
    </section>
  );
};
