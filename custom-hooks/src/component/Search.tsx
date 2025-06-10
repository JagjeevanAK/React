import { useEffect, useRef, useState } from "react"
import { useDebounce } from "../hooks/useDebounce"

export function Search (){
    const [val, setVal] = useState<string>(""); 
    const debounceval = useDebounce(val, 200)
    const searchref = useRef<HTMLInputElement | null>(null);

    useEffect(()=>{
        if(debounceval.trim()){
            // console.log("Searching: "+debounceval);
            fetch("api.amazon.com/search/")
        }
    }, [debounceval])

    return (
        <div style={{
            display:"flex",
            justifyContent:"center",
            alignItems:"center",
            height:"100vh"
        }}>
            <input type="text" ref={searchref} onChange={()=>setVal(searchref.current?.value || "")} />
        </div>
    )
}