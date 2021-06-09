export const queryTypes = {
    'characters': 'people',
    'movies': 'films',
    'starships': 'starships'
};

const knownCharacters = ['Luke Skywalker', 'C-3PO', 'R2-D2', 'Darth Vader', 'Leia Organa', 'Obi-Wan Kenobi', 'Anakin Skywalker', 'Chewbacca', 'Han Solo', 'Greedo', 'Jabba Desilijic Tiure', 'Yoda', 'Palpatine',
'Boba Fett', 'Jango Fett', 'Lando Calrissian', 'Ackbar', 'Qui-Gon Jinn', 'Padmé Amidala', 'Jar Jar Binks', 'Darth Maul', 'Mace Windu', 'Dooku', 'Biggs Darklighter', 'Watto'];

const knownMovies = ['A New Hope', 'The Empire Strikes Back', 'Return of the Jedi', 'The Phantom Menace', 'Attack of the Clones', 'Revenge of the Sith'];

const allKnownData = knownCharacters.concat(knownMovies);

export function isKnownData (name) {
    return allKnownData.find((element) => {
        return element === name;
    });
};

export const maxPages = {
    'characters': 9,
    'movies': 0,
    'starships': 4
};