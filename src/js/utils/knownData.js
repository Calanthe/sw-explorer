export const queryTypes = {
    'characters': 'people',
    'movies': 'films'
};

const knownCharacters = ['Luke Skywalker', 'C-3PO', 'R2-D2', 'Darth Vader', 'Leia Organa', 'Obi-Wan Kenobi', 'Anakin Skywalker', 'Chewbacca', 'Han Solo', 'Greedo', 'Jabba Desilijic Tiure', 'Yoda', 'Palpatine',
'Boba Fett', 'Jango Fett', 'Lando Calrissian', 'Ackbar', 'Qui-Gon Jinn', 'Padmé Amidala', 'Jar Jar Binks', 'Darth Maul', 'Mace Windu', 'Dooku', 'Biggs Darklighter', 'Watto'];

export function isKnownCharacter (name) {
    return knownCharacters.find((element) => {
        return element === name;
    });
};

const knownMovies = ['A New Hope', 'C-3PO', 'R2-D2', 'Darth Vader', 'Leia Organa', 'Obi-Wan Kenobi'];

export function isKnownMovie (name) {
    return knownMovies.find((element) => {
        return element === name;
    });
};

export const maxPages = {
    'characters': 9,
    'movies': 0
};