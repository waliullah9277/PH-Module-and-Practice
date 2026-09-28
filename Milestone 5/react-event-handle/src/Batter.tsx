import { useState } from "react"

export default function Batter(){

    const [runs, setRuns] = useState(0);
    const oneRunsHandler = () =>{
        setRuns(runs + 1)
    }
    const twoRunsHandler = () =>{
        setRuns(runs + 2)
    }
    const fourRunsHandler = () =>{
        setRuns(runs + 4)
    }
    const sixRunsHandler = () =>{
        setRuns(runs + 6)
    }

    return (
        <div>
            <p>----------------</p>
            <h2>Virat Kholi</h2>
            <p>Score: {runs} </p>
            <button onClick={oneRunsHandler}>Add 1</button>
            <button onClick={twoRunsHandler}>Add 2</button>
            <button onClick={fourRunsHandler}>Add 4</button>
            <button onClick={sixRunsHandler}>Add 6</button>
        </div>
    )
}