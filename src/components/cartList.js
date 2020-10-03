import { makeStyles } from '@material-ui/core';
import React, { useContext } from 'react'
import { CartContext } from "../contexts/cartContext";
import CartItem from "./cartItem";



const useStyle = makeStyles(
    (theme) => (
        {
            root: {
                display: 'flex',
                flexWrap: 'center',
                justifyContent: 'space-around',
                overflow : 'hidden'
            }, 
            myUl : {
                listStyleType : 'none',
            },
            myLi : {

            }
        }
    )
)

function CartList() {
    const classes = useStyle();
    const { cart } = useContext(CartContext)
    return (
        <div className={classes.root}>
            <ul className={classes.myUl}>
                {

                    cart.length <= 1 ? <h3>Empty</h3> : cart.map(
                        (obj, ind) => 
                        {
                            return <li key={ind} className={classes.myLi}>
                                <CartItem value={obj} />
                            </li>
                        }
                    )
                    
                }
            </ul>

        </div>
    )

}

export default CartList;