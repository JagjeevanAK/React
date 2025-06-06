import { useNavigate } from "react-router-dom"

export function NotFound(){
    const navigate = useNavigate();
    return (
        <div>
            Sorry page not found.<br/>
            <button onClick={()=> navigate("/")}>Go to Home</button>
        </div>
    )
}