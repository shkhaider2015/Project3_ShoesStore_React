import { Grid } from '@material-ui/core';
import React from 'react'
import MyCard from "./cardView";
import MyData from "../temp/MyData.json";


function GridView() {

    console.log(MyData)


    return (
        <Grid
            container
            spacing={4}

        >

            {
                MyData.map(
                    (obj, ind) => {
                        console.log(obj, "gv")
                        return (
                            <Grid
                                item
                                xs={12}
                                md={4}
                            >
                                <MyCard obj={obj} />

                            </Grid>
                        )
                    }
                )
            }


        </Grid>
    )
}

export default GridView;