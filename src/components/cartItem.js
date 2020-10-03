import React, { useEffect } from 'react'
import { Grid, makeStyles, Paper } from '@material-ui/core';
import IMAGE from "../temp/1_1.jpg";
import MyData from "../temp/MyData.json";


const useStyle = makeStyles(
    (theme) =>
        (
            {
                root: {
                    padding: theme.spacing(0)
                },
                myPaper: {
                    width: '80%',
                },
                myContainer: {

                },
                myImage: {
                    width: "100%",
                    height: "100%",
                },
                textGrid: {
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'


                }
            }
        )
)


function CartItem({ value }) {
    const classes = useStyle();

    return (
        <div className={classes.root}>

            {
                MyData.map(
                    (obj, ind) => {
                        if (obj.id == value.id && obj.id != 0) {

                            return (
                                <Paper className={classes.myPaper} elevation={2}>
                                    <Grid container xs={12} >

                                        <Grid item xs={4}>
                                            <img className={classes.myImage} src={obj.img[0]} alt="" />
                                        </Grid>

                                        <Grid className={classes.textGrid} item xs={8} >
                                            <h1>Rs : {obj.price} </h1>
                                        </Grid>


                                    </Grid>
                                </Paper>

                            )
                        }
                    }
                )
            }

        </div>
    )
}

export default CartItem;