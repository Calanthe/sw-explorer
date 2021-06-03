import { useState } from "react";
import useFetch from "./useFetch";
import { isKnownCharacter } from "../utils/knownData";
import { getWindowHost, removeWhiteSpaces } from "../utils/urlUtils";

const maxPagesNo = 9;

const getCharacterImg = (name) => {
    if (isKnownCharacter(name)) {
        return `${getWindowHost()}/img/${removeWhiteSpaces(name)}.png`;
    }
    else return `${getWindowHost()}/img/not-found.png`;
};

const showFetchMoreBtn = (pageNo) => {
    return pageNo <= maxPagesNo;
};

export default function Characters() {
    const [pageNo, setPageNo] = useState(1);

    let [characters, setCharacters] = useState([]);
    let loading = true, 
        error;

    [ characters, loading, error ] = useFetch('people', pageNo, characters);
    
    const getCharacters = () => {
        setCharacters(characters);
        setPageNo(pageNo + 1);
        // if (characters) {
        //     const newCharactersData = [
        //         ...characters,
        //         ...fetchedCharacters
        //     ];
        //     setCharacters(newCharactersData);
        // }
    };

    return (
        <div className="characters">
            <div className="entries">
                {
                    characters?.map((character, idx) => (
                        <div key={idx} className="entry">
                            <h5 className="entry-header">{character.name}</h5>
                            <p className="entry-info">gender: {character.gender}</p>
                            <p className="entry-info">born: {character.birth_year}</p>
                            <p className="entry-info">eyes: {character.eye_color}</p>
                            <p className="entry-info">hair color: {character.hair_color}</p>
                            <p className="entry-info">height: {character.height} cm</p>
                            <p className="entry-info">mass: {character.mass} kg</p>
                            <p className="entry-info">skin color: {character.skin_color}</p>
                            <img src={getCharacterImg(character.name)} className="entry-img" alt={character.name} />
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
                        getCharacters()
                    }} className="btn">fetch more data</button>
                </p>
                : ''
            }
        </div>
    )
}  