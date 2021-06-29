import React, { FC, useState } from "react";
import MenuIcon from "@material-ui/icons/Menu";
import { IconButton } from "@material-ui/core";
import Drawer from "@material-ui/core/Drawer";
import styles from "./styles.module.scss";
import CloseIcon from "@material-ui/icons/Close";
import GitHubIcon from "@material-ui/icons/GitHub";
import YouTubeIcon from "@material-ui/icons/YouTube";
import TwitterIcon from "@material-ui/icons/Twitter";
import LinkedInIcon from "@material-ui/icons/LinkedIn";

const MainMenuMobile: FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <IconButton onClick={(): void => setIsOpen(true)}>
        <MenuIcon style={{ width: 32, height: 32 }} />
      </IconButton>
      <Drawer
        anchor="right"
        open={isOpen}
        onClose={(): void => setIsOpen(false)}
        classes={{ paper: styles.mobile }}
      >
        <header>
          <a href="#home" className={styles.logoBtn}>
            JT
          </a>
          <IconButton onClick={(): void => setIsOpen(false)}>
            <CloseIcon />
          </IconButton>
        </header>
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
        <footer>
          <ul>
            <li>
              <IconButton href="https://github.com/tsevdos" target="_blank">
                <GitHubIcon />
                Github
              </IconButton>
            </li>
            <li>
              <IconButton href="https://twitter.com/tsevdos" target="_blank">
                <TwitterIcon />
                Twitter
              </IconButton>
            </li>
            <li>
              <IconButton
                href="https://www.linkedin.com/in/tsevdosjohn/?originalSubdomain=gr"
                target="_blank"
              >
                <LinkedInIcon />
                LinkedIn
              </IconButton>
            </li>
            <li>
              <IconButton href="https://www.youtube.com/c/JohnTsevdos/videos" target="_blank">
                <YouTubeIcon />
                Youtube
              </IconButton>
            </li>
          </ul>
        </footer>
      </Drawer>
    </>
  );
};

export default MainMenuMobile;
