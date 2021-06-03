import * as React from "react";
import useFetch from "./useFetch";
import { isKnownCharacter } from "../utils/knownData";
import { getWindowHost, removeWhiteSpaces } from "../utils/urlUtils";

const { useState } = React;
const maxPagesNo = 9;

const getMovieImg = (name) => {
    if (isKnownCharacter(name)) {
        return `${getWindowHost()}/img/${removeWhiteSpaces(name)}.png`;
    }
    else return `${getWindowHost()}/img/not-found.png`;
};

const showFetchMoreBtn = (pageNo) => {
    return pageNo <= maxPagesNo;
};

export default function Movies() {
    const [pageNo, setPageNo] = useState(1);

    let [movies, setMovies] = useState([]);
    let loading = true, 
        error;

    [ movies, loading, error ] = useFetch('films', pageNo, movies);
    
    const getMovies = () => {
        setMovies(movies);
        setPageNo(pageNo + 1);
    };

    return (
        <div className="entries-wrapper">
            <div className="entries">
                {
                    movies?.map((movie, idx) => (
                        <div key={idx} className="entry">
                            <h5 className="entry-header">{movie.title}</h5>
                            <p className="entry-info">director: {movie.director}</p>
                            <p className="entry-info">producer: {movie.producer}</p>
                            <p className="entry-info">release date: {movie.release_date}</p>
                            <p className="entry-info">opening crawl: {movie.opening_crawl}</p>
                            <img src={getMovieImg(movie.name)} className="entry-img" alt={movie.name} />
                        </div>
                    ))
                }
            </div>
            <div className="extras">
                { error ? error : '' }
                { loading ? <img src={`${getWindowHost()}/img/loader.gif`} className="loader" alt="fetching content" /> : '' }
            </div>
            {showFetchMoreBtn(pageNo) ? 
                <p>
                    <button onClick={() => {
                        getMovies()
                    }} className="btn">fetch more data</button>
                </p>
                : ''
            }
        </div>
    )
}  