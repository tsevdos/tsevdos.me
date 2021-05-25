import React, { FC, useState } from "react";
import MenuIcon from "@material-ui/icons/Menu";
import { IconButton } from "@material-ui/core";
import Drawer from "@material-ui/core/Drawer";
import styles from "./styles.module.scss";
import CloseIcon from "@material-ui/icons/Close";

const MainMenuMobile: FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <IconButton onClick={(): void => setIsOpen(true)}>
        <MenuIcon />
      </IconButton>
      <Drawer
        anchor="right"
        open={isOpen}
        onClose={(): void => setIsOpen(false)}
        classes={{ paper: styles.mobile }}
      >
        <div className={styles.closeBtn}>
          <IconButton onClick={(): void => setIsOpen(false)}>
            <CloseIcon />
          </IconButton>
        </div>
        <ul>
          <li>
            <a href="#intro">Home</a>
          </li>
          <li>
            <a href="#bio">About</a>
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
      </Drawer>
    </>
  );
};

export default MainMenuMobile;
