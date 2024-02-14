import React from "react";
import s from "./Header.module.scss";
import { Container } from "../Container";
import { NavPanel } from "../../components/NavPanel/NavPanel";

export const Header = () => {
  return (
    <div className={s.header}>
      <Container>
        <NavPanel icon="sun" color="black"></NavPanel>
      </Container>
    </div>
  );
};
