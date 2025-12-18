import { useParams } from "react-router-dom";
import ItemListContainer from "../components/ItemListContainer";
export default function CategoryView () {
    const { categoryId } = useParams();
    return (
        <>
            <h1>Estas en la categoria {categoryId}</h1>
            <ItemListContainer />
        </>
    )
}