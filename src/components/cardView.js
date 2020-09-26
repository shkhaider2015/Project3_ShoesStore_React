import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import image from "../temp/1_1.jpg";

const dummyData = {
    image : image,
    name : "Bio 21",
    price : "$130"
}
const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
});

export default function ImgMediaCard({obj}) {
  const classes = useStyles();
  console.log(obj["img"][0])
  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt="Contemplative Reptile"
          height="200"
          image={ obj["img"][0] }
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            { dummyData['name'] }
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            { dummyData['price'] }
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
