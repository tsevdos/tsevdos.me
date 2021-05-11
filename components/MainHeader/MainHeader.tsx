import React, { FC } from "react";
import HeaderNav from "./HeaderNav";
import styles from "./styles.module.css";

const MainHeader: FC = () => {
  return (
    <header className={styles.mainHeaderContainer}>
      <h1>John Tsevdos</h1>
      <HeaderNav />
    </header>
  );
};

export default MainHeader;
