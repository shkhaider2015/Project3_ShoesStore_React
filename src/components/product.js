import { makeStyles, Paper } from '@material-ui/core';
import React from 'react'

const useStyle = makeStyles(
    (theme) => (
        {
            myPaper : {
                width : "50%",
                marginLeft : "20%",
            }
        }
    )
)

function Product()
{
    const classes = useStyle();

    return (
        <div>
            <Paper
            className={classes.myPaper}
            >
                <h1>Haider</h1>

            </Paper>
        </div>
    )


}

export default Product;