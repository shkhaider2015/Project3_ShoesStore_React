import { makeStyles } from '@material-ui/core';
import React from 'react'



const useStyle = makeStyles(
    (theme) => (
        {
            root : {
                
            }
        }
    )
)

function CartList()
{
    const classes = useStyle();

    return(
        <div className={classes.root}>

        </div>
    )

}

export default CartList;