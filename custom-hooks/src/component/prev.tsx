import { useState } from "react"
import { usePrev } from "../hooks/usePrev";

export function Prev(){
    const [state, setState] = useState(0);
    const prev = usePrev(state);
    return (
        <div style={{
            display:"flex",
            justifyContent:"center",
            flexDirection:"column",
            alignItems:"center",
            height:"100vh"
        }}>
            <p>current : {state}</p>
            <button onClick={() => setState((v) => v + 1)}>Click Me</button>
            <p> previous{prev}</p>
        </div>
    )
}