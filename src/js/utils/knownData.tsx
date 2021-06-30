export const queryTypes = {
    'characters': 'people',
    'movies': 'films',
    'starships': 'starships',
    'planets': 'planets',
    'vehicles': 'vehicles',
    'species': 'species'
};

const knownCharacters = ['Luke Skywalker', 'C-3PO', 'R2-D2', 'Darth Vader', 'Leia Organa', 'Obi-Wan Kenobi', 'Anakin Skywalker', 'Chewbacca', 'Han Solo', 'Greedo', 'Jabba Desilijic Tiure', 'Yoda', 'Palpatine',
'Boba Fett', 'Jango Fett', 'Lando Calrissian', 'Ackbar', 'Qui-Gon Jinn', 'Padmé Amidala', 'Jar Jar Binks', 'Darth Maul', 'Mace Windu', 'Dooku', 'Biggs Darklighter', 'Watto'];

const knownMovies = ['A New Hope', 'The Empire Strikes Back', 'Return of the Jedi', 'The Phantom Menace', 'Attack of the Clones', 'Revenge of the Sith'];

const knownStarships = ['Death Star', 'Imperial Shuttle', 'Slave 1' ,'Millennium Falcon', 'Star Destroyer', 'X-wing', 'Y-wing', 'TIE Advanced x1', 'Imperial shuttle', 'Calamari Cruiser', 'A-wing', 'B-wing',
'Republic Cruiser', 'Naboo fighter', 'Naboo Royal Starship', 'Jedi starfighter', 'Trade Federation cruiser', 'Republic attack cruiser', 'Naboo star skiff', 'Sentinel-class landing craft'];

const knownVehicles = ['X-34 landspeeder', 'TIE/LN starfighter', 'TIE bomber', 'AT-AT', 'AT-ST', 'Imperial Speeder Bike', 'TIE/IN interceptor', 'AT-RT'];

const knownSpecies = ['Human', 'Droid', 'Ewok', 'Human', 'Hutt', 'Mon Calamari', 'Rodian', 'Wookie', 'Yoda\'s species', 'Gungan', 'Toydarian', '' ];

const allKnownData = knownCharacters.concat(knownMovies, knownStarships, knownVehicles, knownSpecies);

export function isKnownData (name: string) {
    return allKnownData.find((element) => {
        return element === name;
    });
};

export const maxPages = {
    'characters': 9,
    'movies': 0,
    'starships': 4,
    'planets': 6,
    'vehicles': 4,
    'species': 4
};