import { useEffect, useState } from "react"
import ItemListContainer from "../components/ItemListContainer"
export default function Practica3 () {
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)
    const categories = ['laptops', 'mobile-accessories', 'smartphones', 'tablets']
    const limit = 10
    useEffect(()=>{
        setLoading(true)
        const promises = categories.map(category => {
            return fetch(`https://dummyjson.com/products/category/${category}?limit=${limit}`)
            .then(res => res.json())
        })
        Promise.all(promises)
        .then(datas => setProducts(datas.flatMap(data => data.products))) //flatMap por que cada data devuelve un array, y lo quiero juntar todos
        .catch(error => console.error(error))
        .finally(() => setLoading(false))
    },[])
    return (
        <>
            {loading? <p>Cargando...</p> : <ItemListContainer products={products}/>}
        </>
    )
}