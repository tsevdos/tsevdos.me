import React, { FC } from "react";
import styles from "./styles.module.scss";
import IconButton from "@material-ui/core/IconButton";
import GitHubIcon from "@material-ui/icons/GitHub";
import YouTubeIcon from "@material-ui/icons/YouTube";
import TwitterIcon from "@material-ui/icons/Twitter";
import LinkedInIcon from "@material-ui/icons/LinkedIn";

const SocialButtons: FC = () => {
  return (
    <ul className={styles.socialButtonsContainer}>
      <li>
        <IconButton href="https://github.com/tsevdos" target="_blank">
          <GitHubIcon />
        </IconButton>
      </li>
      <li>
        <IconButton href="https://twitter.com/tsevdos" target="_blank">
          <TwitterIcon />
        </IconButton>
      </li>
      <li>
        <IconButton
          href="https://www.linkedin.com/in/tsevdosjohn/?originalSubdomain=gr"
          target="_blank"
        >
          <LinkedInIcon />
        </IconButton>
      </li>
      <li>
        <IconButton href="https://www.youtube.com/c/JohnTsevdos/videos" target="_blank">
          <YouTubeIcon />
        </IconButton>
      </li>
    </ul>
  );
};

export default SocialButtons;
