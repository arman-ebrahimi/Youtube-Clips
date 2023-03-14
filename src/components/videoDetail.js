import {useLocation} from "react-router-dom";
import ReactPlayer from "react-player/youtube";
import {useEffect, useState} from "react";
import {fetchFromApi} from "../api/fetchFromApi";
import {Link} from "react-router-dom";

export const VideoDetail = () => {
    const videoDetail = useLocation().state;
    const {id, snippet: {title, description, channelId, channelTitle}} = videoDetail;
    const [partOfDescription, setPartOfDescription] = useState(description.substr(0, 200))
    const [videos, setVideos] = useState([]);
    function updateList(id) {
        window.scrollTo(0, 0);
        document.getElementById("related-box").scrollTo(0, 0);
        fetchFromApi(`search?part=snippet&relatedToVideoId=${id}&type=video`)
            .then((data) => setVideos(data.items.map((item) => ({
                ...item, id: item.id.videoId
            }))))
    }
    useEffect(() => {
        setTimeout(function (){
            window.scrollTo(0, 0)
        }, 2)
        updateList(id);
        // eslint-disable-next-line
    }, [])

    return(
        <div className="video-detail">
            <div className="single-video-box text-white">
                <ReactPlayer width="50vw" url={`https://www.youtube.com/watch?v=${id}`} controls />
                <p className="mt-5">{title}</p>
                <div className="description">{partOfDescription}<span className="three-points" onClick={description === partOfDescription ? () => setPartOfDescription(description.substr(0, 200)) : () => setPartOfDescription(description)}>...<span className="title-hover">{partOfDescription === description ? "Show Less" : "Show More"}</span></span></div>
                <div>Visit Channel <span className="fa fa-angle-double-right my-4"></span><span className="fa fa-angle-double-right"></span>
                    {" "}<a href={`https://www.youtube.com/channel/${channelId}`}>{channelTitle}</a>
                </div>
            </div>
            <div id="related-box" className="related-videos-box">
                <div style={{color: "red", fontSize: "1.2em", textAlign: "center", marginBottom: "8px"}}>- Related videos -</div>
                {videos && videos.map((item, index) => {
                    return(
                        <div key={index} className="mb-3">
                            <Link to="/videoDetail" state={item} onClick={() => updateList(item?.id)}>
                                <img src={item?.snippet?.thumbnails?.medium?.url} alt="related-img" />
                            </Link>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}