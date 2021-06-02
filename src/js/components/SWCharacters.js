import * as React from "react";
import useFetch from "./useFetch";
import { isKnownCharacter } from ".././utils/knownData";
import { getWindowHost, removeWhiteSpaces } from ".././utils/urlUtils";

const { useState } = React;
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

export default function SWCharacters() {
    const [pageNo, setPageNo] = useState(1);

    let [characters, setCharacters] = useState([]);
    let loading = false, 
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
                { loading ? 'Fetching data...' : '' }
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
                { error ? error : '' }
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