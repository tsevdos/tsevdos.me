import React, { FC } from "react";
import styles from "./styles.module.css";
import IconButton from "@material-ui/core/IconButton";

const SocialButtons: FC = () => {
  return (
    <ul className={styles.socialButtonsContainer}>
      <li>
        <IconButton
          href="https://www.linkedin.com/in/tsevdosjohn/?originalSubdomain=gr"
          target="_blank"
        >
          s
        </IconButton>
      </li>
      <li>
        <IconButton href="https://github.com/tsevdos" target="_blank">
          s
        </IconButton>
      </li>
      <li>
        <IconButton href="https://twitter.com/tsevdos" target="_blank">
          s
        </IconButton>
      </li>
    </ul>
  );
};

export default SocialButtons;
