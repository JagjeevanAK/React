import { useState } from "react"

export function useCounter(){
    const [count, setCount] = useState(0);

    const increaseCount = ()=> {
        setCount((c)=> c+1)
    }

    const decreaseCount = ()=>{
        setCount((c)=> c-1)
    }
    
    return {
        count: count,
        increaseCount: increaseCount,
        decreaseCount: decreaseCount
    }
}