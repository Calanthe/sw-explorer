import * as React from "react";
import { isKnownCharacter } from "../utils/knownData";
import { getWindowHost, removeWhiteSpaces } from "../utils/urlUtils";

const getMovieImg = (name) => {
    if (isKnownCharacter(name)) {
        return `${getWindowHost()}/img/${removeWhiteSpaces(name)}.png`;
    }
    else return `${getWindowHost()}/img/not-found.png`;
};

export default function EntryTemplates(props) {
    console.log(props)
    return (
        <div className="entries">
            {
                props.entries?.map((entry, idx) => (
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
    )
}  