import { useState } from "react"

export default function Counter(){

    const [count, setCount] = useState(0)

    const countHandler = () =>{
        setCount(count + 1);
    }

    return (
        <div>
            <p>----------------</p>
            <h2>Counter</h2>
            <p>Your count number is: {count} </p>
            <button onClick={countHandler}>Increase</button>
        </div>
    )
}