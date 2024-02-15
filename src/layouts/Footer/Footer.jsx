import React from "react";
import s from "./Footer.module.scss";
import { NavPanel } from "../../components/NavPanel/NavPanel";
import { Container } from "../Container";

export const Footer = () => {
  return (
    <div className={s.footer}>
      <Container>
        <NavPanel color="white" variantBtn="empty" colorBtn="white"></NavPanel>
        <p className={s.footer__subtitle}>©2023 Crypto Bot</p>
      </Container>
    </div>
  );
};
