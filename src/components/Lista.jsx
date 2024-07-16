import Item from "./Item.jsx"

function Lista() {
    return (
        <>
            <h3>Minha lista</h3>
            <ul>
                <Item marca="Ferrari"/>
                <Item marca="Fiat"/>
                <Item marca="Apple"/>
            </ul>
        </>
    )
}

export default Lista