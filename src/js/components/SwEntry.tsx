import { isKnownData } from "../utils/knownData";
import { getWindowHost, removeWhiteSpaces, showUnits} from "../utils/utils";

const getImg = (name: string, dataType: string) => {
    if (isKnownData(name)) {
        return `${getWindowHost()}/img/${dataType}/${removeWhiteSpaces(name)}.png`;
    }
    else return `${getWindowHost()}/img/not-found.png`;
};

export const SwEntriesCharacters = ({ entry }) => {
    return (
        <div className="entry">
            <h5 className="entry-header">{entry.name}</h5>
            <p className="entry-info"><span className="entry-label">birth year:</span> {entry.birth_year}</p>                
            <p className="entry-info"><span className="entry-label">gender:</span> {entry.gender}</p>
            <p className="entry-info"><span className="entry-label">height:</span> {entry.height} {showUnits(entry.height, 'cm')}</p>
            <p className="entry-info"><span className="entry-label">mass:</span> {entry.mass} {showUnits(entry.mass, 'kg')}</p>
            <p className="entry-info"><span className="entry-label">eye color:</span> {entry.eye_color}</p>
            <p className="entry-info"><span className="entry-label">hair color:</span> {entry.hair_color}</p>
            <p className="entry-info"><span className="entry-label">skin color:</span> {entry.skin_color}</p>
            <img src={getImg(entry.name, 'characters')} className="entry-img" alt={entry.name} />
        </div>      
    )
};

export const SwEntriesMovies = ({ entry }) => {
    return (
        <div className="entry">
            <h5 className="entry-header">{entry.title}</h5>
            <p className="entry-info"><span className="entry-label">director:</span> {entry.director}</p>
            <p className="entry-info"><span className="entry-label">producer:</span> {entry.producer}</p>
            <p className="entry-info"><span className="entry-label">release date:</span> {entry.release_date}</p>
            <p className="entry-long-text">{entry.opening_crawl}</p>
            <img src={getImg(entry.title, 'movies')} className="entry-img" alt={entry.name} />
        </div>
    )
};

export const SwEntriesStarships = ({ entry }) => {
    return (
        <div className="entry">
            <h5 className="entry-header">{entry.name}</h5>
            <p className="entry-info"><span className="entry-label">megalight per hour:</span> {entry.MGLT}</p>                
            <p className="entry-info"><span className="entry-label">cargo capacity:</span> {entry.cargo_capacity}</p>
            <p className="entry-info"><span className="entry-label">cost:</span> {entry.cost_in_credits} {showUnits(entry.cost_in_credits, 'credits')}</p>
            <p className="entry-info"><span className="entry-label">hyperdrive rating:</span> {entry.hyperdrive_rating}</p>
            <p className="entry-info"><span className="entry-label">length:</span> {entry.length}</p>
            <p className="entry-info"><span className="entry-label">manufacturer:</span> {entry.manufacturer}</p>
            <p className="entry-info"><span className="entry-label">max atmosphering speed:</span> {entry.max_atmosphering_speed}</p>
            <p className="entry-info"><span className="entry-label">passengers:</span> {entry.passengers}</p>
            <p className="entry-info"><span className="entry-label">starship class:</span> {entry.starship_class}</p>
            <img src={getImg(entry.name, 'starships')} className="entry-img" alt={entry.name} />
        </div>      
    )
};

export const SwEntriesPlanets = ({ entry }) => {
    return (
        <div className="entry">
            <h5 className="entry-header">{entry.name}</h5>
            <p className="entry-info"><span className="entry-label">climate:</span> {entry.climate}</p>                
            <p className="entry-info"><span className="entry-label">diameter:</span> {entry.diameter} {showUnits(entry.orbital_period, 'km')}</p>
            <p className="entry-info"><span className="entry-label">gravity:</span> {entry.gravity}</p>
            <p className="entry-info"><span className="entry-label">orbital period:</span> {entry.orbital_period} {showUnits(entry.orbital_period, 'years')}</p>
            <p className="entry-info"><span className="entry-label">population:</span> {entry.population}</p>
            <p className="entry-info"><span className="entry-label">rotation period:</span> {entry.rotation_period} {showUnits(entry.rotation_period, 'years')}</p>
            <p className="entry-info"><span className="entry-label">surface water:</span> {entry.surface_water}</p>
            <p className="entry-info"><span className="entry-label">terrain:</span> {entry.terrain}</p>
            <img src={getImg(entry.name, 'planets')} className="entry-img" alt={entry.name} />
        </div>      
    )
};

export const SwEntriesVehicles = ({ entry }) => {
    return (
        <div className="entry">
            <h5 className="entry-header">{entry.name}</h5>
            <p className="entry-info"><span className="entry-label">cargo capacity:</span> {entry.cargo_capacity}</p>                
            <p className="entry-info"><span className="entry-label">consumables:</span> {entry.consumables}</p>
            <p className="entry-info"><span className="entry-label">cost:</span> {entry.cost_in_credits} {showUnits(entry.cost_in_credits, 'credits')}</p>
            <p className="entry-info"><span className="entry-label">crew:</span> {entry.crew}</p>
            <p className="entry-info"><span className="entry-label">length:</span> {entry.length} {showUnits(entry.length, 'm')}</p>
            <p className="entry-info"><span className="entry-label">manufacturer:</span> {entry.manufacturer}</p>
            <p className="entry-info"><span className="entry-label">max atmosphering speed:</span> {entry.max_atmosphering_speed}</p>
            <p className="entry-info"><span className="entry-label">passengers:</span> {entry.passengers}</p>
            <p className="entry-info"><span className="entry-label">vehicle class:</span> {entry.vehicle_class}</p>
            <img src={getImg(entry.name, 'vehicles')} className="entry-img" alt={entry.name} />
        </div>      
    )
};

export const SwEntriesSpecies = ({ entry }) => {
    return (
        <div className="entry">
            <h5 className="entry-header">{entry.name}</h5>
            <p className="entry-info"><span className="entry-label">average height:</span> {entry.average_height} {showUnits(entry.average_height, 'cm')}</p>                
            <p className="entry-info"><span className="entry-label">average lifespan:</span> {entry.average_lifespan} {showUnits(entry.average_lifespan, 'years')}</p>
            <p className="entry-info"><span className="entry-label">classification:</span> {entry.classification}</p>
            <p className="entry-info"><span className="entry-label">designation:</span> {entry.designation}</p>
            <p className="entry-info"><span className="entry-label">eye colors:</span> {entry.eye_colors}</p>
            <p className="entry-info"><span className="entry-label">hair colors:</span> {entry.hair_colors}</p>
            <p className="entry-info"><span className="entry-label">skin colors:</span> {entry.skin_colors}</p>
            <p className="entry-info"><span className="entry-label">language:</span> {entry.language}</p>
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

interface swProps {
    type: string;
    data: object;
}

export default function SwEntry(props: swProps) {
    const SWEntryTemplate = SwEntriesTemplates[props.type];

    return (
        <div>
            <SWEntryTemplate entry={props.data}/>
        </div>    
    );
}  