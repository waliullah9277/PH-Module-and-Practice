
interface CartProps {
    itemCounts: number
}

export default function Cart ({itemCounts}: CartProps){
    return (
        <>
        <p>Item Count: {itemCounts}</p>
        {itemCounts > 0 && (<p>You have items in your cart.</p>) }
        </>
    )

}