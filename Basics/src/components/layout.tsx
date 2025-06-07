import { Outlet, Link } from "react-router-dom";

export function Layout(){
    return (
        <div>
            <Link to="/" >Home</Link>
            <Link to="/toggle" >Magic Route</Link>
            <Link to="demo" >Demo page</Link>
            <br/>
            <Outlet/>
            footer
        </div>
    )
}