import React, { FC } from "react";
import styles from "./styles.module.css";

const HeaderNav: FC = () => {
  return (
    <ul className={styles.navContainer}>
      <li>
        <a href="#home">HOME</a>
      </li>
      <li>
        <a href="#about">ABOUT</a>
      </li>
      <li>
        <a href="#projects">PROJECTS</a>
      </li>
      {/* <li>
        <a href="#knowledge-sharing">Knowledge sharing</a>
      </li>
      <li>
        <a href="#blogs">Blogs</a>
      </li> */}
      <li>
        <a href="#presentations">PRESENTATIONS</a>
      </li>
      <li>
        <a href="#abandonware">ABANDONWARE</a>
      </li>
    </ul>
  );
};

export default HeaderNav;
