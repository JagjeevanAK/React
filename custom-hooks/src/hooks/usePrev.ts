import { useEffect, useRef } from "react"

export const usePrev = (value: number) =>{
    const ref = useRef<number | any>(null);

    useEffect(()=>{
        ref.current = value;
    },[value])

    return ref.current
}

// useEffect runs when value is returned. 