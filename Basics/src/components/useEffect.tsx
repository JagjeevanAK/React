import { useEffect, useState } from "react"

type TodoData = {
    userId: number,
    id: number,
    title: string,
    completed: boolean
}

export function Useeff(){
    const [currtab, setCurrtab] = useState(1);
    const [tabdata, setTabdata] = useState<TodoData | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(()=>{
        setLoading(true)
        fetch(`https://jsonplaceholder.typicode.com/todos/${currtab}`)
            .then(async (res: Response)=>{
                const json : TodoData = await res.json();
                setTabdata(json)
                setLoading(false)
            })
    },[currtab])

    return (
        <>
            <button onClick={()=> setCurrtab(1)} style={{color: currtab == 1 ? "red" : "black"  }}>TODO 1</button>
            <button onClick={() => setCurrtab(2)} style={{ color: currtab == 2 ? "red" : "black" }}>TODO 2</button>
            <button onClick={() => setCurrtab(3)} style={{ color: currtab == 3 ? "red" : "black" }}>TODO 3</button>
            <button onClick={() => setCurrtab(4)} style={{ color: currtab == 4 ? "red" : "black" }}>TODO 4</button>
            <button onClick={() => setCurrtab(5)} style={{ color: currtab == 5 ? "red" : "black" }}>TODO 5</button>
            <div>{loading ?  "Loading..." : tabdata?.title}</div>
        </>
    )
}
