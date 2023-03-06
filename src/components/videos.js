import {useEffect} from "react";
import {Link} from "react-router-dom";

export const Videos = ({videos}) => {
    return(
        videos && videos.map((item, index) => {
            return(
                <div className="card" key={index}>
                    <Link to="/videoDetail" state={item}>
                        <img src={item.snippet?.thumbnails?.medium?.url} className="card-img-top" alt="video" />
                    </Link>
                    <div className="card-body">
                        <div className="card-title">{item?.snippet?.title}</div>
                        <div className="card-text">Channel Address: <a href={`https://www.youtube.com/channel/${item?.snippet?.channelId}`}>{item?.snippet?.channelTitle}</a>
                            <span className="fa fa-check-circle ms-2"></span>
                        </div>
                    </div>
                </div>
            )
        })
    )
}