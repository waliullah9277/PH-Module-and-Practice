'use client'
import React, { useState } from 'react';

const Counter = () => {
    console.log("Counter page rendering");

    const [count, setCount] = useState(0);

    const handleClickButton = () =>{
        console.log("button click")
        setCount(count + 1)
    }
    
    return (
        <div>
            <h2>Counter: {count}</h2>
            <button onClick={handleClickButton} className='bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg transition'>Increse</button>
        </div>
    );
};

export default Counter;