import { Grid, GridList, makeStyles, Paper } from '@material-ui/core';
import React from 'react'
import tempImage from "../temp/1_1.jpg";

const useStyle = makeStyles(
    (theme) => (
        {
            root : {

            },
            headGrid : {
                display : 'flex'
            },
            headPaper : {
                display : "inline-block",
                padding : theme.spacing(1),
                justifyContent : "center"
            },
            headImage : {
                width : "700px",
                height : "500px",
                
            },

        }
    )
)

function Product()
{
    const classes = useStyle();

    return (
        <div className={classes.root}>
            <Grid container>

                <Grid item sm={12} className={classes.headGrid} >
                    
                    <Paper elevation={1} className={classes.headPaper}>
                        <img src={tempImage} className={classes.headImage}/>
                    </Paper>

                </Grid>

                <Grid item sm={12}>

                    <GridList>

                    </GridList>

                </Grid>

            </Grid>
        </div>
    )


}

export default Product;