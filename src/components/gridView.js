import { Grid, makeStyles } from '@material-ui/core';
import React from 'react'
import MyCard from "./cardView";
import MyData from "../temp/MyData.json";

const useStyle = makeStyles(
    (theme) => (
        {
            container: {
                margin: "5%"
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
            spacing={8}
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
                        console.log("Object", obj.id)
                        if (props.value !== "All") {
                            if (getCategory(props.value, obj)) {
                                return (
                                    <Grid
                                        item
                                        xs={12}
                                        sm={6}
                                        md={4}
                                        lg={4}
                                        xl={3}
                                        key={ind}
                                    >
                                        <MyCard obj={obj} />

                                    </Grid>
                                )
                            }
                        }
                        else {
                            return (
                                <Grid
                                    item
                                    xs={12}
                                    sm={6}
                                    md={4}
                                    lg={4}
                                    xl={3}
                                    key={ind}
                                >
                                    <MyCard obj={obj} />

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