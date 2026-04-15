import {inventory} from './inventory.js';

function showOutcomeInConsole() {
//opgave 1a

    const typeTVs = inventory.map((typeTV) => {
        // console.log(inventory.type);
        return typeTV.type;
    })
    console.log(typeTVs);

//opgave 1b
//een sortering van alle uitverkochte tvs
//heb een const nodig van alle ingekochte tvs
//heb een const nodi van alle verkochte tvs
//als de a-b =0 dan lijst van uitverkochte tvs

// const inStockTVs = inventory.map((inStockTV) => {
//     return inStockTV.originalStock;
// })
// const soldTVs = inventory.map((soldTV) => {
//     return soldTV.sold;
// })*
    const soldOutTVs = inventory.filter((stockTV) => {
        if (stockTV.originalStock - stockTV.sold === 0) {
            return stockTV;
        }
    })
    console.log(soldOutTVs);

    //opgave 1c
    const specificTVs = inventory.find((specificTV) => {
        return specificTV.type === 'NH3216SMART';
    })
    console.log("1c", specificTVs);

//opgave 1d
    const sportTVs = inventory.filter((sportTV) => {
        if (sportTV.refreshRate >= 99) {
            return sportTV;
        }
    })
    console.log("1d", sportTVs);

//opgave 1e
const largeTVs = inventory.filter((largeTV) => {
    return largeTV.availableSizes.some >= 52
})
console.log("1e", largeTVs);
}


export default showOutcomeInConsole;

