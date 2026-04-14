import {inventory} from './inventory.js';
//opgave 1a
const typeTVs = inventory.map ((typeTV) => {
    // console.log(inventory.type);
    return typeTV.type;
})
console.log(typeTVs);
//opgave 1b
//een sortering


function showOutcomeInConsole() {
    console.log(typeTVs);
    console.log('uitkomst opdracht 1b');
}

export default showOutcomeInConsole;