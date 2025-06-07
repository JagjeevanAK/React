// this function is for learning useRef hook of react

import { useRef } from "react"

export function Input(){
    const inputref = useRef<HTMLInputElement>(null)

    const inputhandler = () =>{
        if (inputref.current) {
            console.log(inputref.current.value)
        }
    }
    return (
        <div>
            <input type="text" ref={inputref} name="" id="" />
            <br/>
            <button onClick={inputhandler}>Submit</button>
        </div>
    )
}