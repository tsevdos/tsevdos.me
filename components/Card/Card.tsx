import React, { FC } from "react";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import styles from "./styles.module.css";

type VideoCardProps = {
  name: string;
  description: string;
  slides_url: string;
  video_url: string;
};

const VideoCard: FC<VideoCardProps> = (props) => {
  const { name, description, slides_url, video_url } = props;

  return (
    <Card className={styles.card}>
      <CardActionArea>
        <CardMedia component="iframe" height="200" src={video_url} />

        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {name}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {description}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button color="primary" href={slides_url} target="_blank">
          Slides
        </Button>
      </CardActions>
    </Card>
  );
};

export default VideoCard;
