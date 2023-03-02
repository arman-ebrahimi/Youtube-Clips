import {useLocation} from "react-router-dom";
import ReactPlayer from "react-player/youtube";
import {useEffect, useState} from "react";
import {fetchFromApi} from "../api/fetchFromApi";
import {Link} from "react-router-dom";

export const VideoDetail = () => {
    const videoDetail = useLocation().state;
    const {id: {videoId}, snippet: {title, description, channelId, channelTitle}} = videoDetail;
    const [videos, setVideos] = useState([]);

    useEffect(() => {
        fetchFromApi(`search?part=snippet&relatedToVideoId=${videoId}&type=video`)
            .then((data) => setVideos(data.items))
    }, [])
    return(
        <div className="video-detail">
            <div className="single-video-box text-white">
                <ReactPlayer url={`https://www.youtube.com/watch?v=${videoId}`} controls />
                <p className="mt-5">{title}</p>
                <p>{description}</p>
                <div>Visit Channel <span className="fa fa-angle-double-right"></span><span className="fa fa-angle-double-right"></span>
                    {" "}<a href={`https://www.youtube.com/channel/${channelId}`}>{channelTitle}</a>
                </div>
            </div>
            <div className="related-videos-box">
                {videos.map((item, index) => {
                    return(
                        <Link key={index} to="/videoDetail" state={item}>
                            <img src={item?.snippet?.thumbnails?.medium?.url} />
                        </Link>
                    )
                })}
            </div>
        </div>
    )
}