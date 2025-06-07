import { useState } from "react"

export function ToogleMessage(){
    const [visible, setVisible] = useState(false)
    return(
        <>
            <button onClick={()=>setVisible(!visible)}>
                Toogle
            </button>
            {visible && <div>
                Hi, There !!!
            </div>}
        </>
    )
}