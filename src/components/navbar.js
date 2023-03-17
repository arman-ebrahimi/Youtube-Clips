import {Search} from "./";
import {Link} from "react-router-dom";
import styled from "styled-components";
import {useState} from "react";

export const Navbar = () => {
    const [selectedButton, setSelectedButton] = useState("");
    const StyledLink = styled(Link)`
        text-decoration: none;
        color: white;
        font-size: 1.2em;
        background-color: ${(props) => props.value === selectedButton ? "red" : "#444"};
        padding: 3px 8px;
        border-radius: 2px;
        &:hover{
          color: white;
        }
    `
    const handleClick = (e) => {
        setSelectedButton(e.target.textContent)
    }
    return(
        <div className="bg-transparent mt-2 navbar">
            <a className="logo" href="https://www.youtube.com"><span className="fa fa-youtube"></span></a>
            <div className="registry">
                <StyledLink to="/signup" value="Signup" onClick={handleClick}>Signup</StyledLink>{" "}
                <StyledLink to="/login" value="Login" onClick={handleClick}>Login</StyledLink>
            </div>
            <Search />
        </div>
    )
}