import Item from "./Item.jsx"

function Lista() {
    return (
        <>
            <h3>Minha lista</h3>
            <ul>
                <Item marca="Ferrari" anoLancamento={1999} />
                <Item marca="Fiat" anoLancamento={1998}/>
                <Item marca="Apple" anoLancamento={1987}/>
            </ul>
        </>
    )
}

export default Lista