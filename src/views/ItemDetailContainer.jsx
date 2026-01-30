import { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import ItemCounter from "../components/ItemCounter";
import CartContext from "../context";
import '../css/ItemDetailContainer.css'
function ItemDetail ({product}) {
    const {addItem} = useContext(CartContext)
    const handleAdd = (quantity) => {
        const res = addItem(product,quantity)
        alert(res.msg)
    }
    return (
        <div className="item-detail-container">
            <div className="item-detail">
                <img src={product.thumbnail}/>
                <div className="item-detail-info">
                    <h2>Nombre:{product.title}</h2>
                    <h3>Categoria:{product.category}</h3>
                    <p>{product.description}</p>
                    <p>${product.price}</p>
                    <ItemCounter stock={product.stock} initial={1} onAdd={handleAdd}/>
                </div>
            </div>
            <div className="item-reviews">
                <h2>Comentarios</h2> <br />
                {product.reviews.map((r) => {
                    return (
                        <div key={r.reviewerEmail} className="review">
                            <h3>{r.reviewerName} | {r.date} | {r.rating}⭐</h3>
                            <p>{r.comment}</p>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}
export default function ItemDetailContainer () {
    const {itemId} = useParams()
    const [loading, setLoading] = useState(true)
    const [product, setProduct] = useState(null)
    useEffect(() => {
        setLoading(true)
        fetch(`https://dummyjson.com/products/${itemId}`)
        .then(res => res.json())
        .then(data => setProduct(data))
        .catch(error => console.error(error))
        .finally(() => setLoading(false))
    },[itemId])
    return (
        <>
            {loading? <p>Cargando...</p> : <ItemDetail product={product}/>}
        </>
    )
}