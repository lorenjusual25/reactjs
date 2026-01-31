import { useContext, useState } from "react"
import CartContext from "../context"
import { Link } from "react-router-dom"
import { createOrder } from "../firebase"
import '../css/Carrito.css'
import toast from "react-hot-toast"
export default function Carrito () {
    const [totalFinal, setTotalFinal] = useState(0)
    const [orderId, setOrderId] = useState(null)
    const { cart, updateQuantity, cleanCart, deleteItem, getTotalPrice } = useContext(CartContext)
    const handleDelete = (id) => {
        const res = deleteItem(id)
        if (res.ok) {
            toast.success(res.msg)
        }
        else {
            toast.error(res.msg)
        }
    }
    const addsubProduct = (p,operator) => {
        let res;
        if (operator === "+")
            res = updateQuantity(p.id, p.quantity + 1)
        if (operator === "-")
            res = updateQuantity(p.id, p.quantity - 1)
        if (res.ok) {
            toast.success(res.msg)
        }
        else {
            toast.error(res.msg)
        }
    }
    const handleCheckout = async () => {
        const order = {
            items: cart,
            total: getTotalPrice(),
            date: new Date().toLocaleDateString()
        }
        try {
            const res = await createOrder(order)
            if(res.ok){
                setOrderId(res.id)
                setTotalFinal(getTotalPrice())
                cleanCart()
            }
        } catch (error) {
            console.error("Error al procesar la compra.")
        }
    }
    if (orderId) {
        return (
            <div className="carrito-container">
                <div className="carrito-success">
                    <h2>Gracias por su compra!</h2>
                    <p>Su ID de orden es: {orderId}</p>
                    <p>Total: {totalFinal}</p>
                    <Link to='/'>Ir a comprar</Link>
                </div>
            </div>
        )
    }
    if (cart.length === 0) {
        return (
            <div className="carrito-container">
                <div className="carrito-empty">
                    <h2>Carrito vacio</h2>
                    <Link to='/'>Ir a comprar</Link>
                </div>
            </div>
        )
    }
    return (
        <div className="carrito-container">
            <h2>Carrito:</h2>
            {cart.map((p) => {
                return (
                    <div key={p.id} className="carrito-item">
                        <img src={p.thumbnail} />
                        <div className="carrito-item-info">
                            <h3>{p.title}</h3>
                            <p>Precio: ${p.price}</p>
                            <p>Cantidad: {p.quantity}</p>
                            <p>Subtotal: ${p.price * p.quantity}</p>
                            <div className="carrito-item-controls">
                                <button onClick={() => addsubProduct(p,"-")}>-</button>
                                <span>{p.quantity}</span>
                                <button onClick={() => addsubProduct(p,"+")}>+</button>
                                <button onClick={() => handleDelete(p.id)}>🗑️</button>
                            </div>
                        </div>
                    </div>
                )
            })}
            <div className="carrito-total">
                <p>Total: ${getTotalPrice()}</p>
                <div className="carrito-actions">
                    <button onClick={cleanCart}>🧹</button>
                    <button onClick={handleCheckout}>Comprar</button>
                </div>
            </div>
        </div>
    )
}