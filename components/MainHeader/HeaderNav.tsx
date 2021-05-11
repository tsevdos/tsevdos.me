import React, { FC } from "react";
import styles from "./styles.module.css";

const HeaderNav: FC = () => {
  return (
    <ul className={styles.navContainer}>
      <li>
        <a href="#intro">Intro</a>
      </li>
      <li>
        <a href="#bio">Bio</a>
      </li>
      <li>
        <a href="#projects">Projects</a>
      </li>
      <li>
        <a href="#knowledge-sharing">Knowledge sharing</a>
      </li>
      <li>
        <a href="#blogs">Blogs</a>
      </li>
      <li>
        <a href="#presentations">Public speaking</a>
      </li>
      <li>
        <a href="#abandonware">Abandonware</a>
      </li>
    </ul>
  );
};

export default HeaderNav;
