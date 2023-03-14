import {Search} from "./";

export const Navbar = () => {
    return(
        <div className="bg-transparent mt-2 navbar">
            <a href="https://www.youtube.com"><span className="fa fa-youtube"></span></a>
            <Search />
        </div>
    )
}