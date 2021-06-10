import * as React from "react";
import { isKnownData } from "../utils/knownData";
import { getWindowHost, removeWhiteSpaces } from "../utils/urlUtils";

const getImg = (name, dataType) => {
    if (isKnownData(name)) {
        return `${getWindowHost()}/img/${dataType}/${removeWhiteSpaces(name)}.png`;
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
            <img src={getImg(entry.name, 'characters')} className="entry-img" alt={entry.name} />
        </div>      
    )
};

export const SwEntriesMovies = ({ entry }) => {
    return (
        <div className="entry">
            <h5 className="entry-header">{entry.title}</h5>
            <p className="entry-info">director: {entry.director}</p>
            <p className="entry-info">producer: {entry.producer}</p>
            <p className="entry-info">release date: {entry.release_date}</p>
            <p className="entry-long-text">{entry.opening_crawl}</p>
            <img src={getImg(entry.title, 'movies')} className="entry-img" alt={entry.name} />
        </div>
    )
};

export const SwEntriesStarships = ({ entry }) => {
    return (
        <div className="entry">
            <h5 className="entry-header">{entry.name}</h5>
            <p className="entry-info">megalight per hour: {entry.MGLT}</p>                
            <p className="entry-info">cargo capacity: {entry.cargo_capacity}</p>
            <p className="entry-info">consumables: {entry.consumables}</p>
            <p className="entry-info">cost: {entry.cost_in_credits} credits</p>
            <p className="entry-info">hyperdrive rating: {entry.hyperdrive_rating}</p>
            <p className="entry-info">length: {entry.length}</p>
            <p className="entry-info">manufacturer: {entry.manufacturer}</p>
            <p className="entry-info">max atmosphering speed: {entry.max_atmosphering_speed}</p>
            <p className="entry-info">passengers: {entry.passengers}</p>
            <p className="entry-info">starship class: {entry.starship_class}</p>
            <img src={getImg(entry.name, 'starships')} className="entry-img" alt={entry.name} />
        </div>      
    )
};

export const SwEntriesPlanets = ({ entry }) => {
    return (
        <div className="entry">
            <h5 className="entry-header">{entry.name}</h5>
            <p className="entry-info">climate: {entry.climate}</p>                
            <p className="entry-info">diameter: {entry.diameter} km</p>
            <p className="entry-info">gravity: {entry.gravity}</p>
            <p className="entry-info">orbital period: {entry.orbital_period} years</p>
            <p className="entry-info">population: {entry.population}</p>
            <p className="entry-info">rotation period: {entry.rotation_period} years</p>
            <p className="entry-info">surface water: {entry.surface_water}</p>
            <p className="entry-info">terrain: {entry.terrain}</p>
            <img src={getImg(entry.name, 'planets')} className="entry-img" alt={entry.name} />
        </div>      
    )
};

export const SwEntriesVehicles = ({ entry }) => {
    return (
        <div className="entry">
            <h5 className="entry-header">{entry.name}</h5>
            <p className="entry-info">cargo capacity: {entry.cargo_capacity}</p>                
            <p className="entry-info">consumables: {entry.consumables}</p>
            <p className="entry-info">cost: {entry.cost_in_credits} credits</p>
            <p className="entry-info">crew: {entry.crew}</p>
            <p className="entry-info">length: {entry.length} m</p>
            <p className="entry-info">manufacturer: {entry.manufacturer}</p>
            <p className="entry-info">max atmosphering speed: {entry.max_atmosphering_speed}</p>
            <p className="entry-info">passengers: {entry.passengers}</p>
            <p className="entry-info">vehicle class: {entry.vehicle_class}</p>
            <img src={getImg(entry.name, 'vehicles')} className="entry-img" alt={entry.name} />
        </div>      
    )
};

export const SwEntriesSpecies = ({ entry }) => {
    return (
        <div className="entry">
            <h5 className="entry-header">{entry.name}</h5>
            <p className="entry-info">average height: {entry.average_height} cm</p>                
            <p className="entry-info">average lifespan: {entry.average_lifespan} years</p>
            <p className="entry-info">classification: {entry.classification}</p>
            <p className="entry-info">designation: {entry.designation}</p>
            <p className="entry-info">eye colors: {entry.eye_colors}</p>
            <p className="entry-info">hair colors: {entry.hair_colors}</p>
            <p className="entry-info">skin colors: {entry.skin_colors}</p>
            <p className="entry-info">language: {entry.language}</p>
            <img src={getImg(entry.name, 'species')} className="entry-img" alt={entry.name} />
        </div>      
    )
};

const SwEntriesTemplates = {
    'characters': SwEntriesCharacters,
    'movies': SwEntriesMovies,
    'starships': SwEntriesStarships,
    'planets': SwEntriesPlanets,
    'vehicles': SwEntriesVehicles,
    'species': SwEntriesSpecies
};

export default function SwEntry(props) {
    const SWEntryTemplate = SwEntriesTemplates[props.type];

    return (
        <div>
            <SWEntryTemplate entry={props.data}/>
        </div>    
    );
}  