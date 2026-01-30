import { useState } from "react";
import '../css/ItemCounter.css'
export default function ItemCounter ({stock, initial = 1, onAdd}) {
    const [quantity, setQuantity] = useState(initial)
    const increment = () => {
        if (quantity < stock) {
            setQuantity(quantity+1)
        }
    }
    const decrement = () => {
        if (quantity > 1) {
            setQuantity(quantity-1)
        }
    }
    return (
        <div className="itemCounter">
            <button onClick={decrement} disabled={quantity <= 1}>-</button>
            <span>{quantity}</span>
            <button onClick={increment} disabled={quantity >= stock}>+</button>
            <button onClick={() => 
                {
                    setQuantity(initial)
                    return onAdd(quantity)
                }}>
                Comprar
            </button>
        </div>
    )
}