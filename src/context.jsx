import { createContext, useState } from "react";

const CartContext = createContext()

export function CartProvider ({children}) {
    const [cart, setCart] = useState([])
    const isInCart = (id) => {
        return cart.some(p => p.id === id)
    }
    const addItem = (item, quantity) => {
        if (quantity <= 0){
            return {
                ok:false,
                msg:"La cantidad añadida debe ser mayor a 0"
            }
        }
        if(isInCart(item.id)) {
            const itemExists = cart.find((p) => p.id === item.id)
            const newQuantity = itemExists.quantity + quantity
            if(newQuantity > item.stock){
                return {
                    ok:false,
                    msg: "Limite de stock alcanzado"
                }
            }
            setCart(cart.map(p => p.id === item.id ? {...p, quantity: newQuantity} : p))
            return {
                ok: true,
                msg: "Producto actualizado"
            }
        }
        else {
            if (quantity > item.stock){
                return {
                    ok:false,
                    msg: "La cantidad añadida supera al stock"
                }
            }
            setCart([...cart,{...item, quantity}])
            return {
                ok: true,
                msg: "Producto añadido"
            }
        }
    }
    const deleteItem = (id) => {
        try {
            setCart(cart.filter((p) => p.id !== id))
            return {
                ok:true,
                msg: "Producto eliminado"
            }
        } catch (error) {
            console.error(error)
            return {
                ok:false,
                msg: "Producto no encontrado"
            }
        }
    }
    const cleanCart = () => {
        setCart([])
    }
    const getTotalQuantity = () => {
        return cart.reduce((total,prod) => total + prod.quantity ,0)
    }
    const getTotalPrice = () => {
        return cart.reduce((total, prod) => total + (prod.price * prod.quantity), 0).toFixed(2)
    }
    const updateQuantity = (id, newQuantity) => {
        const product = cart.find((p) => p.id === id)
        if (!product) {
            return {
                ok:false,
                msg: "Producto no encontrado"
            }
        }
        else {
            if (newQuantity <= 0) {
                deleteItem(id)
                return {
                    ok:true,
                    msg: "Producto eliminado"
                }
            }
            if (newQuantity > product.stock ) {
                return {
                    ok:false,
                    msg: "Nueva cantidad supera el stock del producto"
                }
            }
            setCart(cart.map((p) => (p.id === id ? {...p, quantity: newQuantity} : p)))
            return {
                ok:true,
                msg: "Cantidad actualizada"
            }
        }
    }
    return (
        <CartContext.Provider value={{
            cart,
            addItem,
            deleteItem,
            cleanCart,
            getTotalPrice,
            getTotalQuantity,
            updateQuantity,
            isInCart
        }}>
            {children}
        </CartContext.Provider>
    )
}

export default CartContext