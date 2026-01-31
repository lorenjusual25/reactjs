import { useContext } from "react"
import { Link } from "react-router-dom"
import CartContext from "../context.jsx"
import ItemCounter from "./ItemCounter.jsx"
import '../css/ItemListContainer.css'
import toast from "react-hot-toast"
function ItemList ({product}) {
    const { addItem } = useContext(CartContext)
    const handleAdd = (quantity) => {
        const res = addItem(product,quantity)
        if(res.ok) {
            toast.success(res.msg)
        }
        else {
            toast.error(res.msg)
        }
    }
    return(
        <div className="itemList">
            <h2>{product.title}</h2>
            <img src={product.thumbnail}/>
            <p>${product.price}</p>
            <ItemCounter stock={product.stock} initial={1} onAdd={handleAdd}/>
            <Link to={`/item/${product.id}`}>Mas detalles</Link>
        </div>
    )
}

export default function ItemListContainer ({products}) {
    return (
        <div className="itemListContainer">
            {products.map((p) => {
                return <ItemList key={p.id} product={p}/>
            })}
        </div>
    )
}

