import {useSelector} from "react-redux";
import {Videos} from "./videos";

export const SearchResult = () => {
    const videos = useSelector(state => state.search);
    return(
        <div className="new-videos">
            <Videos videos={videos} />
        </div>
    )
}