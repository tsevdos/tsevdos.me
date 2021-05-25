import React, { FC } from "react";
import styles from "./styles.module.scss";

const HeaderNav: FC = () => {
  return (
    <ul className={styles.navContainer}>
      <li>
        <a href="#home">Home</a>
      </li>
      <li>
        <a href="#about">About</a>
      </li>
      <li>
        <a href="#projects">Projects</a>
      </li>
      <li>
        <a href="#presentations">Presentations</a>
      </li>
      <li>
        <a href="#abandonware">Abandonware</a>
      </li>
    </ul>
  );
};

export default HeaderNav;
