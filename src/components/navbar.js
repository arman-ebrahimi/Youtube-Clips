

export const Navbar = () => {
    return(
        <div className="bg-transparent mt-2 navbar">
            <a href="https://www.youtube.com"><span className="fa fa-youtube"></span></a>
            <span>
                <input type="search" className="search-input" placeholder="Search..." /><span className="fa fa-search search-icon"></span>
            </span>
        </div>
    )
}