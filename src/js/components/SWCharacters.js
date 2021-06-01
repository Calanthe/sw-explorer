import * as React from "react";
import useFetch from "./useFetch";

const { useEffect, useState } = React;

const knownCharacters = ['Luke Skywalker', 'C-3PO', 'R2-D2', 'Darth Vader', 'Leia Organa', 'Obi-Wan Kenobi', 'Anakin Skywalker', 'Chewbacca', 'Han Solo', 'Greedo', 'Jabba Desilijic Tiure', 'Yoda', 'Palpatine',
                        'Boba Fett', 'Jango Fett', 'Lando Calrissian', 'Ackbar', 'Qui-Gon Jinn', 'Padmé Amidala', 'Jar Jar Binks', 'Darth Maul', 'Mace Windu', 'Dooku', 'Biggs Darklighter', 'Watto'];

const removeWhiteSpaces = (string) => {
    return string.replace(/\s/g, '');
};

const getWindowHost = () => {
    return window.location.protocol + "//" + window.location.host;
};

const isKnownCharacter = (name) => {
    return knownCharacters.find((element) => {
        return element === name;
    });
};

const getCharacterImg = (name) => {
    if (isKnownCharacter(name)) {
        return `${getWindowHost()}/img/${removeWhiteSpaces(name)}.png`;
    }
    else return `${getWindowHost()}/img/not-found.png`;
};

const showFetchMoreBtn = (pageNo) => {
    return pageNo <= 9;
};

export default function SWCharacters() {
    //const [characters, setCharacters] = useState([]);
    const [pageNo, setPageNo] = useState(1);

    //let characters = [];

    let [ characters, loading, error ] = useFetch(pageNo);
    
    const getCharacters = () => {
        setPageNo(pageNo + 1);
    };

    // if (newCharacters) {
    //     const newCharactersData = [
    //         ...characters,
    //         ...newCharacters
    //     ];
    //     setCharacters(newCharactersData);
    //     setPageNo(pageNo + 1);
    // }

    useEffect(() => {
        //getCharacters()
        // eslint-disable-next-line
    }, []);

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