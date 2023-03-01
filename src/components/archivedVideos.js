import {useLocation} from "react-router-dom";
import {allVideos} from "../data/data";

export const ArchivedVideos = () => {
    let typeOfVideos = useLocation().state;
    const videos = allVideos[typeOfVideos];
    return(
        <div className="d-flex flex-column archive-box">
            <h3 className="ms-3"><span className="category-name">{typeOfVideos}</span> videos</h3>
            <div className="archived-videos">
                {videos.length ? videos.map((item, index) => (
                    <div key={index}>
                        <iframe
                            src={`https://www.youtube.com/embed/${item}`}
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                            title="Embedded youtube"
                        />
                    </div>
                )) : {}}
            </div>
        </div>
    )
}