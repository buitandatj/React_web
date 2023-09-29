import React, { useContext, useEffect, useState } from 'react';
import {  Outlet } from 'react-router-dom';
import { CartContext } from '../../context/cartContext';
import { IProducts } from '../../type/IProducts';
const Cart = () => {
    const { cart }: { cart: IProducts[] } = useContext(CartContext);
   
    return (
        <div>
            <Outlet/>
        </div>
    );
};

export default Cart;