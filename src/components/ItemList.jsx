import ItemDetail from "./ItemDetail";
import { Link } from "react-router-dom";
export default function ItemList ({producto}) {
    return (
        <div className="producto">
            <h3>{producto.name}</h3>
            <img src={`/${producto.img}`}/>
            <p>${producto.price}</p>
            <Link to={`/item/${producto.id}`}>
                <button>Mas detalles</button>
            </Link>
        </div>
    )
}