import ItemCount from "./ItemCount";
export default function ItemDetail ({producto}) {
    return (
        <>
            <h1>{producto.id}</h1>
            <h2>{producto.name}</h2>
            <h3>{producto.category}</h3>
            <img src={`/${producto.img}`}/>
            <p>{producto.detail}</p>
            <p>${producto.price}</p>
            {/*<ItemCount/>*/}
        </>
    )
}