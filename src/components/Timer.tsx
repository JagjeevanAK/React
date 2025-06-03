import { useEffect, useState } from "react"

export function Timer () {
    const [seconds, setSeconds] = useState(0);

    useEffect(()=>{
        let clock = setInterval(()=>{
            setSeconds(prevSeconds => prevSeconds + 1);
        },1000);
        
        return function() {
            clearInterval(clock);
        }
    },[])

    return (
        <>
            <div>{seconds} second elapsed</div>
        </>
    )
}