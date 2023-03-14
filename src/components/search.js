import {useEffect, useState} from "react";
import {fetchFromApi} from "../api/fetchFromApi";
import {useDispatch} from "react-redux";
import {useNavigate} from "react-router-dom";


export const Search = () => {
    const [string, setString] = useState("");
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const handleChange = (e) => {
        setString(e.target.value)
    }
    useEffect(() => {
        fetchFromApi(`search?part=snippet,id&q=${string}`).then((data) => {
            dispatch({type: "search/exploredVideos", payload: data.items.map((item) => ({
                    ...item, id: item.id.videoId
                }))})
        }).then(() => navigate("/search"))
        // eslint-disable-next-line
    }, [string])
    return(
        <span>
            <input value={string} type="search" onChange={handleChange} className="search-input" placeholder="Search..." /><span className="fa fa-search search-icon"></span>
        </span>
    )
}