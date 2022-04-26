const characters = [
    {
        name: 'Luke Skywalker',
        height: 172,
        mass: 77,
        eye_color: 'blue',
        gender: 'male',
        id: 1,
    },
    {
        name: 'Darth Vader',
        height: 202,
        mass: 136,
        eye_color: 'yellow',
        gender: 'male',
        id: 2,
    },
    {
        name: 'Leia Organa',
        height: 150,
        mass: 49,
        eye_color: 'brown',
        gender: 'female',
        id: 3,
    },
    {
        name: 'Anakin Skywalker',
        height: 188,
        mass: 84,
        eye_color: 'blue',
        gender: 'male',
        id: 4,
    },
];

//***MAP***
//1. Get array of all names
//2. Get array of all heights
//3. Get array of objects with just name and height properties
//4. Get array of all first names

//***REDUCE***
//1. Get total mass of all characters
//2. Get total height of all characters
//3. Get total number of characters by eye color
//4. Get total number of characters in all the character names

//***FILTER***
//1. Get characters with mass greater than 100
const charactersGreaterThan100 = characters.filter( character => {
    return character.mass > 100;
});


// console.log('mass > 100');
console.log('mass > 100' + charactersGreaterThan100);
console.log(charactersGreaterThan100);

//2. Get characters with height less than 200
const charactersHeightLessThan200 = characters.filter(character => {
    return character.height < 200;
});
console.log('height < 200');
console.log(charactersHeightLessThan200);

//3. Get all male characters
const allMaleCharacters = characters.filter(character =>{
    return character.gender.startsWith('m');
});
console.log('all male charactrs');
console.log(allMaleCharacters);
//4. Get all female characters
const allFemalecharacters = characters.filter(character => {
    return character.gender.startsWith('f');
});
console.log('all female charactrs');
console.log(allFemalecharacters);

//***SORT***
//1. Sort by mass
//2. Sort by height
//3. Sort by name
//4. Sort by gender

//***EVERY***
//1. Does every character have blue eyes?
//2. Does every character have mass more than 40?
//3. Is every character shorter than 200?
//4. Is every character male?

//***SOME***
//1. Is there at least one male character?
//2. Is there at least one character with blue eyes?
//3. Is there at least one character taller than 210?
//4. Is there at least one character that has mass less than 50?
