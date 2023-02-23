import {Outlet} from "react-router-dom";
import {Sidebar} from "../components";

export const Home = () => {
    return(
        <div className="home-page">
            <Sidebar />
            <Outlet />
        </div>
    )
}