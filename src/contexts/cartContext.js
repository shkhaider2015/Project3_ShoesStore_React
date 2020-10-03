import React, { createContext, useReducer } from 'react';
import CartReducer from "../reducers/cartReducer";

const initialValue = [
    {id : 0.0}
];

const CartContext = createContext(initialValue);


const CartProvider = ({children}) => 
{
    let [state, dispatch] = useReducer(CartReducer, initialValue);

    function addToCart(ObjectId)
    {
        dispatch(
            {
                type : "add",
                payload : {
                    id : ObjectId.id
                }
            }
        )
    }

    return(
        <CartContext.Provider
        value = {
            {
                cart : state,
                addToCart : addToCart
            }

        }
        >
            { children }
        </CartContext.Provider>
    )
}

export {CartContext}
export {CartProvider}