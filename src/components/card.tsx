
export function Card ({children}:any){
    return (
        <div style={style}>
            {children}
        </div>
    )
}

const style ={
    display:"flex",
    alignItems:"center",
    background: "black",
    borderRadius: 10,
    color: "white",
    padding: 10,
    margin:20
}