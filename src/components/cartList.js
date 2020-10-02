import React from 'react'
import { Grid, makeStyles, Paper } from '@material-ui/core';
import IMAGE from "../temp/1_1.jpg";


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
                    border : '1px solid black',
                    display : 'flex',
                    alignItems : 'center',
                    justifyContent : 'center'


                }
            }
        )
)

function CartList() {
    const classes = useStyle();


    return (
        <div className={classes.root}>

            <Paper className={classes.myPaper} elevation={2}>
                <Grid container xs={12} >

                    <Grid item xs={4}>
                        <img className={classes.myImage} src={IMAGE} alt="" />
                    </Grid>

                    <Grid  className={classes.textGrid} item xs={8} >
                        <h1>Rs : 180</h1>
                    </Grid>


                </Grid>
            </Paper>

        </div>
    )
}

export default CartList;