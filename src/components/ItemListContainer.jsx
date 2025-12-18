import { useEffect, useState} from "react"
import { getProducts, getProductsByCategory } from "../../productos"
import ItemList from "./ItemList"
import { useParams } from "react-router-dom"
export default function ItemListContainer () {
    const {categoryId} = useParams()
    const [productos, setProductos] = useState([])
    useEffect(() => {
        if (categoryId) {
            getProductsByCategory(categoryId).then(data => setProductos(data)).catch((error) => console.error(error))
        }
        else {
            getProducts().then(data => setProductos(data)).catch((error) => console.error(error))
        }
    },[categoryId])
    return (
        <>
            <ul className="listaProductos">
                {productos.map(p => (
                    <li key={p.id}><ItemList producto={p}/></li>
                ))}
            </ul>
        </>
    )
}