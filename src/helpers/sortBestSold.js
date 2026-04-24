import overzicht from "./constants/inventory.js";

function sortBestSold(overzicht) {
    overzicht.sort((a, b) => {
        if (a > b) {return 1;}
        if (a < b) {return -1;}
        return 0
    })
    console.log(sortBestSold)
}
export default sortBestSold()