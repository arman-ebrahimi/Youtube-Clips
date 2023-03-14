import {useLocation} from "react-router-dom";
import {allVideos} from "../data/data";
import {useNavigate} from "react-router-dom";
import {fetchFromApi} from "../api/fetchFromApi";
import {useState} from "react";

export const ArchivedVideos = () => {
    let typeOfVideos = useLocation().state;
    const videos = allVideos[typeOfVideos];
    const navigate = useNavigate();
    const [showSpinner, setShowSpinner] = useState("");
    const handleClick = (item) => {
        setShowSpinner(item);
        fetchFromApi(`videos?part=snippet&id=${item}`).then((data) => {
            navigate("/videoDetail", {state: data.items[0]});
        })
    }
    return(
        <div className="d-flex flex-column archive-box">
            <h3 className="ms-3"><span className="category-name">{typeOfVideos}</span> videos</h3>
            <div className="archived-videos">
                {videos.length ? videos.map((item, index) => (
                    <div className="video-img" key={index} onClick={() => handleClick(item)}>
                        <img src={`https://img.youtube.com/vi/${item}/0.jpg`} alt="video-img" />
                        {showSpinner === item ? <span className="spinner-border load-icon"></span> :
                            <span className="fa fa-play play-icon"></span>}
                    </div>
                )) : {}}
            </div>
        </div>
    )
}