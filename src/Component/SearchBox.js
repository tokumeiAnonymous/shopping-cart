import './SearchBox.css';
import searchSrc from '../Assets/Icons/magnifying-glass-solid.svg';

export default function SearchBox() {
    return (
        <div className="wrap">
            <div className="search">
                <input type="text" className="searchTerm" placeholder="What are you looking for?" />
                    <button type="submit" className="searchButton">
                        <img src={searchSrc} alt="Search" />
                    </button>
            </div>
        </div>
    )
}