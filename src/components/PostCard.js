import {
  CardActionArea,
  Grid,
  Card,
  makeStyles,
  CardContent,
  Typography,
  Hidden,
  CardMedia,
} from "@material-ui/core";
import React from "react";
const useStyles = makeStyles({
    card: {
        display: "flex",
      },
      cardDetails: {
        flex: 1,
      },
      cardMedia: {
        width: 160,
      },
});

function PostCard({post}) {
  const classes = useStyles();
  return (
    <Grid item xs={12} md={6}>
      <CardActionArea component="a" href="#">
        <Card className={classes.card}>
          <div className={classes.cardDetails}>
            <CardContent>
              <Typography component="h2" variant="h5">
                {post.title}
              </Typography>
              <Typography variant="subtitle1" color="textSecondary">
                {post.data}
              </Typography>
              <Typography variant="subtitle1" paragraph>
                {post.description}
              </Typography>
              <Typography variant="subtitle1" style={{ color: "skyblue" }}>
                Continue Reading...
              </Typography>
            </CardContent>
          </div>
          <Hidden xsDown>
              <CardMedia className={classes.cardMedia}
              image={post.image}
              title={post.title}/>
              </Hidden>
        </Card>
      </CardActionArea>
    </Grid>
  );
}

export default PostCard;
