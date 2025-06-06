import { BrowserRouter, Routes, Route, Link, useNavigate, Router } from "react-router-dom";
import { Timeline } from "./timeline";
import { ToogleMessage } from "./toggle";
import { NotFound } from "./NotFound";

export function AppRoute(){
    return(
        // Usually this is written in App.tsx or app component
        <BrowserRouter>
            <Link to="/" >Home</Link>
            <Link to="/toggle" >Magic Route</Link>
            <Link to="demo" >Demo page</Link>
            <br/>
            <Routes>
                <Route index element={<Timeline/>} />
                <Route path="toggle" element={<ToogleMessage/>}/>
                <Route path="demo" element={<Demo/>}/>
                <Route path="*" element={<NotFound/>}/>
            </Routes>
        </BrowserRouter>
    )
}

function Demo(){
    const navigate = useNavigate();

    return (
        <div>
            <button onClick={()=>navigate("/")}>Go back home</button>
        </div>
    )
}