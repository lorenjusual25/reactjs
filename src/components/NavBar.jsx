import CartWidget from './CartWidget.jsx'
export default function NavBar() {
    return (
        <>
            <nav className='navBar'>
                <img src="/logoEmpresa.png" style={{borderRadius:5, height:50, width:50}}/>
                <button className='botones'>CELULARES</button>
                <button className='botones'>COMPUTADORAS</button>
                <button className='botones'>CONSOLAS</button>
                <CartWidget/>
            </nav>
        </>
    )
}