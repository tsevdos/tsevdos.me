import React, { FC } from "react";
import styles from "./styles.module.scss";
import IconButton from "@material-ui/core/IconButton";
import GitHubIcon from "@material-ui/icons/GitHub";
import YouTubeIcon from "@material-ui/icons/YouTube";
import TwitterIcon from "@material-ui/icons/Twitter";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import Tooltip from "@material-ui/core/Tooltip";

const SocialButtons: FC = () => {
  return (
    <ul className={styles.socialButtonsContainer}>
      <li>
        <Tooltip title="Github">
          <IconButton href="https://github.com/tsevdos" target="_blank">
            <GitHubIcon />
          </IconButton>
        </Tooltip>
      </li>
      <li>
        <Tooltip title="Twitter">
          <IconButton href="https://twitter.com/tsevdos" target="_blank">
            <TwitterIcon />
          </IconButton>
        </Tooltip>
      </li>
      <li>
        <Tooltip title="Linkedin">
          <IconButton
            href="https://www.linkedin.com/in/tsevdosjohn/?originalSubdomain=gr"
            target="_blank"
          >
            <LinkedInIcon />
          </IconButton>
        </Tooltip>
      </li>
      <li>
        <Tooltip title="Youtube">
          <IconButton href="https://www.youtube.com/c/JohnTsevdos/videos" target="_blank">
            <YouTubeIcon />
          </IconButton>
        </Tooltip>
      </li>
    </ul>
  );
};

export default SocialButtons;
