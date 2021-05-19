import React, { FC } from "react";
import Button from "@material-ui/core/Button";
import styles from "./styles.module.css";
import Link from "@material-ui/core/Link";

type CardProps = {
  name: string;
  description: string;
  img?: string;
  github_url?: string;
  homepage?: string;
  slides_url?: string;
  video_url?: string;
};

const Card: FC<CardProps> = (props) => {
  const { name, description, img, github_url, homepage, video_url, slides_url } = props;

  return (
    <article className={styles.projectContainer}>
      {img && <img src={img} />}
      {video_url && <iframe src={video_url}></iframe>}
      <div className={styles.details}>
        <div>
          <Link href={homepage} target="_blank">
            {name}
          </Link>
          <p>{description}</p>
        </div>
        <div>
          {github_url && (
            <Button variant="outlined" href={github_url} target="_blank">
              View on Github
            </Button>
          )}
          {slides_url && (
            <Button variant="outlined" href={slides_url} target="_blank">
              Slides
            </Button>
          )}
        </div>
      </div>
    </article>
  );
};

export default Card;
