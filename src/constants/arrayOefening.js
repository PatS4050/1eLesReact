import {inventory} from './inventory.js';

function showOutcomeInConsole() {

//opgave 1a

const typeTVs = inventory.map ((typeTV) => {
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
// })
let soldOutTVs= inventory.map((stockTV)=>{
    if (stockTV.originalStock - stockTV.sold === 0)
    {return stockTV}
})

// console.log(inStockTVs)
// console.log(soldTVs)
console.log(soldOutTVs)
}

export default showOutcomeInConsole;