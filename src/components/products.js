import { GridListTile, GridList, makeStyles, Paper, colors, MuiThemeProvider, createMuiTheme } from '@material-ui/core';
import React from 'react'
import Button from '@material-ui/core/Button';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import MyData from "../temp/MyData.json";
import { Link, useParams } from 'react-router-dom';

const useStyle = makeStyles(
    (theme) => (
        {
            root: {

            },
            description: {
                display: 'flex',
                flexWrap: 'wrap',
                justifyContent: 'left',
                overflow: 'hidden',
                backgroundColor: theme.palette.background.paper,
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
                [theme.breakpoints.down('sm')]: {
                    width: '80%',
                    cols: '1'
                }
            },
            buttons: {
                display: 'flex',
                flexWrap: 'wrap',
                justifyContent: 'space-around',
                overflow: 'hidden',
                backgroundColor: theme.palette.background.paper,
            },
            addToCart: {
                marginTop: theme.spacing(2),
                marginBottom: theme.spacing(4),
                color: '#FFFFFF'
            }

        }
    )
)
const blueTheme = createMuiTheme({ palette: { primary: colors.green } })


function MyProducts() {
    const classes = useStyle();
    const { id } = useParams();

    return (
        <div className={classes.root}>
            <div className={classes.images}>
                <Paper
                    elevation={2}
                    style={{ margin: '1%', paddingLeft: '1%', paddingRight: '1%' }}
                >
                    <h3> <b>
                        {
                            MyData.map(
                                (obj, ind) => {
                                    if (id == obj.id) {
                                        return obj.name
                                    }
                                }
                            )
                        }
                    </b> </h3>
                </Paper>
            </div>
            <div className={classes.images}>
                <GridList cellHeight={220} className={classes.gridList} cols={3}>

                    {
                        MyData.map(
                            (obj, ind) => {
                                if (id == obj.id) {
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
            <div className={classes.images}>


                <MuiThemeProvider theme={blueTheme}>
                    <Button
                        variant="contained"
                        color="primary"
                        className={classes.addToCart}
                        startIcon={<ShoppingCartIcon />}
                    >
                        Add To Cart
                </Button>
                </MuiThemeProvider>

            </div>
        </div>
    )


}

export default MyProducts;