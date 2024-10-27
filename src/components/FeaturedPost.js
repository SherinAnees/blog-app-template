import { Button, Card, CardActions, CardContent, makeStyles, Typography } from '@material-ui/core'
import React from 'react'
const useStyles=makeStyles({
  title:{
    fontSize:40,
    fontFamily:"Montserrat",
  },
  cover: {
    backgroundImage: `url(https://images.unsplash.com/photo-1615469038804-6b91aef7026f?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max)`,
    backgroundPosition: "center",
    padding: "35px 25px",
  },
});
const FeaturedPost = () => {
  const classes=useStyles();
  return (
    <Card className={classes.cover}>
      <CardContent className={classes.textContainer}>
        <Typography className={classes.title} gutterBottom> Title of a longer featured blog post</Typography>
        <Typography variant='h5'>Multiple lines of text that form the lede, informing new readers
          quickly and efficiently about what's most interesting in this post's
          contents.
          </Typography>
      </CardContent>
      <CardActions>
        <Button variant='text' className={classes.btn}>
          Read More..
        </Button>
      </CardActions>
    </Card>
  )
}

export default FeaturedPost
