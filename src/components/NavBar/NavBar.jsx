import React from 'react'
import { Link } from 'react-router-dom'
import './NavBar.css'
import logo from '/assets/logo-ng-supplements.jpg'
import CartWidget from '../CartWidget/CartWidget'


const NavBar = () => {
    return (
        <nav className='nav'>
            <img src={logo} alt="logo" className='logo' />
            <ul className='categorias'>
                <li>
                    <Link to='/categoria/proteinas'>
                        Proteinas
                    </Link>
                </li>
                <li>
                    <Link to='/categoria/creatinas'>
                        Creatinas
                    </Link>
                </li>
                <li>
                    <Link to='/categoria/energizantes'>
                        Energizantes
                    </Link>
                </li>
                <li>
                    <Link to='/categoria/recuperacion-muscular'>Recuperación muscular</Link>
                </li>
                <li>
                    <Link to='/categoria/vitaminas-y-minerales'>
                        Vitaminas y minerales
                    </Link>
                </li>
                <li>
                    <Link to='/categoria/control-de-peso'>
                        Control de peso
                    </Link>
                </li>
                <li>
                    <Link to='/categoria/accesorios'>
                        Accesorios
                    </Link>
                </li>
            </ul>

            <CartWidget />
        </nav>
    )
}

export default NavBar