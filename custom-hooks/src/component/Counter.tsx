import { useCounter } from "../hooks/useCounter";

export default function (){
    const { count, increaseCount } = useCounter();

    return (
        <div>
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                {count}
                <button style={{ padding: "10px 30px", margin: 20 }} onClick={increaseCount}>Increase</button>
                {/* <button style={{ padding: "10px 30px" }} onClick={decreaseCount}>Decrease</button> */}
            </div>
            
        </div>
      )
}
