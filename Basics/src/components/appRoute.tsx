import { BrowserRouter, Routes, Route, Link, useNavigate, Router } from "react-router-dom";
import { Timeline } from "./timeline";
import { ToogleMessage } from "./toggle";
import { NotFound } from "./NotFound";
import { Layout } from "./layout";

export function AppRoute(){
    return(
        // Usually this is written in App.tsx or app component
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout/>}>
                    <Route index element={<Timeline/>} />
                    <Route path="toggle" element={<ToogleMessage/>}/>
                    <Route path="demo" element={<Demo/>}/>
                    <Route path="*" element={<NotFound/>}/>
                </Route>
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