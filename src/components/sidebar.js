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
            <div><span className="fa fa-music"></span><StyledLink to="/videos" state="musics">Video Music</StyledLink></div>
            <div><span className="fa fa-font"></span><StyledLink to="/videos" state="lEnglish">Learning English</StyledLink></div>
            <div><span className="fa fa-headphones"></span><StyledLink to="/videos" state="ePodcasts">English Podcasts</StyledLink></div>
            <div><span className="fa fa-gamepad"></span><StyledLink to="/videos" state="game">Game</StyledLink></div>
            <div><span className="fa fa-soccer-ball-o"></span><StyledLink to="/videos" state="sports">Sports</StyledLink></div>
            <div><span className="fa fa-code"></span><StyledLink to="/videos" state="reactjs">ReactJs</StyledLink></div>
            <div><span className="fa fa-plane"></span><StyledLink to="/videos" state="traveling">Traveling</StyledLink></div>
            <div><span className="fa fa-car"></span><StyledLink to="/videos" state="cars">Cars</StyledLink></div>
            <div><span className="fa fa-cutlery"></span><StyledLink to="/videos" state="cooking">Cooking</StyledLink></div>
            <div><span className="fa fa-paw"></span><StyledLink to="/videos" state="animals">Animals</StyledLink></div>
            <div><span className="fa fa-smile-o"></span><StyledLink to="/videos" state="fun">Fun</StyledLink></div>
        </div>
    )
}