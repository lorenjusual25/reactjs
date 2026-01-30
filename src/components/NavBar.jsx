import { useContext } from 'react'
import { Link } from 'react-router-dom'
import CartContext from '../context'
import '../css/NavBar.css'
export default function NavBar() {
    const {getTotalQuantity} = useContext(CartContext)
    return (
        <nav className='navBar'>
            <Link to='/'><img src="logoEmpresa.png"/></Link>
            <Link to='/category/smartphones'>CELULARES</Link>
            <Link to='/category/laptops'>COMPUTADORAS</Link>
            <Link to='/category/mobile-accessories'>ACCESORIOS</Link>
            <Link to='/category/tablets'>TABLETS</Link>
            <Link to='/cart'>🛒 {getTotalQuantity()}</Link>
        </nav>
    )
}