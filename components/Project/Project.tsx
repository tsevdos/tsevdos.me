import React, { FC } from "react";
import Button from "@material-ui/core/Button";
import styles from "./styles.module.css";

type ProjectProps = {
  name: string;
  description: string;
  img?: string;
  github_url?: string;
};

const Project: FC<ProjectProps> = (props) => {
  const { name, description, img, github_url } = props;

  return (
    <article className={styles.projectContainer}>
      {img && <img src={img} />}
      <div>
        <h1>{name}</h1>
        <h2>{description}</h2>
        <div>
          {github_url && (
            <Button href={github_url} target="_blank">
              View on Github
            </Button>
          )}
        </div>
      </div>
    </article>
  );
};

export default Project;
