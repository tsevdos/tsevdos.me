import { useResponsive } from "@umijs/hooks";
import React, { FC } from "react";
import HeaderNav from "./HeaderNav";
import MainMenuMobile from "./MainMenuMobile";
import styles from "./styles.module.scss";
import { useScroll } from "@umijs/hooks";

const MainHeader: FC = () => {
  const { lg } = useResponsive();
  const scroll = process.browser && useScroll(document);
  const value = scroll[0] && scroll[0].top;
  const final = value > 0 ? styles.mainHeaderContainerShadow : styles.mainHeaderContainer;

  return (
    <header className={final}>
      <a href="#home" className={styles.logoBtn}>
        JT
      </a>
      {lg && <HeaderNav />}
      {!lg && <MainMenuMobile />}
    </header>
  );
};

export default MainHeader;
