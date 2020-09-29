import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import image from "../temp/1_1.jpg";
import { Link } from 'react-router-dom';

const dummyData = {
  image: image,
  name: "Bio 21",
  price: "$130"
}
const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  myLink : {
    textDecoration : 'none',
    color : 'black'
  }
});

function clik() {
  console.log("clicke card")
}


export default function ImgMediaCard({ obj, value }) {
  const classes = useStyles();
  console.log(obj["img"][0])
  console.log("Value : ", value)

  function getURL()
  { 
    let myStr = "";
    if(value == 0)
    {
      myStr = myStr + obj["id"]
    }
    else
    {
      myStr = obj["categorie"] + "/" + obj["id"];
    }
    return myStr;
  }


  console.log(getURL())
  return (
    <Card className={classes.root}>
      <Link
      to={getURL()}
      className={classes.myLink}
      >
        <CardActionArea
        >
          <CardMedia
            component="img"
            alt="Contemplative Reptile"
            height="200"
            image={obj["img"][0]}
            title="Contemplative Reptile"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {obj['name']}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              {obj['price']}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Link>
    </Card>
  );
}
