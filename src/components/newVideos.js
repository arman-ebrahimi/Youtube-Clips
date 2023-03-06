import {fetchFromApi} from "../api/fetchFromApi";
import {Videos} from "./";

import {useEffect, useState} from "react";

export const NewVideos = () => {
    const [videos, setVideos] = useState(null);
    useEffect(() => {
        fetchFromApi("search?part=snippet&q=new").then((data) => setVideos(data.items.map((item) => ({
            ...item, id: item.id.videoId
        }))))
    },[])
    return(
        <div className="d-flex flex-column">
            <h3 className="ms-3 text-white"><span style={{color: "red"}}>New</span> videos</h3>
            <div className="new-videos">
                <Videos videos={videos} />
            </div>
        </div>
    )
}
