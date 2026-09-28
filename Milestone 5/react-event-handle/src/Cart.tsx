export default function Cart(){
    let counter:number = 0;
    const addToCartHandler =()=>{
        return counter++;
    }
    return (
        <div>
            <h2>Shopping Cart</h2>
            <p>Items Count: {counter}</p>
            <button onClick={addToCartHandler}>Add to Cart</button>
        </div>
    )
}