import { useParams } from "react-router-dom";
import ItemListContainer from "../components/ItemListContainer";
import { useEffect, useState } from "react";
export default function CategoryView () {
    const { categoryId } = useParams();
    const [loading, setLoading] = useState(true)
    const [products, setProducts] = useState([])
    const limit = 10
    useEffect(() =>{
        setLoading(true)
        fetch(`https://dummyjson.com/products/category/${categoryId}?limit=${limit}`)
        .then(res => res.json()) 
        .then(data => setProducts(data.products))
        .catch(error => console.error(error))
        .finally(() => setLoading(false))
    },[categoryId])
    return (
        <>
            {loading? <p>Cargando...</p> : <ItemListContainer products={products}/>}
        </>
    )
}