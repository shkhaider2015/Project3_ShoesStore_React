import { Grid, makeStyles } from '@material-ui/core';
import React from 'react'
import MyCard from "./cardView";
import MyData from "../temp/MyData.json";

const useStyle = makeStyles(
    (theme) => (
        {
            container: {
                backgroundColor: theme.palette.background.paper,
                display : 'flex',
                flexWrap : 'center',
                justifyContent: 'space-around',
                overflow : 'hidden',
                [theme.breakpoints.up('lg')] : {
                    paddingLeft : '10%'
                }
            }
        }
    )
)

function getCategory(text, obj) {
    if (text === obj.categorie) {
        return true;
    }
    else {
        return false;
    }
}

function GridView(props) {

    const classes = useStyle()
    return (
        <Grid
            container
            spacing={4}
            className={classes.container}
        >
            <Grid
                item
                xs={12}
                sm={12}
                md={12}
                lg={12}
                xl={12}
            >
                <h1>{props.value}</h1>
            </Grid>
            {
                MyData.map(
                    (obj, ind) => {
                        if (props.value !== "All") {
                            if (getCategory(props.value, obj)) {
                                return (
                                    <Grid
                                        item
                                        xs={6}
                                        sm={6}
                                        md={4}
                                        lg={4}
                                        xl={3}
                                        key={ind}
                                    >
                                        <MyCard obj={obj} value={0} />

                                    </Grid>
                                )
                            }
                            else
                                return null
                        }
                        else {
                            return (
                                <Grid
                                    item
                                    xs={6}
                                    sm={6}
                                    md={4}
                                    lg={4}
                                    xl={3}
                                    key={ind}
                                >
                                    <MyCard obj={obj} value={1} />

                                </Grid>
                            )
                        }


                    }
                )
            }


        </Grid>
    )
}

export default GridView;