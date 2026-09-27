
interface ProductCardProps {
    productName: string
    price: number
    inStock: boolean
}


export default function ProductCard({productName, price, inStock}: ProductCardProps){

    return (        
        <div style={{border: "2px solid green", margin: "10px"}}>
            <h3>{productName}</h3>
            <h5>Price: {price}</h5>
            <p>{inStock ? "Available" : "Out of Stock"}</p>
        </div>
        
    )

}

// export default function ProductCard({productName, price, inStock}: ProductCardProps){

//     return inStock === true ? <div style={{border: "2px solid green", margin: "10px"}}>
//        <h3>{productName}</h3>
//        <h5>Price: {price}</h5>
//        <p>Available</p>
//        </div> : <div style={{border: "2px solid green", margin: "10px"}}>
//        <h3>{productName}</h3>
//        <h5>Price: {price}</h5>
//         <p>Out of Stock</p>
//         </div>

// }
// export default function ProductCard({productName, price, inStock}: ProductCardProps){

//     if(inStock){
//         return (
//             <div style={{border: "2px solid green", margin: "10px"}}>
//             <h3>{productName}</h3>
//             <h5>Price: {price}</h5>
//             <p>Available</p>
//         </div>
//         )
//     }
//     return (        
//         <div style={{border: "2px solid green", margin: "10px"}}>
//             <h3>{productName}</h3>
//             <h5>Price: {price}</h5>
//             <p>Out of Stock</p>
//         </div>
        
//     )

// }