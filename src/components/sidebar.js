import styled from "styled-components";
import {Link} from "react-router-dom";
import {useState} from "react";

export const Sidebar = () => {

    const [selectedCategory, setSelectedCategory] = useState("New Videos")
    const StyledLink = styled(Link)`
        text-decoration: none;
        color: white;
        padding: 5px 10px;
        border-radius: 2px;  
        background-color: ${(props) => props.value === selectedCategory && 'red'};  
        &:hover{
          color: ${(props) => props.value === selectedCategory ? "white" : "red"}
        }
        @media screen and (max-width: 778px){
          padding: 5px 3px;
        }
`
    const Div = styled.div`
        @media screen and (max-width: 778px){
          display: none;
        }
    `
    const handleClick = (e) => {
        setSelectedCategory(e.target.textContent)
    }
    return(
        <div className="sidebar">
            <div><span className="fa fa-video-camera"></span><StyledLink value="New Videos" to="/new" onClick={handleClick}>New Videos</StyledLink></div>
            <Div style={{marginLeft: -15, marginTop: -10, fontSize: "1.1em", textAlign: "center"}}><div style={{color: "red"}}>- Selected Videos -</div><hr style={{color: "white", margin: "10px 10px 0 10px"}} /></Div>
            <div><span className="fa fa-music"></span><StyledLink value="Video Music" to="/videos" onClick={handleClick} state="musics">Video Music</StyledLink></div>
            <div><span className="fa fa-venus-double"></span><StyledLink value="Dance" to="/videos" onClick={handleClick} state="dance">Dance</StyledLink></div>
            <div><span className="fa fa-font"></span><StyledLink value="Learning English" to="/videos" onClick={handleClick} state="Learning_English">Learning English</StyledLink></div>
            <div><span className="fa fa-headphones"></span><StyledLink value="English Podcasts" to="/videos" onClick={handleClick} state="English_Podcasts">English Podcasts</StyledLink></div>
            <div><span className="fa fa-gamepad"></span><StyledLink value="Game" to="/videos" onClick={handleClick} state="game">Game</StyledLink></div>
            <div><span className="fa fa-soccer-ball-o"></span><StyledLink value="Sports" to="/videos" onClick={handleClick} state="sports">Sports</StyledLink></div>
            <div><span className="fa fa-code"></span><StyledLink value="ReactJs" to="/videos" onClick={handleClick} state="reactjs">ReactJs</StyledLink></div>
            <div><span className="fa fa-plane"></span><StyledLink value="Traveling" to="/videos" onClick={handleClick} state="traveling">Traveling</StyledLink></div>
            <div><span className="fa fa-car"></span><StyledLink value="Cars" to="/videos" onClick={handleClick} state="cars">Cars</StyledLink></div>
            <div><span className="fa fa-cutlery"></span><StyledLink value="Cooking" to="/videos" onClick={handleClick} state="cooking">Cooking</StyledLink></div>
            <div><span className="fa fa-heart"></span><StyledLink value="Humanity" to="/videos" onClick={handleClick} state="humanity">Humanity</StyledLink></div>
            <div><span className="fa fa-paw"></span><StyledLink value="Animals" to="/videos" onClick={handleClick} state="animals">Animals</StyledLink></div>
            <div><span className="fa fa-smile-o"></span><StyledLink value="Fun" to="/videos" onClick={handleClick} state="fun">Fun</StyledLink></div>
        </div>
    )
}