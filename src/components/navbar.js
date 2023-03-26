import {Search} from "./";
import {Link} from "react-router-dom";
import styled from "styled-components";
import {useState} from "react";

export const Navbar = () => {
    const [selectedButton, setSelectedButton] = useState("Home");
    const [show, setShow] = useState(false);
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
        @media screen and (max-width: 620px){
          font-size: 1.1em;
        }
        @media screen and (max-width: 540px){
          font-size: 1em;
        }
    `
    const handleClick = (e) => {
        setSelectedButton(e.target.textContent)
    }
    const showOther = () => {
        setShow(!show)
    }
    let button = document.getElementById("button");
    document.addEventListener("click", (event) => {
        if(!button.contains(event.target)){
            setShow(false)
        }
    })
    return(
        <div className="mt-2 navbar">
            <a className="logo" href="https://www.youtube.com"><span className="fa fa-youtube"></span></a>
            <div style={{position: "relative"}}>
                <button id="button" className={`${show ? "other-button-on" : "other-button-off"}`} onClick={showOther}>Others <span className="fa fa-angle-down"></span></button>
                <div style={{opacity: show ? 0.9 : 0, visibility: show ? "visible" : "hidden"}} className="otherItems">
                    <a target="_blank" rel="noreferrer" href="https://friendly-cascaron-e0e8b3.netlify.app/">- Card Memory Game</a>
                    <a target="_blank" rel="noreferrer" href="https://profound-meerkat-a72c3c.netlify.app/">- Check Weather</a>
                </div>
            </div>
            <div className="buttons-menu">
                <StyledLink to="/" value="Home" onClick={handleClick}>Home</StyledLink>
                <StyledLink to="/signup" value="Signup" onClick={handleClick}>Signup</StyledLink>{" "}
                <StyledLink to="/login" value="Login" onClick={handleClick}>Login</StyledLink>
            </div>
            <Search />
        </div>
    )
}