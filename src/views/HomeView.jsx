import ItemListContainer from "../components/ItemListContainer"
export default function HomeView (props) {
    return (
        <>
            <h1>{props.bienvenida}</h1>
            <h2>Estos son nuestros productos: </h2>
            <ItemListContainer/>
        </>
    )
}