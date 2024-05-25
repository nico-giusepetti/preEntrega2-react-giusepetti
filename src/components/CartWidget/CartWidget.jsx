import React from 'react'
import logoCarrito from '/assets/carrito-de-compras.png'
import './CartWidget.css'

const CartWindget = () => {
    return (
        <div className='seccion-carrito'>
            <img src={logoCarrito} alt="carrito de compra" className='logo-carrito' />
            <span>0</span>
        </div>
    )
}


export default CartWindget