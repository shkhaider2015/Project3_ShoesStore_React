import { Grid, makeStyles } from '@material-ui/core'
import React from 'react'
import { useParams } from 'react-router-dom';
import MyData from "../temp/MyData.json";

const useStyle = makeStyles(
    (theme) =>
    (
        {
            root : {
                width : '100%',
            },
            myGrid : {
                display: 'flex',
                flexWrap: 'wrap',
                justifyContent: 'space-around',
                overflow: 'hidden',
            },
            myImg : {
                width : '100%'
            }
        }
    )
)

function FullImage()
{
    const classes = useStyle();
    const { id, index } = useParams();
    return(
        
        
        <div className={classes.root}>
            
            <Grid container >

                    <Grid className={classes.myGrid}  item xs={12} sm={12} md={10} lg={10}>

                        {
                            MyData.map(
                                (obj, ind) => 
                                {
                                    if(Number(id) === obj.id)
                                    {
                                        return(
                                            <img className={classes.myImg} src={obj.img[Number(index)]} alt="" key={ind} />
                                        )
                                    }
                                    else
                                        return null
                                }
                            )
                        }

                    </Grid>
            </Grid>
            
        </div>
        
    )

}

export default FullImage;