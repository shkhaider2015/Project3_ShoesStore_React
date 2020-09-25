import { makeStyles, Paper } from '@material-ui/core';
import React from 'react'
import image from "../temp/1_1.jpg";

const temp_data = {
    img : image,
    name : "BG Raxer 14",
    price : 0,
}
const useStyle = makeStyles(
    (theme) =>(
        {
            paper : {
                width : "300px",
                height : 'auto',
                margin : '5%'
            },
            image : {
                width : "300px",
                height : "250px",
            }
        }
    )
)

function CardView()
{

    const classes = useStyle();

    return(
        <Paper
        className = {classes.paper}
        >
            <img className={classes.image} src={temp_data['img']} />
            <h3>{temp_data['name']}</h3>
            <p> {temp_data['price']} </p>
        </Paper>
    )
}

export default CardView;