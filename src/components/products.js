import { GridListTile, GridList, makeStyles, Paper, colors, MuiThemeProvider, createMuiTheme } from '@material-ui/core';
import React, { useContext } from 'react'
import Button from '@material-ui/core/Button';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import MyData from "../temp/MyData.json";
import { useParams, Link } from 'react-router-dom';
import { CartContext } from "../contexts/cartContext";


const useStyle = makeStyles(
    (theme) => (
        {
            root: {
                zIndex : 1
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
                position : "relative",
                [theme.breakpoints.down('sm')]: {
                    width: '80%',
                    cols: '1'
                }
            },
            gridItem : {
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
            },
            myLink : {
                textDecoration : "none",
            },
            myImage : {
                width : "100%",
                height : "100%",
            }

        }
    )
)
const blueTheme = createMuiTheme({ palette: { primary: colors.green } })


function MyProducts() {
    const classes = useStyle();
    const { id } = useParams();
    let {addToCart} = useContext(CartContext)


    function handleCart()
{
    let myObj = {
        id : Number(id)
    }
    addToCart(myObj)
}

function handleFull()
{

}

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
                                    if (Number(id) === obj.id) {
                                        return obj.name
                                    }
                                    else
                                        return null
                                }
                            )
                        }
                    </b> </h3>
                </Paper>
            </div>
            <div className={classes.images}>
            
                <GridList cellHeight={220} className={classes.gridList} spacing={10} cols={3}>

                    {
                        MyData.map(
                            (obj, ind) => {
                                if (Number(id) === obj.id) {
                                    return obj.img.map(
                                        (obj, index) => (
                                            
                                            <GridListTile className={classes.gridItem} key={index} cols={1} onClick={handleFull}>
                                                
                                                <Link to={`/fsi${id}${index}`} className={classes.myLink} key={index}>
                                                    <img className={classes.myImage} src={obj} alt={obj[index]} />
                                                </Link>
                                              
                                                
                                                    
                                            </GridListTile>
                                           


                                        )

                                    )
                                }
                                else
                                    return null
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
                        onClick={handleCart}
                    >
                        Add To Cart
                </Button>
                </MuiThemeProvider>

            </div>
           
            <div className={classes.images}>
                    
                        
                        
                        
                    
            </div>
        </div >
    )


}

export default MyProducts;