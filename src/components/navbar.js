import {Search} from "./";
import {Link} from "react-router-dom";
import styled from "styled-components";

export const Navbar = () => {
    const StyledLink = styled(Link)`
        text-decoration: none;
        color: white;
        font-size: 1.2em;
        background-color: red;
        padding: 3px 8px;
        border-radius: 2px;
        &:hover{
          color: white;
        }
    `
    return(
        <div className="bg-transparent mt-2 navbar">
            <a className="logo" href="https://www.youtube.com"><span className="fa fa-youtube"></span></a>
            <div className="registry">
                <StyledLink to="/signup">Signup</StyledLink>{" "}
                <StyledLink to="/login">Login</StyledLink>
            </div>
            <Search />
        </div>
    )
}