import { useResponsive } from "@umijs/hooks";
import React, { FC } from "react";
import HeaderNav from "./HeaderNav";
import MainMenuMobile from "./MainMenuMobile";
import styles from "./styles.module.css";

const MainHeader: FC = () => {
  const { lg } = useResponsive();

  return (
    <header className={styles.mainHeaderContainer}>
      <h1>JT</h1>
      {lg && <HeaderNav />}
      {!lg && <MainMenuMobile />}
    </header>
  );
};

export default MainHeader;
