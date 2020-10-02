import React from 'react'
import { Grid, makeStyles, Paper } from '@material-ui/core';
import IMAGE from "../temp/1_1.jpg";
import MyData from "../temp/MyData.json";


const useStyle = makeStyles(
    (theme) =>
        (
            {
                root: {
                    padding: theme.spacing(5)
                },
                myPaper: {
                    width: '40%',
                },
                myContainer: {

                },
                myImage: {
                    width: "100%",
                    height: "100%",
                },
                textGrid: {
                    display : 'flex',
                    alignItems : 'center',
                    justifyContent : 'center'


                }
            }
        )
)

function getElement(x)
{
    MyData.map(
        (obj, ind) =>
        {
            if(x == obj.id)
            {
                return obj
            }
        }
    )
}

function CartItem(props) {
    const classes = useStyle();
    const currentObject = getElement(props.value)
    
    console.log("Current Object : ",currentObject)
    return (
        <div className={classes.root}>

            <Paper className={classes.myPaper} elevation={2}>
                <Grid container xs={12} >

                    <Grid item xs={4}>
                        <img className={classes.myImage} src={currentObject.img[0]} alt="" />
                    </Grid>

                    <Grid  className={classes.textGrid} item xs={8} >
                        <h1>Rs : {currentObject.price} </h1>
                    </Grid>


                </Grid>
            </Paper>

        </div>
    )
}

export default CartItem;