import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProductById } from "../../productos";
import ItemDetail from "../components/ItemDetail";
export default function ItemDetailContainer () {
    const {itemId} = useParams()
    const [producto, setProducto] = useState(null)
    useEffect(() => {
        getProductById(itemId).then(data => setProducto(data)).catch((e) => console.error(e))
    },[itemId])
    return (
        <div className="productoDetalle">
           {producto? <ItemDetail producto={producto}/>: <p>Cargando</p>}
        </div>
    )
} 