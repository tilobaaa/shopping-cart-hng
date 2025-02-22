import React from "react";

const CartContext = React.createContext({
    items: [],
    totalAmount: 0,
    addItem: ()=>{},
    removeItem: ()=>{}, 
    deleteItem : ()=>{}
});

export default CartContext;