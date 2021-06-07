import * as React from "react";
import { isKnownCharacter } from "../utils/knownData";
import { getWindowHost, removeWhiteSpaces } from "../utils/urlUtils";

const getMovieImg = (name) => {
    if (isKnownCharacter(name)) {
        return `${getWindowHost()}/img/${removeWhiteSpaces(name)}.png`;
    }
    else return `${getWindowHost()}/img/not-found.png`;
};

export const SwEntriesMovies = ({ entry }) => {
    return (
        <div className="entry">
            <h5 className="entry-header">{entry.title}</h5>
            <p className="entry-info">director: {entry.director}</p>
            <p className="entry-info">producer: {entry.producer}</p>
            <p className="entry-info">release date: {entry.release_date}</p>
            <p className="entry-info">opening crawl: {entry.opening_crawl}</p>
            <img src={getMovieImg(entry.name)} className="entry-img" alt={entry.name} />
        </div>
    )
};

const getCharacterImg = (name) => {
    if (isKnownCharacter(name)) {
        return `${getWindowHost()}/img/characters/${removeWhiteSpaces(name)}.png`;
    }
    else return `${getWindowHost()}/img/not-found.png`;
};


export const SwEntriesCharacters = ({ entry }) => {
    return (
        <div className="entry">
            <h5 className="entry-header">{entry.name}</h5>
            <p className="entry-info">birth year: {entry.birth_year}</p>                
            <p className="entry-info">gender: {entry.gender}</p>
            <p className="entry-info">height: {entry.height} cm</p>
            <p className="entry-info">mass: {entry.mass} kg</p>
            <p className="entry-info">eye color: {entry.eye_color}</p>
            <p className="entry-info">hair color: {entry.hair_color}</p>
            <p className="entry-info">skin color: {entry.skin_color}</p>
            <img src={getCharacterImg(entry.name)} className="entry-img" alt={entry.name} />
        </div>      
    )
};

const SwEntriesTemplates = {
    'people': SwEntriesCharacters,
    'films': SwEntriesMovies
};

export default function SwEntry(props) {
    const SWEntryTemplate = SwEntriesTemplates[props.type];

    return (
        <div>
            <SWEntryTemplate entry={props.data}/>
        </div>    
    );
}  