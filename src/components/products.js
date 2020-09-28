import { GridListTile, GridList, makeStyles, Paper } from '@material-ui/core';
import React from 'react'
import MyData from "../temp/MyData.json";

const useStyle = makeStyles(
    (theme) => (
        {
            root: {

            },
            images: {
                display: 'flex',
                flexWrap: 'wrap',
                justifyContent: 'space-around',
                overflow: 'hidden',
                backgroundColor: theme.palette.background.paper,
            },
            gridList: {
                width: "50%",
            },
            buttons : {
                
            }

        }
    )
)
const val = 3.3;

function MyProducts() {
    const classes = useStyle();

    return (
        <div className={classes.root}>
            <h1>prodo...</h1>
            <div className={classes.images}>
                <GridList cellHeight={220} className={classes.gridList} cols={3}>

                    {
                        MyData.map(
                            (obj, ind) => {
                                if (val === obj.id) {
                                    return obj.img.map(
                                        (obj, ind) => (
                                            <GridListTile key={ind} cols={1}>
                                                <img src={obj} alt={obj[ind]} />
                                            </GridListTile>
                                        )

                                    )
                                }
                            }
                        )
                    }
                </GridList>

            </div>
            <div className={classes.buttons}>

            </div>
        </div>
    )


}

export default MyProducts;