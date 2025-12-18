import CartWidget from './CartWidget.jsx'
import { Link } from 'react-router-dom'
import './NavBar.css'
export default function NavBar() {
    return (
        <>
            <nav className='navBar'>
                <Link to='/'><img src="/logoEmpresa.png" className='logoEmpresa'/></Link>
                <Link to='/category/celulares'>CELULARES</Link>
                <Link to='/category/computadoras'>COMPUTADORAS</Link>
                <Link to='/category/consolas'>CONSOLAS</Link>
                <CartWidget/>
            </nav>
        </>
    )
}