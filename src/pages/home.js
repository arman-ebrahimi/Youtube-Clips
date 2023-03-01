import {Outlet, useNavigate} from "react-router-dom";

import {Sidebar} from "../components";
import {useEffect} from "react";

export const Home = () => {
    const navigate = useNavigate();
    useEffect(() => {
        navigate("/new")
        // eslint-disable-next-line
    }, [])
    return(
        <div className="home-page">
            <Sidebar />
            <Outlet />
        </div>
    )
}