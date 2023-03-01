import {useLocation} from "react-router-dom";
import ReactPlayer from "react-player/youtube";

export const VideoDetail = () => {
    const videoDetail = useLocation().state;
    const {id: {videoId}, snippet: {title, description, channelId, channelTitle}} = videoDetail;
    return(
        <div className="video-detail">
            <div className="single-video-box text-white">
                <ReactPlayer url={`https://www.youtube.com/watch?v=${videoId}`} controls />
                <p className="mt-5">{title}</p>
                <p>{description}</p>
                <div>Channel: <a href={`https://www.youtube.com/channel/${channelId}`}>{channelTitle}</a></div>
            </div>
            <div className="related-videos-box">
            </div>
        </div>
    )
}