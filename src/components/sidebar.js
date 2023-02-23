import styled from "styled-components";
import {Link} from "react-router-dom";

const StyledLink = styled(Link)`
    text-decoration: none;
    color: white;
    &:hover{
      color: red
    }
`

export const Sidebar = () => {
    return(
        <div className="sidebar">
            <div><span className="fa fa-music"></span><span><StyledLink to="/videos">Video Music</StyledLink></span></div>
            <div><span className="fa fa-font"></span><StyledLink to="/videos">Learning English</StyledLink></div>
            <div><span className="fa fa-headphones"></span><StyledLink to="/videos">English Podcasts</StyledLink></div>
            <div><span className="fa fa-gamepad"></span><StyledLink to="/videos">Game</StyledLink></div>
            <div><span className="fa fa-soccer-ball-o"></span><StyledLink to="/videos">Sports</StyledLink></div>
            <div><span className="fa fa-code"></span><StyledLink to="/videos">ReactJs</StyledLink></div>
            <div><span className="fa fa-plane"></span><StyledLink to="/videos">Traveling</StyledLink></div>
            <div><span className="fa fa-car"></span><StyledLink to="/videos">Cars</StyledLink></div>
            <div><span className="fa fa-cutlery"></span><StyledLink to="/videos">Cooking</StyledLink></div>
            <div><span className="fa fa-paw"></span><StyledLink to="/videos">Animals</StyledLink></div>
        </div>
    )
}