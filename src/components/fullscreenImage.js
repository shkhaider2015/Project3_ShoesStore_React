import { Grid, makeStyles } from '@material-ui/core'
import React from 'react'
import { useParams } from 'react-router-dom';
import IMAGE from "../temp/1_1.jpg";
import MyData from "../temp/MyData.json";

const useStyle = makeStyles(
    (theme) =>
    (
        {
            root : {
                
            },
            myGrid : {
                display: 'flex',
                flexWrap: 'wrap',
                justifyContent: 'space-around',
                overflow: 'hidden',
            }
        }
    )
)

function FullImage()
{
    const classes = useStyle();
    const { imageName } = useParams();

    return(
        <div className={classes.root}>
            <Grid container >

                    <Grid className={classes.myGrid}  item xs={12} sm={12} md={12} lg={12}>

                        <img src={ imageName } />

                    </Grid>
            </Grid>
        </div>
    )

}

export default FullImage;